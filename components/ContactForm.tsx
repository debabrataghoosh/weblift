'use client';

import { FormEvent, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type RazorpayInstance = {
  open: () => void;
};

type RazorpayConstructor = new (options: Record<string, unknown>) => RazorpayInstance;

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor;
  }
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get('plan') ?? '';
  const isPackageInquiry = selectedPlan.length > 0;
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentOption, setPaymentOption] = useState('pay_later');
  const [showQrFallback, setShowQrFallback] = useState(false);
  const destinationEmail = 'hello@webliftstore.in';

  const openRazorpayCheckout = async (params: {
    plan: string;
    name: string;
    email: string;
    phone: string;
    businessName: string;
    businessType: string;
    timeline: string;
    pagesNeeded: string;
    budget: string;
    keyRequirements: string;
    message: string;
  }) => {
    const orderResponse = await fetch('/api/razorpay/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ plan: params.plan })
    });

    const orderData = (await orderResponse.json()) as {
      keyId?: string;
      orderId?: string;
      amount?: number;
      currency?: string;
      error?: string;
    };

    if (!orderResponse.ok || !orderData.keyId || !orderData.orderId || !orderData.amount || !orderData.currency) {
      throw new Error(orderData.error || 'Unable to initialize payment.');
    }

    if (!window.Razorpay) {
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Razorpay checkout.'));
        document.body.appendChild(script);
      });
    }

    if (!window.Razorpay) {
      throw new Error('Razorpay checkout is unavailable.');
    }

    const razorpay = new window.Razorpay({
      key: orderData.keyId,
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'WebLift',
      description: `${params.plan} Website Package`,
      order_id: orderData.orderId,
      prefill: {
        name: params.name,
        email: params.email,
        contact: params.phone.replace(/\D/g, '')
      },
      notes: {
        plan: params.plan,
        businessName: params.businessName,
        businessType: params.businessType,
        timeline: params.timeline,
        pagesNeeded: params.pagesNeeded,
        budget: params.budget,
        keyRequirements: params.keyRequirements,
        message: params.message
      },
      theme: {
        color: '#34d399'
      },
      handler: () => {
        setStatusMessage('Payment completed. Our team will contact you shortly.');
      },
      modal: {
        ondismiss: () => setIsSubmitting(false)
      }
    });

    razorpay.open();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Preparing your message...');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const phone = String(formData.get('phone') ?? '');
    const businessName = String(formData.get('businessName') ?? '');
    const businessType = String(formData.get('businessType') ?? '');
    const plan = String(formData.get('plan') ?? selectedPlan);
    const timeline = String(formData.get('timeline') ?? '');
    const pagesNeeded = String(formData.get('pagesNeeded') ?? '');
    const budget = String(formData.get('budget') ?? '');
    const keyRequirements = String(formData.get('keyRequirements') ?? '');
    const paymentOption = String(formData.get('paymentOption') ?? 'pay_later');
    const paymentTransactionRef = String(formData.get('paymentTransactionRef') ?? '');
    const paymentScreenshot = formData.get('paymentScreenshot');
    const paymentScreenshotName =
      paymentScreenshot instanceof File && paymentScreenshot.size > 0
        ? paymentScreenshot.name
        : 'Not provided';
    const message = String(formData.get('message') ?? '');

    if (isPackageInquiry && paymentOption === 'razorpay') {
      try {
        setStatusMessage('Opening Razorpay checkout...');
        await openRazorpayCheckout({
          plan,
          name,
          email,
          phone,
          businessName,
          businessType,
          timeline,
          pagesNeeded,
          budget,
          keyRequirements,
          message
        });
      } catch (error) {
        const paymentError = error instanceof Error ? error.message : 'Unable to start payment.';
        setStatusMessage(paymentError);
      }
      setIsSubmitting(false);
      return;
    }

    const subject = encodeURIComponent(
      isPackageInquiry
        ? `Package inquiry (${plan || 'Selected package'}) from ${name || 'Website visitor'}`
        : `New website inquiry from ${name || 'Website visitor'}`
    );

    const body = encodeURIComponent(
      isPackageInquiry
        ? [
            `Inquiry Type: Package Inquiry`,
            `Selected Package: ${plan}`,
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Business Name: ${businessName}`,
            `Business Type: ${businessType}`,
            `Timeline: ${timeline}`,
            `Estimated Budget: ${budget}`,
            `Pages Needed: ${pagesNeeded}`,
            `Payment Option: ${paymentOption === 'razorpay' ? 'Razorpay' : paymentOption === 'qr' ? 'QR Payment' : 'Pay Later'}`,
            `Payment Transaction Ref: ${paymentTransactionRef || 'Not provided yet'}`,
            `Payment Screenshot: ${paymentOption === 'qr' ? paymentScreenshotName : 'N/A'}`,
            '',
            'Required Features:',
            keyRequirements,
            '',
            'Additional Message:',
            message
          ].join('\n')
        : [
            `Inquiry Type: General Contact`,
            `Name: ${name}`,
            `Email: ${email}`,
            `Business Type: ${businessType}`,
            '',
            'Message:',
            message
          ].join('\n')
    );

    await new Promise((resolve) => {
      setTimeout(resolve, 900);
    });

    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;

    form.reset();
    setIsSubmitting(false);
    setStatusMessage('Your email app opened with your message addressed to WebLift.');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card mx-auto max-w-2xl space-y-5 border-slate-200 bg-white p-6 sm:p-8"
    >
      {isPackageInquiry && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Package inquiry mode: Please fill in the details for your selected package.
        </div>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="input-field"
          required
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@business.com"
          className="input-field"
          required
          autoComplete="email"
        />
      </div>

      {isPackageInquiry && (
        <>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 9XXXXXXXXX"
              className="input-field"
              required
              autoComplete="tel"
            />
          </div>

          <div>
            <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-slate-700">
              Business Name
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              placeholder="Your business name"
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="plan" className="mb-2 block text-sm font-medium text-slate-700">
              Selected Package
            </label>
            <input
              id="plan"
              name="plan"
              type="text"
              defaultValue={selectedPlan}
              className="input-field bg-slate-100"
              readOnly
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="businessType" className="mb-2 block text-sm font-medium text-slate-700">
          Business Type
        </label>
        <input
          id="businessType"
          name="businessType"
          type="text"
          placeholder="Clinic, Restaurant, Gym, Shop..."
          className="input-field"
          required
        />
      </div>

      {isPackageInquiry && (
        <>
          <div>
            <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-slate-700">
              Preferred Timeline
            </label>
            <select id="timeline" name="timeline" className="input-field" required defaultValue="">
              <option value="" disabled>
                Select timeline
              </option>
              <option value="Within 1 week">Within 1 week</option>
              <option value="Within 2 weeks">Within 2 weeks</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-700">
              Estimated Budget
            </label>
            <select id="budget" name="budget" className="input-field" required defaultValue="">
              <option value="" disabled>
                Select budget range
              </option>
              <option value="Below ₹5,000">Below ₹5,000</option>
              <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
              <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
              <option value="Above ₹20,000">Above ₹20,000</option>
            </select>
          </div>

          <div>
            <label htmlFor="pagesNeeded" className="mb-2 block text-sm font-medium text-slate-700">
              Approximate Number of Pages
            </label>
            <select id="pagesNeeded" name="pagesNeeded" className="input-field" required defaultValue="">
              <option value="" disabled>
                Select pages
              </option>
              <option value="1 page">1 page</option>
              <option value="2-5 pages">2-5 pages</option>
              <option value="6-10 pages">6-10 pages</option>
              <option value="More than 10 pages">More than 10 pages</option>
            </select>
          </div>

          <div>
            <label htmlFor="keyRequirements" className="mb-2 block text-sm font-medium text-slate-700">
              Key Features Required
            </label>
            <textarea
              id="keyRequirements"
              name="keyRequirements"
              rows={4}
              placeholder="Example: WhatsApp integration, booking form, payment gateway, blog, etc."
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="paymentOption" className="mb-2 block text-sm font-medium text-slate-700">
              Payment Option
            </label>
            <select
              id="paymentOption"
              name="paymentOption"
              className="input-field"
              required
              value={paymentOption}
              onChange={(event) => setPaymentOption(event.target.value)}
            >
              <option value="pay_later">Pay later (discuss first)</option>
              <option value="razorpay">Pay now with Razorpay</option>
              <option value="qr">Pay via QR</option>
            </select>
          </div>

          {paymentOption === 'qr' && (
            <div className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
              <p className="text-sm font-medium text-emerald-900">Scan this QR to pay for your selected package.</p>
              <img
                src="/payment-qr.png"
                alt="Payment QR code"
                className="mx-auto w-full max-w-xs rounded-xl border border-emerald-200 bg-white object-contain p-2"
                onError={() => {
                  setShowQrFallback(true);
                }}
              />
              {showQrFallback && (
                <p className="text-xs text-red-600">
                  QR image not found. Ensure the file exists at <strong>public/payment-qr.png</strong>.
                </p>
              )}
              <div>
                <label htmlFor="paymentTransactionRef" className="mb-2 block text-sm font-medium text-slate-700">
                  UPI / Transaction Reference
                </label>
                <input
                  id="paymentTransactionRef"
                  name="paymentTransactionRef"
                  type="text"
                  placeholder="Enter UTR / transaction ID after payment"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="paymentScreenshot" className="mb-2 block text-sm font-medium text-slate-700">
                  Payment Screenshot
                </label>
                <input
                  id="paymentScreenshot"
                  name="paymentScreenshot"
                  type="file"
                  accept="image/*"
                  className="input-field"
                  required={paymentOption === 'qr'}
                />
                <p className="mt-1 text-xs text-slate-500">
                  Upload screenshot here, then attach it in the email before sending.
                </p>
              </div>
            </div>
          )}
        </>
      )}

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          {isPackageInquiry ? 'Additional Message' : 'Message'}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={
            isPackageInquiry
              ? 'Share any extra notes for your package requirements'
              : 'Tell us what kind of website you need'
          }
          className="input-field"
          required
        />
      </div>

      <button type="submit" className="gradient-button w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p aria-live="polite" role="status" className="min-h-6 text-sm text-slate-600">
        {statusMessage}
      </p>
    </form>
  );
}
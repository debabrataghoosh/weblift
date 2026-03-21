'use client';

import { FormEvent, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get('plan') ?? '';
  const isPackageInquiry = selectedPlan.length > 0;
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentOption, setPaymentOption] = useState('pay_later');
  const [showQrFallback, setShowQrFallback] = useState(false);

  const submitInquiry = async (payload: FormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: payload
    });

    const result = (await response.json()) as { ok?: boolean; error?: string; fallbackMailto?: string };

    if (!response.ok && result.fallbackMailto) {
      window.location.href = result.fallbackMailto;
      return { mode: 'mailto' as const };
    }

    if (response.ok && result.ok) {
      return { mode: 'server' as const };
    }

    throw new Error(result.error || 'Unable to submit form.');
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

    try {
      const payload = new FormData();
      payload.append('inquiryType', isPackageInquiry ? 'Package Inquiry' : 'General Contact');
      payload.append('plan', plan);
      payload.append('name', name);
      payload.append('email', email);
      payload.append('phone', phone);
      payload.append('businessName', businessName);
      payload.append('businessType', businessType);
      payload.append('timeline', timeline);
      payload.append('pagesNeeded', pagesNeeded);
      payload.append('budget', budget);
      payload.append('keyRequirements', keyRequirements);
      payload.append('paymentOption', paymentOption);
      payload.append('paymentTransactionRef', paymentTransactionRef);
      payload.append('message', message);

      if (paymentScreenshot instanceof File && paymentScreenshot.size > 0) {
        payload.append('paymentScreenshot', paymentScreenshot);
      }

      payload.append('paymentStatus', paymentOption === 'qr' ? 'pending_verification' : 'pending');

      const submitResult = await submitInquiry(payload);

      form.reset();
      setPaymentOption('pay_later');
      setShowQrFallback(false);
      setStatusMessage(
        submitResult.mode === 'mailto'
          ? 'Server email is unavailable. Your email app has been opened as fallback.'
          : 'Form submitted successfully. We will contact you soon.'
      );
    } catch (error) {
      const submitError = error instanceof Error ? error.message : 'Unable to submit form.';
      setStatusMessage(submitError);
    } finally {
      setIsSubmitting(false);
    }
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
                  Upload screenshot here. It will be sent directly with your form submission.
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
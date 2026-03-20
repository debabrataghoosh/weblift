'use client';

import { FormEvent, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get('plan') ?? '';
  const isPackageInquiry = selectedPlan.length > 0;
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const destinationEmail = 'hello@webliftstore.in';

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
    const message = String(formData.get('message') ?? '');

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
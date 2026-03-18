'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Sending your message...');

    const form = event.currentTarget;

    await new Promise((resolve) => {
      setTimeout(resolve, 900);
    });

    form.reset();
    setIsSubmitting(false);
    setStatusMessage('Thanks! Your message has been sent. WebLift will contact you soon.');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card mx-auto max-w-2xl space-y-5 border-slate-200 bg-white p-6 sm:p-8"
    >
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

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what kind of website you need"
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
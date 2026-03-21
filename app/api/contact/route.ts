import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function buildMailtoLink(toEmail: string, subject: string, lines: string[]) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(lines.join('\n'));
  return `mailto:${toEmail}?subject=${encodedSubject}&body=${encodedBody}`;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const inquiryType = String(formData.get('inquiryType') ?? 'General Contact');
    const selectedPackage = String(formData.get('plan') ?? 'N/A');
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const phone = String(formData.get('phone') ?? '');
    const businessName = String(formData.get('businessName') ?? '');
    const businessType = String(formData.get('businessType') ?? '');
    const timeline = String(formData.get('timeline') ?? '');
    const budget = String(formData.get('budget') ?? '');
    const pagesNeeded = String(formData.get('pagesNeeded') ?? '');
    const keyRequirements = String(formData.get('keyRequirements') ?? '');
    const paymentOption = String(formData.get('paymentOption') ?? 'pay_later');
    const paymentTransactionRef = String(formData.get('paymentTransactionRef') ?? '');
    const message = String(formData.get('message') ?? '');
    const paymentStatus = String(formData.get('paymentStatus') ?? 'pending');

    const paymentScreenshot = formData.get('paymentScreenshot');
    const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];

    if (paymentScreenshot instanceof File && paymentScreenshot.size > 0) {
      const buffer = Buffer.from(await paymentScreenshot.arrayBuffer());
      attachments.push({
        filename: paymentScreenshot.name,
        content: buffer,
        contentType: paymentScreenshot.type || undefined
      });
    }

    const toEmail = process.env.FORM_TO_EMAIL || 'hello@webliftstore.in';

    const paymentLabel = paymentOption === 'qr' ? 'QR Payment' : 'Pay Later';
    const subject =
      inquiryType === 'Package Inquiry'
        ? `WebLift Package Inquiry - ${selectedPackage} (${name || 'No Name'})`
        : `WebLift Contact Inquiry - ${name || 'No Name'}`;

    const lines = [
      `Inquiry Type: ${inquiryType}`,
      `Selected Package: ${selectedPackage}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Business Name: ${businessName}`,
      `Business Type: ${businessType}`,
      `Timeline: ${timeline}`,
      `Estimated Budget: ${budget}`,
      `Pages Needed: ${pagesNeeded}`,
      `Payment Option: ${paymentLabel}`,
      `Payment Status: ${paymentStatus}`,
      `Payment Transaction Ref: ${paymentTransactionRef || 'Not provided'}`,
      `Payment Screenshot: ${attachments.length > 0 ? attachments[0].filename : 'Not attached'}`,
      '',
      'Key Requirements:',
      keyRequirements || 'N/A',
      '',
      'Message:',
      message || 'N/A'
    ];

    const hasSmtpConfig =
      Boolean(process.env.SMTP_HOST) &&
      Boolean(process.env.SMTP_PORT) &&
      Boolean(process.env.SMTP_USER) &&
      Boolean(process.env.SMTP_PASS);

    if (!hasSmtpConfig) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Email service is not configured on server. Opening email app as fallback.',
          fallbackMailto: buildMailtoLink(toEmail, subject, lines)
        },
        { status: 503 }
      );
    }

    const smtpHost = requiredEnv('SMTP_HOST');
    const smtpPort = Number(requiredEnv('SMTP_PORT'));
    const smtpUser = requiredEnv('SMTP_USER');
    const smtpPass = requiredEnv('SMTP_PASS');
    const fromEmail = process.env.FORM_FROM_EMAIL || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email || undefined,
      subject,
      text: lines.join('\n'),
      attachments
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unable to send form data';
    console.error('Contact form submit failed:', errorMessage);
    return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, business, tier, message, type } = body;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured on server' },
        { status: 500 }
      );
    }

    const emailSubject = type === 'draft'
      ? `⚡ New 24h Free Draft Request: ${business || name || 'Client'}`
      : `📩 New Project Inquiry: ${name || business || 'Client'}`;

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #6B7D50/30; border-radius: 12px; background: #FAF7F1; color: #14241A;">
        <div style="margin-bottom: 20px; border-bottom: 2px solid #6B7D50; padding-bottom: 12px;">
          <h1 style="color: #14241A; margin: 0; font-size: 24px;">WEBZA Studio</h1>
          <p style="margin: 4px 0 0; color: #6B7D50; font-weight: bold; font-size: 12px; letter-spacing: 0.15em;">BUILT TO BE SEEN // NEW LEAD</p>
        </div>

        <h2 style="font-size: 18px; color: #14241A; margin-top: 0;">${emailSubject}</h2>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          ${business ? `<tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #6B7D50;">Business:</td><td style="padding: 8px 0;">${business}</td></tr>` : ''}
          ${name ? `<tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #6B7D50;">Contact Name:</td><td style="padding: 8px 0;">${name}</td></tr>` : ''}
          ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #6B7D50;">Phone / WhatsApp:</td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
          ${email ? `<tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #6B7D50;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>` : ''}
          ${tier ? `<tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #6B7D50;">Selected Tier:</td><td style="padding: 8px 0;">${tier}</td></tr>` : ''}
          ${message ? `<tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #6B7D50;">Notes / Details:</td><td style="padding: 8px 0;">${message}</td></tr>` : ''}
        </table>

        <div style="margin-top: 30px; padding-top: 16px; border-top: 1px solid #221D15/15; font-size: 11px; color: #777;">
          Sent automatically from your WEBZA website lead engine.
        </div>
      </div>
    `;

    // By default, Resend onboarding lets you send to your account email
    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'delivered@resend.dev';

    const { data, error } = await resend.emails.send({
      from: 'WEBZA Leads <onboarding@resend.dev>',
      to: [recipientEmail],
      subject: emailSubject,
      html: htmlContent,
      replyTo: email || undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error('Server error sending email:', err);
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

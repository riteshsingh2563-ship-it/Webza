import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string = ''): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      business,
      tier,
      message,
      type = 'draft',
      budget,
      company,
    } = body;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured on server' },
        { status: 500 }
      );
    }

    const clientBusiness = escapeHtml(business || company || name || 'New Client');
    const clientName = escapeHtml(name || business || 'Client');
    const clientPhone = escapeHtml(phone || 'Not provided');
    const clientEmail = escapeHtml(email || '');
    const clientTier = escapeHtml(tier || budget || 'Development Gold (₹12,599)');
    const clientMessage = escapeHtml(message || 'No additional notes provided');

    // Clean phone number for WhatsApp deep links
    const cleanPhoneDigits = (phone || '').replace(/[^0-9]/g, '');
    const whatsappLink = cleanPhoneDigits
      ? `https://api.whatsapp.com/send?phone=${cleanPhoneDigits}&text=${encodeURIComponent(
          `Hello! This is Ritesh from WEBZA regarding your free website draft request for ${business || name || 'your brand'}.`
        )}`
      : null;

    const isDraft = type === 'draft' || type === 'demo';
    const emailSubject = isDraft
      ? `⚡ New 24h Free Demo Request: ${clientBusiness}`
      : `📩 New Project Inquiry: ${clientBusiness}`;

    // Admin Notification Email Template
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>${emailSubject}</title>
      </head>
      <body style="margin:0;padding:0;background-color:#0E120D;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#FAF7F1;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#0E120D;padding:32px 16px;">
          <tr>
            <td align="center">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;background-color:#151913;border:1px solid rgba(250,240,225,0.12);border-radius:20px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,0.5);">
                <!-- Header Bar -->
                <tr>
                  <td style="padding:28px 32px;background:linear-gradient(135deg, #1C241A 0%, #151913 100%);border-bottom:1px solid rgba(250,240,225,0.1);">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <span style="display:inline-block;font-size:22px;font-weight:800;letter-spacing:1px;color:#FAF7F1;font-family:Georgia,serif;">
                            WEB<span style="color:#829762;">ZA</span>
                          </span>
                          <span style="display:block;font-size:10px;font-weight:700;letter-spacing:0.2em;color:#829762;text-transform:uppercase;margin-top:2px;">
                            BUILT TO BE SEEN // LEAD DISPATCH
                          </span>
                        </td>
                        <td align="right">
                          <span style="display:inline-block;background:${isDraft ? '#6B7D50' : '#2BD4BD'};color:#0E120D;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:6px 14px;border-radius:999px;">
                            ${isDraft ? '⚡ 24H FREE DEMO' : '📩 FORMAL INQUIRY'}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding:32px;">
                    <h2 style="margin:0 0 8px 0;font-size:20px;font-weight:700;color:#FAF7F1;font-family:Georgia,serif;">
                      ${isDraft ? 'New 24-Hour Website Draft Request' : 'New Strategic Project Inquiry'}
                    </h2>
                    <p style="margin:0 0 24px 0;font-size:13px;line-height:1.6;color:rgba(250,240,225,0.7);">
                      A prospective client has submitted their requirements through your website lead engine.
                    </p>

                    <!-- Details Table -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:rgba(250,240,225,0.03);border:1px solid rgba(250,240,225,0.08);border-radius:14px;overflow:hidden;margin-bottom:28px;">
                      <tr>
                        <td style="padding:14px 18px;border-bottom:1px solid rgba(250,240,225,0.06);font-size:12px;font-weight:600;color:#829762;width:140px;text-transform:uppercase;letter-spacing:0.06em;">
                          Brand / Business
                        </td>
                        <td style="padding:14px 18px;border-bottom:1px solid rgba(250,240,225,0.06);font-size:14px;font-weight:700;color:#FAF7F1;">
                          ${clientBusiness}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 18px;border-bottom:1px solid rgba(250,240,225,0.06);font-size:12px;font-weight:600;color:#829762;text-transform:uppercase;letter-spacing:0.06em;">
                          Phone / WhatsApp
                        </td>
                        <td style="padding:14px 18px;border-bottom:1px solid rgba(250,240,225,0.06);font-size:14px;font-weight:600;color:#2BD4BD;">
                          <a href="tel:${cleanPhoneDigits || phone}" style="color:#2BD4BD;text-decoration:none;">${clientPhone}</a>
                        </td>
                      </tr>
                      ${clientEmail ? `
                      <tr>
                        <td style="padding:14px 18px;border-bottom:1px solid rgba(250,240,225,0.06);font-size:12px;font-weight:600;color:#829762;text-transform:uppercase;letter-spacing:0.06em;">
                          Email Address
                        </td>
                        <td style="padding:14px 18px;border-bottom:1px solid rgba(250,240,225,0.06);font-size:14px;color:#FAF7F1;">
                          <a href="mailto:${clientEmail}" style="color:#FAF7F1;text-decoration:none;">${clientEmail}</a>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding:14px 18px;border-bottom:1px solid rgba(250,240,225,0.06);font-size:12px;font-weight:600;color:#829762;text-transform:uppercase;letter-spacing:0.06em;">
                          Package Scope
                        </td>
                        <td style="padding:14px 18px;border-bottom:1px solid rgba(250,240,225,0.06);font-size:13px;font-weight:600;color:#FFC53D;">
                          ${clientTier}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 18px;font-size:12px;font-weight:600;color:#829762;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top;">
                          Notes &amp; Links
                        </td>
                        <td style="padding:14px 18px;font-size:13px;line-height:1.6;color:rgba(250,240,225,0.9);">
                          ${clientMessage}
                        </td>
                      </tr>
                    </table>

                    <!-- Instant Action Buttons -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:12px;">
                      <tr>
                        ${whatsappLink ? `
                        <td style="padding-right:8px;" width="50%">
                          <a href="${whatsappLink}" target="_blank" style="display:block;background-color:#25D366;color:#ffffff;text-align:center;padding:14px 20px;border-radius:12px;font-weight:700;font-size:13px;text-decoration:none;box-shadow:0 4px 14px rgba(37,211,102,0.3);">
                            💬 Chat on WhatsApp
                          </a>
                        </td>
                        ` : ''}
                        ${email ? `
                        <td style="padding-left:8px;" width="50%">
                          <a href="mailto:${clientEmail}" style="display:block;background-color:#6B7D50;color:#ffffff;text-align:center;padding:14px 20px;border-radius:12px;font-weight:700;font-size:13px;text-decoration:none;box-shadow:0 4px 14px rgba(107,125,80,0.3);">
                            ✉️ Reply via Email
                          </a>
                        </td>
                        ` : ''}
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:20px 32px;background-color:#11150F;border-top:1px solid rgba(250,240,225,0.08);font-size:11px;color:rgba(250,240,225,0.45);text-align:center;">
                    Dispatched automatically by WEBZA Digital Lead Engine • Engineering Team: Ritesh Singh &amp; Team
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Recipient handling: support single or comma-separated emails
    const rawRecipient = process.env.NOTIFICATION_EMAIL || 'delivered@resend.dev';
    const recipientEmails = rawRecipient
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean);

    const fromAddress =
      process.env.RESEND_FROM_EMAIL || 'WEBZA Leads <onboarding@resend.dev>';

    // 1. Send Admin Alert Email
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: fromAddress,
      to: recipientEmails.length > 0 ? recipientEmails : ['delivered@resend.dev'],
      subject: emailSubject,
      html: adminHtml,
      replyTo: email || undefined,
    });

    if (adminError) {
      console.error('[WEBZA Resend Admin Error]:', adminError);
      return NextResponse.json({ error: adminError.message }, { status: 400 });
    }

    // 2. Send Client Confirmation Auto-Responder (if client provided email)
    let clientConfirmationSent = false;
    if (email && typeof email === 'string' && email.includes('@')) {
      try {
        const clientHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8" />
            <title>Your Free Website Draft is in Progress — WEBZA</title>
          </head>
          <body style="margin:0;padding:0;background-color:#FAF7F1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#221D15;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#FAF7F1;padding:36px 16px;">
              <tr>
                <td align="center">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:580px;background-color:#ffffff;border:1px solid rgba(34,29,21,0.12);border-radius:24px;overflow:hidden;box-shadow:0 10px 32px rgba(34,29,21,0.06);">
                    <!-- Brand Banner -->
                    <tr>
                      <td style="padding:28px 32px;background-color:#151913;color:#FAF7F1;">
                        <span style="font-size:24px;font-weight:800;letter-spacing:1px;font-family:Georgia,serif;">
                          WEB<span style="color:#829762;">ZA</span>
                        </span>
                        <span style="display:block;font-size:10px;font-weight:700;letter-spacing:0.2em;color:#829762;text-transform:uppercase;margin-top:4px;">
                          BUILT TO BE SEEN // BESPOKE WEB STUDIO
                        </span>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:36px 32px;">
                        <span style="display:inline-block;padding:4px 12px;background-color:rgba(107,125,80,0.15);color:#4E5B38;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;border-radius:999px;margin-bottom:16px;">
                          ✓ Draft Request Confirmed
                        </span>
                        <h1 style="margin:0 0 12px 0;font-size:24px;font-weight:700;color:#221D15;font-family:Georgia,serif;">
                          We are building your custom website draft.
                        </h1>
                        <p style="margin:0 0 20px 0;font-size:14px;line-height:1.65;color:rgba(34,29,21,0.8);">
                          Hello <strong>${clientBusiness}</strong>, thank you for trusting WEBZA. Our core engineering team has received your submission and is preparing your interactive web flagship draft.
                        </p>

                        <!-- Next Steps -->
                        <div style="background-color:#FAF7F1;border:1px solid rgba(34,29,21,0.1);border-radius:16px;padding:20px;margin-bottom:28px;">
                          <strong style="display:block;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#6B7D50;margin-bottom:12px;">
                            What Happens In The Next 24 Hours:
                          </strong>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="vertical-align:top;padding-bottom:10px;width:24px;font-size:14px;color:#0FA88F;">1.</td>
                              <td style="padding-bottom:10px;font-size:13px;line-height:1.5;color:rgba(34,29,21,0.85);">
                                <strong>Architecture &amp; Identity:</strong> We analyze your visual direction and competitor benchmarks.
                              </td>
                            </tr>
                            <tr>
                              <td style="vertical-align:top;padding-bottom:10px;width:24px;font-size:14px;color:#0FA88F;">2.</td>
                              <td style="padding-bottom:10px;font-size:13px;line-height:1.5;color:rgba(34,29,21,0.85);">
                                <strong>Interactive Prototype:</strong> We engineer a live, responsive Next.js prototype with sub-second performance.
                              </td>
                            </tr>
                            <tr>
                              <td style="vertical-align:top;width:24px;font-size:14px;color:#0FA88F;">3.</td>
                              <td style="font-size:13px;line-height:1.5;color:rgba(34,29,21,0.85);">
                                <strong>Private Preview:</strong> Delivered directly to your WhatsApp &amp; Email. Zero upfront deposit required.
                              </td>
                            </tr>
                          </table>
                        </div>

                        <!-- Direct WhatsApp Access -->
                        <div style="text-align:center;padding:24px 20px;background:linear-gradient(135deg, #1C241A 0%, #151913 100%);border-radius:18px;color:#FAF7F1;">
                          <h3 style="margin:0 0 6px 0;font-size:16px;color:#ffffff;font-family:Georgia,serif;">
                            Need faster turnaround or have brand assets?
                          </h3>
                          <p style="margin:0 0 16px 0;font-size:12px;color:rgba(250,240,225,0.7);">
                            Chat directly with Ritesh Singh on WhatsApp (+91 78981 95460).
                          </p>
                          <a href="https://api.whatsapp.com/send?phone=917898195460&text=${encodeURIComponent(
                            `Hello Ritesh! I just submitted my free demo request for ${business || name || 'my business'} on webza.agency.`
                          )}" target="_blank" style="display:inline-block;background-color:#25D366;color:#ffffff;padding:12px 28px;border-radius:999px;font-weight:700;font-size:13px;text-decoration:none;box-shadow:0 4px 16px rgba(37,211,102,0.35);">
                            Open WhatsApp Discussion (+91 78981 95460) →
                          </a>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding:20px 32px;background-color:#FAF7F1;border-top:1px solid rgba(34,29,21,0.08);font-size:11px;color:rgba(34,29,21,0.6);text-align:center;">
                        © ${new Date().getFullYear()} WEBZA Studio • Built to be seen • <a href="https://webza.agency" style="color:#6B7D50;text-decoration:none;">webza.agency</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `;

        await resend.emails.send({
          from: fromAddress,
          to: [email],
          subject: 'Your Free 24h Website Draft Request is Confirmed — WEBZA',
          html: clientHtml,
        });
        clientConfirmationSent = true;
      } catch (clientMailErr) {
        // Log non-blockingly (e.g. if sending to external domain on Resend free tier)
        console.warn('[WEBZA Resend Client Autoresponder Notice]:', clientMailErr);
      }
    }

    return NextResponse.json({
      success: true,
      id: adminData?.id,
      clientConfirmed: clientConfirmationSent,
    });
  } catch (err: any) {
    console.error('[WEBZA Server Error sending email]:', err);
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Inquiry = {
  name: string;
  phone: string;
  email: string;
  message: string;
  subject: string;
  details: Record<string, string>;
};

const limits = { name: 120, phone: 40, email: 160, message: 5000, subject: 200 };

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parse(body: Record<string, unknown>): Inquiry | null {
  const inquiry: Inquiry = {
    name: clean(body.name, limits.name),
    phone: clean(body.phone, limits.phone),
    email: clean(body.email, limits.email),
    message: clean(body.message, limits.message),
    subject: clean(body.subject, limits.subject) || "Website inquiry",
    details: {},
  };

  if (body.details && typeof body.details === "object") {
    for (const [key, value] of Object.entries(body.details).slice(0, 6)) {
      const text = clean(value, 200);
      if (text) inquiry.details[clean(key, 60)] = text;
    }
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email);
  if (!inquiry.name || !inquiry.phone || !validEmail || !inquiry.message) {
    return null;
  }
  return inquiry;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "company" field.
  if (clean(body.company, 200)) {
    return Response.json({ ok: true });
  }

  const inquiry = parse(body);
  if (!inquiry) {
    return Response.json(
      { ok: false, error: "Please fill in your name, phone, a valid email, and project details." },
      { status: 422 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Inquiry email is not configured: missing SMTP environment variables.");
    return Response.json(
      { ok: false, error: "Email is temporarily unavailable. Please call us instead." },
      { status: 500 },
    );
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Name", inquiry.name],
    ["Phone", inquiry.phone],
    ["Email", inquiry.email],
    ...Object.entries(inquiry.details),
  ];

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Project details:",
    inquiry.message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#1a1a1a;line-height:1.6">
      <h2 style="margin:0 0 16px;color:#a07a4f">${escapeHtml(inquiry.subject)}</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="color:#777;padding-right:16px">${escapeHtml(label)}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin:20px 0 6px;color:#777">Project details</p>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(inquiry.message)}</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"Glow Home Website" <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: `"${inquiry.name.replace(/"/g, "")}" <${inquiry.email}>`,
      subject: `${inquiry.subject}, ${inquiry.name}`,
      text,
      html,
    });
  } catch (error) {
    console.error("Inquiry email failed:", error);
    return Response.json(
      { ok: false, error: "We could not send your message. Please try again or call us." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

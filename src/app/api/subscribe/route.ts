import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().email(),
  source: z.enum(["sample_chapter", "footer", "arc_request"]).default("footer"),
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  const { email, source } = parsed.data;

  if (!resend) {
    console.warn("[subscribe] RESEND_API_KEY not set. Email:", email, "source:", source);
    return NextResponse.json({ ok: true, mode: "dev" });
  }

  try {
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
        unsubscribed: false,
      });
    }

    if (source === "sample_chapter") {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "Fabian <hello@shape-of-bangkok.com>",
        to: email,
        subject: "Chapter One · Thonburi",
        html: chapterOneEmail(),
        text: chapterOneText(),
      });
    } else {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "Fabian <hello@shape-of-bangkok.com>",
        to: email,
        subject: "Welcome · Dispatches from the research",
        html: welcomeEmail(),
        text: welcomeText(),
      });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] Resend error", err);
    return NextResponse.json({ error: "Delivery failed" }, { status: 500 });
  }
}

function chapterOneEmail() {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #151210; background: #f6f1e7; padding: 32px;">
      <p style="font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #8f6533;">THE SHAPE OF BANGKOK</p>
      <h1 style="font-family: Georgia, serif; font-size: 32px; letter-spacing: -0.02em; margin: 24px 0 12px;">Chapter One · Thonburi</h1>
      <hr style="border:0; border-top: 1px solid #b8864b; width: 48px; margin: 24px 0;" />
      <p style="font-size: 17px; line-height: 1.7;">Here is the first chapter, as promised. Read it when you have thirty quiet minutes. It is the tone benchmark for the entire book.</p>
      <p style="font-size: 17px; line-height: 1.7;"><a href="${process.env.NEXT_PUBLIC_SITE_URL ?? "https://shape-of-bangkok.com"}/sample-chapter" style="color:#2c4a4b;">Read Chapter One on the web →</a></p>
      <p style="font-size: 17px; line-height: 1.7;">When you are ready for the full book, the eBook is here: <a href="${process.env.NEXT_PUBLIC_SITE_URL ?? "https://shape-of-bangkok.com"}#buy" style="color:#2c4a4b;">shape-of-bangkok.com</a>.</p>
      <hr style="border:0; border-top: 1px solid #dcceb2; margin: 32px 0;" />
      <p style="font-size: 14px; color: #3a332d;">Fabian Arndt · Bangkok</p>
    </div>
  `;
}

function chapterOneText() {
  return `THE SHAPE OF BANGKOK\n\nChapter One · Thonburi\n\nHere is the first chapter, as promised. Read it when you have thirty quiet minutes.\n\nRead it here: ${process.env.NEXT_PUBLIC_SITE_URL ?? "https://shape-of-bangkok.com"}/sample-chapter\n\nFabian Arndt · Bangkok`;
}

function welcomeEmail() {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #151210; background: #f6f1e7; padding: 32px;">
      <p style="font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #8f6533;">DISPATCHES FROM THE RESEARCH</p>
      <hr style="border:0; border-top: 1px solid #b8864b; width: 48px; margin: 24px 0;" />
      <p style="font-size: 17px; line-height: 1.7;">Thank you for subscribing. The first dispatch goes out when the next neighborhood I write about asks to be written about.</p>
      <p style="font-size: 14px; color: #3a332d;">Fabian</p>
    </div>
  `;
}

function welcomeText() {
  return `DISPATCHES FROM THE RESEARCH\n\nThank you for subscribing. The first dispatch goes out when the next neighborhood I write about asks to be written about.\n\nFabian`;
}

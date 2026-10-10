"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Honeypot } from "@/components/forms/Honeypot";
import { submitInquiry } from "@/lib/inquiry";

type ClientInquiryFormProps = {
  clientName: string;
};

export function ClientInquiryForm({ clientName }: ClientInquiryFormProps) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError("");
    try {
      await submitInquiry(event.currentTarget, {
        subject: `Glow Home inquiry, ${clientName} project`,
        details: { "Client reference": clientName },
      });
      router.push("/thank-you");
    } catch (err) {
      setError((err as Error).message);
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative border border-line bg-bg p-6 md:p-8"
      aria-label={`Contact Glow Home about ${clientName}`}
    >
      <div className="geo-frame" />
      <div className="grid gap-5">
        <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
          Name
          <input
            required
            name="name"
            className="min-h-12 border border-line bg-transparent px-4 text-sm tracking-normal text-ink outline-none transition-colors focus:border-brass"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
          Phone
          <input
            required
            name="phone"
            type="tel"
            className="min-h-12 border border-line bg-transparent px-4 text-sm tracking-normal text-ink outline-none transition-colors focus:border-brass"
            placeholder="03xx xxxxxxx"
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
          Email
          <input
            required
            name="email"
            type="email"
            className="min-h-12 border border-line bg-transparent px-4 text-sm tracking-normal text-ink outline-none transition-colors focus:border-brass"
            placeholder="you@email.com"
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
          How can we help?
          <textarea
            required
            name="message"
            rows={5}
            className="border border-line bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none transition-colors focus:border-brass"
            placeholder={`Tell us about your project related to ${clientName}...`}
          />
        </label>
        <Honeypot />
        <button
          type="submit"
          disabled={sending}
          className="btn w-full disabled:cursor-wait disabled:opacity-60 md:w-fit"
        >
          {sending ? "Sending..." : "Contact Glow Home"}
        </button>
        {error ? (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}

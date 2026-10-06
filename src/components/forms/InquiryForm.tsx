"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { siteConfig, solutions } from "@/lib/site";

type InquiryFormProps = {
  subjectLabel?: string;
  messagePlaceholder?: string;
  showSolutionSelect?: boolean;
};

const solutionOptions = [
  ...solutions.map((item) => item.title),
  "Custom / Mixed",
] as const;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 text-brass transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      aria-hidden
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InquiryForm({
  subjectLabel = "Solutions inquiry",
  messagePlaceholder = "Tell us about your space, timeline, and lighting goals...",
  showSolutionSelect = true,
}: InquiryFormProps) {
  const [sent, setSent] = useState(false);
  const [solution, setSolution] = useState("");
  const [open, setOpen] = useState(false);
  const listId = useId();
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!selectRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (showSolutionSelect && !solution) {
      setOpen(true);
      return;
    }

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `Glow Home, ${subjectLabel}${solution ? ` (${solution})` : ""}, ${name}`,
    );
    const body = encodeURIComponent(
      `Inquiry: ${subjectLabel}\n${solution ? `Solution interest: ${solution}\n` : ""}Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nProject details:\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative border border-line-strong bg-bg p-6 md:p-9"
      aria-label="Solutions inquiry form"
    >
      <div className="geo-frame" />
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
          Start a project
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight md:text-3xl">
          Tell us about your space
        </h3>
      </div>

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

        <div className="grid gap-5 sm:grid-cols-2">
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
        </div>

        {showSolutionSelect ? (
          <div className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
            <span>Solution interest</span>
            <input type="hidden" name="solution" value={solution} required />
            <div ref={selectRef} className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={listId}
                onClick={() => setOpen((value) => !value)}
                className={`flex min-h-12 w-full items-center justify-between gap-3 border bg-transparent px-4 text-left text-sm normal-case tracking-normal outline-none transition-colors ${
                  open ? "border-brass" : "border-line hover:border-brass/60"
                }`}
              >
                <span className={solution ? "text-ink" : "text-ink-dim"}>
                  {solution || "Select a category"}
                </span>
                <ChevronIcon open={open} />
              </button>

              {open ? (
                <ul
                  id={listId}
                  role="listbox"
                  aria-label="Solution categories"
                  className="absolute inset-x-0 top-[calc(100%+0.4rem)] z-20 overflow-hidden border border-line bg-bg-elevated shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
                >
                  {solutionOptions.map((option) => {
                    const selected = solution === option;
                    return (
                      <li key={option} role="option" aria-selected={selected}>
                        <button
                          type="button"
                          onClick={() => {
                            setSolution(option);
                            setOpen(false);
                          }}
                          className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm normal-case tracking-normal transition-colors ${
                            selected
                              ? "bg-brass/15 text-brass-soft"
                              : "text-ink hover:bg-brass/10 hover:text-brass-soft"
                          }`}
                        >
                          <span>{option}</span>
                          {selected ? (
                            <span className="text-[0.65rem] uppercase tracking-[0.16em] text-brass">
                              Selected
                            </span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </div>
        ) : null}

        <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-ink-dim">
          Project details
          <textarea
            required
            name="message"
            rows={5}
            className="border border-line bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none transition-colors focus:border-brass"
            placeholder={messagePlaceholder}
          />
        </label>

        <button type="submit" className="btn w-full md:w-fit">
          Send inquiry
        </button>

        {sent ? (
          <p className="text-sm text-brass-soft" role="status">
            Opening your email client, we&apos;ll reply shortly.
          </p>
        ) : null}
      </div>
    </form>
  );
}

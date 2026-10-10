export type InquiryPayload = {
  subject: string;
  details?: Record<string, string>;
};

export async function submitInquiry(
  form: HTMLFormElement,
  { subject, details }: InquiryPayload,
) {
  const data = new FormData(form);
  const field = (name: string) => String(data.get(name) || "");

  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: field("name"),
      phone: field("phone"),
      email: field("email"),
      message: field("message"),
      company: field("company"),
      subject,
      details,
    }),
  });

  const result = (await response.json().catch(() => null)) as {
    ok?: boolean;
    error?: string;
  } | null;

  if (!response.ok || !result?.ok) {
    throw new Error(
      result?.error || "We could not send your message. Please try again or call us.",
    );
  }
}

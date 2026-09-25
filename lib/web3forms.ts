/* Web3Forms API client, no backend needed on our side.
   The access key is public by design (it aliases the inbox);
   restrict it to the production domain in the Web3Forms dashboard. */

export interface LeadPayload {
  subject: string;
  name: string;
  email: string;
  message: string;
  fromName?: string;
  extra?: Record<string, string>;
}

interface Web3FormsResponse {
  success?: boolean;
  message?: string;
}

export async function submitLead(
  accessKey: string,
  payload: LeadPayload,
): Promise<void> {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: payload.subject,
      from_name: payload.fromName ?? "Mister Jonathan · Portfolio",
      name: payload.name,
      email: payload.email,
      message: payload.message,
      botcheck: "",
      ...payload.extra,
    }),
  });
  const data = (await res
    .json()
    .catch(() => null)) as Web3FormsResponse | null;
  if (!res.ok || !data?.success) {
    throw new Error(data?.message ?? `Submission failed (${res.status})`);
  }
}

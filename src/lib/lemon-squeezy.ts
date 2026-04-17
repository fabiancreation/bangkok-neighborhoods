export const LS_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_LS_CHECKOUT_URL ??
  "https://example.lemonsqueezy.com/checkout/buy/placeholder";

export function buildCheckoutUrl(email?: string) {
  const url = new URL(LS_CHECKOUT_URL);
  url.searchParams.set("embed", "1");
  url.searchParams.set("media", "0");
  url.searchParams.set("desc", "0");
  if (email) url.searchParams.set("checkout[email]", email);
  return url.toString();
}

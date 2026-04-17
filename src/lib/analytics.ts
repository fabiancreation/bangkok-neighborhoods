import { track } from "@vercel/analytics";

export type AnalyticsEvent =
  | "buy_click"
  | "chapter_one_request"
  | "chapter_one_delivered"
  | "passage_reel_complete"
  | "atlas_pin_open"
  | "newsletter_signup"
  | "scroll_25"
  | "scroll_50"
  | "scroll_75"
  | "scroll_100";

export function trackEvent(name: AnalyticsEvent, data?: Record<string, string | number | boolean>) {
  try {
    track(name, data);
  } catch {
    /* noop */
  }
}

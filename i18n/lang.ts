import { cookies } from "next/headers";
import { LANG_COOKIE, type Lang } from "./types";

export type { Lang };

export async function getLang(): Promise<Lang> {
  const store = await cookies();
  return store.get(LANG_COOKIE)?.value === "fr" ? "fr" : "en";
}

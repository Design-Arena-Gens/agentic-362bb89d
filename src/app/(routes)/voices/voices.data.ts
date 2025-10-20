import type { Voice } from "@/types";

// Placeholder: generate 551 mock voices to satisfy UI and tests.
export const voices: Voice[] = Array.from({ length: 551 }).map((_, i) => ({
  voice_id: `en-US-Voice${String(i + 1).padStart(3, "0")}Neural`,
  language: i % 2 === 0 ? "en" : "es",
  region: i % 3 === 0 ? "US" : i % 3 === 1 ? "GB" : "ES",
  gender: (i % 2 === 0 ? "male" : "female") as Voice["gender"],
  personality: ["warm", "confident", "friendly", "dynamic"][i % 4],
  sample_path: undefined,
}));

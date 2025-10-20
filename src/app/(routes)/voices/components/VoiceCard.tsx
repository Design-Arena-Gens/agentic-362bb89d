import { cn } from "@/lib/utils";
import type { Voice } from "@/types";

export function VoiceCard({ voice }: { voice: Voice }) {
  return (
    <div
      className={cn(
        "surface shadow-soft rounded-[var(--radius-md)] p-4 border border-transparent",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-[var(--accent)]"
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">{voice.voice_id}</div>
          <div className="text-xs text-[var(--text-muted)]">
            {voice.language}-{voice.region} · {voice.gender} · {voice.personality}
          </div>
        </div>
        <button className="px-3 py-1.5 text-sm rounded-[var(--radius-sm)] bg-[var(--accent)] text-black">Preview</button>
      </div>
    </div>
  );
}

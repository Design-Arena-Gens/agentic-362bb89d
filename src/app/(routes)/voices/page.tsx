import { voices } from "./voices.data";
import { VoiceCard } from "./components/VoiceCard";

export default function VoicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="font-serif text-3xl mb-4">Voices</h1>
      <p className="text-[var(--text-muted)] mb-6">Library of 551 voices with filters and previews.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {voices.slice(0, 18).map((v) => (
          <VoiceCard key={v.voice_id} voice={v} />
        ))}
      </div>
    </div>
  );
}

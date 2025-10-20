import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen gradient-hero">
      <header className="sticky top-0 z-20 backdrop-blur-sm bg-transparent">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="text-[15px] tracking-wide text-[var(--accent-2)] font-medium">LOVABLE</div>
          <nav className="hidden md:flex gap-6 text-sm text-[var(--text-muted)]">
            <Link href="/voices" className="hover:text-[var(--accent)] transition-colors">Voices</Link>
            <Link href="/audiobook" className="hover:text-[var(--accent)] transition-colors">Audiobook</Link>
            <Link href="/podcast" className="hover:text-[var(--accent)] transition-colors">Podcast</Link>
            <Link href="/jobs" className="hover:text-[var(--accent)] transition-colors">Jobs</Link>
            <Link href="/settings" className="hover:text-[var(--accent)] transition-colors">Settings</Link>
          </nav>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 animate-hero-enter">
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4">Edge-TTS: Audiobook & Podcast Studio</h1>
        <p className="max-w-2xl text-[var(--text-muted)]">Generate premium audiobooks and dual-host podcasts with 551 voices, AI models with automatic fallback, and realtime progress — production-ready.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/audiobook" className="px-5 py-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-black font-medium shadow-soft">Create Audiobook</Link>
          <Link href="/podcast" className="px-5 py-3 rounded-[var(--radius-md)] border border-[var(--accent)] text-[var(--accent)]">Create Podcast</Link>
        </div>
      </section>
    </div>
  );
}

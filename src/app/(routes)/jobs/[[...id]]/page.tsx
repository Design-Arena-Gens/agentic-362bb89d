export default function JobPage({ params }: { params: { id?: string[] } }) {
  const jobId = params.id?.[0];
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="font-serif text-3xl mb-4">{jobId ? `Job ${jobId}` : "Jobs"}</h1>
      <p className="text-[var(--text-muted)]">Realtime logs and downloadable outputs.</p>
    </div>
  );
}

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#0a0a0f] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blue-400">404</p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Page not found</h1>
        <p className="max-w-xl text-white/50">
          The page you requested does not exist in this SDL starter yet.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a0a0f] transition hover:bg-white/90"
        >
          Go home
        </a>
      </div>
    </section>
  );
}

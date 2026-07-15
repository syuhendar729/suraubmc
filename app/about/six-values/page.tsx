import { sixValuesData } from "@/app/data/aboutData";

export default function SixValuesPage() {
  const { header, values } = sixValuesData;

  return (
    <main className="min-h-screen bg-surau-cream text-[color:var(--foreground)]">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--color-surau-yellow)]/90">
            <span className="h-px w-8 bg-[color:var(--color-surau-yellow)]/90" />
            {header.eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[color:var(--color-surau-dark-green)] sm:text-5xl lg:text-6xl">
            {header.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[color:var(--color-surau-dark-green)]/80 sm:text-lg">
            {header.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.id}
              className="group relative overflow-hidden rounded-[2rem] border border-[color:var(--color-surau-dark-green)] bg-[color:var(--color-surau-dark-green)]/90 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:border-[color:var(--color-surau-yellow)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[color:var(--color-surau-dark-green)]" />
              <div className="mb-10 inline-flex rounded-full border border-[color:var(--color-surau-yellow)]/30 px-4 py-1 text-sm font-medium uppercase tracking-[0.35em] text-[color:var(--color-surau-cream)]/80">
                Value
              </div>
              <h2 className="text-2xl font-semibold text-[color:var(--color-surau-cream)]">
                {value.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-[color:var(--color-surau-cream)]/75">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

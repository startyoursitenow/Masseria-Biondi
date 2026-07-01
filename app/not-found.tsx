import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-ivory min-h-screen">
      <section className="section-pad">
        <div className="wide-container flex min-h-[70vh] items-center justify-center">
          <div className="max-w-2xl rounded-[28px] border border-[rgba(139,30,36,0.16)] bg-[rgba(255,253,248,0.86)] px-6 py-12 text-center shadow-[0_24px_60px_rgba(33,23,19,0.1)] sm:px-10">
            <p className="font-serif text-[clamp(5rem,14vw,10rem)] leading-none text-[var(--wine)]">404</p>
            <h1 className="mt-4 font-serif text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95] text-[var(--wine)]">Pagina non trovata</h1>
            <p className="mx-auto mt-5 max-w-lg text-lg font-semibold leading-8 text-[var(--muted)]">
              Sembra che questa pagina sia andata a pascolare.
            </p>
            <Link href="/" className="button-primary mx-auto mt-8 w-fit">
              Torna alla Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

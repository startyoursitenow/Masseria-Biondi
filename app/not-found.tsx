import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-ivory min-h-screen">
      <section className="section-pad">
        <div className="wide-container flex min-h-[70vh] items-center justify-center">
          <div className="max-w-2xl rounded-[28px] border border-[rgba(139,30,36,0.16)] bg-[rgba(255,253,248,0.86)] px-6 py-12 text-center shadow-[0_24px_60px_rgba(33,23,19,0.1)] sm:px-10">
            <svg
              viewBox="0 0 320 150"
              aria-hidden="true"
              className="mx-auto mb-7 h-auto w-full max-w-sm text-[var(--wine)]"
            >
              <path d="M28 124h264" fill="none" stroke="var(--gold)" strokeLinecap="round" strokeWidth="4" />
              <path d="M58 124V72l46-30 46 30v52" fill="rgba(139,30,36,0.06)" stroke="currentColor" strokeLinejoin="round" strokeWidth="5" />
              <path d="M42 72h124L104 32 42 72Z" fill="rgba(176,138,74,0.22)" stroke="currentColor" strokeLinejoin="round" strokeWidth="5" />
              <path d="M86 124V88h36v36" fill="rgba(176,138,74,0.16)" stroke="currentColor" strokeLinejoin="round" strokeWidth="5" />
              <path d="M182 124V84h70v40" fill="rgba(139,30,36,0.05)" stroke="currentColor" strokeLinejoin="round" strokeWidth="5" />
              <path d="M174 84h86l-43-30-43 30Z" fill="rgba(176,138,74,0.18)" stroke="currentColor" strokeLinejoin="round" strokeWidth="5" />
              <path d="M196 124V98h42v26" fill="rgba(176,138,74,0.14)" stroke="currentColor" strokeLinejoin="round" strokeWidth="5" />
              <path d="M72 56c10-13 22-19 34-19s24 6 34 19" fill="none" stroke="var(--gold)" strokeLinecap="round" strokeWidth="3" />
              <path d="M44 104c12-10 28-10 40 0M244 104c10-9 24-9 34 0" fill="none" stroke="var(--gold)" strokeLinecap="round" strokeWidth="3" />
            </svg>
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

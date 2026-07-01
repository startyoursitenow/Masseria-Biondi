import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ivory">
      <Image
        src="/media/immagine-error-404.png"
        alt="Errore 404: pagina non trovata, paesaggio agricolo con fattoria e mucca"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <Link
        href="/"
        aria-label="Torna alla Home"
        className="absolute left-1/2 top-[61%] z-10 h-14 w-72 max-w-[70vw] -translate-x-1/2 rounded-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-[var(--gold)]"
      >
        <span className="sr-only">Torna alla Home</span>
      </Link>
    </main>
  );
}

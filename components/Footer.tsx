import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/siteData";

export function Footer() {
  const { business, footer } = siteData;

  return (
    <footer className="bg-brand-900 py-10 text-white">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src={business.logo} alt={business.name} width={44} height={44} className="h-11 w-11" />
            <strong className="text-lg font-black">{business.name}</strong>
          </div>
          <p className="mt-4 max-w-md leading-7 text-white/74">{business.slogan}</p>
        </div>
        <address className="not-italic leading-8 text-white/76">
          <p>{business.address}</p>
          <p>{business.phone}</p>
          <p>{business.email}</p>
        </address>
        <div className="grid gap-2">
          {business.social.map((item) => (
            <Link key={item.href} href={item.href} className="font-bold text-white/82 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href={footer.privacyHref} className="font-bold text-white/82 transition hover:text-white">
            {footer.privacyLabel}
          </Link>
          <Link href={footer.cookieHref} className="font-bold text-white/82 transition hover:text-white">
            {footer.cookieLabel}
          </Link>
        </div>
      </div>
      <div className="container-page mt-8 border-t border-white/12 pt-5 text-sm text-white/62">
        &copy; {new Date().getFullYear()} {business.name}. {footer.copyright}.
      </div>
    </footer>
  );
}

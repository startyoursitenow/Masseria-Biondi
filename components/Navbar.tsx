"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { siteData, whatsappHref } from "@/lib/siteData";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { business, navigation } = siteData;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-line bg-surface/95 shadow-soft backdrop-blur-sm"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="#" className="flex min-w-0 items-center gap-3 rounded-md p-1 transition hover:opacity-80">
          <Image src={business.logo} alt={business.name} width={36} height={36} priority className="h-9 w-9" />
          <span className="truncate text-base font-extrabold text-ink sm:text-lg">{business.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navigation.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-muted transition hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={whatsappHref}
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink shadow-xs transition hover:bg-brand-50"
          >
            <MessageCircle size={16} />
            Contatti
          </Link>
          <Link
            href={whatsappHref}
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-brand-900 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift"
          >
            {navigation.ctaLabel}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label={open ? navigation.menuCloseLabel : navigation.menuOpenLabel}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-ink transition hover:bg-brand-50 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-line bg-surface md:hidden">
          <div className="mx-auto max-w-5xl grid gap-1 px-4 py-4">
            {navigation.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-bold text-ink transition hover:bg-brand-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={whatsappHref}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-900 px-5 py-3 font-bold text-white"
            >
              <MessageCircle size={18} />
              {navigation.ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

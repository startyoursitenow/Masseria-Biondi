"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { siteData, whatsappHref } from "@/lib/siteData";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { business, navigation } = siteData;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/92 backdrop-blur">
      <nav className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link href="#" className="flex min-w-0 items-center gap-3">
          <Image src={business.logo} alt={business.name} width={44} height={44} priority className="h-11 w-11" />
          <span className="truncate text-base font-extrabold text-ink sm:text-lg">{business.name}</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-muted transition hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href={whatsappHref}
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-brand-900 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift"
          >
            <MessageCircle size={18} />
            {navigation.ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? navigation.menuCloseLabel : navigation.menuOpenLabel}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-white text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-surface lg:hidden">
          <div className="container-page grid gap-2 py-4">
            {navigation.links.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-bold text-ink">
                {item.label}
              </Link>
            ))}
            <Link href={whatsappHref} className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-900 px-5 py-3 font-bold text-white">
              <MessageCircle size={18} />
              {navigation.ctaLabel}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

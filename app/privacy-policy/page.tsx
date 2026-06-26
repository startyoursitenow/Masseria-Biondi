import Link from "next/link";
import { siteData } from "@/lib/siteData";

export default function PrivacyPolicyPage() {
  const page = siteData.legalPages.privacy;

  return (
    <main className="min-h-screen bg-surface py-16">
      <div className="container-page max-w-3xl">
        <Link href="/" className="font-bold text-brand-700">
          {siteData.business.name}
        </Link>
        <h1 className="mt-8 text-4xl font-black text-ink">{page.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted">{page.text}</p>
      </div>
    </main>
  );
}

import Link from "next/link";

const styles = {
  primary: "bg-brand-900 text-white hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift",
  secondary: "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-soft",
  accent: "bg-accent text-white hover:-translate-y-0.5 hover:brightness-95 hover:shadow-lift"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-base font-bold transition duration-300 focus:outline-none focus:ring-4 focus:ring-brand-100 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

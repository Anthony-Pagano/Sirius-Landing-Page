import Link from "next/link";

import { Container } from "@/components/ui/container";
import { landingContent } from "@/content/landing";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-[rgba(2,8,22,0.5)] backdrop-blur-xl">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-white/82">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
          Sirius
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-white/48 md:flex">
          {landingContent.nav.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white/84">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}

import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container className="flex flex-col gap-4 text-xs uppercase tracking-[0.18em] text-white/42 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-white/62">Sirius</p>
        <p>Voice-first orchestration for tools, workflows, and the physical world.</p>
      </Container>
    </footer>
  );
}

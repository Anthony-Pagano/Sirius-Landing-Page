import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container className="flex flex-col gap-4 text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
        <p className="font-display text-[var(--color-text-secondary)]">Sirius</p>
        <p>Voice-first orchestration for tools, workflows, and the physical world.</p>
      </Container>
    </footer>
  );
}

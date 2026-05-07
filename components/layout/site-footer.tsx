import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-4 text-xs uppercase tracking-[0.22em] text-white/38 md:flex-row md:items-center md:justify-between">
        <p>Sirius</p>
        <p>Voice-first orchestration for tools, workflows, and the physical world.</p>
      </Container>
    </footer>
  );
}

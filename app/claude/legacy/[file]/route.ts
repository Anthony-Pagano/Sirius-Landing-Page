import { readFile } from "node:fs/promises";
import { join } from "node:path";

const ALLOWED_FILES = new Set([
  "lp-tokens.jsx",
  "lp-nav.jsx",
  "lp-hero.jsx",
  "lp-problem.jsx",
  "lp-system.jsx",
  "lp-demo.jsx",
  "lp-usecases.jsx",
  "lp-comparison.jsx",
  "lp-voices.jsx",
  "lp-faq.jsx",
  "lp-cta.jsx",
  "landing-page.jsx",
]);

type RouteContext = {
  params: Promise<{
    file: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { file } = await context.params;

  if (!ALLOWED_FILES.has(file)) {
    return new Response("Not found", { status: 404 });
  }

  const source = await readFile(join(process.cwd(), "landing", file), "utf8");

  return new Response(source, {
    headers: {
      "content-type": "text/babel; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

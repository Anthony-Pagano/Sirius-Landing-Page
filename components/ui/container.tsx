import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[var(--max-width)] px-6 md:px-10", className)} {...props}>
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  background,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  background?: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        `scroll-mt-16 relative flex justify-center px-4 sm:px-8 py-8 sm:py-16 border-foreground/10 border-b-1`,
        className
      )}
    >
      {background && (
        <div className="absolute inset-0 w-full h-full z-0">{background}</div>
      )}
      <div className={cn("relative max-w-6xl w-full z-10")}>{children}</div>
    </section>
  );
}

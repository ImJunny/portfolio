import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  background,
}: {
  children: React.ReactNode;
  className?: string;
  background?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        `relative flex justify-center px-4 sm:px-8 py-8 sm:py-16 border-foreground/10 border-b-1`,
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

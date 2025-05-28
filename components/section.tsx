import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn(`flex justify-center px-8 py-16`, className)}>
      <div className="max-w-6xl w-full">{children}</div>
    </section>
  );
}

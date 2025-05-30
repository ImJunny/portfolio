import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { cn } from "@/lib/utils";

export function FlickeringGridBackground() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <FlickeringGrid
        squareSize={10}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.2}
        flickerChance={0.1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "opacity-100"
        )}
      />
    </div>
  );
}

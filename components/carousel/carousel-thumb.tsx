import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CarouselThumb(props: {
  selected: boolean;
  index: number;
  url: string;
  onClick: () => void;
}) {
  const { selected, onClick, url } = props;

  return (
    <div
      className={cn("flex-[0_0_15%] aspect-square", selected ? "border-2" : "")}
    >
      <button
        onClick={onClick}
        type="button"
        className={cn(
          "appearance-none bg-transparent touch-manipulation no-underline cursor-pointer border-0 p-0 m-0 shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] text-[1.8rem] font-semibold text-[var(--detail-high-contrast)] flex items-center justify-center h-full w-full select-none"
        )}
      >
        <Image
          src={url}
          width={900}
          height={500}
          alt={`Slide ${url}`}
          className="object-cover w-full h-full aspect-auto"
        />
      </button>
    </div>
  );
}

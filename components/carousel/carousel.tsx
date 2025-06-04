"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselThumb } from "./carousel-thumb";
import Image from "next/image";
import { X } from "lucide-react";

type CarouselProps = {
  slides: string[];
  options?: Record<string, JSON | string | number | boolean>;
};

const Carousel = (props: CarouselProps) => {
  const { slides, options } = props;
  console.log(slides);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex">
          {slides.map((url: string, index: number) => (
            <div className="flex-[0_0_100%]" key={index}>
              <div className="flex items-center justify-center text-6xl font-semibold select-none">
                {slides.length > 0 ? (
                  <Dialog>
                    <DialogTrigger className="hover:cursor-pointer">
                      <Image
                        src={slides[index]}
                        width={800}
                        height={800}
                        alt={`Slide ${url}`}
                        className="w-full h-full rounded-md aspect-video object-cover"
                      />
                    </DialogTrigger>
                    <DialogContent className="p-4 flex-col items-end bg-zinc-900 sm:max-w-screen lg:max-w-screen-xl rounded-sm border-0 flex [&>button]:hidden">
                      <DialogHeader className="sr-only">
                        <DialogTitle>Hidden dialog title</DialogTitle>
                      </DialogHeader>
                      <DialogClose
                        className="rounded-full hover:cursor-pointer"
                        asChild
                      >
                        <X className="text-background" />
                      </DialogClose>
                      <Image
                        src={slides[index]}
                        alt={`image-${url}`}
                        width={1400}
                        height={1400}
                        className="w-full h-full max-w-[90vw] max-h-[90vh] object-contain rounded-md"
                      />
                    </DialogContent>
                  </Dialog>
                ) : (
                  <p className="text-background">No image provided</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex gap-2 mt-2">
          {slides.map((url: string, index: number) => (
            <CarouselThumb
              key={index}
              onClick={() => onThumbClick(index)}
              selected={index === selectedIndex}
              url={url}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

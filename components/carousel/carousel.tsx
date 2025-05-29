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
                    <DialogContent className=" bg-zinc-900 h-[90vh] sm:max-w-screen lg:max-w-screen-lg rounded-sm border-0 flex items-center justify-center">
                      <DialogClose className="absolute top-4 right-4 rounded-full hover:cursor-pointer">
                        <X className="text-background" />
                      </DialogClose>
                      <DialogHeader>
                        <DialogTitle className="sr-only">
                          Hidden dialog title
                        </DialogTitle>
                      </DialogHeader>
                      <Image
                        src={slides[index]}
                        width={1400}
                        height={1400}
                        alt={`image-${url}`}
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

import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import React from "react";
import Section from "./section";

export default function Footer() {
  return (
    <footer>
      <Section className="bg-black">
        <div className="flex justify-between flex-col sm:flex-row gap-4 items-center">
          <span
            className={cn(
              GeistMono.className,
              "text-4xl font-semibold text-background text-center hidden sm:block"
            )}
          >
            JNN
          </span>

          <div className="flex flex-col">
            <span className="text-background text-xl font-semibold text-center">
              Want to reach out?
            </span>
            <span className="text-background">
              You can contact me via email or phone!
            </span>
          </div>

          <div className="grid grid-rows-2 gap-x-4 text-background ">
            <span className="font-semibold text-center">
              johnnguyen4501@gmail.com
            </span>
            <span className="font-semibold text-center">+1 (717) 350-3843</span>
          </div>
        </div>
      </Section>
    </footer>
  );
}

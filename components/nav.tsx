"use client";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

export default function Nav() {
  const tabs = ["Intro", "Projects"];

  return (
    <nav className="bg-background h-16 items-center flex justify-center shadow-sm flex px-8 sticky top-0 z-50">
      <div className="flex max-w-6xl w-full">
        <h1 className={cn(GeistMono.className, "text-xl font-semibold")}>
          JNN
        </h1>
        <ul className="flex items-center list-none gap-8 ml-auto">
          {tabs.map((tab) => (
            <li
              key={tab}
              className="text-foreground text-sm text-foreground/80 cursor-pointer hover:text-foreground animated transition-colors duration-300"
              onClick={() => console.log(`${tab} clicked`)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

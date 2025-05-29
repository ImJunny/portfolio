"use client";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Nav() {
  const tabs = ["About", "Skills", "Projects", "Resume", "Contact"];

  return (
    <nav className="bg-background h-16 items-center flex justify-center border-b-1 border-foreground/10 px-4 sm:px-8 sticky top-0 z-50">
      <div className="flex max-w-6xl w-full">
        <h1 className={cn(GeistMono.className, "text-xl font-semibold")}>
          JNN
        </h1>
        <ul className="hidden sm:flex items-center list-none gap-8 ml-auto">
          {tabs.map((tab) => (
            <li
              key={tab}
              className="text-sm text-foreground/80 cursor-pointer hover:text-foreground animated transition-colors duration-300"
              onClick={() => console.log(`${tab} clicked`)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <Sheet>
          <SheetTrigger className="sm:hidden flex ml-auto items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent className="p-4">
            <SheetTitle className="sr-only">
              Are you absolutely sure?
            </SheetTitle>

            <ul className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className="text-xl text-foreground/80 cursor-pointer hover:text-foreground animated transition-colors duration-300"
                  onClick={() => console.log(`${tab} clicked`)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

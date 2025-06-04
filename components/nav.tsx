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
import { useState } from "react";

export default function Nav() {
  const tabs = [
    { title: "About", section: "about-section" },
    { title: "Skills", section: "skills-section" },
    { title: "Projects", section: "projects-section" },
    { title: "Resume", section: "resume-section" },
    { title: "Contact", section: "contact-section" },
  ];

  const [sheetOpen, setSheetOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setSheetOpen(false);
  };

  return (
    <nav className="bg-background h-16 items-center flex justify-center border-b-1 px-4 sm:px-8 sticky top-0 z-50">
      <div className="flex max-w-6xl w-full">
        <h1 className={cn(GeistMono.className, "text-xl font-semibold")}>
          JNN
        </h1>
        <ul className="hidden sm:flex items-center list-none gap-8 ml-auto">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className="text-sm text-foreground/80 cursor-pointer hover:text-foreground animated transition-colors duration-300"
              onClick={() => scrollToSection(tab.section)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="sm:hidden flex ml-auto items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent className="p-4">
            <SheetTitle className="sr-only">
              Are you absolutely sure?
            </SheetTitle>

            <ul className="flex flex-col gap-2">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className="text-xl text-foreground/80 cursor-pointer hover:text-foreground animated transition-colors duration-300"
                  onClick={() => scrollToSection(tab.section)}
                >
                  {tab.title}
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { TypingText } from "./animate-ui/text/typing";

export default function HeroTitle() {
  return (
    <h1
      className={cn(
        "text-3xl md:text-4xl tracking-tighter text-center md:text-left"
      )}
    >
      <TypingText
        text={["Hello!", "Welcome to my portfolio.", "John Nhat Nguyen"]}
        duration={30}
        cursor
        cursorClassName="h-10 invisible"
      />
    </h1>
  );
}

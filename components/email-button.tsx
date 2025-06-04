"use client";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function EmailButton() {
  const handleClick = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText("johnnguyen4501@gmail.com");
    } else {
      // fallback for insecure context or unsupported browsers (e.g., some mobile browsers)
      const textArea = document.createElement("textarea");
      textArea.value = "johnnguyen4501@gmail.com";
      // Avoid scrolling to bottom
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    toast("Email copied to clipboard!", { position: "top-right" });
  };

  return (
    <Button
      onClick={handleClick}
      className="flex gap-2 cursor-pointer h-10 w-10 lg:h-auto lg:w-auto"
      variant="outline"
    >
      <Mail />
      <span className="hidden lg:flex">Email</span>
    </Button>
  );
}

"use client";
import Section from "@/components/section";
import { FlickeringGridBackground } from "./flickering-grid-background";
import { Card, CardContent } from "./ui/card";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useEffect, useRef, useState } from "react";
import { MotionEffect } from "./animate-ui/effects/motion-effect";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(1000);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Section background={<FlickeringGridBackground />} id="resume-section">
      <MotionEffect
        slide={{ direction: "left", offset: 50 }}
        transition={{ type: "tween", delay: 0.2 }}
        inView
        fade
      >
        <Card className="w-full max-w-2xl mx-auto transition-all duration-300">
          <CardContent className="flex flex-col items-center">
            <div>
              <h1 className="text-2xl tracking-tighter font-semibold text-center">
                Peep my resume!
              </h1>
              <p className="text-center mt-2 text-lg">
                You can download it{" "}
                <a
                  href="/resume.pdf"
                  download
                  className="font-semibold underline hover:text-blue-600 transition-colors"
                >
                  here
                </a>
                .
              </p>
            </div>
            <div
              ref={containerRef}
              className="mt-4 w-full shadow-md border border-border overflow-hidden"
            >
              <Document file="/resume.pdf">
                <Page pageNumber={1} width={containerWidth} />
              </Document>
            </div>
          </CardContent>
        </Card>
      </MotionEffect>
    </Section>
  );
}

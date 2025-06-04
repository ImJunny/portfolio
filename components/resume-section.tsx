"use client";
import Section from "@/components/section";
import { FlickeringGridBackground } from "./flickering-grid-background";
import { Card, CardContent } from "./ui/card";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useEffect, useRef, useState } from "react";

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
      <Card>
        <CardContent className="flex flex-col items-center">
          <div>
            <h1 className="text-2xl tracking-tighter font-semibold text-center">
              Peep my resume!
            </h1>
            <p className="text-center mt-2">
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
            className="mt-4 max-w-xl w-full shadow-md border-1 border-border"
          >
            <Document file="/resume.pdf" className="">
              <Page pageNumber={1} width={containerWidth} />
            </Document>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}

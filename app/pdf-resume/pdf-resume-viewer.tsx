"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loading } from "./loading-fallback";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const file = "/CV-resume.pdf";

export default function PdfResumeViewer() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="relative h-full w-full bg-black">
      <Link href="/" prefetch>
        <Button variant={"secondary"} className={" m-2"}>
          Back to Home
        </Button>
      </Link>
      <Document
        file={file}
        loading={<Loading />}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="h-full w-full"
      >
        <Page pageNumber={pageNumber} className="h-full w-full" scale={1.2} />
      </Document>
      <div className="fixed right-0 bottom-0 left-0 flex items-center justify-center gap-2 bg-black p-4">
        <Button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber <= 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber >= numPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

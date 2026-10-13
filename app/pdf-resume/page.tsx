"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

const reactPdf = import("react-pdf").then((mod) => {
  mod.pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  return mod;
});

const Document = dynamic(() => reactPdf.then((mod) => mod.Document), {
  ssr: false,
});

const Page = dynamic(() => reactPdf.then((mod) => mod.Page), {
  ssr: false,
});

export const path = "./CV-resume.pdf";

const Loading = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-white">
      <Progress
        value={56}
        className="max-w-sm w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <ProgressLabel>Upload progress</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  );
};

function CVPage() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-full h-full bg-black">
      <Suspense fallback={<Loading />}>
        <Document
          file={path}
          onLoadSuccess={onDocumentLoadSuccess}
          className="w-full h-full"
          scale={1.2}
        >
          <Suspense fallback={<Loading />}>
            <Page pageNumber={pageNumber} className="w-full h-full" />
          </Suspense>
        </Document>
      </Suspense>
      <div
        className="
        fixed bottom-0 left-0 right-0 p-4 bg-black flex gap-2 justify-center items-center
        "
      >
        <Button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
          className={"cursor-pointer"}
        >
          Previous
        </Button>
        <Button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= (numPages ?? 0)}
          className={"cursor-pointer"}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
export default CVPage;

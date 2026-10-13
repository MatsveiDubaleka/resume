"use client";

import dynamic from "next/dynamic";
import { Loading } from "./loading-fallback";

const PdfResumeViewer = dynamic(() => import("./pdf-resume-viewer"), {
  ssr: false,
  loading: Loading,
});

export function PdfResumePage() {
  return <PdfResumeViewer />;
}

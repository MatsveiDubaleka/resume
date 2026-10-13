import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

export function Loading() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-white">
      <Progress
        value={56}
        className="fixed top-1/2 left-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2"
      >
        <ProgressLabel>Upload progress</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  );
}

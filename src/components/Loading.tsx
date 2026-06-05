
"use client";

import Lottie from "lottie-react";

import loadingAnimation from "@/assets/animations/loadingWave.json";

interface LoadingProps {
  size?: string;
  overlay?: boolean;
}

export default function Loading({
  size = "h-60 w-60",
  overlay = true,
}: LoadingProps) {
  return (
    <div
      className={`${
        overlay
          ? "fixed inset-0 z-50"
          : "h-full w-full"
      } flex items-center justify-center bg-base-100`}
    >
      <Lottie
        animationData={loadingAnimation}
        loop
        className={size}
      />
    </div>
  );
}
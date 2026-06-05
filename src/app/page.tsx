"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/useAuthStore";
import Loading from "@/components/Loading";

export default function Home() {
  const router = useRouter();

  const { user, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isCheckingAuth) {
      return;
    }

    if (user) {
      router.replace("/home");
    } else {
      router.replace("/landing");
    }
  }, [user, isCheckingAuth, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loading />
    </div>
  );
}

import type { ReactNode } from "react";

import Header from "@/components/Header";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Header />
      <main>{children}</main>
    </div>
  );
}

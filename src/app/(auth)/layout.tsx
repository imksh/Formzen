import PublicFooter from "@/components/PublicFooter";
import PublicHeader from "@/components/PublicHeader";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <main>
        <PublicHeader />
        {children}
        <PublicFooter />
      </main>
    </div>
  );
}

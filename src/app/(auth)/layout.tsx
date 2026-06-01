import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <main>{children}</main>
    </div>
  );
}

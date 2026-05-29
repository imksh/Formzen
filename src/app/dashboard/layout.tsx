import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/forms", label: "Forms" },
  { href: "/dashboard/profile", label: "Profile" },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-screen-2xl gap-6 p-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:p-6">
      <aside className="glass-panel flex flex-col rounded-4xl border border-base-300 p-5 shadow-2xl shadow-black/30">
        <div className="rounded-3xl border border-base-300 bg-base-200/70 p-5">
          <span className="badge badge-primary badge-outline">FormZen</span>
          <h1 className="mt-4 text-2xl font-semibold text-base-content">
            Corporate form workspace
          </h1>
          <p className="mt-2 text-sm leading-6 text-base-content/65">
            Manage every form, survey, and intake workflow from one dark-first
            control plane.
          </p>
        </div>

        <nav className="mt-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-2xl border border-base-300 bg-base-200/50 px-4 py-3 text-sm font-medium text-base-content/80 transition hover:border-primary/50 hover:bg-base-100"
            >
              <span>{item.label}</span>
              <span className="text-base-content/40">/</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto rounded-3xl border border-base-300 bg-base-200/70 p-5">
          <p className="text-sm text-base-content/60">Workspace status</p>
          <p className="mt-1 text-lg font-semibold text-base-content">
            All systems online
          </p>
          <p className="mt-2 text-sm text-base-content/65">
            Theme, SEO, and dashboard shell are ready for product work.
          </p>
        </div>
      </aside>

      <div className="flex min-h-0 flex-col gap-6">
        <header className="glass-panel flex items-center justify-between rounded-4xl border border-base-300 px-5 py-4 shadow-xl shadow-black/20">
          <div>
            <p className="text-sm text-base-content/60">Dashboard</p>
            <p className="text-lg font-semibold text-base-content">
              Build faster today
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <ThemeToggle />

            <Link
              href="/dashboard/forms"
              className="btn btn-outline btn-secondary btn-sm"
            >
              New form
            </Link>
            <Link href="/login" className="btn btn-primary btn-sm">
              Sign out
            </Link>
          </div>
        </header>

        <main className="min-h-0 flex-1 rounded-4xl border border-base-300 bg-base-200/55 p-4 shadow-2xl shadow-black/20 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

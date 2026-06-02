import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const metadata = {
  title: "Login",
  description:
    "Access your FormZen workspace and manage forms from the dashboard.",
};

const providerOptions = [
  {
    name: "Google",
    description: "Use your Google workspace account.",
    icon: FcGoogle,
  },
  {
    name: "GitHub",
    description: "Sign in with your developer account.",
    icon: FaGithub,
  },
];

const trustPoints = [
  "Single sign-on ready for teams.",
  "Fast access to dashboards, forms, and approvals.",
  "Built for secure, audit-friendly workflows.",
];

export default function Login() {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%),linear-gradient(180deg,_rgba(2,6,23,0.04),_transparent)] text-base-content">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />

      <main className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <section className="hidden md:flex flex-col justify-between gap-8 rounded-[2rem] border border-base-300/80 bg-base-100/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium text-base-content/75">
                <span className="h-2 w-2 rounded-full bg-success" />
                Secure access for modern teams
              </div>

              <div className="max-w-xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-base-content/50">
                  FormZen login
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-base-content sm:text-5xl lg:text-6xl">
                  Sign in once, manage every form with confidence.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-base-content/70 sm:text-lg">
                  Keep approvals, submissions, and workflows in one place with a
                  polished login experience built for day-to-day production use.
                </p>
              </div>

              {/* <div className="grid gap-4 sm:grid-cols-3">
                {trustPoints.map((point) => (
                  <article
                    key={point}
                    className="rounded-2xl border border-base-300/80 bg-base-200/60 p-4"
                  >
                    <p className="text-sm leading-6 text-base-content/70">
                      {point}
                    </p>
                  </article>
                ))}
              </div> */}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-base-300/80 bg-base-200/60 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-base-content/45">
                  Workspace ready
                </p>
                <p className="mt-3 text-3xl font-semibold text-base-content">
                  24/7
                </p>
                <p className="mt-2 text-sm leading-6 text-base-content/65">
                  Access your dashboard, review submissions, and publish updates
                  whenever your team needs them.
                </p>
              </article>

              <article className="rounded-2xl border border-base-300/80 bg-base-200/60 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-base-content/45">
                  Secure by design
                </p>
                <p className="mt-3 text-3xl font-semibold text-base-content">
                  SSO
                </p>
                <p className="mt-2 text-sm leading-6 text-base-content/65">
                  Google and GitHub sign-in options keep onboarding simple for
                  both operators and builders.
                </p>
              </article>
            </div>
          </section>

          <section className="flex items-center">
            <div className="w-full rounded-[2rem] border border-base-300/80 bg-base-100/95 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-base-content/50">
                  Welcome back
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-base-content">
                  Continue to FormZen
                </h2>
                {/* <p className="text-base leading-7 text-base-content/65">
                  Use a provider or sign in with your email address to get back
                  into your workspace.
                </p> */}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {providerOptions.map((provider) => {
                  const Icon = provider.icon;

                  return (
                    <button
                      key={provider.name}
                      type="button"
                      className="group flex w-full items-center justify-between rounded-2xl border border-base-300 bg-base-100 px-4 py-3.5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center ">
                          <Icon className="text-xl" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-base-content">
                            {provider.name}
                          </span>
                          {/* <span className="block text-sm text-base-content/60">
                            {provider.description}
                          </span> */}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-base-300" />
                <span className="text-sm font-medium uppercase tracking-[0.28em] text-base-content/45">
                  Or email
                </span>
                <div className="h-px flex-1 bg-base-300" />
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-base-content/80"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    className="w-full rounded-2xl border border-base-300 bg-base-100 px-4 py-3 text-base text-base-content outline-none transition placeholder:text-base-content/35 focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-base-content/80"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-base-300 bg-base-100 px-4 py-3 text-base text-base-content outline-none transition placeholder:text-base-content/35 focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                  <label className="flex items-center gap-2 text-base-content/65">
                    <input
                      type="checkbox"
                      name="remember"
                      className="h-4 w-4 rounded border-base-300 text-primary focus:ring-primary"
                    />
                    Keep me signed in
                  </label>

                  <Link
                    href="/forgot-password"
                    className="font-medium text-primary transition hover:text-primary/80"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-2xl bg-primary px-4 py-3.5 text-base font-semibold text-primary-content shadow-lg shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Sign in to your workspace
                </button>
              </form>

              <p className="mt-6 text-center text-sm leading-6 text-base-content/60">
                New to FormZen?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-primary transition hover:text-primary/80"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

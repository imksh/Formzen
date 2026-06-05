import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Drag & Drop Form Builder",
    description:
      "Create professional forms with a modern builder designed for teams and businesses.",
  },
  {
    title: "Realtime Responses",
    description:
      "Track submissions instantly with organized dashboards and response analytics.",
  },
  {
    title: "Team Collaboration",
    description:
      "Collaborate with your team, manage approvals, and streamline workflows.",
  },
];

const stats = [
  {
    value: "10K+",
    label: "Forms Created",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "24/7",
    label: "Access",
  },
];

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden bg-base-100 text-base-content">
      {/* hero */}
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200 px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-success" />
              Modern Form Management Platform
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
                Build forms,
                <span className="text-primary"> collect responses,</span> and
                manage workflows effortlessly.
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-base-content/70">
                FormZen helps teams create beautiful forms, manage submissions,
                automate workflows, and collaborate from one centralized
                platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="btn btn-primary h-14 rounded-2xl px-7 text-base font-semibold"
              >
                Start Building
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/login"
                className="btn btn-outline h-14 rounded-2xl px-7 text-base font-semibold"
              >
                Live Demo
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-base-300 bg-base-100/80 p-5 shadow-sm"
                >
                  <h3 className="text-3xl font-bold">{stat.value}</h3>

                  <p className="mt-2 text-sm text-base-content/65">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="relative">
            <div className="rounded-[2rem] border border-base-300 bg-base-100 p-6 shadow-2xl">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-base-content/50">Active Form</p>

                    <h3 className="mt-1 text-xl font-bold">
                      Customer Feedback Survey
                    </h3>
                  </div>

                  <span className="badge badge-success badge-outline">
                    Live
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                    <p className="text-sm font-medium">Overall Experience</p>

                    <div className="mt-3 flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className="h-9 w-9 rounded-lg bg-primary/10"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                    <p className="text-sm font-medium">Additional Feedback</p>

                    <div className="mt-3 h-24 rounded-xl bg-base-100" />
                  </div>

                  <button className="btn btn-primary w-full rounded-xl">
                    Submit Response
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-base-300 bg-base-100 p-5 shadow-xl lg:block">
              <p className="text-sm text-base-content/50">Responses Today</p>

              <h3 className="mt-2 text-3xl font-bold">1,284</h3>

              <p className="mt-1 text-sm text-success">+18% from yesterday</p>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Everything you need to manage forms professionally
          </h2>

          <p className="mt-5 text-lg leading-8 text-base-content/70">
            Built for startups, businesses, and modern teams that need scalable
            workflows and organized submissions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[2rem] border border-base-300 bg-base-100 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <CheckCircle2 className="text-primary" size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">{feature.title}</h3>

              <p className="mt-4 leading-7 text-base-content/70">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* cta */}
      <section
        id="pricing"
        className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <div className="rounded-[2.5rem] border border-base-300 bg-base-100 p-10 shadow-2xl lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Get Started
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Start building forms with FormZen today.
            </h2>

            <p className="mt-6 text-lg leading-8 text-base-content/70">
              Create modern forms, collect responses, and streamline workflows
              with a powerful all-in-one platform.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/register"
                className="btn btn-primary h-14 rounded-2xl px-8 text-base font-semibold"
              >
                Create Free Account
              </Link>

              <Link
                href="/login"
                className="btn btn-outline h-14 rounded-2xl px-8 text-base font-semibold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

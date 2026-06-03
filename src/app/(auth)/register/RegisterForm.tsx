"use client";

import { useState } from "react";

import Link from "next/link";

import { Eye, EyeOff } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

const providerOptions = [
  {
    name: "Google",
    icon: FcGoogle,
  },
  {
    name: "GitHub",
    icon: FaGithub,
  },
];

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsDoNotMatch =
    confirmPassword.length > 0 && confirmPassword !== password;

  const inputClassName =
    "w-full rounded-2xl border bg-base-100 px-4 py-3 pr-12 outline-none transition placeholder:text-base-content/35 focus:ring-2";

  const borderClassName = passwordsDoNotMatch
    ? "border-error focus:border-error focus:ring-error/15"
    : "border-base-300 focus:border-primary focus:ring-primary/20";

  return (
    <main className="relative flex items-center justify-center overflow-hidden ">
      <div className="grid w-full  lg:gap-12 lg:grid-cols-2 max-w-7xl  px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <section className="hidden rounded-4xl border border-base-300 bg-base-100/90 p-10 shadow-2xl backdrop-blur-xl lg:flex lg:flex-col lg:justify-between">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200 px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-success" />
              Build smarter workflows
            </div>

            <div className="space-y-4 ">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-base-content/50">
                FormZen
              </p>

              <h1 className="text-5xl font-bold leading-tight">
                Create forms, collect responses, and manage everything in one
                workspace.
              </h1>

              <p className="max-w-lg text-lg leading-8 text-base-content/70">
                Join teams using FormZen to simplify approvals, automate
                workflows, and manage submissions efficiently.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 my-auto">
            <div className="rounded-2xl border border-base-300 bg-base-200 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-base-content/45">
                Collaboration
              </p>

              <h3 className="mt-3 text-3xl font-bold">Teams</h3>

              <p className="mt-2 text-sm leading-6 text-base-content/65">
                Collaborate across forms, approvals, and submissions from one
                dashboard.
              </p>
            </div>

            <div className="rounded-2xl border border-base-300 bg-base-200 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-base-content/45">
                Productivity
              </p>

              <h3 className="mt-3 text-3xl font-bold">Faster</h3>

              <p className="mt-2 text-sm leading-6 text-base-content/65">
                Reduce manual work and organize workflows with a clean modern
                system.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-4xl border border-base-300 bg-base-100/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-base-content/50">
              Get Started
            </p>

            <h2 className="text-3xl font-bold">Create your FormZen account</h2>

            <p className="text-base-content/65">
              Sign up and start building forms in minutes.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {providerOptions.map((provider) => {
              const Icon = provider.icon;

              return (
                <button
                  key={provider.name}
                  type="button"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-4 transition hover:border-primary hover:bg-base-200"
                >
                  <Icon className="text-xl" />

                  <span className="font-medium">{provider.name}</span>
                </button>
              );
            })}
          </div>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-base-300" />

            <span className="text-sm uppercase tracking-[0.24em] text-base-content/45">
              Or continue with email
            </span>

            <div className="h-px flex-1 bg-base-300" />
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-base-300 bg-base-100 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="w-full rounded-2xl border border-base-300 bg-base-100 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className={`${inputClassName} ${borderClassName}`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((currentValue) => !currentValue)
                  }
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 right-3 flex items-center text-base-content/50 transition hover:text-base-content"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  className={`${inputClassName} ${borderClassName}`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((currentValue) => !currentValue)
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  aria-pressed={showConfirmPassword}
                  className="absolute inset-y-0 right-3 flex items-center text-base-content/50 transition hover:text-base-content"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              
            </div>

            <button
              type="submit"
              className="btn btn-primary h-13 w-full rounded-2xl text-base font-semibold"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-base-content/65">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary">
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

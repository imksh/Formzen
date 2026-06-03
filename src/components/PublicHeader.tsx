"use client";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { useState } from "react";

const navLinks = [
  {
    label: "Features",
    href: "#features",
  },

  {
    label: "Pricing",
    href: "#pricing",
  },

  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function PublicHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-4 lg:px-6">
      <div className="bg-base-100 rounded-b-4xl pt-3 sm:pt-4 mx-auto max-w-7xl">
        <div className="glass-panel mx-auto max-w-7xl rounded-4xl border border-base-300/30 bg-base-100/80 shadow-2xl shadow-black/10 backdrop-blur-xl">
          <div className="flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/landing" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-lg font-black text-primary-content shadow-lg shadow-primary/25 transition duration-200 group-hover:-translate-y-0.5">
                F
              </div>

              <div className="block">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold tracking-tight text-base-content">
                    FormZen
                  </h1>
                </div>

                <p className="text-xs text-base-content/55">
                  Form workflow platform
                </p>
              </div>
            </Link>

            <nav className="hidden items-center px-2 py-2 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-base-content/70 transition hover:bg-base-100 hover:text-base-content"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/login"
                className="btn btn-ghost btn-sm rounded-full border border-base-300 bg-base-100/70 px-5 text-base-content/80 hover:border-primary/40 hover:bg-base-100"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-primary btn-sm rounded-full px-5 shadow-lg shadow-primary/20"
              >
                Get Started
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((currentValue) => !currentValue)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="btn btn-ghost btn-square rounded-2xl border border-base-300 bg-base-100/80 md:hidden"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {isOpen ? (
            <div className="border-t border-base-300 px-4 py-4 md:hidden">
              <div className="rounded-3xl border border-base-300 bg-base-200/60 p-3 shadow-lg shadow-black/5">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-base-content/80 transition hover:bg-base-100"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="text-base-content/35">/</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <Link
                    href="/login"
                    className="btn btn-ghost rounded-2xl border border-base-300/30 bg-base-100/70 text-base-content/80"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="btn btn-primary rounded-2xl shadow-lg shadow-primary/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

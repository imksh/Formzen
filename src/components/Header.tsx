"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Templates",
      href: "/templates",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-base-300/80  backdrop-blur-xl bg-primary ">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-content">
            F
          </div>

          <div>
            <h1 className="text-lg font-bold text-base-content">Formzen</h1>

            <p className="text-xs text-base-content/60">Smart Form Builder</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-base-content/70 transition hover:text-base-content"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          
          <Link
            href="/login"
            className="btn btn-outline btn-sm border-base-300"
          >
            Login
          </Link>

          <Link href="/register" className="btn btn-primary btn-sm">
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
         
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-base-content transition hover:bg-base-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-base-300 bg-base-100/95 md:hidden">
          <div className="flex flex-col gap-2 px-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base-content/70 transition hover:bg-base-200 hover:text-base-content "
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3">
             
              <Link
                href="/login"
                className="btn btn-outline btn-sm w-full border-base-300"
              >
                Login
              </Link>

              <Link href="/register" className="btn btn-primary btn-sm w-full">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

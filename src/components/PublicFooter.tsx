import Link from "next/link";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  Product: [
    {
      label: "Features",
      href: "#features",
    },

    {
      label: "Pricing",
      href: "#pricing",
    },

    {
      label: "Integrations",
      href: "#",
    },
  ],

  Company: [
    {
      label: "About",
      href: "#",
    },

    {
      label: "Contact",
      href: "#",
    },

    {
      label: "Careers",
      href: "#",
    },
  ],

  Resources: [
    {
      label: "Documentation",
      href: "#",
    },

    {
      label: "Help Center",
      href: "#",
    },

    {
      label: "Privacy Policy",
      href: "#",
    },
  ],
};

export default function PublicFooter() {
  return (
    <footer className="border-t border-base-300/30 bg-base-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* brand */}
          <div className="space-y-5">
            <Link href="/landing" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-black text-primary-content">
                F
              </div>

              <div>
                <h2 className="text-xl font-bold">FormZen</h2>

                <p className="text-sm text-base-content/55">
                  Modern form workflow platform
                </p>
              </div>
            </Link>

            <p className="max-w-md leading-7 text-base-content/65">
              Build forms, collect responses, manage approvals, and streamline
              workflows from one modern platform.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-300 transition hover:bg-base-200"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-300 transition hover:bg-base-200"
              >
                <FaLinkedin size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-300 transition hover:bg-base-200"
              >
                <FaXTwitter size={18} />
              </Link>
            </div>
          </div>

          {/* links */}
          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-content/45">
                  {title}
                </h3>

                <div className="space-y-3">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-sm text-base-content/65 transition hover:text-base-content"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-base-300/30 pt-6 text-sm text-base-content/50 sm:flex-row">
          <p>© {new Date().getFullYear()} FormZen. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link href="#" className="transition hover:text-base-content">
              Terms
            </Link>

            <Link href="#" className="transition hover:text-base-content">
              Privacy
            </Link>

            <Link href="#" className="transition hover:text-base-content">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

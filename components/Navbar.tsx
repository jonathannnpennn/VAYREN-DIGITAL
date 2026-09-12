"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["WORK", "/portfolio"],
  ["SERVICES", "/services"],
  ["ABOUT", "/about"],
  ["PRICING", "/pricing"],
  ["CONTACT", "/contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#191919] bg-black/70 backdrop-blur-xl">
      <div className="container flex h-[74px] items-center justify-between">
        <Link
          href="/"
          className="font-bold tracking-[-.04em] text-lg"
          onClick={() => setOpen(false)}
        >
          VAYREN<span className="text-neutral-500"> DIGITAL</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="eyebrow hover:text-white">
              {label}
            </Link>
          ))}
          <Link className="btn btn-solid ml-2" href="/contact">
            START A PROJECT <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="space-y-5 border-t border-[#191919] bg-black px-5 py-6 md:hidden">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block eyebrow"
            >
              {label}
            </Link>
          ))}
          <Link
            onClick={() => setOpen(false)}
            className="btn btn-solid"
            href="/contact"
          >
            START A PROJECT
          </Link>
        </nav>
      )}
    </header>
  );
}

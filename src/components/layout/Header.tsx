"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bird } from "lucide-react";
import { NAV_LINKS } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group" aria-label="The Aviary Guide home">
            <motion.div
              whileHover={{ rotate: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Bird className="w-8 h-8 text-forest" aria-hidden="true" />
            </motion.div>
            <span className="font-serif text-xl md:text-2xl text-forest font-bold tracking-tight">
              The Aviary Guide
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-espresso/80 hover:text-forest font-medium transition-colors text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/find-your-bird" className="hidden sm:inline-flex stamp-button text-sm">
              Find Your Bird ♥
            </Link>
            <button
              className="md:hidden p-2 text-forest"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-cream border-b border-espresso/10"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-espresso/80 hover:text-forest font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/find-your-bird"
                className="block py-2 text-terracotta font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Find Your Bird ♥
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

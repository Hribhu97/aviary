"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BotanicalAccent from "@/components/ui/BotanicalAccent";

export default function Hero() {
  return (
    <section className="relative section-padding overflow-hidden">
      <BotanicalAccent className="absolute top-8 right-8 md:top-16 md:right-16" />
      <BotanicalAccent className="absolute bottom-8 left-8 md:bottom-16 md:left-16 rotate-45" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-olive font-semibold text-sm uppercase tracking-widest mb-4"
        >
          Welcome to The Aviary Guide
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest leading-tight mb-6"
        >
          Discover your perfect{" "}
          <span className="text-terracotta italic">feathered friend.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-espresso/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          A handcrafted encyclopedia of pet birds — with verified profiles, care guides,
          and everything you need to welcome a bird into your home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/birds" className="stamp-button text-base">
            Explore Bird Profiles
          </Link>
          <Link href="/find-your-bird" className="ghost-button text-base">
            Take the Quiz
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Utensils, Heart, Stethoscope } from "lucide-react";
import { Bird } from "@/lib/types";
import { CARE_BASICS } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="w-6 h-6" />,
  utensils: <Utensils className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  stethoscope: <Stethoscope className="w-6 h-6" />,
};

export default function FeatureSplit({ featuredBird }: { featuredBird: Bird }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Featured Bird */}
      <div className="bg-cream section-padding flex flex-col justify-center">
        <p className="text-olive text-sm uppercase tracking-widest font-semibold mb-2">
          Featured Bird of the Week
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4">
          {featuredBird.name}
        </h2>
        <p className="text-espresso/70 italic mb-2">{featuredBird.scientificName}</p>
        <p className="text-espresso/80 leading-relaxed mb-6 max-w-md">
          {featuredBird.description}
        </p>
        <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6">
          <Image
            src={featuredBird.heroImage}
            alt={`${featuredBird.name} — featured bird`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <Link
          href={`/birds/${featuredBird.slug}`}
          className="ghost-button self-start"
        >
          View Full Profile →
        </Link>
      </div>

      {/* Care Basics */}
      <div className="bg-forest section-padding text-cream">
        <h2 className="font-serif text-3xl md:text-4xl mb-2">Bird Care Basics</h2>
        <p className="text-cream/70 mb-8 max-w-md">
          Essential knowledge every bird owner should have before bringing home a new companion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CARE_BASICS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-forest-light/50 rounded-xl p-5 border border-cream/10"
            >
              <div className="text-terracotta-light mb-3" aria-hidden="true">
                {iconMap[item.icon]}
              </div>
              <h3 className="font-serif text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-cream/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <Link href="/care" className="inline-block mt-8 text-terracotta-light hover:text-cream transition-colors font-semibold">
          Read Full Care Guide →
        </Link>
      </div>
    </section>
  );
}

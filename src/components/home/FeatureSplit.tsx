"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Bird } from "@/lib/types";

export default function FeatureSplit({ featuredBird }: { featuredBird: Bird }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full">
      {/* Featured Bird Column */}
      <div className="bg-cream px-[19px] py-[96px] flex flex-col justify-center">
        <div className="max-w-xl">
          <p className="text-olive text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2">
            Featured Bird of the Week
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-medium tracking-tight mb-2">
            {featuredBird.name}
          </h2>
          <p className="font-serif italic text-espresso/70 text-sm mb-4">
            {featuredBird.scientificName}
          </p>
          <p className="text-espresso/80 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            {featuredBird.description}
          </p>

          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-md mb-8">
            <Image
              src={featuredBird.heroImage}
              alt={`${featuredBird.name} — featured bird`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              priority
            />
          </div>

          <div>
            <Link
              href={`/birds/${featuredBird.slug}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-forest/80 text-forest text-sm font-medium hover:bg-forest hover:text-cream transition-all duration-200"
            >
              View Full Profile →
            </Link>
          </div>
        </div>
      </div>

      {/* Care Basics Column */}
      <div className="bg-forest px-[19px] py-[96px] text-cream flex flex-col justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream font-medium tracking-tight mb-3">
            Bird Care Basics
          </h2>
          <p className="text-cream/75 text-sm sm:text-base max-w-md leading-relaxed">
            Essential knowledge every bird owner should have before bringing home a new companion.
          </p>
        </div>

        <div className="pt-24 lg:pt-32">
          <Link
            href="/care"
            className="inline-flex items-center gap-2 text-terracotta-light hover:text-cream transition-colors text-sm sm:text-base font-medium group"
          >
            <span>Read Full Care Guide</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

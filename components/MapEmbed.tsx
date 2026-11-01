"use client";

import { useState } from "react";
import { Navigation } from "lucide-react";
import { business } from "@/content/business";

export function MapEmbed({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const { maps, address } = business;

  return (
    <div className={className}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-oat sm:aspect-[16/10]">
        {loaded ? (
          <iframe
            src={maps.embedUrl}
            title={maps.embedTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <>
            <svg
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
              className="absolute inset-0 size-full"
            >
              <rect width="400" height="300" className="fill-oat" />
              <g className="stroke-oat-2" strokeWidth="14" fill="none" strokeLinecap="round">
                <path d="M-10 90 C 90 70, 160 130, 410 100" />
                <path d="M120 -10 C 140 90, 110 190, 150 310" />
                <path d="M-10 230 C 120 200, 250 260, 410 220" />
                <path d="M280 -10 C 260 80, 300 170, 270 310" />
              </g>
              <g className="stroke-line" strokeWidth="5" fill="none" strokeLinecap="round">
                <path d="M-10 160 L 410 170" />
                <path d="M200 -10 L 215 310" />
              </g>
              <circle cx="200" cy="150" r="26" className="fill-clay/15" />
              <circle cx="200" cy="150" r="9" className="fill-clay-deep" />
              <circle cx="200" cy="150" r="3.5" className="fill-snow" />
            </svg>
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 bg-gradient-to-t from-snow/90 to-transparent p-4 pt-10 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-sm text-ink-2">{address.landmark}</p>
              <button
                type="button"
                onClick={() => setLoaded(true)}
                className="tap rounded-full bg-ink px-5 text-sm font-semibold text-snow hover:bg-ink-2"
              >
                Haritayı yükle
              </button>
            </div>
          </>
        )}
      </div>
      <a
        href={maps.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="tap mt-3 inline-flex items-center gap-2 font-semibold text-clay-deep underline-offset-4 hover:underline"
      >
        <Navigation className="size-4" aria-hidden="true" />
        Yol tarifi al
      </a>
    </div>
  );
}

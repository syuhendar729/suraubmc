"use client";
// File: src/app/program/baitul-tarbiyah/bmc-university/ImageGallery.tsx
// Galeri gambar di sisi kiri halaman detail kelas — gambar utama + panah kiri/kanan
// buat geser slide, plus indikator titik & thumbnail di bawahnya.

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-white">
        <Image
          src={images[index]}
          alt={`${alt} - gambar ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Gambar sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-surau-blue w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Gambar berikutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-surau-blue w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {index + 1}/{images.length}
            </span>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Lihat gambar ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-surau-blue" : "w-2 bg-surau-blue/20 hover:bg-surau-blue/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

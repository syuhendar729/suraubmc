"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <nav className="bg-surau-dark-green p-4 px-6 md:p-6 md:px-12 lg:px-20 border-b border-surau-light-green/30">
      <div className="flex items-center justify-between">
        {/* Bagian Kiri: Logo dan Nama */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-white/10 rounded-md shadow-xl">
            <Image 
              src="/logo.jpeg" 
              alt="Logo Surau BMC" 
              width={40} 
              height={40} 
              className="w-10 h-10 object-contain rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-surau-cream leading-tight">Surau BMC</span>
            <span className="text-xs text-surau-cream/80">Berkah Madani Center</span>
          </div>
        </Link>

        {/* Bagian Tengah: Menu Navigasi */}
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className="text-surau-cream font-medium hover:text-surau-yellow transition-colors">
              Beranda
            </Link>
          </li>

          {/* Menu About dengan Dropdown (Klik) */}
          <li className="relative">
            <button 
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="text-surau-cream flex items-center gap-2 font-medium hover:text-surau-yellow transition-colors relative z-50"
            >
              Tentang <span>{isAboutOpen ? '▴' : '▾'}</span>
            </button>
            
            {isAboutOpen && (
              <>
                {/* INVISIBLE OVERLAY */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsAboutOpen(false)}
                ></div>

                {/* KONTEN DROPDOWN */}
                <ul className="absolute top-full left-0 mt-2 bg-surau-dark-green border border-surau-light-green/30 rounded-md shadow-2xl z-50 p-3 min-w-[180px]">
                  <li>
                    <Link href="/about/history" onClick={() => setIsAboutOpen(false)} className="block w-full text-left p-2 rounded-md text-surau-cream hover:bg-white/10 transition-colors">
                      Sejarah
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/vision-mision" onClick={() => setIsAboutOpen(false)} className="block w-full text-left p-2 rounded-md text-surau-cream hover:bg-white/10 transition-colors">
                      Visi dan Misi
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/location" onClick={() => setIsAboutOpen(false)} className="block w-full text-left p-2 rounded-md text-surau-cream hover:bg-white/10 transition-colors">
                      Lokasi
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/five-pillars" onClick={() => setIsAboutOpen(false)} className="block w-full text-left p-2 rounded-md text-surau-cream hover:bg-white/10 transition-colors">
                      Lima Pilar
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/six-values" onClick={() => setIsAboutOpen(false)} className="block w-full text-left p-2 rounded-md text-surau-cream hover:bg-white/10 transition-colors">
                      Enam Nilai
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </li>

          <li>
            <Link href="/contact" className="text-surau-cream font-medium hover:text-surau-yellow transition-colors">
              Kontak
            </Link>
          </li>
          <li>
            <Link href="/article" className="text-surau-cream font-medium hover:text-surau-yellow transition-colors">
              Artikel
            </Link>
          </li>
          <li>
            <Link href="/donation" className="text-surau-cream font-medium hover:text-surau-yellow transition-colors">
              Donasi
            </Link>
          </li>
        </ul>

        {/* Bagian Kanan: Tombol */}
        <button className="bg-surau-yellow hover:bg-yellow-400 text-surau-dark-green font-bold px-8 py-3 rounded-full text-lg transition-colors">
          Gabung Sekarang
        </button>
      </div>
    </nav>
  );
}
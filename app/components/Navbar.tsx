// File: src/app/components/Navbar.tsx

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { programData } from '../(public)/data/programData';

export default function Navbar() {
  // State untuk dropdown menu di desktop & mobile
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  
  // State khusus untuk Hamburger Menu di Mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi untuk menutup menu mobile setelah link diklik
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
    setIsProgramOpen(false); // Tutup dropdown 'Program' juga
  };

  return (
    <nav className="bg-surau-blue p-4 px-6 md:p-6 md:px-12 lg:px-20 border-b border-white/20 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between">
        
        {/* Bagian Kiri: Logo */}
        <Link href="/" className="flex items-center z-50 bg-white rounded-xl px-3 py-1 shadow-md">
          <Image
            src="/logo2.png"
            alt="Logo Surau Berkah Madani Center"
            width={847}
            height={295}
            className="h-14 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* --- MENU DESKTOP --- */}
        {/* Menggunakan "hidden md:flex" agar menu ini hilang di HP dan muncul di Tablet/Desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          <li>
            <Link href="/" className="text-white font-medium hover:text-surau-new-yellow transition-colors">
              Beranda
            </Link>
          </li>

          {/* Menu About dengan Dropdown (Desktop) — hover langsung terbuka */}
          <li className="relative group">
            <Link
              href="/about"
              className="text-white flex items-center gap-1.5 font-medium hover:text-surau-new-yellow transition-colors relative z-50 cursor-pointer py-2"
            >
              Tentang
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 pt-3 hidden group-hover:block z-50 w-max">
              <div className="h-0.5 w-8 bg-surau-new-yellow rounded-full mb-3" />
              <ul className="bg-white rounded-2xl shadow-2xl border border-black/5 p-3 min-w-[200px]">
                <li><Link href="/about#sejarah" className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-surau-blue/10 hover:text-surau-blue transition-colors">Sejarah</Link></li>
                <li><Link href="/about#visi-misi" className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-surau-blue/10 hover:text-surau-blue transition-colors">Visi dan Misi</Link></li>
                <li><Link href="/about#lima-pilar" className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-surau-blue/10 hover:text-surau-blue transition-colors">Lima Pilar</Link></li>
                <li><Link href="/about#enam-nilai" className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-surau-blue/10 hover:text-surau-blue transition-colors">Enam Nilai</Link></li>
                <li><Link href="/about#lokasi" className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-surau-blue/10 hover:text-surau-blue transition-colors">Lokasi</Link></li>
              </ul>
            </div>
          </li>

          {/* Menu Program dengan Dropdown (Desktop) — hover langsung terbuka */}
          <li className="relative group">
            <Link
              href="/program"
              className="text-white flex items-center gap-1.5 font-medium hover:text-surau-new-yellow transition-colors relative z-50 cursor-pointer py-2"
            >
              Program
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 pt-3 hidden group-hover:block z-50 w-max">
              <div className="h-0.5 w-8 bg-surau-new-yellow rounded-full mb-3" />
              <ul className="bg-white rounded-2xl shadow-2xl border border-black/5 p-3 min-w-[220px]">
                {/* --- LIST DROPDOWN PROGRAM (mengikuti 4 pilar Panca Baitul), tiap pilar punya drop-right berisi programnya --- */}
                {programData.map((baitul) => (
                  <li key={baitul.id} className="relative group/baitul">
                    <Link
                      href={`/program#${baitul.id}`}
                      className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-surau-blue/10 hover:text-surau-blue transition-colors"
                    >
                      {baitul.header.title}
                      <svg className="w-4 h-4 text-slate-400 shrink-0 group-hover/baitul:text-surau-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    {/* Drop-right: daftar program di dalam pilar ini */}
                    <div className="absolute top-0 left-full pl-3 hidden group-hover/baitul:block">
                      <ul className="bg-white rounded-2xl shadow-2xl border border-black/5 p-3 min-w-[240px]">
                        {baitul.programs.map((program) => {
                          const isExternal = program.link?.startsWith('http');
                          const itemClass = "block px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-surau-blue/10 hover:text-surau-blue transition-colors";
                          return (
                            <li key={program.id}>
                              {isExternal ? (
                                <a href={program.link} target="_blank" rel="noopener noreferrer" className={itemClass}>
                                  {program.title}
                                </a>
                              ) : (
                                <Link href={program.link || `/program#${baitul.id}`} className={itemClass}>
                                  {program.title}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li><Link href="/contact" className="text-white font-medium hover:text-surau-new-yellow transition-colors">Kontak</Link></li>
          <li><Link href="/article" className="text-white font-medium hover:text-surau-new-yellow transition-colors">Artikel</Link></li>
        </ul>

        {/* Tombol Gabung (Desktop) */}
        <button className="hidden md:block bg-surau-new-yellow hover:bg-yellow-400 text-surau-blue font-bold px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-lg transition-transform hover:-translate-y-1 shadow-md">
          Donasi
        </button>

        {/* --- TOMBOL HAMBURGER (KHUSUS MOBILE) --- */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none z-50"
        >
          {isMobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* --- MENU DROPDOWN MOBILE --- */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surau-blue border-t border-white/20 shadow-2xl md:hidden flex flex-col pt-2 pb-6 px-6 gap-4">
          <Link href="/" onClick={closeMobileMenu} className="text-white font-medium block py-2 border-b border-white/10">Beranda</Link>
          
          {/* Menu About Mobile (Akordion) */}
          <div className="flex flex-col border-b border-white/10 pb-2">
            <button 
              onClick={() => setIsAboutOpen(!isAboutOpen)} 
              className="text-white font-medium flex items-center justify-between w-full py-2"
            >
              Tentang <span>{isAboutOpen ? '▴' : '▾'}</span>
            </button>
            
            {isAboutOpen && (
              <div className="flex flex-col pl-4 mt-2 gap-3 border-l-2 border-white/20">
                <Link href="/about#sejarah" onClick={closeMobileMenu} className="text-white/80 hover:text-surau-new-yellow text-sm">Sejarah</Link>
                <Link href="/about#visi-misi" onClick={closeMobileMenu} className="text-white/80 hover:text-surau-new-yellow text-sm">Visi dan Misi</Link>
                <Link href="/about#lima-pilar" onClick={closeMobileMenu} className="text-white/80 hover:text-surau-new-yellow text-sm">Lima Pilar</Link>
                <Link href="/about#enam-nilai" onClick={closeMobileMenu} className="text-white/80 hover:text-surau-new-yellow text-sm">Enam Nilai</Link>
                <Link href="/about#lokasi" onClick={closeMobileMenu} className="text-white/80 hover:text-surau-new-yellow text-sm">Lokasi</Link>
              </div>
            )}
          </div>

          {/* Menu Program Mobile (Akordion) */}
          <div className="flex flex-col border-b border-white/10 pb-2">
            <button 
              onClick={() => setIsProgramOpen(!isProgramOpen)} 
              className="text-white font-medium flex items-center justify-between w-full py-2"
            >
              Program <span>{isProgramOpen ? '▴' : '▾'}</span>
            </button>
            
            {isProgramOpen && (
              <div className="flex flex-col mt-2 gap-1 border-l-2 border-white/20 pl-4">
                {/* --- LIST DROPDOWN PROGRAM (mengikuti 4 pilar Panca Baitul), tiap pilar bisa dibuka lagi untuk lihat programnya --- */}
                {programData.map((baitul) => (
                  <details key={baitul.id} className="group/baitul">
                    <summary className="flex items-center justify-between gap-2 py-2 text-white/80 hover:text-surau-new-yellow text-sm cursor-pointer list-none">
                      <Link href={`/program#${baitul.id}`} onClick={closeMobileMenu}>
                        {baitul.header.title}
                      </Link>
                      <svg className="w-3.5 h-3.5 transition-transform duration-200 group-open/baitul:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </summary>
                    <div className="flex flex-col pl-4 pb-2 gap-2 border-l-2 border-white/10">
                      {baitul.programs.map((program) => {
                        const isExternal = program.link?.startsWith('http');
                        return isExternal ? (
                          <a key={program.id} href={program.link} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="text-white/70 hover:text-surau-new-yellow text-xs">
                            {program.title}
                          </a>
                        ) : (
                          <Link key={program.id} href={program.link || `/program#${baitul.id}`} onClick={closeMobileMenu} className="text-white/70 hover:text-surau-new-yellow text-xs">
                            {program.title}
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" onClick={closeMobileMenu} className="text-white font-medium block py-2 border-b border-white/10">Kontak</Link>
          <Link href="/article" onClick={closeMobileMenu} className="text-white font-medium block py-2 border-b border-white/10">Artikel</Link>
          
          {/* Tombol Gabung Mobile */}
          <button onClick={closeMobileMenu} className="mt-4 bg-surau-new-yellow hover:bg-yellow-400 text-surau-blue font-bold px-8 py-3 rounded-full text-base transition-transform hover:-translate-y-1 shadow-md w-full">
            Donasi
          </button>
        </div>
      )}
    </nav>
  );
}
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  // State untuk dropdown "Tentang" di desktop & mobile
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  // State khusus untuk Hamburger Menu di Mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi untuk menutup menu mobile setelah link diklik
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false); // Tutup dropdown 'Tentang' juga
  };

  return (
    <nav className="bg-surau-dark-green p-4 px-6 md:p-6 md:px-12 lg:px-20 border-b border-surau-light-green/30 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        
        {/* Bagian Kiri: Logo dan Nama */}
        <Link href="/" className="flex items-center gap-3 z-50">
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
            <span className="text-xl md:text-2xl font-bold text-surau-cream leading-tight">Surau BMC</span>
            <span className="text-[10px] md:text-xs text-surau-cream/80">Berkah Madani Center</span>
          </div>
        </Link>

        {/* --- MENU DESKTOP --- */}
        {/* Menggunakan "hidden md:flex" agar menu ini hilang di HP dan muncul di Tablet/Desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          <li>
            <Link href="/" className="text-surau-cream font-medium hover:text-surau-yellow transition-colors">
              Beranda
            </Link>
          </li>

          {/* Menu About dengan Dropdown (Desktop) */}
          <li className="relative">
            <button 
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="text-surau-cream flex items-center gap-2 font-medium hover:text-surau-yellow transition-colors relative z-50"
            >
              Tentang <span>{isAboutOpen ? '▴' : '▾'}</span>
            </button>
            
            {isAboutOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsAboutOpen(false)}></div>
                <ul className="absolute top-full left-0 mt-2 bg-surau-dark-green border border-surau-light-green/30 rounded-md shadow-2xl z-50 p-3 min-w-[180px]">
                  <li><Link href="/about/history" onClick={() => setIsAboutOpen(false)} className="block w-full text-left p-2 rounded-md text-surau-cream hover:bg-white/10 transition-colors">Sejarah</Link></li>
                  <li><Link href="/about/vision-mision" onClick={() => setIsAboutOpen(false)} className="block w-full text-left p-2 rounded-md text-surau-cream hover:bg-white/10 transition-colors">Visi dan Misi</Link></li>
                  <li><Link href="/about/location" onClick={() => setIsAboutOpen(false)} className="block w-full text-left p-2 rounded-md text-surau-cream hover:bg-white/10 transition-colors">Lokasi</Link></li>
                  <li><Link href="/about/five-pillars" onClick={() => setIsAboutOpen(false)} className="block w-full text-left p-2 rounded-md text-surau-cream hover:bg-white/10 transition-colors">Lima Pilar</Link></li>
                  <li><Link href="/about/six-values" onClick={() => setIsAboutOpen(false)} className="block w-full text-left p-2 rounded-md text-surau-cream hover:bg-white/10 transition-colors">Enam Nilai</Link></li>
                </ul>
              </>
            )}
          </li>

          <li><Link href="/contact" className="text-surau-cream font-medium hover:text-surau-yellow transition-colors">Kontak</Link></li>
          <li><Link href="/article" className="text-surau-cream font-medium hover:text-surau-yellow transition-colors">Artikel</Link></li>
          <li><Link href="/donation" className="text-surau-cream font-medium hover:text-surau-yellow transition-colors">Donasi</Link></li>
        </ul>

        {/* Tombol Gabung (Desktop) */}
        <button className="hidden md:block bg-surau-yellow hover:bg-yellow-400 text-surau-dark-green font-bold px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-lg transition-colors">
          Gabung Sekarang
        </button>

        {/* --- TOMBOL HAMBURGER (KHUSUS MOBILE) --- */}
        {/* Tombol ini hanya muncul di layar kecil ("md:hidden") */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-surau-cream p-2 focus:outline-none z-50"
        >
          {isMobileMenuOpen ? (
            // Ikon Silang (Tutup)
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            // Ikon Hamburger (Garis Tiga)
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* --- MENU DROPDOWN MOBILE --- */}
      {/* Akan muncul di bawah navbar jika isMobileMenuOpen bernilai true */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surau-dark-green border-t border-surau-light-green/30 shadow-2xl md:hidden flex flex-col pt-2 pb-6 px-6 gap-4">
          <Link href="/" onClick={closeMobileMenu} className="text-surau-cream font-medium block py-2 border-b border-white/5">Beranda</Link>
          
          {/* Menu About Mobile (Akordion) */}
          <div className="flex flex-col border-b border-white/5 pb-2">
            <button 
              onClick={() => setIsAboutOpen(!isAboutOpen)} 
              className="text-surau-cream font-medium flex items-center justify-between w-full py-2"
            >
              Tentang <span>{isAboutOpen ? '▴' : '▾'}</span>
            </button>
            
            {/* Sub-menu Mobile Tentang */}
            {isAboutOpen && (
              <div className="flex flex-col pl-4 mt-2 gap-3 border-l-2 border-surau-light-green/30">
                <Link href="/about/history" onClick={closeMobileMenu} className="text-surau-cream/80 hover:text-surau-yellow text-sm">Sejarah</Link>
                <Link href="/about/vision-mision" onClick={closeMobileMenu} className="text-surau-cream/80 hover:text-surau-yellow text-sm">Visi dan Misi</Link>
                <Link href="/about/location" onClick={closeMobileMenu} className="text-surau-cream/80 hover:text-surau-yellow text-sm">Lokasi</Link>
                <Link href="/about/five-pillars" onClick={closeMobileMenu} className="text-surau-cream/80 hover:text-surau-yellow text-sm">Lima Pilar</Link>
                <Link href="/about/six-values" onClick={closeMobileMenu} className="text-surau-cream/80 hover:text-surau-yellow text-sm">Enam Nilai</Link>
              </div>
            )}
          </div>

          <Link href="/contact" onClick={closeMobileMenu} className="text-surau-cream font-medium block py-2 border-b border-white/5">Kontak</Link>
          <Link href="/article" onClick={closeMobileMenu} className="text-surau-cream font-medium block py-2 border-b border-white/5">Artikel</Link>
          <Link href="/donation" onClick={closeMobileMenu} className="text-surau-cream font-medium block py-2 border-b border-white/5">Donasi</Link>
          
          {/* Tombol Gabung Mobile */}
          <button onClick={closeMobileMenu} className="mt-4 bg-surau-yellow hover:bg-yellow-400 text-surau-dark-green font-bold px-8 py-3 rounded-full text-base transition-colors w-full">
            Gabung Sekarang
          </button>
        </div>
      )}
    </nav>
  );
}
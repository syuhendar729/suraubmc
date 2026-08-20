// File: src/app/contact/page.tsx

import Image from 'next/image';
import Link from 'next/link';

import { contactData } from '../data/contactData';

export default function ContactPage() {
  // Data dummy untuk tautan kontak

  return (
    <div className="min-h-screen bg-surau-cream pb-24">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden shadow-lg">
        <Image 
          src="/history.jpg" 
          alt="Kontak Surau BMC" 
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gelap agar estetis */}
        <div className="absolute inset-0 bg-surau-dark-green/70"></div>
        
        <div className="relative z-10 text-center px-4">
          <span className="text-surau-yellow font-bold tracking-widest text-sm md:text-base uppercase mb-3 block">
            — Mari Terhubung
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Hubungi Kami
          </h1>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 pt-16 md:pt-20">
        
        {/* Judul Bagian Sesuai Wireframe */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-surau-dark-green relative inline-block">
            Kontak
            <div className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-surau-yellow rounded-full"></div>
          </h2>
        </div>

        {/* --- GRID TOMBOL KONTAK --- */}
        <div className="flex flex-col gap-6">
          
          {/* Baris 1: WhatsApp & Instagram (Dua Kolom di Desktop, Satu Kolom di Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kartu WhatsApp */}
            <a 
              href={contactData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="bg-[#25D366]/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#25D366] transition-colors">WhatsApp</h3>
                <p className="text-gray-500 text-sm mt-1">Hubungi admin kami</p>
              </div>
            </a>

            {/* Kartu Instagram */}
            <a 
              href={contactData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="bg-[#E1306C]/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E1306C] transition-colors">Instagram</h3>
                <p className="text-gray-500 text-sm mt-1">Ikuti update terbaru</p>
              </div>
            </a>

          </div>

          {/* Baris 2: Daftar Jadi Santri / Volunteer */}
          <Link 
            href={contactData.volunteer}
            className="group bg-surau-dark-green rounded-3xl p-6 md:p-8 flex items-center justify-between gap-4 shadow-lg hover:shadow-2xl hover:bg-[#525d3b] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-surau-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">Daftar Jadi Santri / Volunteer</h3>
                <p className="text-surau-cream/80 text-sm md:text-base mt-1">Bergabung dan berikan dampak positif bersama kami</p>
              </div>
            </div>
            {/* Panah Kanan */}
            <div className="bg-surau-yellow text-surau-dark-green w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:translate-x-2 transition-transform">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </div>
          </Link>

          {/* Baris 3: Ajak Masjidmu Go-Digital */}
          <Link 
            href={contactData.goDigital}
            className="group bg-surau-yellow rounded-3xl p-6 md:p-8 flex items-center justify-between gap-4 shadow-lg hover:shadow-2xl hover:bg-[#eab308] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              <div className="bg-surau-dark-green/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-surau-dark-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-surau-dark-green tracking-wide">Ajak Masjidmu Go-Digital</h3>
                <p className="text-surau-dark-green/80 text-sm md:text-base mt-1">Berkolaborasi bersama Sentra Masjid Indonesia</p>
              </div>
            </div>
            {/* Panah Kanan */}
            <div className="bg-surau-dark-green text-surau-yellow w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:translate-x-2 transition-transform">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}
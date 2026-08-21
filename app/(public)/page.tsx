// File: src/app/page.tsx

"use client";

import { useState } from 'react';
import { homeData } from './data/homeData'; // Pastikan path import ini sesuai (pakai @/ atau ./)
import Link from 'next/link';
import Image from 'next/image';

// --- Komponen Ikon Sederhana ---
const RenderIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'social':
      return <svg className="w-16 h-16 text-rose-500 mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>;
    case 'education':
      return <svg className="w-16 h-16 text-amber-500 mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>;
    case 'dakwah':
      return <svg className="w-16 h-16 text-sky-500 mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"/></svg>;
    default:
      return null;
  }
};

export default function HomePage() {
  // Ambil semua data dari homeData.ts
  const { heroLeft, heroRight, programs, ourPrograms, campaigns } = homeData;
  
  // State untuk melacak filter kategori program
  const [activeCategory, setActiveCategory] = useState('semua');

  // Logika filter khusus untuk section Program Kami (mengambil dari ourPrograms.items)
  const displayedPrograms = activeCategory === 'semua' 
    ? ourPrograms.items 
    : ourPrograms.items.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen pt-12 pb-24">
      
      {/* --- 1. BAGIAN ATAS (Hero Section) --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-surau-blue rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg">
            <div className="flex flex-col items-start w-full md:w-1/2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
                {heroLeft.title}
              </h1>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                {heroLeft.description}
              </p>
              <Link href={heroLeft.buttonLink} className="bg-surau-new-yellow hover:bg-yellow-400 text-surau-blue font-bold px-6 py-3 rounded-full text-sm transition-transform hover:-translate-y-1 shadow-md">
                {heroLeft.buttonText}
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
              <Image src={heroLeft.image} alt="Kegiatan Surau BMC" fill className="object-cover" priority />
            </div>
          </div>

          <div className="lg:col-span-1 bg-[#22c55e] rounded-3xl p-8 md:p-10 flex flex-col justify-center items-center text-center shadow-lg h-full">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">
              {heroRight.title}
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
              {heroRight.description}
            </p>
            <Link href={heroRight.buttonLink} className="bg-surau-new-yellow hover:bg-yellow-400 text-surau-blue font-bold px-6 py-3 rounded-full text-sm transition-transform hover:-translate-y-1 shadow-md">
              {heroRight.buttonText}
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. BAGIAN TENGAH (3 Amal Section) --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 w-full mt-16 md:mt-24 z-10 bg-transparent">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-stretch">
          <div className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {programs.title}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              {programs.description}
            </p>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {programs.items.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
                <RenderIcon name={item.iconName} />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SECTION PROGRAM KAMI (Sidebar Filter, TANPA Tombol Donasi) --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 w-full mt-24 z-10">
        
        {/* Header Program Kami (Dinamis dari data) */}
        <div className="flex flex-row justify-between items-end mb-8 md:mb-10 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">{ourPrograms.title}</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">{ourPrograms.description}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* KOLOM KIRI: Sidebar Filter */}
          <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-3 lg:sticky lg:top-24">
            {ourPrograms.filters.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-surau-blue text-white border-surau-blue shadow-md scale-[1.02]' 
                      : 'bg-white text-gray-800 border-gray-200 hover:border-surau-blue hover:shadow-sm'
                  }`}
                >
                  <h4 className="font-bold text-base">{cat.title}</h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                    {cat.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* KOLOM KANAN: Grid Kartu Program */}
          <div className="w-full lg:w-2/3 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedPrograms.length > 0 ? (
              displayedPrograms.map((program) => (
                <div key={program.id} className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                  <div className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-inner">
                    <Image src={program.image} alt={program.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-surau-blue transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-grow">
                      {program.desc}
                    </p>
                    <Link href={program.link} className="text-surau-blue font-bold text-sm inline-flex items-center gap-1 hover:underline">
                      Pelajari Selengkapnya
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full p-8 text-center text-gray-500">
                Belum ada program di kategori ini.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- 4. SECTION BARU: PROGRAM DONASI (Kartu Mendatar, DENGAN Tombol Donasi) --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 w-full mt-32 z-10">
        
        {/* Header Program Donasi (Dinamis dari data) */}
        <div className="flex flex-row justify-between items-end mb-8 md:mb-10 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">{campaigns.title}</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">{campaigns.description}</p>
          </div>
          <Link href={campaigns.viewAllLink} className="text-surau-blue font-bold hover:underline text-sm md:text-base whitespace-nowrap hidden sm:block">
            {campaigns.viewAllText}
          </Link>
        </div>

        {/* Grid Kartu Program Donasi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {campaigns.items.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-3xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row gap-6 group">
              
              <div className="w-full sm:w-5/12 relative aspect-video sm:aspect-[4/5] rounded-2xl overflow-hidden shrink-0 shadow-inner">
                <Image src={campaign.image} alt={campaign.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-surau-blue text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {campaign.tags[0]}
                </div>
              </div>

              <div className="w-full sm:w-7/12 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-surau-blue transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                    {campaign.description}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between text-xs md:text-sm mb-2">
                    <div className="flex flex-col">
                      <span className="text-gray-500">Terkumpul</span>
                      <span className="text-surau-blue font-bold text-sm md:text-base">{campaign.collected}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-gray-500">Target</span>
                      <span className="text-gray-900 font-semibold">{campaign.target}</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-100 rounded-full h-2 md:h-2.5 mb-5 overflow-hidden">
                    <div className="bg-[#22c55e] h-full rounded-full transition-all duration-1000" style={{ width: `${campaign.progress}%` }}></div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="w-12 h-12 shrink-0 bg-white border border-gray-200 text-gray-400 hover:text-surau-blue rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-surau-blue transition-all">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    <Link href={campaign.link} className="flex-1 block text-center bg-surau-blue hover:bg-[#0f4a99] text-white font-bold py-3 md:py-3.5 rounded-full transition-colors shadow-md text-sm md:text-base">
                      Donasi
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
           <Link href={campaigns.viewAllLink} className="text-surau-blue font-bold hover:underline text-sm">
            {campaigns.viewAllText} →
          </Link>
        </div>

      </section>

    </div>
  );
}
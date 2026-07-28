// File: src/app/page.tsx

import { homeData } from './data/homeData';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const { hero, programs, stats, footerNote } = homeData;

  return (
    <div className="bg-surau-cream relative overflow-hidden flex flex-col min-h-screen">
      
      {/* Efek Cahaya Halus di Latar Belakang */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-surau-light-green/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* --- HERO SECTION --- */}
      <section className="flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8 z-10 min-h-[85vh]">
        <div className="max-w-4xl w-full flex flex-col items-center text-center">
          
          <div className="border border-surau-dark-green/30 rounded-full px-5 py-2 mb-8 bg-white/50">
            <span className="text-[10px] md:text-xs text-surau-dark-green font-bold tracking-[0.2em] uppercase">
              {hero.badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] mb-6">
            {hero.title.line1} <br />
            <span className="text-surau-dark-green">{hero.title.highlight}</span> <br />
            {hero.title.line2}
          </h1>

          <p className="text-gray-700 text-sm md:text-base max-w-2xl leading-relaxed mb-10 font-medium">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <Link href="/about/location" className="bg-surau-dark-green hover:bg-[#525d3b] text-surau-cream font-semibold px-8 py-3 rounded-full transition-all shadow-lg">
              {hero.buttons.primary}
            </Link>
            <Link href="/about/history" className="bg-transparent border-2 border-surau-dark-green text-surau-dark-green hover:bg-surau-dark-green hover:text-surau-cream font-medium px-8 py-3 rounded-full transition-all">
              {hero.buttons.secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* --- PROGRAM UNGGULAN SECTION (BARU) --- */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16 z-10">
        
        {/* Judul Bagian */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-surau-dark-green tracking-tight">
            {programs.title}
          </h2>
        </div>

        {/* Grid Kartu Program */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {programs.items.map((program) => (
            <div key={program.id} className="group flex flex-col gap-4 cursor-pointer">
              
              {/* Kotak Gambar (Rasio Potret) */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src={program.image} 
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay Hitam Gradasi Halus di bawah gambar */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Judul Kegiatan di Bawah Gambar */}
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-surau-dark-green transition-colors text-center md:text-left">
                {program.title}
              </h3>

            </div>
          ))}
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="max-w-5xl w-full mx-auto flex flex-col items-center border-t border-surau-dark-green/20 pt-10 pb-12 mt-auto z-10 px-4">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 divide-x divide-surau-dark-green/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-4 py-6 text-center">
              <span className="text-3xl md:text-4xl font-bold text-surau-dark-green mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-gray-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[10px] md:text-xs text-gray-500 mt-10 text-center">
          {footerNote}
        </p>
      </section>

    </div>
  );
}
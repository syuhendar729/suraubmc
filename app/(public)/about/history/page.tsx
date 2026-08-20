// File: src/app/about/history/page.tsx

import Image from 'next/image';
import { historyData } from '../../data/historyData';

export default function HistoryPage() {
  const { header, image } = historyData;

  return (
    <div className="min-h-screen bg-surau-cream pt-24 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- KOLOM KIRI: TEKS SEJARAH --- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Label Kecil (Warna Kuning) */}
            <span className="text-surau-yellow font-bold tracking-widest text-xs uppercase mb-4 block">
              {header.label}
            </span>
            
            {/* Judul (Warna Hijau Tua) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-surau-dark-green leading-tight mb-8 relative">
              {header.title}
              {/* Garis Aksen Bawah Judul */}
              <div className="absolute -bottom-3 left-0 w-20 h-1.5 bg-surau-yellow rounded-full"></div>
            </h1>
            
            {/* Paragraf Deskripsi */}
            <div className="flex flex-col gap-5 text-gray-700 text-base md:text-lg leading-relaxed">
              {header.content.map((paragraph, index) => (
                <p key={index} className="text-justify md:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

          </div>

          {/* --- KOLOM KANAN: GAMBAR (Rasio 4:3) --- */}
          
          {/* --- KOLOM KANAN: GAMBAR (Rasio 4:3) --- */}
          {/* 1. WAJIB TAMBAHKAN 'relative' DI SINI */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 group">
              
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-surau-dark-green/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            {/* 2. Ubah 'lg:w-1/2' menjadi 'w-full' dan pastikan ada top-0 left-0 */}
            <div className="absolute top-0 left-0 -z-10 translate-x-6 translate-y-6 lg:translate-x-10 lg:translate-y-10 w-full aspect-[4/3] bg-surau-light-green/30 rounded-3xl"></div>
          </div>

        </div>

      </div>
    </div>
  );
}
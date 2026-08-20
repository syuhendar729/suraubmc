"use client";

import { useState } from 'react';
import { fivePillarsData } from '../../data/fivePillarsData';

// --- Komponen Ikon (SVG) ---
const RenderIcon = ({ name, className = "w-6 h-6" }: { name: string, className?: string }) => {
  switch (name) {
    case 'mosque':
      return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0a2 2 0 100-4 2 2 0 000 4zm-4-8a4 4 0 108 0H8zm12 8v-8a4 4 0 10-8 0v8" /></svg>;
    case 'book':
      return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
    case 'speaker':
      return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>;
    case 'wallet':
      return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>;
    case 'store':
      return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>;
    default: return null;
  }
};

export default function FivePillarsPage() {
  const { header, pillars } = fivePillarsData;
  const [activePillarId, setActivePillarId] = useState(pillars[0].id);

  // Cari data pilar yang sedang aktif
  const activePillar = pillars.find(p => p.id === activePillarId) || pillars[0];

  // Konfigurasi posisi node (x, y dalam persentase)
  const nodePositions = [
    { top: '15%', left: '50%' }, // 1. Atas (Baitullah)
    { top: '45%', left: '85%' }, // 2. Kanan (Tarbiyah)
    { top: '85%', left: '70%' }, // 3. Bawah Kanan (Dakwah)
    { top: '85%', left: '30%' }, // 4. Bawah Kiri (Baitulmaal)
    { top: '45%', left: '15%' }, // 5. Kiri (Muamalah)
  ];

  return (
    <div className="min-h-screen bg-surau-cream pt-24 pb-20 px-4 md:px-12 lg:px-20 font-sans text-surau-dark-green">
      
      {/* --- HEADER --- */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-surau-yellow font-bold tracking-widest text-xs uppercase mb-4 block">
          {header.label}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          {header.title}
        </h1>
        <p className="text-gray-600 md:text-lg">
          {header.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* --- KOLOM KIRI: NODE GRAPH INTERAKTIF --- */}
        <div className="relative w-full aspect-square max-w-md mx-auto">
          
          {/* Garis Konektor Penghubung (SVG) */}
          <svg className="absolute inset-0 w-full h-full -z-10" pointerEvents="none">
            {nodePositions.map((pos, i) => (
              <line 
                key={i} x1="50%" y1="50%" x2={pos.left} y2={pos.top} 
                stroke="#626F47" strokeWidth="2" strokeDasharray="5,5" className="opacity-40"
              />
            ))}
          </svg>

          {/* Lingkaran Pusat (5 Pilar) */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 bg-surau-dark-green rounded-full flex flex-col items-center justify-center text-surau-cream shadow-xl border-2 border-dashed border-surau-yellow z-10">
            <span className="font-bold text-lg">5 Pilar</span>
            <span className="text-[10px] uppercase tracking-wider text-surau-cream/80">Kemakmuran</span>
          </div>

          {/* 5 Satelit Lingkaran Baitul */}
          {pillars.map((pillar, index) => {
            const isActive = pillar.id === activePillarId;
            const pos = nodePositions[index];
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`absolute w-20 h-20 md:w-24 md:h-24 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center gap-1 shadow-lg transition-all duration-300 z-10 border-2
                  ${isActive 
                    ? 'bg-surau-yellow border-white text-surau-dark-green scale-110 shadow-surau-yellow/50' 
                    : 'bg-surau-dark-green border-surau-dark-green text-surau-cream hover:bg-surau-light-green'
                  }`}
                style={{ top: pos.top, left: pos.left }}
              >
                <RenderIcon name={pillar.iconName} className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[9px] md:text-[10px] text-center leading-tight px-2 font-medium">
                  {pillar.shortName}
                </span>
              </button>
            );
          })}
        </div>


        {/* --- KOLOM KANAN: KARTU DASHBOARD --- */}
        <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col">
          
          {/* Header Kartu */}
          <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="bg-surau-dark-green w-12 h-12 rounded-xl flex items-center justify-center text-surau-yellow shrink-0">
                <RenderIcon name={activePillar.iconName} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  {activePillar.shortName}
                </span>
                <h2 className="text-xl md:text-2xl font-bold leading-tight mt-1">
                  {activePillar.title}
                </h2>
              </div>
            </div>
            
            <a href={activePillar.instagramLink} className="bg-surau-yellow hover:bg-yellow-400 text-surau-dark-green text-xs font-bold py-2.5 px-4 rounded-full flex items-center gap-2 transition-colors shrink-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram Surau BMC
            </a>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {activePillar.description}
          </p>

          {/* Kotak Statistik (Hanya tampil jika datanya ada) */}
          {activePillar.stats.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mb-6">
              {activePillar.stats.map((stat, i) => (
                <div key={i} className="bg-surau-cream p-3 md:p-4 rounded-xl text-center flex flex-col justify-center">
                  <span className="text-xl md:text-2xl font-bold mb-1">{stat.value}</span>
                  <span className="text-[9px] md:text-[10px] text-gray-500 font-medium leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Checklist Program */}
          {activePillar.checklist.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {activePillar.checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-surau-cream/50 px-3 py-2.5 rounded-lg border border-surau-cream">
                  <svg className="w-4 h-4 text-surau-light-green shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Alamat Akordion */}
          <details className="mt-auto group border border-gray-200 rounded-xl bg-gray-50 cursor-pointer">
            <summary className="flex items-center justify-between p-4 text-sm font-semibold text-gray-800 list-none">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Alamat {activePillar.shortName}
              </div>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="text-gray-500 text-sm px-4 pb-4 pt-1 ml-8">
              {activePillar.address}
            </p>
          </details>

        </div>
      </div>
    </div>
  );
}
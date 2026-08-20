"use client";

import { useState } from 'react';
import Image from 'next/image';
import { 
  fivePillarsData, 
  historyData, 
  locationData, 
  sixValuesData, 
  visionMissionData 
} from '../data/aboutData';

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
    case 'leaf':
      return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>;
    case 'education':
      return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>;
    case 'sprout':
      return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" /></svg>;
    default: return null;
  }
};

export default function AboutPage() {
  const [activePillarId, setActivePillarId] = useState(fivePillarsData.pillars[0].id);

  const activePillar = fivePillarsData.pillars.find(p => p.id === activePillarId) || fivePillarsData.pillars[0];

  const nodePositions = [
    { top: '15%', left: '50%' },
    { top: '45%', left: '85%' },
    { top: '85%', left: '70%' },
    { top: '85%', left: '30%' },
    { top: '45%', left: '15%' },
  ];

  return (
    <div className="bg-surau-cream text-slate-900 min-h-screen scroll-smooth">

      {/* ===== SECTION 1: HISTORY ===== */}
      <section id="sejarah" className="py-20 px-4 md:px-12 lg:px-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-[#ffcb2e] font-bold tracking-widest text-xs uppercase mb-4 block">
                {historyData.header.label}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1157b3] leading-tight mb-8 relative">
                {historyData.header.title}
                <div className="absolute -bottom-3 left-0 w-20 h-1.5 bg-[#ffcb2e] rounded-full"></div>
              </h2>
              <div className="flex flex-col gap-5 text-gray-700 text-base md:text-lg leading-relaxed">
                {historyData.header.content.map((paragraph, index) => (
                  <p key={index} className="text-justify md:text-left">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 group">
                <Image 
                  src={historyData.image.src}
                  alt={historyData.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-[#1157b3]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute top-0 left-0 -z-10 translate-x-6 translate-y-6 lg:translate-x-10 lg:translate-y-10 w-full aspect-[4/3] bg-blue-200/30 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: VISION & MISSION ===== */}
      <section id="visi-misi" className="py-20 px-4 md:px-12 lg:px-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-[#ffcb2e] font-bold tracking-widest text-xs uppercase mb-4 block">
              {visionMissionData.header.label}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1157b3] leading-tight mb-6">
              {visionMissionData.header.title}
            </h2>
            <p className="text-gray-600 text-lg md:text-lg leading-relaxed">
              {visionMissionData.header.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionMissionData.cards.map((card) => (
              <div 
                key={card.id} 
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="bg-[#1157b3] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <RenderIcon name={card.iconName} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: FIVE PILLARS ===== */}
      <section id="lima-pilar" className="pt-24 pb-20 px-4 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#ffcb2e] font-bold tracking-widest text-xs uppercase mb-4 block">
            {fivePillarsData.header.label}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#1157b3]">
            {fivePillarsData.header.title}
          </h1>
          <p className="text-gray-600 md:text-lg">
            {fivePillarsData.header.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Node Graph */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <svg className="absolute inset-0 w-full h-full -z-10" pointerEvents="none">
              {nodePositions.map((pos, i) => (
                <line 
                  key={i} x1="50%" y1="50%" x2={pos.left} y2={pos.top} 
                  stroke="#1157b3" strokeWidth="2" strokeDasharray="5,5" className="opacity-40"
                />
              ))}
            </svg>

            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 bg-[#1157b3] rounded-full flex flex-col items-center justify-center text-white shadow-xl border-2 border-dashed border-[#ffcb2e] z-10">
              <span className="font-bold text-lg">5 Pilar</span>
              <span className="text-[10px] uppercase tracking-wider text-white/80">Kemakmuran</span>
            </div>

            {fivePillarsData.pillars.map((pillar, index) => {
              const isActive = pillar.id === activePillarId;
              const pos = nodePositions[index];
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`absolute w-20 h-20 md:w-24 md:h-24 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center gap-1 shadow-lg transition-all duration-300 z-10 border-2
                    ${isActive 
                      ? 'bg-[#ffcb2e] border-white text-[#1157b3] scale-110 shadow-[#ffcb2e]/50' 
                      : 'bg-[#1157b3] border-[#1157b3] text-white hover:bg-blue-700'
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

          {/* Card */}
          <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="bg-[#1157b3] w-12 h-12 rounded-xl flex items-center justify-center text-[#ffcb2e] shrink-0">
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
              
              <a href={activePillar.instagramLink} className="bg-[#ffcb2e] hover:bg-yellow-400 text-[#1157b3] text-xs font-bold py-2.5 px-4 rounded-full flex items-center gap-2 transition-colors shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram Surau BMC
              </a>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {activePillar.description}
            </p>

            {activePillar.stats.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {activePillar.stats.map((stat, i) => (
                  <div key={i} className="bg-surau-cream p-3 md:p-4 rounded-xl text-center flex flex-col justify-center">
                    <span className="text-xl md:text-2xl font-bold mb-1 text-[#1157b3]">{stat.value}</span>
                    <span className="text-[9px] md:text-[10px] text-gray-500 font-medium leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {activePillar.checklist.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {activePillar.checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-surau-cream/50 px-3 py-2.5 rounded-lg border border-surau-cream">
                    <svg className="w-4 h-4 text-[#1157b3] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs md:text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            )}

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
      </section>

      {/* ===== SECTION 4: SIX VALUES ===== */}
      <section id="enam-nilai" className="py-20 px-4 md:px-12 lg:px-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#ffcb2e]">
              <span className="h-px w-8 bg-[#ffcb2e]" />
              {sixValuesData.header.eyebrow}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#1157b3] sm:text-5xl lg:text-6xl">
              {sixValuesData.header.title}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#1157b3]/80 sm:text-lg">
              {sixValuesData.header.description}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sixValuesData.values.map((value) => (
              <article
                key={value.id}
                className="group relative overflow-hidden rounded-[2rem] border border-[#1157b3] bg-[#1157b3]/90 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#ffcb2e]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#1157b3]" />
                <div className="mb-10 inline-flex rounded-full border border-[#ffcb2e]/30 px-4 py-1 text-sm font-medium uppercase tracking-[0.35em] text-white/80">
                  Value
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-white/75">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: LOCATION ===== */}
      <section id="lokasi" className="py-20 px-4 md:px-12 lg:px-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-[#ffcb2e] font-bold tracking-widest text-xs uppercase mb-4 block">
              {locationData.header.label}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1157b3] leading-tight mb-4">
              {locationData.header.title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {locationData.header.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {locationData.locations.map((loc) => (
              <div 
                key={loc.id} 
                className="bg-white rounded-3xl p-8 shadow-sm flex flex-col h-full border border-gray-100"
              >
                <div className="bg-[#1157b3] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <RenderIcon name={loc.iconName} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {loc.title}
                </h3>
                <div className="flex items-start gap-2 mb-8 flex-grow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1157b3] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {loc.address}
                  </p>
                </div>
                <p className="text-[#1157b3] text-xs font-semibold mt-auto">
                  {loc.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>      

    </div>
  );
}
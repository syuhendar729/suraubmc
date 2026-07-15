// File: src/app/about/vision-mision/page.tsx

import { visionMissionData } from '../../data/aboutData';

// --- Komponen Bantuan untuk Render Ikon (SVG) ---
// Ikon disesuaikan dengan desain: Buku, Masjid/Mimbar, Toga, dan Tunas.
const RenderIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'book':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-surau-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'mosque':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-surau-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0a2 2 0 100-4 2 2 0 000 4zm-4-8a4 4 0 108 0H8zm12 8v-8a4 4 0 10-8 0v8" />
        </svg>
      );
    case 'education':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-surau-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      );
    case 'sprout':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-surau-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        </svg>
      );
    default:
      return null;
  }
};

export default function VisionMissionPage() {
  const { header, cards } = visionMissionData;

  return (
    <div className="min-h-screen bg-surau-cream pt-24 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- KEPALA HALAMAN (Header) --- */}
        <div className="max-w-3xl mb-16">
          {/* Label Kecil */}
          <span className="text-surau-yellow font-bold tracking-widest text-xs uppercase mb-4 block">
            {header.label}
          </span>
          
          {/* Judul Utama */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-surau-dark-green leading-tight mb-6">
            {header.title}
          </h1>
          
          {/* Deskripsi */}
          <p className="text-gray-600 text-lg md:text-lg leading-relaxed">
            {header.description}
          </p>
        </div>

        {/* --- GRID KARTU (Cards) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Wadah Ikon Bulat Gelap */}
              <div className="bg-surau-dark-green w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <RenderIcon name={card.iconName} />
              </div>
              
              {/* Teks Judul Kartu */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              
              {/* Teks Deskripsi Kartu */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
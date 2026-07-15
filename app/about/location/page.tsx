// File: src/app/about/location/page.tsx

import { locationData } from '../../data/aboutData';

// --- Komponen Bantuan untuk Render Ikon (SVG) ---
const RenderIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'mosque':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#E5C17C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0a2 2 0 100-4 2 2 0 000 4zm-4-8a4 4 0 108 0H8zm12 8v-8a4 4 0 10-8 0v8" />
        </svg>
      );
    case 'store':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#E5C17C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      );
    case 'leaf':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#E5C17C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function LocationPage() {
  const { header, locations } = locationData;

  return (
    <div className="min-h-screen bg-surau-cream pt-24 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* --- KEPALA HALAMAN (Header) --- */}
        <div className="max-w-2xl mb-16">
          {/* Label Kecil */}
          <span className="text-surau-yellow font-bold tracking-widest text-xs uppercase mb-4 block">
            {header.label}
          </span>
          
          {/* Judul Utama */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#232f3e] leading-tight mb-4">
            {header.title}
          </h1>
          
          {/* Deskripsi */}
          <p className="text-gray-500/90 text-base md:text-lg leading-relaxed">
            {header.description}
          </p>
        </div>

        {/* --- GRID KARTU LOKASI (Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {locations.map((loc) => (
            <div 
              key={loc.id} 
              className="bg-white rounded-3xl p-8 shadow-sm flex flex-col h-full border border-gray-100"
            >
              {/* Wadah Ikon (Warna Merah Bata) */}
              <div className="bg-[#7A3E32] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <RenderIcon name={loc.iconName} />
              </div>
              
              {/* Teks Judul Kartu */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {loc.title}
              </h3>
              
              {/* Alamat dengan Ikon Pin */}
              <div className="flex items-start gap-2 mb-8 flex-grow">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#7A3E32] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {loc.address}
                </p>
              </div>

              {/* Teks Catatan Kaki (Footer Card) */}
              <p className="text-[#3a586d] text-xs font-semibold mt-auto">
                {loc.note}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
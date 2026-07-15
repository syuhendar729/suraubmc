import { homeData } from './data/homeData';
import Link from 'next/link';

export default function HomePage() {
  const { hero, stats, footerNote } = homeData;

  return (
    <div className="min-h-screen bg-surau-cream flex flex-col items-center justify-center pt-20 pb-10 px-4 md:px-8 relative overflow-hidden">
      
      {/* Efek Cahaya Halus di Latar Belakang disesuaikan warnanya */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-surau-light-green/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* --- HERO SECTION --- */}
      <div className="max-w-4xl w-full flex flex-col items-center text-center z-10">
        
        {/* Badge / Label Atas */}
        <div className="border border-surau-dark-green/30 rounded-full px-5 py-2 mb-8 bg-white/50">
          <span className="text-[10px] md:text-xs text-surau-dark-green font-bold tracking-[0.2em] uppercase">
            {hero.badge}
          </span>
        </div>

        {/* Judul Utama */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] mb-6">
          {hero.title.line1} <br />
          <span className="text-surau-dark-green">{hero.title.highlight}</span> <br />
          {hero.title.line2}
        </h1>

        {/* Deskripsi (Warna diubah agar kontras dengan background cream) */}
        <p className="text-gray-700 text-sm md:text-base max-w-2xl leading-relaxed mb-10 font-medium">
          {hero.description}
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <Link href="/about/location" className="bg-surau-dark-green hover:bg-[#525d3b] text-surau-cream font-semibold px-8 py-3 rounded-full transition-all shadow-lg">
            {hero.buttons.primary}
          </Link>
          <Link href="/about/history" className="bg-transparent border-2 border-surau-dark-green text-surau-dark-green hover:bg-surau-dark-green hover:text-surau-cream font-medium px-8 py-3 rounded-full transition-all">
            {hero.buttons.secondary}
          </Link>
        </div>

      </div>

      {/* --- STATS SECTION --- */}
      <div className="max-w-5xl w-full flex flex-col items-center border-t border-surau-dark-green/20 pt-10 mt-auto z-10">
        
        {/* Grid Angka */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 divide-x divide-surau-dark-green/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-4 py-6 text-center">
              {/* Angka yang tadinya emas sekarang menjadi hijau tua */}
              <span className="text-3xl md:text-4xl font-bold text-surau-dark-green mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-gray-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Catatan Kaki */}
        <p className="text-[10px] md:text-xs text-gray-500 mt-10 text-center">
          {footerNote}
        </p>

      </div>
    </div>
  );
}
// File: src/app/article/page.tsx

import Image from 'next/image';
import Link from 'next/link';

// Data dummy sementara untuk artikel (mengambil konteks program Surau BMC)
const articlesData = [
  {
    id: 1,
    title: "Peluncuran Program Masjid Peradaban 5.0 Bersama Sentra Masjid Indonesia",
    excerpt: "Surau BMC melalui PT Sentra Masjid Indonesia resmi meluncurkan program Masjid Peradaban 5.0. Program ini bertujuan untuk memberdayakan masjid-masjid di seluruh Nusantara agar tidak hanya menjadi tempat ibadah, tetapi juga pusat peradaban umat.",
    image: "/history.jpg",
    date: "12 Agustus 2026",
    category: "Baitul Muamalah",
    slug: "peluncuran-masjid-peradaban-5-0"
  },
  {
    id: 2,
    title: "Penyaluran Santunan Yatim Bahagia oleh Baitul Tarbiyah",
    excerpt: "Baitul Tarbiyah Surau BMC kembali mengadakan penyaluran bantuan untuk santri yatim penghafal Qur'an melalui program Yatim Bahagia. Kegiatan ini diharapkan dapat memberikan kebahagiaan dan semangat bagi para santri.",
    image: "/history.jpg",
    date: "28 Juli 2026",
    category: "Baitul Tarbiyah",
    slug: "penyaluran-santunan-yatim-bahagia"
  },
  {
    id: 3,
    title: "Pembekalan Wirausaha bagi Santri Mukim Lumbung Qur'an",
    excerpt: "Sebagai wujud visi mencetak pemuda yang mandiri dan berdampak bagi umat, Surau BMC mengadakan pelatihan kewirausahaan dan kepemimpinan bagi 10 santri mukim terpilih di Lumbung Qur'an.",
    image: "/history.jpg",
    date: "15 Juli 2026",
    category: "Pendidikan",
    slug: "pembekalan-wirausaha-santri-mukim"
  }
];

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-surau-cream">
      
      {/* --- HERO SECTION --- */}
      {/* Menggunakan history.jpg sebagai background penuh di bagian atas */}
      <section className="relative w-full h-[40vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/history.jpg" 
          alt="Hero Artikel Surau BMC" 
          fill
          className="object-cover"
          priority
        />
        {/* Overlay Gelap agar teks di atas gambar terbaca jelas */}
        <div className="absolute inset-0 bg-surau-dark-green/60"></div>
        
        <div className="relative z-10 text-center px-4">
          <span className="text-surau-yellow font-bold tracking-widest text-sm uppercase mb-3 block">
            — Jendela Informasi
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Berita & Artikel
          </h1>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* Judul Bagian */}
        <div className="mb-12 border-l-4 border-surau-yellow pl-4">
          <h2 className="text-3xl md:text-4xl font-bold text-surau-dark-green">
            Berita Terbaru
          </h2>
        </div>

        {/* Daftar Artikel */}
        <div className="flex flex-col">
          {articlesData.map((article, index) => (
            <article 
              key={article.id} 
              className={`flex flex-col md:flex-row gap-8 items-center py-10 ${
                index !== articlesData.length - 1 ? 'border-b border-surau-dark-green/20' : ''
              }`}
            >
              
              {/* Kiri: Thumbnail Gambar (Rasio 4:3) */}
              <div className="w-full md:w-5/12 shrink-0 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                <Image 
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge Kategori */}
                <div className="absolute top-4 left-4 bg-surau-yellow text-surau-dark-green text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {article.category}
                </div>
              </div>

              {/* Kanan: Teks Artikel */}
              <div className="w-full md:w-7/12 flex flex-col">
                <span className="text-sm text-surau-light-green font-semibold mb-2 block">
                  {article.date}
                </span>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug hover:text-surau-light-green transition-colors cursor-pointer">
                  <Link href={`/article/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                <div>
                  <Link 
                    href={`/article/${article.slug}`}
                    className="inline-flex items-center gap-2 text-surau-dark-green font-bold hover:text-surau-light-green transition-colors group"
                  >
                    Baca Selengkapnya
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
            </article>
          ))}
        </div>

      </section>
    </div>
  );
}
// File: src/app/components/Footer.tsx

import Link from 'next/link';
import Image from 'next/image';
import { footerData } from '../(public)/data/footerData';

// Komponen Bantuan untuk Render Ikon Sosial Media
const SocialIcon = ({ id }: { id: string }) => {
  switch (id) {
    case 'facebook':
      return <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>;
    case 'instagram':
      return <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
    case 'tiktok':
      return <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.61.94-5.22 3.02-6.72 1.95-1.43 4.54-1.84 6.84-1.07v4.03c-1.31-.5-2.83-.49-4.05.15-1.14.61-1.92 1.77-2.06 3.05-.18 1.54.58 3.12 1.92 3.86 1.4.79 3.21.69 4.5-.27 1.25-.91 1.97-2.4 1.94-3.95.03-4.83.01-9.67.02-14.51h-3.97v4.02c.01-1.33.02-2.67-.02-4.01z"/></svg>;
    case 'youtube':
      return <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
    default:
      return null;
  }
};

export default function Footer() {
  const { companyInfo, socialMedia, linkColumns, copyright } = footerData;

  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-auto">
      {/* Bagian Utama Footer (Putih) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          
          {/* Kolom Kiri: Logo, Deskripsi, dan Sosial Media */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-surau-blue rounded-md shadow-md p-1">
                <Image 
                  src="/logo.jpeg" 
                  alt="Logo Surau BMC" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 object-contain rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-surau-blue leading-tight">Surau BMC</span>
              </div>
            </div>
            
            {/* Deskripsi */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {companyInfo.description}
            </p>
            
            {/* Ikon Sosial Media Berwarna */}
            <div className="flex items-center gap-3 mt-2">
              {socialMedia.map((social) => (
                <a 
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${social.bgColor} hover:opacity-90 hover:-translate-y-1 hover:ring-2 hover:ring-surau-new-yellow transition-all duration-300 shadow-md`}
                >
                  <SocialIcon id={social.id} />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: 3 Baris Menu Dinamis */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {linkColumns.map((col, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-surau-blue">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <Link 
                        href={link.url}
                        className="text-gray-600 text-sm md:text-base hover:text-surau-blue hover:underline transition-all"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Bagian Bawah Footer (Biru Tua dengan Garis Kuning Atas) */}
      <div className="bg-surau-blue py-4 px-6 text-center border-t-4 border-surau-new-yellow">
        <p className="text-white text-xs md:text-sm font-medium">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
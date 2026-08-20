// File: src/app/admin/login/page.tsx

"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surau-cream flex items-center justify-center p-4 font-sans">
      
      {/* Container Kotak Login */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-10 border border-surau-dark-green/10">
        
        {/* --- Header & Logo --- */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="bg-surau-dark-green p-3 rounded-xl mb-4 shadow-md">
            <Image 
              src="/logo.jpeg" 
              alt="Logo Surau BMC" 
              width={48} 
              height={48} 
              className="w-12 h-12 object-contain rounded-md"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-surau-dark-green">
            Admin Surau BMC
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Silakan masuk untuk mengelola sistem
          </p>
        </div>

        {/* --- Form Login --- */}
        <form className="flex flex-col gap-5">
          
          {/* Input Email / Username */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-surau-dark-green" htmlFor="username">
              Email atau Username
            </label>
            <input 
              type="text" 
              id="username" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-surau-light-green focus:border-transparent transition-all bg-gray-50 focus:bg-white"
              placeholder="Masukkan email Anda"
              required
            />
          </div>

          {/* Input Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-surau-dark-green" htmlFor="password">
              Kata Sandi
            </label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-surau-light-green focus:border-transparent transition-all bg-gray-50 focus:bg-white"
              placeholder="Masukkan kata sandi"
              required
            />
          </div>

          {/* Opsi Ingat Saya & Lupa Sandi */}
          <div className="flex items-center justify-between text-sm mt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-surau-dark-green focus:ring-surau-light-green w-4 h-4 cursor-pointer" 
              />
              <span className="text-gray-600 font-medium">Ingat saya</span>
            </label>
            <a href="#" className="text-surau-light-green font-bold hover:text-surau-dark-green transition-colors">
              Lupa sandi?
            </a>
          </div>

          {/* Tombol Submit Login */}
          <button 
            type="submit" 
            className="w-full bg-surau-yellow hover:bg-yellow-400 text-surau-dark-green font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl mt-4"
          >
            Masuk ke Dashboard
          </button>
        </form>

        {/* --- Footer Login (Kembali ke Beranda) --- */}
        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <Link 
            href="/" 
            className="text-sm text-gray-500 hover:text-surau-dark-green transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>

      </div>
    </div>
  );
}
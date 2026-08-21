// File: src/app/program/baitul-tarbiyah/bmc-university/page.tsx
// Halaman detail BMC University — 2 kategori pelatihan (Intrapreneur & Entrepreneur),
// tiap kategori punya grid kelas yang bisa diklik untuk lihat detailnya.

import Link from "next/link";
import ProgramIcon from "../../ProgramIcon";
import { bmcCategories, bmcClasses } from "./classesData";

export default function BMCUniversityPage() {
  return (
    <div className="bg-surau-cream text-slate-900 min-h-screen">
      <section className="py-20 px-4 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto mb-10">
          <Link
            href="/program#baitul-tarbiyah"
            className="text-surau-blue font-semibold text-sm inline-flex items-center gap-1 hover:underline"
          >
            ← Kembali ke Baitul Tarbiyah
          </Link>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-surau-blue/10 text-surau-blue font-bold text-xs px-4 py-1.5 rounded-full mb-6">
            Pusat Pelatihan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            BMC University
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Ruang pelatihan yang diprogram untuk menyediakan pelatihan khusus bagi pemberdayaan para intrapreneur
            maupun entrepreneur, dengan harapan menjadi pusat bantu pengoptimalan kemandirian bagi jamaah dan
            masyarakat Surau BMC dalam menemukan jalan kemandirian, lewat membangun skill atau scale up bisnis.
          </p>
        </div>

        {/* ===== SECTION PER KATEGORI ===== */}
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {bmcCategories.map((category) => {
            const classes = bmcClasses.filter((c) => c.category === category.id);
            return (
              <div key={category.id}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-4 border-b border-gray-200">
                  <div className="bg-surau-blue w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                    <ProgramIcon name={category.iconName} className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="inline-block bg-surau-blue/10 text-surau-blue font-bold text-xs px-3 py-1 rounded-full mb-2">
                      {category.badge}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                      {category.title}
                    </h2>
                  </div>
                </div>

                <p className="text-gray-500 leading-relaxed mb-8 max-w-3xl">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {classes.map((kelas) => (
                    <Link
                      key={kelas.id}
                      href={`/program/baitul-tarbiyah/bmc-university/${kelas.id}`}
                      className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                    >
                      <div className="aspect-square bg-gradient-to-br from-surau-blue to-teal-500 flex items-center justify-center">
                        <ProgramIcon name={kelas.iconName} className="w-12 h-12 text-white" />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <span className="inline-block bg-surau-blue/10 text-surau-blue font-bold text-[10px] uppercase tracking-wide px-3 py-1 rounded-full mb-3 w-fit">
                          {category.title}
                        </span>
                        <h3 className="font-bold text-slate-900 mb-2 leading-snug group-hover:text-surau-blue transition-colors">
                          {kelas.title}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed flex-grow">
                          {kelas.shortDescription}
                        </p>
                        <span className="text-surau-blue font-bold text-xs inline-flex items-center gap-1 mt-4">
                          Lihat Detail
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-surau-blue/10 w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
              <ProgramIcon name="heart" className="w-5 h-5 text-surau-blue" />
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Anak muda yang lulus dari kelas khusus ini akan diarahkan menemukan jalan kemandirian sebagai{" "}
              <strong className="text-slate-900 font-semibold">entrepreneur</strong> muda, berkarya sebagai{" "}
              <strong className="text-slate-900 font-semibold">intrapreneur</strong> bersama perusahaan/organisasi
              yang terafiliasi dengan Surau BMC, atau bergabung menjadi{" "}
              <strong className="text-slate-900 font-semibold">Santri Karya</strong> di Surau BMC lewat tahapan
              Santri Magang/Volunteer terlebih dahulu.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

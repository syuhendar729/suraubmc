// File: src/app/program/baitul-tarbiyah/bmc-university/[classId]/page.tsx
// Halaman detail untuk 1 kelas di BMC University — gaya "halaman beli tiket":
// galeri gambar di kiri, info + tombol daftar di kanan, deskripsi lengkap di bawah.

import Link from "next/link";
import { notFound } from "next/navigation";
import ProgramIcon from "../../../ProgramIcon";
import ImageGallery from "../ImageGallery";
import ShareButton from "../ShareButton";
import { bmcCategories, bmcClasses, getBMCClass } from "../classesData";
import { contactData } from "../../../../data/contactData";

const MIN_INFAQ = "Rp 10.000";

export function generateStaticParams() {
  return bmcClasses.map((kelas) => ({ classId: kelas.id }));
}

export default async function BMCClassDetailPage({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  const kelas = getBMCClass(classId);

  if (!kelas) {
    notFound();
  }

  const category = bmcCategories.find((c) => c.id === kelas.category);
  const waMessage = encodeURIComponent(
    `Assalamu'alaikum, saya ingin mendaftar kelas "${kelas.title}" di BMC University (infaq mulai ${MIN_INFAQ}).`
  );
  const waLink = `${contactData.whatsapp}?text=${waMessage}`;

  return (
    <div className="bg-surau-cream text-slate-900 min-h-screen py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/program/baitul-tarbiyah/bmc-university"
          className="text-surau-blue font-semibold text-sm inline-flex items-center gap-1 mb-8 hover:underline"
        >
          ← Kembali ke BMC University
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Kiri: Galeri gambar */}
          <div>
            <ImageGallery images={kelas.images} alt={kelas.title} />
          </div>

          {/* Kanan: Info & tombol daftar */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-5">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                {kelas.title}
              </h1>
              <ShareButton title={kelas.title} />
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-2.5 text-gray-600 text-sm">
                <ProgramIcon name="calendar" className="w-5 h-5 text-surau-blue shrink-0" />
                {kelas.schedule}
              </div>
              <div className="flex items-center gap-2.5 text-gray-600 text-sm">
                <ProgramIcon name="pin" className="w-5 h-5 text-surau-blue shrink-0" />
                {kelas.location}
              </div>
              <div className="flex items-center gap-2.5 text-gray-600 text-sm">
                <ProgramIcon name={category?.iconName || "briefcase"} className="w-5 h-5 text-surau-blue shrink-0" />
                Kategori {category?.title} — BMC University
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-block bg-surau-blue/10 text-surau-blue font-bold text-xs px-4 py-1.5 rounded-full">
                {category?.title || "BMC University"}
              </span>
              <span className="inline-block bg-surau-new-yellow/20 text-yellow-700 font-bold text-xs px-4 py-1.5 rounded-full">
                Infaq mulai {MIN_INFAQ}
              </span>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-surau-new-yellow hover:bg-yellow-400 text-surau-blue font-bold px-8 py-3.5 rounded-full shadow-md transition-transform hover:-translate-y-1 mb-6"
            >
              Daftar & Infaq (mulai {MIN_INFAQ})
            </a>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-sm text-gray-500 leading-relaxed">
              Pendaftaran kelas ini dilakukan lewat WhatsApp admin Surau BMC. Infaq minimal{" "}
              <strong className="text-slate-900 font-semibold">{MIN_INFAQ}</strong> per kelas yang diikuti, sebagai
              bentuk kemandirian dan keberkahan bersama dalam program pelatihan BMC University.
            </div>
          </div>
        </div>

        {/* Bawah: Tentang Kelas (full width) */}
        <div className="max-w-3xl mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-4 border-b border-gray-200">
            Tentang Kelas
          </h2>
          <div className="flex flex-col gap-4 mb-8">
            {kelas.description.map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {kelas.highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <ProgramIcon name={item.iconName} className="w-5 h-5 text-surau-blue shrink-0" />
                <span className="text-sm text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

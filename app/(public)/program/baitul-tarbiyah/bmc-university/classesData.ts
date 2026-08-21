// File: src/app/program/baitul-tarbiyah/bmc-university/classesData.ts
// Data 2 kategori pelatihan BMC University (Intrapreneur & Entrepreneur) beserta
// kelas-kelas spesifik di dalamnya. Penjelasan tiap kelas disusun berdasarkan
// deskripsi kategori di ABOUT_SURAUBMC.md — belum ada silabus resmi per kelas,
// jadi ditulis secara wajar mengikuti konteks & tema masing-masing kelas.

export const bmcCategories = [
  {
    id: "intrapreneur",
    badge: "Kelas Pelatihan",
    title: "Intrapreneur",
    description:
      "Kelas pelatihan untuk penguatan skill para intrapreneur aktif atau anak muda agar memiliki skill profesional, leadership, kreativitas, dan mental berkarya, sehingga siap memberikan kontribusi terbaik di dunia kerja, perusahaan, maupun organisasi.",
    iconName: "briefcase",
  },
  {
    id: "entrepreneur",
    badge: "Kelas Pelatihan",
    title: "Entrepreneur",
    description:
      "Program pelatihan yang berfokus pada pengoptimalan bisnis, bagi UMKM/pemula hingga anak muda yang berencana membangun usaha dan kemandirian ekonomi — mulai dari menemukan potensi dan peluang, membangun produk, pemasaran, hingga mengembangkan bisnis yang memberikan manfaat.",
    iconName: "sparkles",
  },
];

export type BMCClass = {
  id: string;
  category: "intrapreneur" | "entrepreneur";
  title: string;
  iconName: string;
  images: string[];
  schedule: string;
  location: string;
  shortDescription: string;
  description: string[];
  highlights: { iconName: string; text: string }[];
};

// Galeri sementara pakai history.jpg (diulang biar bisa lihat cara kerja slide-nya).
// Nanti tinggal ganti isi array `images` tiap kelas dengan foto dokumentasi asli.
const PLACEHOLDER_GALLERY = ["/history.jpg", "/history.jpg", "/history.jpg"];

export const bmcClasses: BMCClass[] = [
  {
    id: "desain-grafis",
    category: "intrapreneur",
    title: "Desain Grafis",
    iconName: "sparkles",
    images: PLACEHOLDER_GALLERY,
    schedule: "Kelas reguler, jadwal gelombang berikutnya info lewat WhatsApp",
    location: "Surau BMC, Bandar Lampung",
    shortDescription:
      "Kelas dasar hingga mahir mendesain grafis untuk kebutuhan konten, publikasi, dan branding.",
    description: [
      "Kelas Desain Grafis membekali peserta dengan kemampuan mendesain materi visual — mulai dari poster kajian, konten media sosial, hingga kebutuhan branding unit usaha dan program Surau BMC.",
      "Peserta akan belajar prinsip dasar desain (layout, warna, tipografi), praktik menggunakan tools desain populer, hingga membangun portofolio karya yang bisa langsung dipakai di dunia kerja maupun organisasi.",
    ],
    highlights: [
      { iconName: "users", text: "Untuk intrapreneur aktif & anak muda" },
      { iconName: "sparkles", text: "Praktik langsung, bukan cuma teori" },
      { iconName: "briefcase", text: "Siap pakai untuk kebutuhan organisasi/perusahaan" },
    ],
  },
  {
    id: "digital-marketing",
    category: "intrapreneur",
    title: "Digital Marketing",
    iconName: "globe",
    images: PLACEHOLDER_GALLERY,
    schedule: "Kelas reguler, jadwal gelombang berikutnya info lewat WhatsApp",
    location: "Surau BMC, Bandar Lampung",
    shortDescription:
      "Strategi pemasaran digital untuk mendukung unit usaha dan program-program Surau BMC.",
    description: [
      "Kelas Digital Marketing mengajarkan strategi pemasaran di era digital — mulai dari media sosial, konten, hingga iklan — agar peserta mampu membantu mengoptimalkan promosi unit usaha maupun program dakwah Surau BMC.",
      "Materi mencakup perencanaan konten, dasar-dasar iklan digital, hingga cara membaca performa kampanye supaya strategi pemasaran terus membaik dari waktu ke waktu.",
    ],
    highlights: [
      { iconName: "users", text: "Untuk intrapreneur aktif & anak muda" },
      { iconName: "globe", text: "Fokus media sosial & pemasaran online" },
      { iconName: "briefcase", text: "Siap berkontribusi di dunia kerja/organisasi" },
    ],
  },
  {
    id: "editing-video",
    category: "intrapreneur",
    title: "Editing Video",
    iconName: "mic",
    images: PLACEHOLDER_GALLERY,
    schedule: "Kelas reguler, jadwal gelombang berikutnya info lewat WhatsApp",
    location: "Surau BMC, Bandar Lampung",
    shortDescription:
      "Kelas produksi & editing video untuk konten dakwah, dokumentasi, hingga promosi program.",
    description: [
      "Kelas Editing Video melatih peserta memproduksi dan mengedit video — dari dokumentasi kegiatan, konten dakwah, hingga materi promosi program-program Surau BMC.",
      "Peserta akan belajar dasar pengambilan gambar, teknik editing dengan software populer, serta storytelling visual agar pesan yang disampaikan lebih kuat dan mudah diterima audiens.",
    ],
    highlights: [
      { iconName: "users", text: "Untuk intrapreneur aktif & anak muda" },
      { iconName: "sparkles", text: "Belajar storytelling & teknik editing" },
      { iconName: "briefcase", text: "Siap berkontribusi di dunia kerja/organisasi" },
    ],
  },
  {
    id: "ai-bisnis",
    category: "intrapreneur",
    title: "AI Bisnis",
    iconName: "briefcase",
    images: PLACEHOLDER_GALLERY,
    schedule: "Kelas reguler, jadwal gelombang berikutnya info lewat WhatsApp",
    location: "Surau BMC, Bandar Lampung",
    shortDescription:
      "Memanfaatkan kecerdasan buatan (AI) untuk efisiensi kerja dan pengembangan bisnis/organisasi.",
    description: [
      "Kelas AI Bisnis mengenalkan peserta pada berbagai tools kecerdasan buatan (AI) yang bisa dipakai untuk mempercepat pekerjaan sehari-hari, dari riset, penulisan konten, hingga otomatisasi tugas administratif.",
      "Sejalan dengan visi Surau BMC sebagai Smart Masjid 5.0 yang terintegrasi AI, kelas ini juga membahas bagaimana AI dapat diterapkan untuk mengembangkan unit usaha dan program-program organisasi secara lebih efisien.",
    ],
    highlights: [
      { iconName: "users", text: "Untuk intrapreneur aktif & anak muda" },
      { iconName: "sparkles", text: "Kenal & praktik tools AI populer" },
      { iconName: "briefcase", text: "Terapan langsung untuk bisnis/organisasi" },
    ],
  },
  {
    id: "terapispreneur",
    category: "entrepreneur",
    title: "Terapispreneur",
    iconName: "heart",
    images: PLACEHOLDER_GALLERY,
    schedule: "Kelas reguler, jadwal gelombang berikutnya info lewat WhatsApp",
    location: "Surau BMC, Bandar Lampung",
    shortDescription:
      "Kelas kewirausahaan di bidang jasa terapi/kesehatan — dari skill dasar hingga membangun usahanya.",
    description: [
      "Kelas Terapispreneur ditujukan bagi anak muda maupun UMKM/pemula yang ingin membangun usaha di bidang jasa terapi dan kesehatan, sejalan dengan semangat kemandirian ekonomi yang berdampak bagi umat.",
      "Peserta akan diajak menemukan potensi dan peluang usaha jasa terapi, membangun layanan yang berkualitas, hingga strategi pemasaran agar usahanya dikenal dan dipercaya masyarakat.",
    ],
    highlights: [
      { iconName: "users", text: "Untuk UMKM/pemula & anak muda" },
      { iconName: "heart", text: "Fokus bisnis jasa terapi & kesehatan" },
      { iconName: "sparkles", text: "Dari peluang usaha sampai pemasaran layanan" },
    ],
  },
  {
    id: "siroh-saudagar",
    category: "entrepreneur",
    title: "Siroh Saudagar",
    iconName: "book",
    images: PLACEHOLDER_GALLERY,
    schedule: "Kelas reguler, jadwal gelombang berikutnya info lewat WhatsApp",
    location: "Surau BMC, Bandar Lampung",
    shortDescription:
      "Belajar dari kisah (siroh) para saudagar dalam sejarah Islam sebagai teladan berbisnis.",
    description: [
      "Kelas Siroh Saudagar mengajak peserta menyelami kisah-kisah saudagar dalam sejarah Islam sebagai teladan membangun bisnis yang jujur, amanah, dan memberi manfaat luas bagi umat.",
      "Dari nilai-nilai perniagaan yang diajarkan lewat siroh ini, peserta diarahkan untuk menerapkannya dalam membangun usaha dan kemandirian ekonomi di masa kini — bisnis yang bukan sekadar mengejar untung, tapi juga berkah.",
    ],
    highlights: [
      { iconName: "users", text: "Untuk UMKM/pemula & anak muda" },
      { iconName: "book", text: "Belajar dari teladan saudagar dalam sejarah Islam" },
      { iconName: "heart", text: "Bisnis berlandaskan nilai kejujuran & keberkahan" },
    ],
  },
];

export function getBMCClass(classId: string) {
  return bmcClasses.find((c) => c.id === classId) || null;
}

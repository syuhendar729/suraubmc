
export const visionMissionData = {
  header: {
    label: "— VISI UTAMA",
    title: "Bukan Sekadar Masjid, Tapi Rumah Tumbuhnya Generasi",
    description:
      "Surau BMC ingin menghadirkan model masjid yang tidak hanya jadi tempat ibadah, tapi pusat lahirnya SDM unggul — pemuda yang dibekali ruh spiritual sekaligus kemampuan memimpin dan berwirausaha.",
  },
  cards: [
    {
      id: 1,
      title: "Cinta Al-Qur'an",
      description: "Qur'an jadi pusat aktivitas harian — dari ODOJ hingga kajian rutin.",
      iconName: "book",
    },
    {
      id: 2,
      title: "Cinta Masjid",
      description: "Masjid dihidupkan sebagai pusat peradaban, bukan sekadar tempat singgah.",
      iconName: "mosque",
    },
    {
      id: 3,
      title: "Terdidik & Terpimpin",
      description: "Dibimbing lewat jenjang pendidikan, mentoring, dan kepemimpinan terstruktur.",
      iconName: "education",
    },
    {
      id: 4,
      title: "Mandiri & Berdampak",
      description: "Diarahkan jadi entrepreneur muda yang berdampak nyata bagi umat.",
      iconName: "sprout",
    },
  ],
};

export const sixValuesData = {
  header: {
    eyebrow: "CORE VALUE",
    title: "Shaleh Bermanfaat",
    description: "Enam nilai yang menjiwai setiap program dan keputusan di Surau BMC.",
  },
  values: [
    {
      id: 1,
      title: "Spiritual Enterprise",
      description: "Setiap usaha & program dijalankan sebagai ibadah, bukan sekadar mengejar untung.",
    },
    {
      id: 2,
      title: "Humanism",
      description: "Mengutamakan kemanusiaan dan kepedulian dalam setiap layanan kepada jamaah maupun santri.",
    },
    {
      id: 3,
      title: "Agility",
      description: "Sigap beradaptasi dengan perubahan zaman, termasuk teknologi dan kebutuhan umat yang terus berkembang.",
    },
    {
      id: 4,
      title: "Lean Thinking, Lean Action",
      description: "Berpikir efisien, bertindak cepat, dan tidak boros dalam mengelola sumber daya umat.",
    },
    {
      id: 5,
      title: "Empatism",
      description: "Mendengar dan memahami kebutuhan jamaah, santri, serta masyarakat sekitar sebelum bertindak.",
    },
    {
      id: 6,
      title: "Humility",
      description: "Tetap rendah hati dalam setiap pencapaian, karena semua kebaikan kembali kepada Allah dan umat.",
    },
  ],
};

// File: src/data/locationData.ts

export const locationData = {
  header: {
    label: "— LOKASI KAMI",
    title: "Bandar Lampung",
    description: "Tiga titik yang menopang gerakan Surau BMC — dari rumah ibadah sampai unit usaha umat."
  },
  locations: [
    {
      id: 1,
      title: "Baitullah – Surau BMC",
      address: "Jl. Tirtaria, Gg. Melati 6A, Way Kandis, Bandar Lampung",
      note: "Pusat ibadah & kegiatan santri",
      iconName: "mosque" // Referensi untuk ikon SVG
    },
    {
      id: 2,
      title: "Baitul Muamalah - Sentra Masjid Indonesia",
      address: "Jl. Dempo No. 20, Labuhan Ratu, Bandar Lampung",
      note: "Perlengkapan & pelayanan masjid",
      iconName: "store"
    },
    {
      id: 3,
      title: "Baitul Muamalah - Sentra Karpet",
      address: "Jl. Pelita 1 No. 21, Kedaton, Bandar Lampung",
      note: "Karpet meteran, tile & alas",
      iconName: "leaf"
    }
  ]
};


export const fivePillarsData = {
  header: {
    label: "— SISTEM PILAR KEMAKMURAN",
    title: "Lima Baitul, Satu Gerakan",
    description: "Surau BMC dijalankan lewat lima \"Baitul\" yang saling menopang — dari ibadah, pendidikan, dakwah, usaha, hingga keuangan umat. Pilih salah satu untuk melihat dashboard programnya."
  },
  pillars: [
    {
      id: "baitullah",
      shortName: "Baitullah",
      iconName: "mosque",
      title: "Titik Pusat Ibadah & Ruh Perjuangan",
      description: "Baitullah adalah pusat kekuatan organisasi Surau BMC — bangunan ibadah sekaligus tempat lahirnya ruh perjuangan menebar manfaat bagi jamaah dan masyarakat sekitar.",
      instagramLink: "https://www.instagram.com/bmc.surau",
      stats: [
        { value: "9x6 m", label: "Ukuran Bangunan" },
        { value: "5", label: "Shalat Berjamaah/ Hari" },
        { value: "6", label: "Nilai Inti Shaleh Bermanfaat" }
      ],
      checklist: [
        "Shalat Lima Waktu",
        "ODOJ (One Day One Juz)",
        "Shalat Malam / I'tikaf",
        "Kajian Qur'an & Ilmu Agama"
      ],
      address: "Jl. Tirtaria, Gg. Melati 6A, Way Kandis, Bandar Lampung"
    },
    // Data dummy untuk pilar lainnya agar tombol berfungsi saat diklik
    {
      id: "tarbiyah",
      shortName: "Baitul Tarbiyah",
      iconName: "book",
      title: "Pusat Pendidikan & Pembinaan Umat",
      description: "Menempa generasi muda penghafal Qur'an dan mencetak karakter pemimpin mandiri melalui Lumbung Qur'an dan Rumah Qur'an Syamil Madani.",
      instagramLink: "#",
      stats: [
        { value: "10+", label: "Santri Mukim" },
        { value: "2", label: "Program Utama" },
        { value: "1", label: "Majelis Ibu-ibu" }
      ],
      checklist: ["Lumbung Qur'an", "Rumah Qur'an Syamil Madani", "Yatim Bahagia", "Majelis Berkah Bahagia"],
      address: "Area Baitullah Surau BMC"
    },
    {
      id: "dakwah",
      shortName: "Baitud Dakwah",
      iconName: "speaker",
      title: "Syiar Islam & Aksi Nyata",
      description: "Masjid aktif menjadi pusat penyebaran Islam. Dakwah bil lisan (ceramah) maupun bil hal (aksi nyata) untuk menyebarkan nilai-nilai Islam ke masyarakat luas.",
      instagramLink: "#",
      stats: [], checklist: [], address: "-"
    },
    {
      id: "baitulmaal",
      shortName: "Baitulmaal",
      iconName: "wallet",
      title: "Pusat Keuangan Umat",
      description: "Mengelola dana ZISWAF secara transparan dan profesional untuk disalurkan kepada program-program kebaikan yang tepat sasaran.",
      instagramLink: "#",
      stats: [], checklist: [], address: "-"
    },
    {
      id: "muamalah",
      shortName: "Baitul Muamalah",
      iconName: "store",
      title: "Kemandirian Ekonomi Organisasi",
      description: "Menopang organisasi melalui unit usaha profesional seperti Sentra Masjid Indonesia dan Sentra Karpet yang berfokus pada pelayanan umat.",
      instagramLink: "#",
      stats: [], checklist: [], address: "Jl. Dempo No.20 & Jl. Pelita 1 No.21"
    }
  ]
};

export const historyData = {
  header: {
    label: "— TENTANG KAMI",
    title: "Sejarah",
    content: [
      "Surau Berkah Madani Center (Surau BMC) berawal dari sebuah inisiatif mulia yang berfokus pada gerakan dakwah dan pemberdayaan umat. Bermula dari aktivitas sederhana untuk memakmurkan masjid, gerakan ini perlahan bertumbuh dan bertransformasi menjadi sebuah pusat peradaban yang komprehensif.",
      "Kini, Surau BMC bukan sekadar tempat ibadah biasa. Dengan mengintegrasikan nilai-nilai inti 'Shaleh Bermanfaat', tempat ini telah menjadi rumah inkubator bagi para pemuda dan santri mukim Qur'an, mendidik mereka menjadi generasi yang terdidik, mandiri secara wirausaha, dan mampu memberikan dampak positif yang nyata bagi lingkungan sekitar."
    ]
  },
  image: {
    src: "/history.jpg", // Pastikan Anda menambahkan gambar dengan nama ini di folder public/
    alt: "Dokumentasi Sejarah Surau BMC"
  }
};
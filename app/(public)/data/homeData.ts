// File: src/data/homeData.ts

export const homeData = {
  heroLeft: {
    title: "Pusat Inkubator Peradaban Pemuda Berbasis Al-Qur'an & Masjid",
    description: "Surau Berkah Madani Center (Surau BMC) bukan sekadar masjid atau tempat pembelajaran agama biasa, melainkan pusat inkubator pemuda berbasis Al-Qur'an, masjid, kepemimpinan, dan kewirausahaan — difasilitasi teknologi Smart Masjid 5.0 yang terintegrasi AI.",
    buttonText: "Selengkapnya →",
    buttonLink: "/about#sejarah",
    image: "/history.jpg"
  },
  heroRight: {
    title: "Ada Pertanyaan atau Perlu Bantuan?",
    description: "Silahkan hubungi kami melalui kontak yang sudah di sediakan",
    buttonText: "Hubungi Kami →",
    buttonLink: "/contact"
  },
  programs: {
    title: "Visi Utama Kami",
    description: "Surau BMC ingin menghadirkan model masjid yang tidak hanya menjadi tempat ibadah, tetapi menjadi pusat lahirnya SDM unggul.",
    items: [
      { id: 1, title: "Cinta Al-Qur'an", desc: "Al-Qur'an jadi pusat aktivitas harian pemuda, dari tahfidz hingga kajian rutin yang membentuk ruh spiritual.", iconName: "education" },
      { id: 2, title: "Cinta Masjid", desc: "Masjid dihidupkan sebagai pusat ibadah dan peradaban, bukan sekadar tempat singgah.", iconName: "dakwah" },
      { id: 3, title: "Terdidik, Terpimpin & Mandiri", desc: "Dibina lewat pendidikan dan kepemimpinan terstruktur agar tumbuh mandiri dan berdampak bagi umat.", iconName: "social" }
    ]
  },

  // --- PROGRAM KAMI: dipisah berdasarkan 5 pilar kemakmuran Surau BMC ---
  ourPrograms: {
    title: "Program Kami",
    description: "Program-program Surau BMC yang dijalankan melalui pilar-pilar kemakmuran organisasi (Panca Baitul).",
    filters: [
      { id: 'semua', title: 'Semua Program', desc: 'Seluruh program di lingkungan Surau BMC' },
      { id: 'muamalah', title: 'Baitul Muamalah', desc: 'Kemandirian ekonomi lewat unit usaha profesional' },
      { id: 'tarbiyah', title: 'Baitul Tarbiyah', desc: "Pusat pendidikan Qur'an dan pendidikan umum" },
      { id: 'maal', title: 'Baitulmaal', desc: 'Pengelolaan dana ZISWAF umat secara transparan' },
      { id: 'dakwah', title: 'Baituddakwah', desc: 'Syiar Islam lewat dakwah bil lisan dan bil hal' },
    ],
    items: [
      {
        id: 1,
        title: "Lumbung Qur'an",
        category: 'tarbiyah',
        desc: "Pondok tahfidz untuk anak muda usia 16-25 tahun sebagai santri mukim penghafal Qur'an yang hamilul Qur'an dan jago bisnis. Saat ini sudah hadir 10 santri mukim terpilih.",
        image: '/history.jpg',
        link: '/program#baitul-tarbiyah'
      },
      {
        id: 2,
        title: "Rumah Qur'an Syamil Madani",
        category: 'tarbiyah',
        desc: "Pusat pendidikan Qur'an berbasis International untuk anak usia dini dengan metode belajar yang menyenangkan dan mudah dipahami.",
        image: '/history.jpg',
        link: '/program#baitul-tarbiyah'
      },
      {
        id: 3,
        title: "Yatim Bahagia",
        category: 'tarbiyah',
        desc: "Program sosial santunan bagi santri yatim penghafal Qur'an di lingkungan Baitul Tarbiyah.",
        image: '/history.jpg',
        link: '#'
      },
      {
        id: 4,
        title: "Majelis Berkah Bahagia",
        category: 'tarbiyah',
        desc: "Komunitas pemberdayaan umahat (ibu-ibu muslimah) dari jamaah sekitar Baitullah, dengan kajian agama & Qur'an rutin pekanan serta program kemandirian sedekah 'Kampung Sedekah'.",
        image: '/history.jpg',
        link: '#'
      },
      {
        id: 5,
        title: "Kajian Mindshift",
        category: 'dakwah',
        desc: "Kajian mingguan yang membangun mindset spiritual dan kemandirian anak muda bersama para pakar pengembangan diri hingga entrepreneur.",
        image: '/history.jpg',
        link: '/program#baituddakwah'
      },
      {
        id: 6,
        title: "Kajian Muslimah",
        category: 'dakwah',
        desc: "Pembinaan khusus akhwat/muslimah muda untuk pengembangan diri di dunia kewanitaan yang bersandarkan syariat Islam, 2 kali sepekan.",
        image: '/history.jpg',
        link: '/program#baituddakwah'
      },
      {
        id: 7,
        title: "Dakwah Bil Lisan & Bil Hal",
        category: 'dakwah',
        desc: "Masjid aktif menjadi pusat penyebaran Islam lewat ceramah (bil lisan) maupun aksi nyata (bil hal) untuk menyebarkan nilai-nilai Islam ke masyarakat luas.",
        image: '/history.jpg',
        link: '#'
      },
      {
        id: 8,
        title: "Sentra Masjid Indonesia",
        category: 'muamalah',
        desc: "Ritel perlengkapan dan pelayanan masjid terpercaya di Indonesia sejak 2013, membawa program Masjid Peradaban 5.0 untuk memakmurkan masjid-masjid di Indonesia.",
        image: '/history.jpg',
        link: '#'
      },
      {
        id: 9,
        title: "Sentra Karpet",
        category: 'muamalah',
        desc: "Anak perusahaan Berkah Madani Center sejak 2019, menyediakan dan memasang karpet rumahan, meteran, tile, hingga alas untuk kantor, hotel, dan masjid.",
        image: '/history.jpg',
        link: '#'
      },
      {
        id: 10,
        title: "Pengelolaan ZISWAF Umat",
        category: 'maal',
        desc: "Mengelola dana Zakat, Infaq, Sedekah, dan Wakaf secara transparan dan profesional untuk disalurkan kepada program-program kebaikan yang tepat sasaran.",
        image: '/history.jpg',
        link: '#'
      },
    ]
  },

  // --- PROGRAM DONASI (Kartu Mendatar dengan Progress Bar) ---
  campaigns: {
    title: "Program Donasi",
    description: "Mari berdonasi untuk program-program pilihan kami.",
    viewAllText: "Lihat Semua Donasi",
    viewAllLink: "/donation",
    items: [
      {
        id: 1,
        title: "Pembangunan Masjid & Pusat Peradaban",
        tags: ["Pembangunan", "Masjid"],
        description: "Mari bersama wujudkan pembangunan fasilitas pendidikan dan ibadah untuk para santri penghafal Al-Qur'an.",
        collected: "Rp 15.500.000",
        target: "Rp 50.000.000",
        progress: 31,
        image: "/history.jpg",
        link: "/donation/pembangunan"
      },
      {
        id: 2,
        title: "Beasiswa Santri Mukim Qur'an",
        tags: ["Pendidikan", "Zakat"],
        description: "Dukungan penuh untuk biaya hidup dan pendidikan para santri mukim terpilih yang sedang menghafal Al-Qur'an di Lumbung Qur'an.",
        collected: "Rp 8.200.000",
        target: "Rp 20.000.000",
        progress: 41,
        image: "/history.jpg",
        link: "/donation/beasiswa"
      }
    ]
  }
};

// File: src/data/programData.ts
// Data untuk halaman /program — disusun per 4 pilar "Panca Baitul" (Baitul Muamalah,
// Baitul Tarbiyah, Baitulmaal, Baituddakwah), tiap pilar berisi daftar program di dalamnya.
// Kontennya diselaraskan dengan daftar program di homeData.ts (section "Program Kami").

export const programData = [
  {
    id: "baitul-muamalah",
    header: {
      badge: "Panca Baitul",
      title: "Baitul Muamalah",
      description: ["Surau BMC Di Support oleh 2 Muamalah yaitu 'Sentra Masjid Indonesia' dan 'Sentra Karpet'."],
    },
    programs: [
      {
        id: "sentra-masjid-indonesia",
        badge: "Ritel Perlengkapan Masjid",
        title: "Sentra Masjid Indonesia",
        description:
          "PT. Sentra Masjid Indonesia didirikan pada tahun 2013, bergerak pada bidang ritel yang berkembang di bidang pelayanan masjid. Dengan tagline Partner Masjid Indonesia sebagai Pusatnya Kebutuhan Perlengkapan dan Pelayanan Masjid Terpercaya Di Indonesia. Sentra Masjid hadir untuk memakmurkan masjid-masjid di Indonesia. Sentra Masjid berkomitment untuk melakukan enabler masjid indonesia dengan membawa program Masjid Peradaban 5.0.",
        iconName: "store",
        imagePosition: "left" as const,
        details: [
          { iconName: "pin", text: "Jl. Dempo No.20, Labuhan Ratu, Bandar Lampung" },
          { iconName: "briefcase", text: "Perlengkapan, perawatan & pembangunan masjid" },
          { iconName: "sparkles", text: "Membawa program Masjid Peradaban 5.0" },
        ],
        buttonText: "Selengkapnya",
        link: "https://sentramasjid.com", // TODO: ganti dengan URL website Sentra Masjid Indonesia
      },
      {
        id: "sentra-karpet",
        badge: "Distributor Karpet",
        title: "Sentra Karpet",
        description:
          "Sentra Karpet Merupakan anak perusahaan dari Berkah Madani Center (BMC). Sentra Karpet terbentuk sejak 2019, dimulai dengan menjadi distributor karpet rumahan kini produk sentra karpet semakin bertambah hingga karpet meteran, karpet tile, dan Karpet alas. Sentra Karpet Beralamatkan di Jalan Pelita 1 No.21 Kedaton Bandar Lampung. Sentra Karpet Telah banyak dipercaya kantor dan hotel untuk melakukan pemasangan karpet lantai, Sentra Karpet akan selalu bertekad untuk terus menyajikan produk dekorasi Lantai yang berkualitas, inovatif, dan inspiratif.",
        iconName: "briefcase",
        imagePosition: "right" as const,
        details: [
          { iconName: "pin", text: "Jl. Pelita 1 No.21, Kedaton, Bandar Lampung" },
          { iconName: "users", text: "Dipercaya kantor & hotel" },
          { iconName: "sparkles", text: "Karpet rumahan, meteran, tile & alas" },
        ],
        buttonText: "Selengkapnya",
        link: "https://sentrakarpet.com", // TODO: ganti dengan URL website Sentra Karpet
      },
    ],
  },
  {
    id: "baitul-tarbiyah",
    header: {
      badge: "Panca Baitul",
      title: "Baitul Tarbiyah",
      description: ["Divisi pusat untuk bidang pendidikan, baik pendidikan Qur'an maupun pendidikan umum."],
    },
    programs: [
      {
        id: "lumbung-quran",
        badge: "Pondok Tahfidz",
        title: "Lumbung Qur'an",
        description:
          "Menempa anak muda khususnya usia 16-25 tahun sebagai santri penghafal Qur'an yang hamilul Qur'an dan jago bisnis. Saat ini sudah hadir 10 santri mukim terpilih yang menjalani berbagai program tahfidz dan juga penguatan skill/kompetensi di bidang bisnis.",
        iconName: "academic-cap",
        imagePosition: "left" as const,
        details: [
          { iconName: "users", text: "Usia 16 - 25 tahun" },
          { iconName: "home", text: "Santri Mukim (tinggal di pondok)" },
          { iconName: "briefcase", text: "Hamilul Qur'an + Jago Bisnis" },
        ],
        buttonText: "Info Pendaftaran",
        link: "/program/baitul-tarbiyah/lumbung-quran",
      },
      {
        id: "rumah-quran-syamil-madani",
        badge: "Anak Usia Dini",
        title: "Rumah Qur'an Syamil Madani",
        description:
          "Pusat pendidikan Qur'an untuk anak usia dini yang berbasis International. Metode pembelajaran yang menyenangkan dan mudah dipahami anak-anak.",
        iconName: "person",
        imagePosition: "right" as const,
        details: [
          { iconName: "person", text: "Anak usia dini" },
          { iconName: "globe", text: "Berbasis International" },
          { iconName: "sparkles", text: "Metode belajar menyenangkan" },
        ],
        buttonText: "Info Pendaftaran",
        link: "/program/baitul-tarbiyah/rumah-quran-syamil-madani",
      },
      // {
      //   id: "yatim-bahagia",
      //   badge: "Program Sosial",
      //   title: "Yatim Bahagia",
      //   description:
      //     "Program sosial santunan untuk santri yatim penghafal Qur'an, bagian dari Rumah Qur'an Syamil Madani — memastikan mereka tetap terdidik dan terpenuhi kebutuhannya.",
      //   iconName: "heart",
      //   imagePosition: "left" as const,
      //   details: [
      //     { iconName: "heart", text: "Santunan santri yatim penghafal Qur'an" },
      //     { iconName: "users", text: "Bagian dari Rumah Qur'an Syamil Madani" },
      //   ],
      //   buttonText: "Selengkapnya",
      //   link: "/program#baitul-tarbiyah",
      // },
      {
        id: "majelis-berkah-bahagia",
        badge: "Komunitas Ibu-ibu",
        title: "Majelis Berkah Bahagia",
        description:
          "Komunitas pemberdayaan umahat (ibu-ibu muslimah) dari jamaah sekitar Baitullah, dengan kajian agama & Qur'an rutin pekanan serta program kemandirian sedekah 'Kampung Sedekah'.",
        iconName: "users",
        imagePosition: "left" as const,
        details: [
          { iconName: "calendar", text: "Kajian agama & Qur'an rutin setiap pekan" },
          { iconName: "heart", text: "Program kemandirian 'Kampung Sedekah'" },
        ],
        buttonText: "Selengkapnya",
        link: "/program#baitul-tarbiyah",
      },
      {
        id: "bmc-university",
        badge: "Pusat Pelatihan",
        title: "BMC University",
        description:
          "Ruang pelatihan yang diprogram untuk menyediakan pelatihan khusus bagi pemberdayaan para intrapreneur maupun entrepreneur, dengan harapan menjadi pusat bantu pengoptimalan kemandirian bagi jamaah dan masyarakat Surau BMC dalam menemukan jalan kemandirian, lewat membangun skill atau scale up bisnis.",
        iconName: "academic-cap",
        imagePosition: "right" as const,
        details: [
          { iconName: "users", text: "Untuk jamaah & masyarakat Surau BMC" },
          { iconName: "briefcase", text: "Fokus penguatan skill & scale up bisnis" },
        ],
        buttonText: "Selengkapnya",
        link: "/program/baitul-tarbiyah/bmc-university",
      },
      // Intrapreneur & Entrepreneur dipindah jadi 2 kategori di dalam halaman detail
      // BMC University (app/(public)/program/baitul-tarbiyah/bmc-university/page.tsx),
      // bukan lagi kartu terpisah di halaman /program.
      // {
      //   id: "intrapreneur",
      //   badge: "Kelas Pelatihan",
      //   title: "Intrapreneur",
      //   description:
      //     "Kelas pelatihan untuk penguatan skill para intrapreneur aktif atau anak muda agar memiliki skill profesional, leadership, kreativitas, dan mental berkarya, sehingga siap memberikan kontribusi terbaik di dunia kerja, perusahaan, maupun organisasi.",
      //   iconName: "briefcase",
      //   imagePosition: "left" as const,
      //   details: [
      //     { iconName: "users", text: "Untuk intrapreneur aktif & anak muda" },
      //     { iconName: "sparkles", text: "Skill profesional, leadership & kreativitas" },
      //     { iconName: "heart", text: "Mental berkarya & siap berkontribusi" },
      //   ],
      //   buttonText: "Daftar Pelatihan",
      //   link: "/program#baitul-tarbiyah",
      // },
      // {
      //   id: "entrepreneur",
      //   badge: "Kelas Pelatihan",
      //   title: "Entrepreneur",
      //   description:
      //     "Program pelatihan yang berfokus pada pengoptimalan bisnis, bagi UMKM/pemula hingga anak muda yang berencana membangun usaha dan kemandirian ekonomi — mulai dari menemukan potensi dan peluang, membangun produk, pemasaran, hingga mengembangkan bisnis yang memberikan manfaat.",
      //   iconName: "sparkles",
      //   imagePosition: "right" as const,
      //   details: [
      //     { iconName: "users", text: "Untuk UMKM/pemula & anak muda" },
      //     { iconName: "sparkles", text: "Dari ide, produk, pemasaran, hingga scale up" },
      //     { iconName: "heart", text: "Diarahkan jadi Entrepreneur, Intrapreneur, atau Santri Karya" },
      //   ],
      //   buttonText: "Daftar Pelatihan",
      //   link: "/program#baitul-tarbiyah",
      // },
    ],
  },
  {
    id: "baitulmaal",
    header: {
      badge: "Panca Baitul",
      title: "Baitulmaal",
      description: [
        "Baitul ini berperan sebagai pusat pengelolaan keuangan umat. Zakat, infak, sedekah, dan wakaf dikelola secara profesional untuk kepentingan umat — seperti membantu fakir miskin, pendidikan, dan pengembangan ekonomi.",
      ],
    },
    programs: [
      {
        id: "pengelolaan-ziswaf-umat",
        badge: "ZISWAF",
        title: "Pengelolaan ZISWAF Umat",
        description:
          "Mengelola dana Zakat, Infak, Sedekah, dan Wakaf (ZISWAF) secara profesional untuk kepentingan umat — mulai dari membantu fakir miskin, pendidikan, hingga pengembangan ekonomi.",
        iconName: "wallet",
        imagePosition: "left" as const,
        details: [
          { iconName: "heart", text: "Membantu fakir miskin" },
          { iconName: "academic-cap", text: "Mendukung pendidikan umat" },
          { iconName: "sparkles", text: "Pengembangan ekonomi umat" },
        ],
        buttonText: "Selengkapnya",
        link: "/program#baitulmaal",
      },
    ],
  },
  {
    id: "baituddakwah",
    header: {
      badge: "Panca Baitul",
      title: "Baituddakwah",
      description: [
        "Masjid aktif menjadi pusat penyebaran Islam. Dakwah bil lisan (ceramah) maupun bil hal (aksi nyata) perlu terus digalakkan untuk menyebarkan nilai-nilai Islam ke masyarakat luas.",
        "Baitud Dakwah memiliki dua goal utama dalam program dakwahnya: pertama Kepemudaan — para jamaah atau generasi anak muda sebagai calon penerus perjuangan dakwah, dan kedua Kemasjidan — para takmir/pengurus masjid beserta masjid-masjidnya yang membutuhkan support pemberdayaan.",
        "Kepemudaan di Surau BMC memiliki program pemberdayaan anak muda yang fokus dalam menguatkan pengetahuan agama, ruh spiritual, lalu membentuk pribadi generasi muda yang mandiri yang kelak diharapkan akan menjadi entrepreneur sejati.",
      ],
    },
    programs: [
      {
        id: "kajian-mindshift",
        badge: "Mingguan",
        title: "Kajian Mindshift",
        description:
          "Kajian anak muda untuk umum yang terlaksana di Surau BMC, dan sesekali diadakan juga program roadshow Mindshift di luar Surau BMC — biasanya di kampus-kampus, tempat wisata anak muda, cafe, atau tempat nongkrong yang ramah untuk dihadiri kajian. Program mingguan ini dirancang membangun mindset spiritual dan kemandirian anak muda. Kami mengundang para pakar di bidang mindset, pengembangan diri/skills, hingga tokoh entrepreneur sukses untuk menjadi inspirator bagi para anak muda.",
        iconName: "brain",
        imagePosition: "left" as const,
        details: [
          { iconName: "users", text: "Kajian anak muda untuk umum" },
          { iconName: "pin", text: "Di Surau BMC & roadshow (kampus, tempat wisata, cafe)" },
          { iconName: "mic", text: "Pakar mindset, pengembangan diri, entrepreneur" },
          { iconName: "academic-cap", text: "Lulus 2 program Kepemudaan → lanjut Kelas Khusus BMC University" },
        ],
        buttonText: "Daftar Sekarang",
        link: "/program/baituddakwah/kajian-mindshift",
      },
      {
        id: "kajian-muslimah",
        badge: "2x per Minggu",
        title: "Kajian Muslimah",
        description:
          "Program muslimah 2 kali per minggu yang didedikasikan khusus bagi para anak muda muslimah atau akhwat. Fokus utamanya adalah pembinaan dan pengembangan diri di dunia kewanitaan yang bersandarkan pada syariat Islam.",
        iconName: "female",
        imagePosition: "right" as const,
        details: [
          { iconName: "female", text: "Khusus Akhwat / Muslimah Muda" },
          { iconName: "calendar", text: "2 kali per minggu" },
          { iconName: "heart", text: "Pembinaan kewanitaan berbasis syariat Islam" },
          { iconName: "academic-cap", text: "Lulus 2 program Kepemudaan → lanjut Kelas Khusus BMC University" },
        ],
        buttonText: "Daftar Sekarang",
        link: "/program/baituddakwah/kajian-muslimah",
      },
      // {
      //   id: "dakwah-bil-lisan-bil-hal",
      //   badge: "Syiar Islam",
      //   title: "Dakwah Bil Lisan & Bil Hal",
      //   description:
      //     "Masjid aktif menjadi pusat penyebaran Islam lewat ceramah (bil lisan) maupun aksi nyata (bil hal) untuk menyebarkan nilai-nilai Islam ke masyarakat luas.",
      //   iconName: "mic",
      //   imagePosition: "left" as const,
      //   details: [
      //     { iconName: "mic", text: "Dakwah bil lisan (ceramah)" },
      //     { iconName: "heart", text: "Dakwah bil hal (aksi nyata)" },
      //   ],
      //   buttonText: "Selengkapnya",
      //   link: "/program#baituddakwah",
      // },
    ],
  },
];

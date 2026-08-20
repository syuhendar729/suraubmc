// File: src/data/programData.ts
// Data untuk halaman-halaman di menu "Program" (Kepemudaan, Baitul Tarbiyah, Baitud Dakwah, Kemasjidan)

export const kepemudaanData = {
  header: {
    badge: "Baitud Dakwah",
    title: "Program Kepemudaan",
    description:
      "Pemberdayaan anak muda yang fokus menguatkan pengetahuan agama, ruh spiritual, dan membentuk pribadi mandiri",
  },
  programs: [
    {
      id: "kajian-mindshift",
      badge: "Mingguan",
      title: "Kajian Mindshift",
      description:
        "Program mingguan yang dirancang membangun mindset spiritual dan kemandirian anak muda. Mengundang para pakar di bidang mindset, pengembangan diri/skills, hingga tokoh entrepreneur sukses untuk menjadi inspirator.",
      iconName: "brain",
      imagePosition: "left" as const,
      details: [
        { iconName: "pin", text: "Di Surau BMC & Roadshow (kampus, cafe, tempat wisata)" },
        { iconName: "users", text: "Untuk umum - anak muda" },
        { iconName: "mic", text: "Pakar mindset, pengembangan diri, entrepreneur" },
      ],
      buttonText: "Daftar Sekarang",
    },
    {
      id: "kajian-muslimah",
      badge: "2x per Minggu",
      title: "Kajian Muslimah",
      description:
        "Program yang didedikasikan khusus bagi para anak muda muslimah atau akhwat. Fokus utamanya adalah pembinaan dan pengembangan diri di dunia kewanitaan yang bersandarkan pada syariat Islam.",
      iconName: "female",
      imagePosition: "right" as const,
      details: [
        { iconName: "female", text: "Khusus Akhwat / Muslimah Muda" },
        { iconName: "heart", text: "Pembinaan kewanitaan berbasis syariat" },
        { iconName: "calendar", text: "2 kali per minggu" },
      ],
      buttonText: "Daftar Sekarang",
    },
  ],
};

export const baitulTarbiyahData = {
  header: {
    badge: "Baitul Tarbiyah/Qur'an",
    title: "Program Pendidikan",
    description: "Pusat pendidikan Qur'an dan pendidikan umum",
  },
  programs: [
    {
      id: "lumbung-quran",
      badge: "Pondok Tahfidz",
      title: "Lumbung Qur'an",
      description:
        "Menempa anak muda khususnya usia 16-25 tahun sebagai santri penghafal Qur'an yang hamilul Qur'an dan jago bisnis. Saat ini sudah hadir 10 santri mukim terpilih.",
      iconName: "academic-cap",
      imagePosition: "left" as const,
      details: [
        { iconName: "users", text: "Usia 16 - 25 tahun" },
        { iconName: "home", text: "Santri Mukim (tinggal di pondok)" },
        { iconName: "briefcase", text: "Hamilul Qur'an + Jago Bisnis" },
      ],
      buttonText: "Info Pendaftaran",
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
    },
  ],
};

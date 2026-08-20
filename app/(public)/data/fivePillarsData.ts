// File: src/data/fivePillarsData.ts

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
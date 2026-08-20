// File: src/data/homeData.ts

export const homeData = {
  heroLeft: {
    title: "Di sinilah tempat lahirnya para penghafal Al-Qur'an",
    description: "Insya Allah jika kita bergerak bersama maka semakin terasa kuat hulu awal sampai hari ini kita berdiri.",
    buttonText: "Selengkapnya →",
    buttonLink: "/about/history",
    image: "/history.jpg"
  },
  heroRight: {
    title: "Ada Pertanyaan atau Perlu Bantuan?",
    description: "Silahkan hubungi kami melalui kontak yang sudah di sediakan",
    buttonText: "Hubungi Kami →",
    buttonLink: "/contact"
  },
  programs: {
    title: "Bersama Kita Bisa Bantu Sesama",
    description: "Surau BMC terus berupaya menyebar manfaat kepada penerima yang benar-benar membutuhkan sehingga tepat sasaran.",
    items: [
      { id: 1, title: "Amal Sosial", desc: "Menebar kebaikan sebanyak mungkin untuk membantu sesama", iconName: "social" },
      { id: 2, title: "Amal Pendidikan", desc: "Membuat sistem pendidikan yang jauh lebih baik dari sebelumnya", iconName: "education" },
      { id: 3, title: "Amal Dakwah", desc: "Mengamalkan nilai dakwah sesuai syariat di kalangan masyarakat luas", iconName: "dakwah" }
    ]
  },
  
  // --- DATA BARU: PROGRAM KAMI (Tanpa Donasi, dengan Filter) ---
  ourPrograms: {
    title: "Program Kami",
    description: "Berbagai inisiatif kegiatan kebaikan di Surau BMC.",
    filters: [
      { id: 'semua', title: 'Semua Program', desc: 'Seluruh program amal Surau BMC' },
      { id: 'sosial', title: 'Amal Sosial', desc: 'Kegiatan sosial seperti bantuan dan santunan' },
      { id: 'pendidikan', title: 'Amal Pendidikan', desc: 'Kegiatan edukasi dan pendidikan' },
      { id: 'dakwah', title: 'Amal Dakwah', desc: 'Kegiatan keagamaan dan dakwah' },
      { id: 'event', title: 'Event', desc: 'Kegiatan Event Surau BMC' },
    ],
    items: [
      { id: 1, title: 'Pembinaan Karakter Pemuda', category: 'pendidikan', desc: 'Program pendidikan rutin pekanan untuk membentuk karakter Islami pemuda yang tangguh dan mandiri.', image: '/history.jpg', link: '#' },
      { id: 2, title: 'Penyaluran Santunan Yatim', category: 'sosial', desc: 'Kegiatan penyaluran bantuan pangan dan pendidikan untuk anak yatim di sekitar lingkungan Surau BMC.', image: '/history.jpg', link: '#' },
      { id: 3, title: 'Kajian Rutin Muslimah', category: 'dakwah', desc: 'Majelis taklim khusus muslimah untuk memperdalam ilmu agama dan merajut ukhuwah.', image: '/history.jpg', link: '#' },
      { id: 4, title: 'Tabligh Akbar Muharram', category: 'event', desc: 'Acara besar tahunan menyambut tahun baru Islam yang terbuka untuk seluruh masyarakat umum.', image: '/history.jpg', link: '#' },
    ]
  },

  // --- DATA BARU: PROGRAM DONASI (Kartu Mendatar dengan Progress Bar) ---
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
        description: "Dukungan penuh untuk biaya hidup dan pendidikan para santri terpilih yang sedang menghafal Al-Qur'an.",
        collected: "Rp 8.200.000",
        target: "Rp 20.000.000",
        progress: 41, 
        image: "/history.jpg", 
        link: "/donation/beasiswa"
      }
    ]
  }
};
// File: src/data/footerData.ts

export const footerData = {
  companyInfo: {
    name: "Surau BMC",
    description: "Surau Berkah Madani Center (Surau BMC) adalah lembaga profesional dan pusat inkubator peradaban pemuda berbasis Al-Qur'an dan Masjid yang berlokasi di Bandar Lampung.",
  },
  socialMedia: [
    { id: 'facebook', link: '#', bgColor: 'bg-[#1877F2]' },
    { id: 'instagram', link: 'https://instagram.com/bmc.surau', bgColor: 'bg-[#E4405F]' },
    { id: 'tiktok', link: '#', bgColor: 'bg-[#000000]' },
    { id: 'youtube', link: '#', bgColor: 'bg-[#CD201F]' },
  ],
  linkColumns: [
    {
      title: "Tentang",
      links: [
        { label: "Tentang Kami", url: "/about/history" },
        { label: "Visi & Misi", url: "/about/vision-mision" },
        { label: "Lima Pilar", url: "/about/five-pillars" },
        { label: "Kontak", url: "/contact" },
        { label: "Berita & Artikel", url: "/article" },
      ]
    },
    {
      title: "Program",
      links: [
        { label: "Lumbung Qur'an", url: "#" },
        { label: "Rumah Qur'an Syamil Madani", url: "#" },
        { label: "Yatim Bahagia", url: "#" },
        { label: "Majelis Berkah Bahagia", url: "#" },
        { label: "Kampung Sedekah", url: "#" },
      ]
    },
    {
      title: "Unit Usaha & Donasi",
      links: [
        { label: "Sentra Masjid Indonesia", url: "#" },
        { label: "Sentra Karpet", url: "#" },
        { label: "Zakat & Infaq", url: "/donation" },
        { label: "Wakaf Produktif", url: "/donation" },
      ]
    }
  ],
  copyright: "© 2026 Surau Berkah Madani Center (Surau BMC) - Terintegrasi Smart Masjid 5.0"
};
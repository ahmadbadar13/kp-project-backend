-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 20 Jan 2025 pada 04.30
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_project_kpu`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi_hp`
--

CREATE TABLE `divisi_hp` (
  `id` int(11) NOT NULL,
  `nama_div_hp` varchar(255) NOT NULL,
  `nip_hp` bigint(20) NOT NULL,
  `foto_div_hp` varchar(500) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `email` text NOT NULL,
  `masa_jabatan` text NOT NULL,
  `komentar_div_hp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `divisi_hp`
--

INSERT INTO `divisi_hp` (`id`, `nama_div_hp`, `nip_hp`, `foto_div_hp`, `tanggal_lahir`, `email`, `masa_jabatan`, `komentar_div_hp`) VALUES
(61, 'Emsidelva Okasti, S.ST.', 123456789123456789, '/uploads/EMSIDELVA OKASTI.jpeg', '1982-10-04', 'hp@kpu.com', '2023-2028', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi_kurl`
--

CREATE TABLE `divisi_kurl` (
  `id` int(11) NOT NULL,
  `nama_div_kurl` varchar(255) NOT NULL,
  `nip_kurl` bigint(20) NOT NULL,
  `foto_div_kurl` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `email` text NOT NULL,
  `masa_jabatan` text NOT NULL,
  `komentar_div_kurl` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `divisi_kurl`
--

INSERT INTO `divisi_kurl` (`id`, `nama_div_kurl`, `nip_kurl`, `foto_div_kurl`, `tanggal_lahir`, `email`, `masa_jabatan`, `komentar_div_kurl`) VALUES
(15, 'Anzhar Ishal Afryand, M.Pd', 123456789123456789, '/uploads/ANZHAR ISHAL AFRYAND.jpeg', '1993-06-22', 'kurl@kpu.com', '2023-2028', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi_pdi`
--

CREATE TABLE `divisi_pdi` (
  `id` int(11) NOT NULL,
  `nama_div_pdi` varchar(255) NOT NULL,
  `nip_pdi` bigint(20) NOT NULL,
  `foto_div_pdi` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `email` text NOT NULL,
  `masa_jabatan` text NOT NULL,
  `komentar_div_pdi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `divisi_pdi`
--

INSERT INTO `divisi_pdi` (`id`, `nama_div_pdi`, `nip_pdi`, `foto_div_pdi`, `tanggal_lahir`, `email`, `masa_jabatan`, `komentar_div_pdi`) VALUES
(11, 'Djayadi Rachmat', 123456789123456789, '/uploads/DJAYADI RACHMAT.jpeg', '1964-09-11', 'pdi@kpu.com', '2023-2028', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi_sppp_sdm`
--

CREATE TABLE `divisi_sppp_sdm` (
  `id` int(11) NOT NULL,
  `nama_div_sppp_sdm` varchar(255) NOT NULL,
  `nip_sppp_sdm` bigint(20) NOT NULL,
  `foto_div_sppp_sdm` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `email` text NOT NULL,
  `masa_jabatan` text NOT NULL,
  `komentar_div_sppp_sdm` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `divisi_sppp_sdm`
--

INSERT INTO `divisi_sppp_sdm` (`id`, `nama_div_sppp_sdm`, `nip_sppp_sdm`, `foto_div_sppp_sdm`, `tanggal_lahir`, `email`, `masa_jabatan`, `komentar_div_sppp_sdm`) VALUES
(9, 'La Media, S.Hut., MM', 123456789123456789, '/uploads/LA MEDIA.jpeg', '1981-02-02', 'spppsdm@kpu.com', '2023-2028', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi_tp`
--

CREATE TABLE `divisi_tp` (
  `id` int(11) NOT NULL,
  `nama_div_tp` varchar(255) NOT NULL,
  `nip_tp` bigint(20) NOT NULL,
  `foto_div_tp` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `email` text NOT NULL,
  `masa_jabatan` text NOT NULL,
  `komentar_div_tp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `divisi_tp`
--

INSERT INTO `divisi_tp` (`id`, `nama_div_tp`, `nip_tp`, `foto_div_tp`, `tanggal_lahir`, `email`, `masa_jabatan`, `komentar_div_tp`) VALUES
(6, 'Yosi Sundansyah, S.T., S.Pd.i', 123456789123456789, '/uploads/YOSI SUNDANSYAH.jpeg', '1980-05-20', 'tp@kpu.com', '2023-2028', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`id`, `title`, `date`, `content`, `image`) VALUES
(6, 'Dokter Bicara Sisi Medis Santet \'Dikirim\' Lewat Makanan-Minuman', '2024-11-09', '<p>Media sosial baru-baru ini dihebohkan dengan fenomena santet online. Ilmu hitam tersebut kabarnya bisa <strong>\'dikirim\'</strong> melalui makanan atau minuman kepada targetnya. Efeknya bermacam-macam, \'muntah darah\', kaki bengkak, hingga perut yang membesar.<br><br><i>\"Katanya santet ini bukan hal ghoib, tapi dengan cara diracun. Jadi bang fer hati-hati selalu, apalagi sama orang yg nggak dikenal, jangan terima makanan/minuman atau barang apapun,\"</i> tulis salah satu akun di X, dikutip detikcom Sabtu (9/11/2024).<br><br><i>\"Kalo dikasih makanan, minuman ato jabat tangan jangan mau. Salah satu trik santet itu dengan racun makan, minum ato olesan racun saat jabat tangan,\"</i> tulis akun lain.</p><p>&nbsp;</p><p>Sumber: <a href=\"https://health.detik.com/berita-detikhealth/d-7630083/dokter-bicara-sisi-medis-santet-dikirim-lewat-makanan-minuman\"><i>healt.detik.com</i></a></p>', '/uploads/1731137259040.jpeg'),
(7, 'Kevin Diks Resmi Jadi WNI, Lini Belakang Indonesia Bertabur Bintang', '2024-11-09', '<p><strong>Kevin Diks Bakarbessy</strong>&nbsp;resmi jadi Warga Negara Indonesia (WNI). Hal ini membuat lini belakang&nbsp;Timnas Indonesia makin dipenuhi pemain-pemain bintang.</p><p><br>Kevin Diks melakukan sumpah kewarganegaraan di KBRI Copenhagen pada Jumat (8/11). Hal itu membuat Kevin Diks bakal segera memperkuat Timnas Indonesia.<br><br>Dari segi pengalaman, Kevin Diks yang berusia 28 tahun punya jam terbang yang tinggi di kompetisi Eropa. Ia pernah bermain untuk Vittesse dan Feyenoord lalu kini jadi pilihan utama di Copenhagen.</p><p>&nbsp;</p><p>Sumber: <a href=\"https://www.cnnindonesia.com/olahraga/20241108220545-142-1164645/kevin-diks-resmi-jadi-wni-lini-belakang-indonesia-bertabur-bintang\"><i>cnnindonesia.com</i></a></p>', '/uploads/1731137496923.jpeg'),
(8, 'Apakah Giant Sea Wall Solusi Cegah Jawa Tenggelam? Ini Kata Paka  Baca artikel CNN Indonesia \"Apakah Giant Sea Wall Solusi Cegah Jawa Tenggelam? Ini Kata Pakar', '2024-11-09', '<p>Presiden Prabowo Subianto&nbsp;berencana membangun tanggul laut raksasa atau&nbsp;giant sea wall di sepanjang pesisir Banten hingga Jawa Timur, demi melindungi wilayah pesisir yang berpotensi tenggelam.</p><p><br>Utusan Khusus Presiden Bidang Energi dan Lingkungan Hidup Hashim Djojohadikusumo mengatakan proyek tanggul laut raksasa itu harus segera dimulai. Pasalnya, ada ancaman sawa-sawa di pantai utara (pantura) Pulau Jawa akan tenggelam.<br><br>\"Program Pak Prabowo adalah kita bikin tanggul laut raksasa dari Banten sampai ke Jawa Timur. Program ini mungkin memakan waktu 20 tahun. Mungkin dua atau tiga presiden yang melaksanakan. Tapi harus mulai sekarang,\" ujar adik Prabowo itu pada akhir Oktober lalu.<br><br>Sumber: <a href=\"https://www.cnnindonesia.com/teknologi/20241108074000-199-1164254/apakah-giant-sea-wall-solusi-cegah-jawa-tenggelam-ini-kata-pakar?mtype=mpc.ctr.A-boxccxmpcxmp-modelA\"><i>cnnindonesia.com</i></a></p>', '/uploads/1731137769425.jpeg'),
(10, 'Detik-detik Laka Beruntun Tewaskan 2 Orang di Ngaliyan Semarang', '2024-11-21', '<p><strong>Kecelakaan beruntun</strong> terjadi di turunan Silayur, Kelurahan Ngaliyan, Kecamatan Ngaliyan, Kota <i>Semarang</i>. Truk mengalami rem blong sehingga menabrak beberapa toko dan menewaskan dua orang.<br>Pantauan detikJateng di lokasi, tampak truk tronton yang mengarah ke barat itu menabrak billboard dan beberapa kios milik warga. Mulai dari toko martabak, tempat cucian motor, tempat laundry, hingga ujungnya di toko jus.<br><br>Beberapa relawan tim SAR pun telah melakukan evakuasi dan berhasil mengeluarkan sopir yang sebelumnya tergencet di truk sekitar pukul 18.15 WITA.</p><p>&nbsp;</p><p>Sumber: <a href=\"https://www.detik.com/jateng/berita/d-7650461/detik-detik-laka-beruntun-tewaskan-2-orang-di-ngaliyan-semarang\">detik.com</a></p>', '/uploads/1732233903565.jpeg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sekretaris`
--

CREATE TABLE `sekretaris` (
  `id` int(11) NOT NULL,
  `nama_sekretaris` varchar(255) NOT NULL,
  `nip_sekretaris` bigint(20) NOT NULL,
  `foto_sekretaris` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `email` text NOT NULL,
  `masa_jabatan` text DEFAULT NULL,
  `komentar_sekretaris` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sekretaris`
--

INSERT INTO `sekretaris` (`id`, `nama_sekretaris`, `nip_sekretaris`, `foto_sekretaris`, `tanggal_lahir`, `email`, `masa_jabatan`, `komentar_sekretaris`) VALUES
(11, 'Charlyasi M. Siadari, S.Pd, M.Si', 197904272009021005, '/uploads/CHARLYASI MANGARATUA SIADARI.jpeg', '1981-02-02', 'sekretaris@kpu.com', '2023-2028', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_bagian_hsdm`
--

CREATE TABLE `sub_bagian_hsdm` (
  `id` int(11) NOT NULL,
  `nama_sb_hsdm` varchar(255) NOT NULL,
  `nip_sb_hsdm` varchar(30) NOT NULL,
  `posisi_sb_hsdm` varchar(50) NOT NULL,
  `foto_sb_hsdm` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `email` text NOT NULL,
  `status_kepegawaian` varchar(50) NOT NULL,
  `surat_keputusan` text NOT NULL,
  `komentar_sb_hsdm` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sub_bagian_hsdm`
--

INSERT INTO `sub_bagian_hsdm` (`id`, `nama_sb_hsdm`, `nip_sb_hsdm`, `posisi_sb_hsdm`, `foto_sb_hsdm`, `tanggal_lahir`, `email`, `status_kepegawaian`, `surat_keputusan`, `komentar_sb_hsdm`) VALUES
(36, 'Yusti Rahayu, SH', '198511062010122001', 'Kepala', '/uploads/FOTO DEFAULT.jpg', '1978-05-12', 'email10@kpu.com', 'Penata / I.a', 'https://drive.google.com/file/d/1gkOTx4wgjErYps_qN8j-RLmiPkmcQ2HY/view?usp=sharing', NULL),
(37, 'Rian Gustian', 'PPNPN', 'Anggota', '/uploads/FOTO DEFAULT.jpg', '1987-07-20', 'email9@kpu.com', '1 Tahun 7 Bulan', 'https://drive.google.com/file/d/1gkOTx4wgjErYps_qN8j-RLmiPkmcQ2HY/view?usp=sharing', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_bagian_kul`
--

CREATE TABLE `sub_bagian_kul` (
  `id` int(11) NOT NULL,
  `nama_sb_kul` varchar(255) NOT NULL,
  `nip_sb_kul` varchar(30) NOT NULL,
  `posisi_sb_kul` varchar(50) NOT NULL,
  `foto_sb_kul` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `email` text NOT NULL,
  `status_kepegawaian` varchar(50) NOT NULL,
  `surat_keputusan` text NOT NULL,
  `komentar_sb_kul` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sub_bagian_kul`
--

INSERT INTO `sub_bagian_kul` (`id`, `nama_sb_kul`, `nip_sb_kul`, `posisi_sb_kul`, `foto_sb_kul`, `tanggal_lahir`, `email`, `status_kepegawaian`, `surat_keputusan`, `komentar_sb_kul`) VALUES
(20, 'Winda Winiarni, SH', '198004172009122006', 'Staff', '/uploads/FOTO DEFAULT.jpg', '1983-09-21', 'email12@kpu.com', 'Penata Muda / II.c', 'https://drive.google.com/file/d/1gkOTx4wgjErYps_qN8j-RLmiPkmcQ2HY/view?usp=sharing', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_bagian_pdi`
--

CREATE TABLE `sub_bagian_pdi` (
  `id` int(11) NOT NULL,
  `nama_sb_pdi` varchar(255) NOT NULL,
  `nip_sb_pdi` varchar(30) NOT NULL,
  `posisi_sb_pdi` varchar(50) NOT NULL,
  `foto_sb_pdi` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `email` text NOT NULL,
  `status_kepegawaian` varchar(50) NOT NULL,
  `surat_keputusan` text NOT NULL,
  `komentar_sb_pdi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sub_bagian_pdi`
--

INSERT INTO `sub_bagian_pdi` (`id`, `nama_sb_pdi`, `nip_sb_pdi`, `posisi_sb_pdi`, `foto_sb_pdi`, `tanggal_lahir`, `email`, `status_kepegawaian`, `surat_keputusan`, `komentar_sb_pdi`) VALUES
(23, 'Rian Gustian', 'PPNPN', 'Anggota', '/uploads/FOTO DEFAULT.jpg', '1987-07-20', 'email9@kpu.com', '1 Tahun 7 Bulan', 'https://drive.google.com/file/d/1gkOTx4wgjErYps_qN8j-RLmiPkmcQ2HY/view?usp=sharing', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_bagian_tppph`
--

CREATE TABLE `sub_bagian_tppph` (
  `id` int(11) NOT NULL,
  `nama_sb_tppph` varchar(255) NOT NULL,
  `nip_sb_tppph` varchar(30) NOT NULL,
  `posisi_sb_tppph` varchar(50) NOT NULL,
  `foto_sb_tppph` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `email` text NOT NULL,
  `status_kepegawaian` varchar(50) NOT NULL,
  `surat_keputusan` text NOT NULL,
  `komentar_sb_tppph` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sub_bagian_tppph`
--

INSERT INTO `sub_bagian_tppph` (`id`, `nama_sb_tppph`, `nip_sb_tppph`, `posisi_sb_tppph`, `foto_sb_tppph`, `tanggal_lahir`, `email`, `status_kepegawaian`, `surat_keputusan`, `komentar_sb_tppph`) VALUES
(27, 'Yusti Rahayu, SH', '198511062010122001', 'Kepala', '/uploads/FOTO DEFAULT.jpg', '1978-05-12', 'email10@kpu.com', 'Penata / I.a', 'https://drive.google.com/file/d/1gkOTx4wgjErYps_qN8j-RLmiPkmcQ2HY/view?usp=sharing', NULL),
(28, 'Risad Bachtiar, A.Md', '198412092009021005', 'Staff', '/uploads/FOTO DEFAULT.jpg', '1982-12-09', 'email7@kpu.com', 'Penata Muda / II.c', 'https://drive.google.com/file/d/1gkOTx4wgjErYps_qN8j-RLmiPkmcQ2HY/view?usp=sharing', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `role` enum('operator','admin') NOT NULL,
  `password` varchar(250) NOT NULL,
  `isVerified` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `email`, `role`, `password`, `isVerified`) VALUES
(4, 'adminkpu1@gmail.com', 'admin', '$2b$10$FUad6XAfSr2pPOtEjT8.nOwQ.j2f8QcYgJODcSzxl2Bw5pwRR5rMq', 1),
(5, 'operatorkpu1@gmail.com', 'operator', '$2b$10$nRZdtpIcNtpeTXutfqnfPu4mBDEGJhFh.LQWjxYffOtp8z6HkjOUK', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `divisi_hp`
--
ALTER TABLE `divisi_hp`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `divisi_kurl`
--
ALTER TABLE `divisi_kurl`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `divisi_pdi`
--
ALTER TABLE `divisi_pdi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `divisi_sppp_sdm`
--
ALTER TABLE `divisi_sppp_sdm`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `divisi_tp`
--
ALTER TABLE `divisi_tp`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sekretaris`
--
ALTER TABLE `sekretaris`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sub_bagian_hsdm`
--
ALTER TABLE `sub_bagian_hsdm`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sub_bagian_kul`
--
ALTER TABLE `sub_bagian_kul`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sub_bagian_pdi`
--
ALTER TABLE `sub_bagian_pdi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sub_bagian_tppph`
--
ALTER TABLE `sub_bagian_tppph`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `divisi_hp`
--
ALTER TABLE `divisi_hp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT untuk tabel `divisi_kurl`
--
ALTER TABLE `divisi_kurl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `divisi_pdi`
--
ALTER TABLE `divisi_pdi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `divisi_sppp_sdm`
--
ALTER TABLE `divisi_sppp_sdm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `divisi_tp`
--
ALTER TABLE `divisi_tp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `sekretaris`
--
ALTER TABLE `sekretaris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_hsdm`
--
ALTER TABLE `sub_bagian_hsdm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_kul`
--
ALTER TABLE `sub_bagian_kul`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_pdi`
--
ALTER TABLE `sub_bagian_pdi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_tppph`
--
ALTER TABLE `sub_bagian_tppph`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

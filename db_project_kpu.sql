-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Nov 2024 pada 17.45
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

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
-- Struktur dari tabel `divisi`
--

CREATE TABLE `divisi` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `nama_divisi` enum('HP','KURL','PDI','SPPP_SDM','TP') NOT NULL,
  `komentar_divisi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi_hp`
--

CREATE TABLE `divisi_hp` (
  `id` int(11) NOT NULL,
  `nama_div_hp` varchar(255) NOT NULL,
  `foto_div_hp` varchar(255) NOT NULL,
  `komentar_div_hp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `divisi_hp`
--

INSERT INTO `divisi_hp` (`id`, `nama_div_hp`, `foto_div_hp`, `komentar_div_hp`) VALUES
(72, 'Emsidelva Okasti, S.ST.', '/uploads/1731514559789.jpeg', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi_kurl`
--

CREATE TABLE `divisi_kurl` (
  `id` int(11) NOT NULL,
  `nama_div_kurl` varchar(255) NOT NULL,
  `foto_div_kurl` varchar(255) NOT NULL,
  `komentar_div_kurl` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `divisi_kurl`
--

INSERT INTO `divisi_kurl` (`id`, `nama_div_kurl`, `foto_div_kurl`, `komentar_div_kurl`) VALUES
(23, 'Anzhar Ishal Afryand, M.Pd', '/uploads/1731512269025.jpeg', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi_pdi`
--

CREATE TABLE `divisi_pdi` (
  `id` int(11) NOT NULL,
  `nama_div_pdi` varchar(255) NOT NULL,
  `foto_div_pdi` varchar(255) NOT NULL,
  `komentar_div_pdi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `divisi_pdi`
--

INSERT INTO `divisi_pdi` (`id`, `nama_div_pdi`, `foto_div_pdi`, `komentar_div_pdi`) VALUES
(14, 'Djayadi Rachmat', '/uploads/1731514530551.jpeg', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi_sppp_sdm`
--

CREATE TABLE `divisi_sppp_sdm` (
  `id` int(11) NOT NULL,
  `nama_div_sppp_sdm` varchar(255) NOT NULL,
  `foto_div_sppp_sdm` varchar(255) NOT NULL,
  `komentar_div_sppp_sdm` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `divisi_sppp_sdm`
--

INSERT INTO `divisi_sppp_sdm` (`id`, `nama_div_sppp_sdm`, `foto_div_sppp_sdm`, `komentar_div_sppp_sdm`) VALUES
(11, 'La Media, S.Hut., MM', '/uploads/1731514660309.jpeg', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi_tp`
--

CREATE TABLE `divisi_tp` (
  `id` int(11) NOT NULL,
  `nama_div_tp` varchar(255) NOT NULL,
  `foto_div_tp` varchar(255) NOT NULL,
  `komentar_div_tp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `divisi_tp`
--

INSERT INTO `divisi_tp` (`id`, `nama_div_tp`, `foto_div_tp`, `komentar_div_tp`) VALUES
(17, 'Yosi Sundansyah, S.T., S.Pd.', '/uploads/1731514331457.jpeg', '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`id`, `title`, `date`, `content`, `image`) VALUES
(6, 'Dokter Bicara Sisi Medis Santet \'Dikirim\' Lewat Makanan-Minuman', '2024-11-09', '<p>Media sosial baru-baru ini dihebohkan dengan fenomena santet online. Ilmu hitam tersebut kabarnya bisa <strong>\'dikirim\'</strong> melalui makanan atau minuman kepada targetnya. Efeknya bermacam-macam, \'muntah darah\', kaki bengkak, hingga perut yang membesar.<br><br><i>\"Katanya santet ini bukan hal ghoib, tapi dengan cara diracun. Jadi bang fer hati-hati selalu, apalagi sama orang yg nggak dikenal, jangan terima makanan/minuman atau barang apapun,\"</i> tulis salah satu akun di X, dikutip detikcom Sabtu (9/11/2024).<br><br><i>\"Kalo dikasih makanan, minuman ato jabat tangan jangan mau. Salah satu trik santet itu dengan racun makan, minum ato olesan racun saat jabat tangan,\"</i> tulis akun lain.</p><p>&nbsp;</p><p>Sumber: <a href=\"https://health.detik.com/berita-detikhealth/d-7630083/dokter-bicara-sisi-medis-santet-dikirim-lewat-makanan-minuman\"><i>healt.detik.com</i></a></p>', '/uploads/1731137259040.jpeg'),
(7, 'Kevin Diks Resmi Jadi WNI, Lini Belakang Indonesia Bertabur Bintang', '2024-11-09', '<p><strong>Kevin Diks Bakarbessy</strong>&nbsp;resmi jadi Warga Negara Indonesia (WNI). Hal ini membuat lini belakang&nbsp;Timnas Indonesia makin dipenuhi pemain-pemain bintang.</p><p><br>Kevin Diks melakukan sumpah kewarganegaraan di KBRI Copenhagen pada Jumat (8/11). Hal itu membuat Kevin Diks bakal segera memperkuat Timnas Indonesia.<br><br>Dari segi pengalaman, Kevin Diks yang berusia 28 tahun punya jam terbang yang tinggi di kompetisi Eropa. Ia pernah bermain untuk Vittesse dan Feyenoord lalu kini jadi pilihan utama di Copenhagen.</p><p>&nbsp;</p><p>Sumber: <a href=\"https://www.cnnindonesia.com/olahraga/20241108220545-142-1164645/kevin-diks-resmi-jadi-wni-lini-belakang-indonesia-bertabur-bintang\"><i>cnnindonesia.com</i></a></p>', '/uploads/1731137496923.jpeg'),
(8, 'Apakah Giant Sea Wall Solusi Cegah Jawa Tenggelam? Ini Kata Paka  Baca artikel CNN Indonesia \"Apakah Giant Sea Wall Solusi Cegah Jawa Tenggelam? Ini Kata Pakar', '2024-11-09', '<p>Presiden Prabowo Subianto&nbsp;berencana membangun tanggul laut raksasa atau&nbsp;giant sea wall di sepanjang pesisir Banten hingga Jawa Timur, demi melindungi wilayah pesisir yang berpotensi tenggelam.</p><p><br>Utusan Khusus Presiden Bidang Energi dan Lingkungan Hidup Hashim Djojohadikusumo mengatakan proyek tanggul laut raksasa itu harus segera dimulai. Pasalnya, ada ancaman sawa-sawa di pantai utara (pantura) Pulau Jawa akan tenggelam.<br><br>\"Program Pak Prabowo adalah kita bikin tanggul laut raksasa dari Banten sampai ke Jawa Timur. Program ini mungkin memakan waktu 20 tahun. Mungkin dua atau tiga presiden yang melaksanakan. Tapi harus mulai sekarang,\" ujar adik Prabowo itu pada akhir Oktober lalu.<br><br>Sumber: <a href=\"https://www.cnnindonesia.com/teknologi/20241108074000-199-1164254/apakah-giant-sea-wall-solusi-cegah-jawa-tenggelam-ini-kata-pakar?mtype=mpc.ctr.A-boxccxmpcxmp-modelA\"><i>cnnindonesia.com</i></a></p>', '/uploads/1731137769425.jpeg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sekretaris`
--

CREATE TABLE `sekretaris` (
  `id` int(11) NOT NULL,
  `nama_sekretaris` varchar(255) NOT NULL,
  `nip_sekretaris` bigint(20) NOT NULL,
  `foto_sekretaris` varchar(255) NOT NULL,
  `komentar_sekretaris` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sekretaris`
--

INSERT INTO `sekretaris` (`id`, `nama_sekretaris`, `nip_sekretaris`, `foto_sekretaris`, `komentar_sekretaris`) VALUES
(15, 'Charlyasi M. Siadari, S.Pd, M.Si', 197904272009021000, '/uploads/1731512472336.jpeg', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_bagian_hsdm`
--

CREATE TABLE `sub_bagian_hsdm` (
  `id` int(11) NOT NULL,
  `nama_sb_hsdm` varchar(255) NOT NULL,
  `nip_sb_hsdm` varchar(30) NOT NULL,
  `posisi_sb_hsdm` enum('Ketua','Anggota') NOT NULL,
  `foto_sb_hsdm` varchar(255) NOT NULL,
  `komentar_sb_hsdm` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sub_bagian_hsdm`
--

INSERT INTO `sub_bagian_hsdm` (`id`, `nama_sb_hsdm`, `nip_sb_hsdm`, `posisi_sb_hsdm`, `foto_sb_hsdm`, `komentar_sb_hsdm`) VALUES
(8, 'Yusti Rahayu, SH', '198511062010122001', 'Ketua', '/uploads/1729874301374.jpg', NULL),
(9, 'Ani Suhaeni, S.Sos', '198310172009122005', 'Anggota', '/uploads/1731145769301.jpg', 'adwdwd'),
(10, 'Winda Winiarni, SH', '198004172009122006', 'Anggota', '/uploads/1731145773673.jpg', NULL),
(11, 'Dhea Sulasi Putri', 'PPNPN', 'Anggota', '/uploads/1731145777961.jpg', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_bagian_kul`
--

CREATE TABLE `sub_bagian_kul` (
  `id` int(11) NOT NULL,
  `nama_sb_kul` varchar(255) NOT NULL,
  `nip_sb_kul` varchar(30) NOT NULL,
  `posisi_sb_kul` enum('Ketua','Anggota') NOT NULL,
  `foto_sb_kul` varchar(255) NOT NULL,
  `komentar_sb_kul` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sub_bagian_kul`
--

INSERT INTO `sub_bagian_kul` (`id`, `nama_sb_kul`, `nip_sb_kul`, `posisi_sb_kul`, `foto_sb_kul`, `komentar_sb_kul`) VALUES
(6, 'Sri Rahayu Sundayani, S.Sos', '197706152009122000', 'Ketua', '/uploads/1731145786426.jpg', 'sdgfgsdsdggs'),
(7, 'Fidalina, SE', '198202042010122003', 'Anggota', '/uploads/1731145790953.jpg', 'sgdsdgfsdggs'),
(8, 'Nurul Eka Sukma, SE', '198402072010122005', 'Anggota', '/uploads/1731145795078.jpg', NULL),
(9, 'Indrayana, A.Md', '198506102010121003', 'Anggota', '/uploads/1731145800570.jpg', NULL),
(10, 'Gita Sonia, Amd.Kom', '199506142019032006', 'Anggota', '/uploads/1731145806584.jpg', NULL),
(11, 'Tria Kahaerunisa', 'PPNPN', 'Anggota', '/uploads/1731145811593.jpg', NULL),
(12, 'Rukmini', 'PPNPN', 'Anggota', '/uploads/1731145816097.jpg', NULL),
(13, 'Yayan Taryana', 'PPNPN', 'Anggota', '/uploads/1731145823494.jpg', NULL),
(14, 'Ahmad Sumadi', 'PPNPN', 'Anggota', '/uploads/1731145828721.jpg', NULL),
(15, 'Ahmad Solihin', 'PPNPN', 'Anggota', '/uploads/1731145833727.jpg', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_bagian_pdi`
--

CREATE TABLE `sub_bagian_pdi` (
  `id` int(11) NOT NULL,
  `nama_sb_pdi` varchar(255) NOT NULL,
  `nip_sb_pdi` varchar(30) NOT NULL,
  `posisi_sb_pdi` enum('Ketua','Anggota') NOT NULL,
  `foto_sb_pdi` varchar(255) NOT NULL,
  `komentar_sb_pdi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sub_bagian_pdi`
--

INSERT INTO `sub_bagian_pdi` (`id`, `nama_sb_pdi`, `nip_sb_pdi`, `posisi_sb_pdi`, `foto_sb_pdi`, `komentar_sb_pdi`) VALUES
(7, 'Vivid Firmawan, SH', '197709142009021001', 'Ketua', '/uploads/1731145721235.jpg', 'sdggsdfgsgsd'),
(8, 'Risad Bachtiar, A.Md', '198412092009021005', 'Anggota', '/uploads/1731145726289.jpg', NULL),
(9, 'Aulia Rahman', 'PPNPN', 'Anggota', '/uploads/1731145731545.jpg', NULL),
(10, 'Rian Gustian', 'PPNPN', 'Anggota', '/uploads/1731145736948.jpg', 'sgdsgdsgdsdg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_bagian_tppph`
--

CREATE TABLE `sub_bagian_tppph` (
  `id` int(11) NOT NULL,
  `nama_sb_tppph` varchar(255) NOT NULL,
  `nip_sb_tppph` varchar(30) NOT NULL,
  `posisi_sb_tppph` enum('Ketua','Anggota') NOT NULL,
  `foto_sb_tppph` varchar(255) NOT NULL,
  `komentar_sb_tppph` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sub_bagian_tppph`
--

INSERT INTO `sub_bagian_tppph` (`id`, `nama_sb_tppph`, `nip_sb_tppph`, `posisi_sb_tppph`, `foto_sb_tppph`, `komentar_sb_tppph`) VALUES
(17, 'Wina Winiarti, SH', '198308242009122002', 'Ketua', '/uploads/1731141117832.jpg', 'gsdsgdfgsgsdgds'),
(18, 'Devi Yuni Astuti', '198006242009122002', 'Anggota', '/uploads/1731141122274.jpg', NULL),
(19, 'Devina Napitupulu', 'PPNPN', 'Anggota', '/uploads/1731141128314.jpg', NULL),
(20, 'Iyus Rusyana', 'PPNPN', 'Anggota', '/uploads/1731141137774.jpg', NULL),
(21, 'Taufik Mulyana', 'PPNPN', 'Anggota', '/uploads/1731141144257.jpg', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `role` enum('operator','admin') NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `email`, `role`, `password`) VALUES
(4, 'adminkpu1@gmail.com', 'admin', '$2b$10$w1u.QeaHUdm.Xf3GUbhNVOQlbX6eKNa4iKQxepQLNZtr2MCAHMaLm'),
(5, 'operatorkpu1@gmail.com', 'operator', '$2b$10$YbFOfBrfRuQf/urkDXRituogIGlSwtjS53rbEnlnfBXFBclYMI4Ue');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `divisi`
--
ALTER TABLE `divisi`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT untuk tabel `divisi`
--
ALTER TABLE `divisi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `divisi_hp`
--
ALTER TABLE `divisi_hp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT untuk tabel `divisi_kurl`
--
ALTER TABLE `divisi_kurl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT untuk tabel `divisi_pdi`
--
ALTER TABLE `divisi_pdi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `divisi_sppp_sdm`
--
ALTER TABLE `divisi_sppp_sdm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `divisi_tp`
--
ALTER TABLE `divisi_tp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `sekretaris`
--
ALTER TABLE `sekretaris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_hsdm`
--
ALTER TABLE `sub_bagian_hsdm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_kul`
--
ALTER TABLE `sub_bagian_kul`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_pdi`
--
ALTER TABLE `sub_bagian_pdi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_tppph`
--
ALTER TABLE `sub_bagian_tppph`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

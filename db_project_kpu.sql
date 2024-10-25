-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 25 Okt 2024 pada 07.31
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
(68, 'tes', '/uploads/1729825613145.jpg', '');

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
(19, 'tesss', '/uploads/1729834023606.jpg', NULL);

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
(10, 'Djayadi Rachmat', '/uploads/1725722452207.png', 'tes');

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
(7, 'La Media, S.Hut., MM', '/uploads/1725720395262.png', 'tess');

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
(12, 'Yosi Sundansyah, S.T., S.Pd.i', '/uploads/1725722428543.png', 'tes');

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
(11, 'easasasa', 24242424, '/uploads/1729267661947.png', 'tess');

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
(8, 'Yusti Rahayu, SH', '198511062010122001', 'Ketua', '/uploads/1725720678122.png', 'ress'),
(9, 'Ani Suhaeni, S.Sos', '198310172009122005', 'Anggota', '/uploads/1725721090178.png', NULL),
(10, 'Winda Winiarni, SH', '198004172009122006', 'Anggota', '/uploads/1725721117537.png', NULL),
(11, 'Dhea Sulasi Putri', 'PPNPN', 'Anggota', '/uploads/1725721136735.png', NULL);

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
(6, 'Sri Rahayu Sundayani, S.Sos', '197706152009122000', 'Ketua', '/uploads/1725720719951.png', 'tess'),
(7, 'Fidalina, SE', '198202042010122003', 'Anggota', '/uploads/1725721169558.png', NULL),
(8, 'Nurul Eka Sukma, SE', '198402072010122005', 'Anggota', '/uploads/1725721198463.png', NULL),
(9, 'Indrayana, A.Md', '198506102010121003', 'Anggota', '/uploads/1725721231330.png', NULL),
(10, 'Gita Sonia, Amd.Kom', '199506142019032006', 'Anggota', '/uploads/1725721261959.jpeg', NULL),
(11, 'Tria Kahaerunisa', 'PPNPN', 'Anggota', '/uploads/1725721287569.png', NULL),
(12, 'Rukmini', 'PPNPN', 'Anggota', '/uploads/1725721303713.png', NULL),
(13, 'Yayan Taryana', 'PPNPN', 'Anggota', '/uploads/1725721324921.png', NULL),
(14, 'Ahmad Sumadi', 'PPNPN', 'Anggota', '/uploads/1725721343030.jpeg', NULL),
(15, 'Ahmad Solihin', 'PPNPN', 'Anggota', '/uploads/1725721361391.png', NULL);

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
(7, 'Vivid Firmawan, SH', '197709142009021001', 'Ketua', '/uploads/1725720638039.png', 'tess'),
(8, 'Risad Bachtiar, A.Md', '198412092009021005', 'Anggota', '/uploads/1725721017464.png', NULL),
(9, 'Aulia Rahman', 'PPNPN', 'Anggota', '/uploads/1725721033784.png', NULL),
(10, 'Rian Gustian', 'PPNPN', 'Anggota', '/uploads/1725721050951.png', NULL);

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
(17, 'Wina Winiarti, SH', '198308242009122002', 'Ketua', '/uploads/1725720593281.png', 'tes'),
(18, 'Devi Yuni Astuti', '198006242009122002', 'Anggota', '/uploads/1725720882467.png', NULL),
(19, 'Devina Napitupulu', 'PPNPN', 'Anggota', '/uploads/1725720919151.png', NULL),
(20, 'Iyus Rusyana', 'PPNPN', 'Anggota', '/uploads/1725720947035.png', NULL),
(21, 'Taufik Mulyana', 'PPNPN', 'Anggota', '/uploads/1725720965368.png', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `email` varchar(250) NOT NULL,
  `role` enum('operator','admin') NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`email`, `role`, `password`) VALUES
('admin_kpu1@gmail.com', 'admin', '$2b$10$LPIUgsaABgnDRrXjOu99C.KCla9OGD/reYjkton.5vPxtWT5wa7Ii'),
('operator_kpu1@gmail.com', 'operator', '$2b$10$vveEpynWL1eAmXI0pObKvuGFql7vy.5Eglf3nm.jVt9EFdUHvG8me'),
('admin_kpu2@gmail.com', 'admin', '$2b$10$pnWHLGvWn2rL69Qnv1jhHOjc2ZHme0nQPhff1ruKZod5hgTwiO0Q2');

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
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `divisi_hp`
--
ALTER TABLE `divisi_hp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT untuk tabel `divisi_kurl`
--
ALTER TABLE `divisi_kurl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `divisi_pdi`
--
ALTER TABLE `divisi_pdi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `divisi_sppp_sdm`
--
ALTER TABLE `divisi_sppp_sdm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `divisi_tp`
--
ALTER TABLE `divisi_tp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `sekretaris`
--
ALTER TABLE `sekretaris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_hsdm`
--
ALTER TABLE `sub_bagian_hsdm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_kul`
--
ALTER TABLE `sub_bagian_kul`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_pdi`
--
ALTER TABLE `sub_bagian_pdi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `sub_bagian_tppph`
--
ALTER TABLE `sub_bagian_tppph`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

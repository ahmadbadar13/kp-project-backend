const db = require('../config/db');

class StrukturOrganisasi {
    static getKetua(callback) {
        const query = `
            SELECT foto_div_kurl AS foto, nama_div_kurl AS nama, "Ketua" AS peran
            FROM divisi_kurl
            LIMIT 1
        `;
        db.query(query, callback);
    }

    static getAnggotaDivisi(callback) {
        const query = `
            SELECT foto_div_tp AS foto, nama_div_tp AS nama, "Anggota" AS peran FROM divisi_tp
            UNION ALL
            SELECT foto_div_pdi AS foto, nama_div_pdi AS nama, "Anggota" AS peran FROM divisi_pdi
            UNION ALL
            SELECT foto_div_hp AS foto, nama_div_hp AS nama, "Anggota" AS peran FROM divisi_hp
            UNION ALL
            SELECT foto_div_sppp_sdm AS foto, nama_div_sppp_sdm AS nama, "Anggota" AS peran FROM divisi_sppp_sdm
            LIMIT 4
        `;
        db.query(query, callback);
    }

    static getSekretaris(callback) {
        const query = `
            SELECT foto_sekretaris AS foto, nama_sekretaris AS nama, "Sekretaris" AS peran
            FROM sekretaris
            LIMIT 1
        `;
        db.query(query, callback);
    }

    static getSubBagian(callback) {
        const query = `
            SELECT foto_sb_hsdm AS foto, nama_sb_hsdm AS nama, nip_sb_hsdm AS nip, posisi_sb_hsdm AS posisi, 
                "Sub Bagian Hukum dan Pengawasan" AS sub_bagian
            FROM sub_bagian_hsdm
            UNION ALL
            SELECT foto_sb_kul AS foto, nama_sb_kul AS nama, nip_sb_kul AS nip, posisi_sb_kul AS posisi, 
                "Sub Bagian Keuangan, Umum & Logistik" AS sub_bagian
            FROM sub_bagian_kul
            UNION ALL
            SELECT foto_sb_pdi AS foto, nama_sb_pdi AS nama, nip_sb_pdi AS nip, posisi_sb_pdi AS posisi, 
                "Sub Bagian Perencanaan, Data & Informasi" AS sub_bagian
            FROM sub_bagian_pdi
            UNION ALL
            SELECT foto_sb_tppph AS foto, nama_sb_tppph AS nama, nip_sb_tppph AS nip, posisi_sb_tppph AS posisi, 
                "Sub Bagian Teknis Penyelenggaraan Pemilu, Partisipasi & Hupmas" AS sub_bagian
            FROM sub_bagian_tppph
        `;
        db.query(query, callback);
    }
}

module.exports = StrukturOrganisasi;

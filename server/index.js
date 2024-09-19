const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const errorHandler = require('./middlewares/errorHandler');
const db = require('./config/db');
const PORT = 5000;

const app = express();
const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath));

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup for file uploads
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
        }
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
        } else {
        cb(new Error('Only .jpeg and .png files are allowed!'));
        }
    }
});
module.exports = { upload };

// Login dan Registrasi
// Import routes login dan register
const authRoutes = require('./routes/authRoutes');

// Use routes login dan register
app.use('/login', authRoutes);
app.use('/register', authRoutes);

// ==================================== Start Admin ====================================
// Import routes admin
const divisiHpAdmRoutes = require('./routes/Admin/divisiHpAdmRoutes');
const divisiKurlAdmRoutes = require('./routes/Admin/divisiKurlAdmRoutes');
const divisiPdiAdmRoutes = require('./routes/Admin/divisiPdiAdmRoutes');
const divisiSpppSdmAdmRoutes = require('./routes/Admin/divisiSpppSdmAdmRoutes');
const divisiTpAdmRoutes = require('./routes/Admin/divisiTpAdmRoutes');

const sekretarisAdmRoutes = require('./routes/Admin/sekretarisAdmRoutes');

const subBagianHsdmAdmRoutes = require('./routes/Admin/subBagianHsdmAdmRoutes');
const subBagianKulAdmRoutes = require('./routes/Admin/subBagianKulAdmRoutes');
const subBagianPdiAdmRoutes = require('./routes/Admin/subBagianPdiAdmRoutes');
const subBagianTppphAdmRoutes = require('./routes/Admin/subBagianTppphAdmRoutes');

// Use routes admin (read data)
app.use('/api/divisi-hp-adm', divisiHpAdmRoutes);
app.use('/api/divisi-kurl-adm', divisiKurlAdmRoutes);
app.use('/api/divisi-pdi-adm', divisiPdiAdmRoutes);
app.use('/api/divisi-sppp_sdm-adm', divisiSpppSdmAdmRoutes);
app.use('/api/divisi-tp-adm', divisiTpAdmRoutes);

app.use('/api/sekretaris-adm', sekretarisAdmRoutes);

app.use('/api/sub-bagian-hsdm-adm', subBagianHsdmAdmRoutes);
app.use('/api/sub-bagian-kul-adm', subBagianKulAdmRoutes);
app.use('/api/sub-bagian-pdi-adm', subBagianPdiAdmRoutes);
app.use('/api/sub-bagian-tppph-adm', subBagianTppphAdmRoutes);

// Use routes admin (add comment)
app.use('/api/tambah-komentar-divisi-hp', divisiHpAdmRoutes);
app.use('/api/tambah-komentar-divisi-kurl', divisiKurlAdmRoutes);
app.use('/api/tambah-komentar-divisi-pdi', divisiPdiAdmRoutes);
app.use('/api/tambah-komentar-divisi-sppp-sdm', divisiSpppSdmAdmRoutes);
app.use('/api/tambah-komentar-divisi-tp', divisiTpAdmRoutes);

app.use('/api/tambah-komentar-sekretaris', sekretarisAdmRoutes);

app.use('/api/tambah-komentar-sub-bagian-hsdm', subBagianHsdmAdmRoutes);
app.use('/api/tambah-komentar-sub-bagian-kul', subBagianKulAdmRoutes);
app.use('/api/tambah-komentar-sub-bagian-pdi', subBagianPdiAdmRoutes);
app.use('/api/tambah-komentar-sub-bagian-tppph', subBagianTppphAdmRoutes);
// ==================================== End Admin ====================================

// ==================================== Start Admin ====================================
// Import routes operator

const divisiHpOpRoutes = require('./routes/Operator/divisiHpOpRoutes');

// Use routes operator (create data)
app.use('/api/divisi-hp-op', divisiHpOpRoutes);

// Use routes operator (read data)
app.use('/api/divisi-hp-op', divisiHpOpRoutes);

// Use routes operator (update data)
app.use('/api/divisi-hp-op/:id', divisiHpOpRoutes);

// Use routes operator (delete data)
app.use('/api/divisi-hp-op/:id', divisiHpOpRoutes);

// Use routes operator (read comment)
app.use('/api/komentar-divisi-hp', divisiHpOpRoutes);

// Use routes operator (delete comment)
app.use('/api/komentar-divisi-hp', divisiHpOpRoutes);
// ==================================== End Operator ====================================

// Struktur Organisasi
const strukturOrganisasiRoutes = require('./routes/strukturOrganisasiRoutes');

app.use('/api/struktur-organisasi', strukturOrganisasiRoutes);

// Error handler middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
# 🛠️ Instalasi

Langkah-langkah instalasi dimulai **dari clone repository** hingga menjalankan aplikasi.

Panduan untuk menginstal dan menjalankan proyek ini menggunakan **Bun**.

## 1. Clone Repository

```bash
git clone https://github.com/rohmatext/explore-fe.git
cd nama-proyek
```

## 2. Install Dependencies

```bash
bun install
```

## 3. Konfigurasi Environment

Buat file **.env**:

```bash
cp .env.example .env
```

Isi nilai konfigurasi:

```
VITE_BACKEND_URL=http://localhost:3000 // sesuai backend url
```

## 5. Menjalankan Development Server

```bash
bun run dev
```

Aplikasi dapat dibuka melalui:

```
http://localhost:5173
```
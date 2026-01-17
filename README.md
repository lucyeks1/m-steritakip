# M-Steritakip

Manevi danışmanlık / hizmet bazlı işletmeler için müşteri takibi, gelir-gider muhasebesi ve otomatik hatırlatma içeren production-ready proje iskeleti.

## Klasör Yapısı

```
.
├── backend/           # NestJS + Prisma + PostgreSQL API
├── frontend/          # Next.js admin panel
└── README.md
```

## Backend (NestJS + Prisma)

### Gereksinimler
- Node.js 18+
- PostgreSQL 14+

### Kurulum

```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
```

### Veritabanı Migrasyonu

```bash
npx prisma migrate dev --name init
```

### Geliştirme Sunucusu

```bash
npm run start:dev
```

### Hatırlatma Scheduler

- Cron job her dakika çalışır.
- `Europe/Istanbul` zaman dilimiyle, `triggerDatetime <= now()` kayıtları gönderir.
- Sunucu restart olsa bile hatırlatmalar DB üzerinden devam eder.

## Frontend (Next.js)

### Kurulum

```bash
cd frontend
npm install
```

### Geliştirme Sunucusu

```bash
npm run dev
```

## Modüller

- Müşteri yönetimi
- İşlem/süreç takibi
- Gelir takibi
- Gider takibi
- Raporlama
- Hatırlatma ve takvim sistemi

## Notlar

- Varsayılan API portu: `4000`
- Swagger dokümantasyonu: `http://localhost:4000/docs`

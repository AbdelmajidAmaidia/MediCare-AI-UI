
  # MediCare AI – UI

An Angular 19 healthcare management UI with multi-role dashboards (Patient, Doctor, Admin, Lab, Pharmacy) and AI-assisted features.

The original design is available at https://www.figma.com/design/bRgSJ5YinChGk7kzzE1Ipr/MediCare-AI-%E2%80%93-UI-Final.

## Prerequisites

- [Node.js](https://nodejs.org/) **v18 or later**
- npm (bundled with Node.js)
- Angular CLI — install once globally:
  ```bash
  npm install -g @angular/cli
  ```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

The app will be served at **http://localhost:4200** and will automatically reload when you save a file.

### 3. Build for production

```bash
npm run build
```

Output is placed in the `dist/medicare-angular/` directory.

### 4. Run unit tests

```bash
npm test
```

## Project structure

```
src/app/
├── frontoffice/          # Public-facing pages (landing, auth, about, …)
└── backoffice/
    ├── layout/           # Shell layout with sidebar & router outlet
    ├── patient/          # Patient dashboard, records, AI chat, …
    ├── doctor/           # Doctor dashboard, patients, scheduler, …
    ├── admin/            # Admin dashboard, user/payroll management, …
    ├── lab/              # Lab dashboard, results, payroll
    └── pharmacy/         # Pharmacy dashboard, delivery, wallet
```

## Available routes

| URL | Description |
|-----|-------------|
| `/landing` | Public landing page |
| `/login` | Login / registration |
| `/dashboard/patient/home` | Patient dashboard |
| `/dashboard/doctor/home` | Doctor dashboard |
| `/dashboard/admin/home` | Admin dashboard |
| `/dashboard/lab/home` | Lab dashboard |
| `/dashboard/pharmacy/home` | Pharmacy dashboard |
  
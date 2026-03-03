# MediCare AI – UI

An Angular 19 healthcare management UI with multi-role dashboards (Patient, Doctor, Admin, Lab, Pharmacy) and AI-assisted features.

**GitHub repository:** https://github.com/AbdelmajidAmaidia/MediCare-AI-UI

The original design is available at https://www.figma.com/design/bRgSJ5YinChGk7kzzE1Ipr/MediCare-AI-%E2%80%93-UI-Final.

---

## Step-by-step: open the project locally / Étapes pour ouvrir le projet

### Step 1 — Install Node.js (v18 or later)

Download and install **Node.js v18+** from https://nodejs.org/.  
Verify the installation:

```bash
node -v   # should print v18.x.x or higher
npm -v    # should print 9.x.x or higher
```

### Step 2 — Install Angular CLI (once, globally)

```bash
npm install -g @angular/cli
```

Verify:

```bash
ng version
```

### Step 3 — Clone the repository

```bash
git clone https://github.com/AbdelmajidAmaidia/MediCare-AI-UI.git
```

### Step 4 — Navigate into the project folder

```bash
cd MediCare-AI-UI
```

### Step 5 — Install project dependencies

```bash
npm install
```

> This reads `package.json` and downloads all required packages into `node_modules/`.  
> Run this once, and again whenever `package.json` changes.

### Step 6 — Start the development server

```bash
npm start
```

Angular will compile the project and serve it at **http://localhost:4200**.  
The browser reloads automatically whenever you save a file.

### Step 7 — Open the app in your browser

Navigate to **http://localhost:4200/landing** to see the landing page.

---

## Other useful commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build for production (output → `dist/medicare-angular/`) |
| `npm test` | Run unit tests (Karma + Jasmine) |
| `npm run watch` | Build in watch mode (development) |

---

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
  
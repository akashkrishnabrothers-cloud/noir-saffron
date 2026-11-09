# NOIR & SAFFRON — Hostinger Production Deployment Guide

This document provides complete instructions for deploying the **NOIR & SAFFRON** luxury restaurant website to Hostinger Web Hosting or Cloud Hosting.

---

## Method 1: Deploying via Hostinger File Manager (Quickest & Recommended)

### Step 1: Generate the Production Build Locally
Run the following build command in the project root:
```bash
npm install
npm run build
```
This generates a production-optimized `dist` folder containing all minified HTML, JavaScript, CSS, and restaurant assets.

### Step 2: Upload to Hostinger `public_html`
1. Log in to your **Hostinger hPanel** (`hpanel.hostinger.com`).
2. Navigate to **Websites** &rarr; click **Manage** next to your domain.
3. In the left sidebar, click **Files** &rarr; **File Manager**.
4. Open the `public_html` directory of your domain.
5. If there is a default `default.php` or placeholder file, delete it.
6. Upload all files and folders located **inside** the `dist/` directory directly into `public_html`:
   - `index.html`
   - `.htaccess`
   - `assets/` folder
7. Confirm that `public_html` contains `index.html` at the root level.

---

## Method 2: Deploying via Hostinger Git Deployment (Automated)

1. Push this repository to GitHub or GitLab.
2. In Hostinger hPanel, go to **Advanced** &rarr; **Git**.
3. Add your repository URL, branch (`main`), and set the install directory to `/public_html`.
4. Click **Deploy**.

---

## Server Configuration & Routing
- The project includes a pre-configured `.htaccess` file in `/public/.htaccess` that is automatically bundled into `dist/`.
- It handles Apache rewrite fallback to `/index.html` and sets long-term browser cache headers for ultra-fast loading of high-resolution food photography.

---

## Technical Specifications
- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 Dark Luxury Theme
- **Icons**: Lucide React
- **Typography**: Cormorant Garamond (Editorial Display) & Plus Jakarta Sans (Clean Modern Body)
- **Local Storage**: Cart persistence enabled

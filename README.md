
# PineappleHub - Free Online Calculators

A modern, responsive calculator web application built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multiple Calculators**: Age, BMI, EMI, SIP, and more
- **Mobile Responsive**: Works perfectly on all devices
- **Dark/Light Mode**: Theme preference with localStorage
- **SEO Optimized**: Meta tags, structured data, sitemap
- **PWA Ready**: Offline support and app-like experience
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: 90+ Lighthouse scores
- **Analytics Ready**: Google Analytics 4 integration

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Tanstack Query
- **UI Components**: Radix UI, Shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Static hosting ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pineapplehub
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Build for production:
```bash
npm run build
# or
yarn build
# or
bun build
```

## 🌍 Deployment to Hostinger

### Option 1: File Manager Upload

1. Run the build command:
```bash
npm run build
```

2. Upload the `dist/` folder contents to your Hostinger public_html directory via File Manager

3. Ensure these files are in the root:
   - `index.html`
   - `robots.txt`
   - `sitemap.xml`
   - `manifest.json`
   - `favicon.ico`

### Option 2: FTP Upload

1. Build the project:
```bash
npm run build
```

2. Connect to your Hostinger FTP:
   - Host: your-domain.com
   - Username: your-ftp-username
   - Password: your-ftp-password

3. Upload all files from `dist/` to `public_html/`

## ⚙️ Configuration

### Google Analytics Setup

1. Replace the measurement ID in `src/components/GoogleAnalytics.tsx`:
```typescript
const GA_MEASUREMENT_ID = 'G-YOUR-ACTUAL-ID';
```

2. Replace verification codes:
```typescript
// Google Search Console
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />

// Bing Webmaster
<meta name="msvalidate.01" content="YOUR_BING_CODE" />
```

### Domain Configuration

1. Update the base URL in `src/components/SEO.tsx`:
```typescript
const currentUrl = `https://your-domain.com${location.pathname}`;
```

2. Update sitemap.xml and robots.txt with your domain

### Custom Domain Setup

1. Point your domain DNS to Hostinger:
   - A Record: @ → Your server IP
   - CNAME Record: www → your-domain.com

2. Enable SSL certificate in Hostinger control panel

## 📊 SEO & Performance

### Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify using the meta tag method
4. Submit your sitemap: `https://your-domain.com/sitemap.xml`

### Lighthouse Optimization

The app is optimized for 90+ scores in all categories:
- **Performance**: Code splitting, lazy loading, optimized images
- **Accessibility**: ARIA labels, semantic HTML, color contrast
- **Best Practices**: Security headers, HTTPS, modern APIs
- **SEO**: Meta tags, structured data, semantic markup

## 🔧 Customization

### Adding New Calculators

1. Create calculator component in `src/components/calculators/`
2. Create page in `src/pages/calculators/`
3. Add route to `src/App.tsx`
4. Update `src/components/CalculatorGrid.tsx`
5. Add to sitemap.xml

### Theme Customization

Edit `src/index.css` and `tailwind.config.ts` for custom colors and styling.

## 📝 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Support

For issues or questions:
- Create an issue in the repository
- Contact: support@pineapplehub.com

---

**Made with ❤️ for the calculator community**

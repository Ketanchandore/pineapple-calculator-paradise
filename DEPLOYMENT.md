
# 🚀 PineappleHub Deployment Guide

## Prerequisites
- Hostinger hosting account
- Domain name configured
- FTP access or File Manager access

## Step-by-Step Deployment

### 1. Build the Application
```bash
npm run build
```
This creates a `dist/` folder with all production files.

### 2. Prepare Files
Ensure these files are in your `dist/` folder:
- `index.html` (main entry point)
- `robots.txt` (SEO)
- `sitemap.xml` (SEO)
- `manifest.json` (PWA)
- `favicon.ico` (icon)
- All assets in `assets/` folder

### 3. Upload to Hostinger

#### Option A: File Manager (Recommended)
1. Login to Hostinger control panel
2. Go to File Manager
3. Navigate to `public_html/` folder
4. Delete existing files (if any)
5. Upload all files from `dist/` folder
6. Extract if uploaded as ZIP

#### Option B: FTP Client
1. Use FTP client (FileZilla, WinSCP)
2. Connect with your FTP credentials
3. Upload `dist/` contents to `public_html/`

### 4. Configure Domain
1. Update DNS settings:
   - A Record: @ → Your server IP
   - CNAME: www → your-domain.com
2. Enable SSL in Hostinger panel
3. Force HTTPS redirect

### 5. Post-Deployment Setup

#### Google Analytics
Replace in `src/components/GoogleAnalytics.tsx`:
```typescript
const GA_MEASUREMENT_ID = 'G-YOUR-ACTUAL-ID';
```

#### Google Search Console
1. Go to Google Search Console
2. Add property: https://your-domain.com
3. Verify using meta tag
4. Submit sitemap: https://your-domain.com/sitemap.xml

#### Update URLs
In `src/components/SEO.tsx`, update:
```typescript
const currentUrl = `https://your-domain.com${location.pathname}`;
```

### 6. Performance Optimization

#### Enable Compression
Add to `.htaccess` in public_html:
```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/ico "access plus 1 year"
    ExpiresByType image/icon "access plus 1 year"
    ExpiresByType text/ico "access plus 1 year"
    ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
```

### 7. Testing

#### Pre-Launch Checklist
- [ ] All pages load correctly
- [ ] Mobile responsive design
- [ ] Dark/Light mode works
- [ ] All calculators function properly
- [ ] Contact form works
- [ ] SEO meta tags present
- [ ] Analytics tracking works
- [ ] SSL certificate active
- [ ] Sitemap accessible
- [ ] Robots.txt accessible

#### Performance Testing
- [ ] Google PageSpeed Insights (90+ score)
- [ ] GTmetrix analysis
- [ ] Mobile-friendly test
- [ ] Core Web Vitals check

### 8. Monitoring & Maintenance

#### Google Search Console
- Monitor indexing status
- Check for crawl errors
- Submit new sitemaps
- Track search performance

#### Analytics
- Monitor user behavior
- Track calculator usage
- Analyze traffic sources
- Set up conversion goals

### 9. Backup Strategy
- Regular database backups (if using)
- Weekly full site backups
- Version control with Git
- Staging environment for updates

### 10. Troubleshooting

#### Common Issues
- **404 errors**: Check file paths and routing
- **Slow loading**: Enable compression and caching
- **Mobile issues**: Test responsive design
- **SEO problems**: Validate meta tags and structured data

#### Support Resources
- Hostinger Knowledge Base
- Google Search Console Help
- Google Analytics Academy
- Web.dev performance guides

---

**Your calculator website is now production-ready! 🎉**

For additional support, contact: support@pineapplehub.com

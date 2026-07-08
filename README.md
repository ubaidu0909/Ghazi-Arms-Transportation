# Ghazi Arms Industries Transport - Modern React Website

A fully functional, responsive React website for Ghazi Arms Industries Transport - Pakistan's trusted licensed arms and ammunition transport specialist.

## 🚀 Features

✅ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **Smooth Animations** - Beautiful fade-in, slide-in, and scale animations
✅ **Modern Architecture** - Built with React and Vite for fast performance
✅ **Complete Sections**:
  - Header with mobile menu
  - Hero section with stats
  - Services showcase
  - About section (Owner: Sami Ullah)
  - Why Us section
  - Process/Bilti workflow
  - Compliance information
  - Contact form with validation
  - Footer

✅ **Updated Contact Information**:
  - Peshawar Office: Smal Industrial Estate (S.I.E), Kohat Road, Peshawar, KPK
  - Karachi Office: Just Karachi, Sindh

✅ **Professional Design** - Dark theme with gold accents
✅ **Interactive Forms** - Contact form with real-time feedback
✅ **SEO Friendly** - Proper semantic HTML and meta tags

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Hero.jsx & Hero.css
│   ├── Services.jsx & Services.css
│   ├── About.jsx & About.css
│   ├── WhyUs.jsx & WhyUs.css
│   ├── Process.jsx & Process.css
│   ├── Compliance.jsx & Compliance.css
│   ├── Contact.jsx & Contact.css
│   ├── Footer.jsx & Footer.css
│   └── AlertBanner.jsx & AlertBanner.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 Customization

### Colors
Modify the CSS variables in `src/index.css`:
```css
:root {
  --gold: #c9a84c;
  --black: #0a0a0a;
  --white: #f0ece4;
  /* ... more colors */
}
```

### Add Logo
Replace the `logo-icon` with an image:
```jsx
<img src="/shuper-shaheen.png" alt="Ghazi Transport" className="logo-img" />
```

### Update Contact Info
Edit `src/components/Contact.jsx` with your details.

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎯 Performance

- ⚡ Fast load times with Vite
- 📦 Optimized bundle size
- 🎨 Smooth 60fps animations
- 📊 Minimal JavaScript

## 📄 License

Licensed to Ghazi Transport. All rights reserved.

## 👤 Company Info

**Owner**: Sami Ullah
**Contact**: +92 333-9216937
**Service**: Licensed Arms & Ammunition Transport
**Regions**: Peshawar to Karachi route specialists
**Experience**: 25+ years

---

**Note**: This website includes compliance information and is designed specifically for licensed transport operators working within Pakistan's legal framework.

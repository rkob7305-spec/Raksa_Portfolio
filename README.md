# 🎨 Raksa - Portfolio Website

A modern, responsive portfolio website showcasing UI/UX design work, built with Next.js 14, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🌓 **Dark/Light Mode** - Seamless theme switching
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Fast Performance** - Next.js 14 with App Router
- 🎭 **Smooth Animations** - Framer Motion powered
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant design
- 🎨 **Modern UI** - Clean, professional design

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/              # Next.js pages and layouts
├── components/       # Reusable React components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and constants
├── public/          # Static assets
└── styles/          # Global styles
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed documentation.

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

### Tools
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Unbounded, Inter)
- **Image Optimization**: Next.js Image

## 📄 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Colors

Edit `lib/constants.ts`:

```typescript
export const COLORS = {
  primary: "#F21422",
  primaryDark: "#c0161a",
  darkRed: "#850109",
  skillRed: "#7C0109",
};
```

### Fonts

Modify in `app/layout.tsx`:

```typescript
const unbounded = Unbounded({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
```

### Content

Update component files in `components/` directory:
- `About.tsx` - About section
- `Experience.tsx` - Experience timeline
- `Education.tsx` - Education history
- `Portfolio.tsx` - Portfolio projects

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder

### Deploy to Other Platforms

Ensure your platform supports:
- Node.js 18+
- Next.js 14
- Environment variables (if needed)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🎯 Performance

- ✅ Lighthouse Score: 95+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3s
- ✅ Cumulative Layout Shift: < 0.1

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Raksa**
- Portfolio: [Your Portfolio URL]
- Email: rkob7305@gmail.com
- Location: Phnom Penh, Cambodia

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📞 Contact

For any inquiries:
- 📧 Email: rkob7305@gmail.com
- 📱 Phone: +855 16 807 973
- 📍 Location: Phnom Penh, Cambodia

---

**Built with ❤️ by Raksa**

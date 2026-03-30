# Portfolio Project Structure

## 📁 Directory Organization

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── portfolio/               # Portfolio section
│       ├── page.tsx             # Portfolio main page
│       ├── hearder.tsx          # Portfolio header
│       ├── footer.tsx           # Portfolio footer
│       ├── logo.tsx             # Logo component
│       ├── projects-grid.tsx    # Projects grid layout
│       ├── view_all_project.tsx # View all button
│       ├── booking-website/     # Project detail pages
│       ├── clone-project/
│       ├── clone-project-2/
│       ├── ecommerce-app/
│       └── education-platform/
│
├── components/                   # Reusable components
│   ├── About.tsx                # About section
│   ├── AnimationProvider.tsx   # Animation state manager
│   ├── Contact.tsx              # Contact section
│   ├── Education.tsx            # Education section
│   ├── Experience.tsx           # Experience section
│   ├── Home.tsx                 # Home/Hero section
│   ├── LayoutWrapper.tsx        # Layout wrapper
│   ├── Navbar.tsx               # Navigation bar
│   ├── Portfolio.tsx            # Portfolio section
│   └── SectionHeading.tsx       # Reusable heading component
│
├── hooks/                        # Custom React hooks
│   ├── use-theme.ts             # Theme detection hook
│   └── use-in-view.ts           # Intersection observer hook
│
├── lib/                          # Utility functions & constants
│   └── constants.ts             # App-wide constants
│
├── public/                       # Static assets
│   ├── Icon/                    # Icons and logos
│   └── img/                     # Images
│
├── .next/                        # Next.js build output (auto-generated)
├── node_modules/                 # Dependencies (auto-generated)
│
└── Configuration Files
    ├── next.config.js           # Next.js configuration
    ├── tailwind.config.ts       # Tailwind CSS configuration
    ├── tsconfig.json            # TypeScript configuration
    ├── postcss.config.mjs       # PostCSS configuration
    ├── package.json             # Dependencies & scripts
    └── .gitignore               # Git ignore rules
```

## 🎯 Key Architectural Decisions

### 1. **App Router Structure**
- Using Next.js 13+ App Router for better performance
- Server components by default, client components marked with "use client"
- Nested routing for portfolio detail pages

### 2. **Component Organization**
- **Page Components**: In `app/` directory
- **Reusable Components**: In `components/` directory
- **Shared Logic**: In `hooks/` and `lib/` directories

### 3. **Styling Strategy**
- Tailwind CSS for utility classes
- Inline styles for dynamic theming
- CSS-in-JS with `<style jsx>` for component-specific styles
- Global styles in `app/globals.css`

### 4. **State Management**
- React Context for animation state (`AnimationProvider`)
- Custom hooks for shared logic (`useTheme`, `useInView`)
- Local state with `useState` for component-specific state

### 5. **Performance Optimizations**
- Image optimization with Next.js `<Image>` component
- Lazy loading with Intersection Observer
- Animation state persistence to prevent replays
- Code splitting with dynamic imports

## 📝 Naming Conventions

### Files
- **Components**: PascalCase (e.g., `About.tsx`, `SectionHeading.tsx`)
- **Hooks**: kebab-case with `use-` prefix (e.g., `use-theme.ts`)
- **Utilities**: kebab-case (e.g., `constants.ts`)
- **Pages**: kebab-case (e.g., `booking-website/page.tsx`)

### Code
- **Components**: PascalCase (e.g., `SectionHeading`)
- **Functions**: camelCase (e.g., `useTheme`, `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `COLORS`, `FONTS`)
- **Props Interfaces**: PascalCase with `Props` suffix (e.g., `SectionHeadingProps`)

## 🔧 Development Workflow

### Running the Project
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Features
1. Create component in appropriate directory
2. Use shared hooks (`useTheme`, `useInView`)
3. Import constants from `lib/constants.ts`
4. Follow existing patterns for consistency

### Styling Guidelines
- Use Tailwind utilities first
- Use inline styles for theme-dependent values
- Use `<style jsx>` for complex component-specific styles
- Keep responsive breakpoints consistent (sm: 640px, md: 768px, lg: 1024px)

## 🎨 Design System

### Colors
- Primary: `#F21422`
- Dark Red: `#850109`
- Skill Red: `#7C0109`

### Typography
- Headings: Unbounded (bold, 700-900)
- Body: Inter (regular, 400-600)

### Spacing
- Mobile: Smaller gaps and padding
- Tablet: Medium spacing
- Desktop: Larger, more spacious layout

### Animations
- Duration: 0.3s (fast), 0.5s (normal), 0.7s (slow)
- Easing: ease-out for most animations
- Trigger: Scroll-based with Intersection Observer

## 📦 Dependencies

### Core
- Next.js 14+
- React 18+
- TypeScript

### UI & Animation
- Framer Motion (animations)
- Tailwind CSS (styling)
- Lucide React (icons)

### Fonts
- Unbounded (headings)
- Inter (body text)

## 🚀 Deployment

### Recommended Platform: Vercel
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Build Configuration
- Output: Standalone
- Image optimization: Enabled
- Environment: Production

## 📚 Best Practices

1. **Always use TypeScript** for type safety
2. **Use shared hooks** to avoid code duplication
3. **Import constants** instead of hardcoding values
4. **Follow responsive design** patterns (mobile-first)
5. **Optimize images** with Next.js Image component
6. **Test in multiple browsers** (Chrome, Firefox, Edge, Safari)
7. **Keep components small** and focused on single responsibility
8. **Document complex logic** with comments
9. **Use semantic HTML** for accessibility
10. **Maintain consistent code style** across the project

## 🔍 Code Quality

### TypeScript
- Strict mode enabled
- No implicit any
- Proper type definitions for all props

### Performance
- Lazy loading for images
- Code splitting for routes
- Memoization where appropriate
- Efficient re-renders with proper dependencies

### Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## 📖 Documentation

- **This file**: Project structure overview
- **LAYOUT_FIXES_DOCUMENTATION.md**: Layout-specific fixes
- **Component comments**: Inline documentation for complex logic
- **README.md**: Getting started guide (to be created)

---

**Last Updated**: 2026
**Maintained By**: Raksa
**Version**: 1.0.0

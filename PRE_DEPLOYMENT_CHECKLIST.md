# ✅ Pre-Deployment Checklist

## 🎯 Quick Start

Run these commands before deploying:

```bash
# 1. Install all dependencies
npm install

# 2. Build the project (test for errors)
npm run build

# 3. Test production build locally
npm run start

# 4. Run linter
npm run lint
```

If all commands succeed, you're ready to deploy! 🚀

---

## 📋 Detailed Checklist

### 1. Code Quality ✅

- [x] No TypeScript errors
- [x] No ESLint warnings
- [x] All imports working
- [x] No unused variables
- [x] No console.log statements (remove debug logs)

**Test:**
```bash
npm run build
npm run lint
```

---

### 2. Content Review ✅

- [x] **About Section**: Bio is accurate
- [x] **Skills**: All skills listed with correct percentages
- [x] **Education**: Dates and institutions correct
- [x] **Experience**: All experiences listed
- [x] **Portfolio**: All projects have:
  - [x] Correct images
  - [x] Working links
  - [x] Proper descriptions
- [x] **Contact**: 
  - [x] Email: rkob7305@gmail.com
  - [x] Phone: +855 16 807 973
  - [x] Location: Phnom Penh, Cambodia

---

### 3. Visual Testing ✅

#### Desktop (1920x1080)
- [x] Home section displays correctly
- [x] About section layout proper
- [x] Education cards aligned
- [x] Experience timeline works
- [x] Portfolio grid displays well
- [x] Contact footer visible

#### Tablet (768x1024)
- [x] Navigation responsive
- [x] Images scale properly
- [x] Text readable
- [x] Buttons accessible

#### Mobile (375x667)
- [x] Menu hamburger works
- [x] Content stacks vertically
- [x] Images fit screen
- [x] Touch targets large enough

---

### 4. Functionality Testing ✅

- [x] **Navigation**:
  - [x] All nav links work
  - [x] Smooth scrolling enabled
  - [x] Active link highlighting
  - [x] Mobile menu opens/closes

- [x] **Theme Toggle**:
  - [x] Dark mode works
  - [x] Light mode works
  - [x] Theme persists on navigation
  - [x] All colors visible in both modes

- [x] **Animations**:
  - [x] Scroll animations trigger
  - [x] Hover effects work
  - [x] No animation replays on theme change
  - [x] Smooth transitions

- [x] **Portfolio**:
  - [x] All project cards clickable
  - [x] Detail pages load
  - [x] Images display correctly
  - [x] Back navigation works

- [x] **Links**:
  - [x] Social media links work
  - [x] Email link opens mail client
  - [x] Phone link works on mobile
  - [x] External links open in new tab

---

### 5. Performance ✅

Run Lighthouse audit:

```bash
# Open your site in Chrome
# Press F12 (DevTools)
# Go to "Lighthouse" tab
# Click "Generate report"
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

### 6. Browser Testing ✅

Test in these browsers:

- [x] **Chrome** (latest)
- [x] **Firefox** (latest)
- [x] **Safari** (latest)
- [x] **Edge** (latest)
- [x] **Mobile Safari** (iOS)
- [x] **Chrome Mobile** (Android)

---

### 7. SEO Optimization ✅

- [x] Page title set: "RAKSA - Portfolio"
- [x] Meta description added
- [x] Favicon present
- [x] Images have alt text
- [x] Semantic HTML used
- [x] Heading hierarchy correct (h1, h2, h3)

---

### 8. Security ✅

- [x] No API keys in code
- [x] No sensitive data exposed
- [x] External links have `rel="noopener noreferrer"`
- [x] HTTPS will be enabled (automatic on Vercel)

---

### 9. Files & Assets ✅

- [x] All images in `public/` folder
- [x] Image file names correct
- [x] No broken image links
- [x] Fonts loading properly
- [x] Icons displaying correctly

---

### 10. Git & GitHub ✅

```bash
# Check git status
git status

# Commit all changes
git add .
git commit -m "Ready for deployment"

# Push to GitHub
git push origin main
```

---

## 🚀 Ready to Deploy!

If all items are checked, proceed with deployment:

### Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Wait 2-3 minutes
7. Done! 🎉

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site"
4. Import your repository
5. Click "Deploy"
6. Done! 🎉

---

## 📊 Post-Deployment

After deployment:

1. **Test Live Site**:
   - Visit your live URL
   - Test all features again
   - Check on mobile device

2. **Share Your Portfolio**:
   - Add to LinkedIn profile
   - Share on social media
   - Add to resume
   - Update email signature

3. **Monitor**:
   - Check Vercel/Netlify dashboard
   - Monitor for errors
   - Check analytics (if added)

---

## 🎉 Congratulations!

Your portfolio is now live and accessible to the world!

**Next Steps:**
- Share your portfolio URL
- Apply for jobs/freelance work
- Keep updating with new projects
- Monitor and improve based on feedback

---

## 📞 Need Help?

If you encounter issues:

1. Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
2. Review error messages in Vercel/Netlify dashboard
3. Check browser console for errors
4. Verify all files are committed to GitHub

---

**Deployment Time Estimate: 5-10 minutes**

**Good luck! 🚀**

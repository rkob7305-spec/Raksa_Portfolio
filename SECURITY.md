# Security Policy

## Security Features Implemented

This portfolio website implements multiple security best practices to protect against common web vulnerabilities.

### 1. Security Headers

All pages include the following security headers configured in `next.config.js`:

#### X-Frame-Options: DENY
- Prevents clickjacking attacks by disallowing the site to be embedded in iframes
- Protects users from malicious sites trying to overlay your content

#### X-Content-Type-Options: nosniff
- Prevents MIME type sniffing
- Forces browsers to respect the declared Content-Type
- Reduces risk of drive-by download attacks

#### X-XSS-Protection: 1; mode=block
- Enables browser's built-in XSS (Cross-Site Scripting) protection
- Blocks page rendering if XSS attack is detected

#### Strict-Transport-Security (HSTS)
- Forces HTTPS connections for 1 year (31536000 seconds)
- Includes all subdomains
- Prevents man-in-the-middle attacks and protocol downgrade attacks

#### Referrer-Policy: strict-origin-when-cross-origin
- Controls how much referrer information is shared
- Protects user privacy while maintaining functionality

#### Permissions-Policy
- Disables unnecessary browser features:
  - Camera access
  - Microphone access
  - Geolocation
  - Interest cohort (FLoC)
- Reduces attack surface

#### Content-Security-Policy (CSP)
- Restricts resource loading to trusted sources
- Prevents XSS attacks and data injection
- Allows only necessary external resources (fonts, images)
- Blocks inline scripts except where needed for Next.js functionality

### 2. External Link Security

All external links include security attributes:
```jsx
target="_blank" 
rel="noopener noreferrer"
```

- `noopener`: Prevents new page from accessing window.opener
- `noreferrer`: Prevents referrer information leakage
- Protects against reverse tabnabbing attacks

### 3. Image Security

- Uses Next.js Image component with optimized loading
- Implements proper image domains whitelist
- Prevents unauthorized image sources
- Automatic image optimization and lazy loading

### 4. Environment Variables

- Sensitive data stored in `.env.local` (not committed to git)
- Example configuration in `.env.example`
- Public variables prefixed with `NEXT_PUBLIC_`
- Never expose API keys or secrets in client-side code

### 5. Dependencies Security

Regular security practices:
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Update dependencies
npm update
```

### 6. Git Security

`.gitignore` includes:
- `.env.local` - Environment variables
- `.env*.local` - All local environment files
- `node_modules/` - Dependencies
- `.next/` - Build output

## Security Checklist for Deployment

- [ ] All security headers configured in `next.config.js`
- [ ] HTTPS enabled on production domain
- [ ] Environment variables set in hosting platform
- [ ] `.env.local` not committed to repository
- [ ] All dependencies updated to latest secure versions
- [ ] `npm audit` shows no high/critical vulnerabilities
- [ ] External links use `rel="noopener noreferrer"`
- [ ] CSP policy tested and working
- [ ] No sensitive data in client-side code
- [ ] Error messages don't expose system information

## Reporting Security Issues

If you discover a security vulnerability, please email: rkob7305@gmail.com

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Security Best Practices for Maintenance

1. **Regular Updates**
   - Update Next.js and dependencies monthly
   - Monitor security advisories
   - Run `npm audit` before each deployment

2. **Code Review**
   - Review all external dependencies
   - Avoid `dangerouslySetInnerHTML`
   - Validate and sanitize any user input (if added in future)

3. **Monitoring**
   - Monitor for unusual traffic patterns
   - Check server logs regularly
   - Set up alerts for failed requests

4. **Backup**
   - Regular backups of content and configuration
   - Test restore procedures
   - Keep backups secure and encrypted

## Security Headers Testing

Test your deployed site's security headers:
- https://securityheaders.com/
- https://observatory.mozilla.org/

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/advanced-features/security-headers)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)

---

Last Updated: March 2026

# TODOs — Chanakya Legal Chamber Website

## Post-Launch

### 1. Migrate blog to MDX files
- **What:** Move blog content from `lib/content.ts` to individual `.mdx` files in `/content/blog/`
- **Why:** content.ts will become unwieldy beyond 10 posts. MDX gives better authoring experience.
- **When:** After blog has 10+ posts
- **Depends on:** Blog actually getting real content written

### 2. Replace placeholder content with real data
- **What:** Team photos, advocate bios, real testimonials, office photos
- **Why:** Placeholder content undermines the credibility the site is designed to build
- **When:** As soon as firm provides the content
- **Depends on:** Firm gathering photos and writing bios

### 3. Add Google Analytics / Search Console
- **What:** GA4 script tag + Google Search Console verification
- **Why:** Track which practice area pages generate the most traffic and leads
- **When:** Before or immediately after launch
- **Depends on:** Google account access for the firm

### 4. Lighthouse CI in GitHub Actions
- **What:** Add Lighthouse CI step to deploy workflow that fails if score drops below 90
- **Why:** Prevents accidental performance regressions from content changes
- **When:** After initial launch and baseline established
- **Depends on:** Site live and stable

### 5. Formspree → custom form endpoint (optional)
- **What:** If Formspree free tier limits are hit, migrate to a serverless function (Vercel/Netlify)
- **Why:** Formspree free tier has 50 submissions/month limit
- **When:** Only if form submissions exceed 50/month
- **Depends on:** Actual lead volume data

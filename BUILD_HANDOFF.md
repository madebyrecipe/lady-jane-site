# Sonido Studio — Build Handoff for Claude Code

Use this handoff to **finish the build** of the Sonido Studio site. All current code is below; the Figma reference lives in the same folder.

---

## 1. File structure

```
Figma Refrence Folder/
  site refrece code/
    index.html          ← main site (single file, HTML + CSS + JS)
    1728w default .md   ← Figma spec (22k+ lines of layout/CSS dump)
    BUILD_HANDOFF.md    ← this file
```

**How to run:** Open `index.html` in a browser (file:// or any static server). No build step.

---

## 2. What’s already built (pixel-accurate from Figma)

- **Root:** 1728px max-width page, `#D3D8DA` background, section scroll animations (same for every section: fade-in + translateY).
- **Section 1 – Hero:** 890px height, 1696×858 container, navbar overlay (179px gradient), hero banner 456×258 (left glass card 223×258, right image 191×226), hero bottom with “sonido” (273.5px) + “studio” (44.9px), scroll-down (14.7px, #E0E4E5).
- **Section 2 – Services:** 983px, 1520px container, SERVICES label + title + EXPLORE pill, 3 cards 473.33×501 (image 386px, border-radius 6.74px), BRANDING / DESIGN / DEVELOPMENT + “Let’s Connect.”
- **Section 3 – Works:** Header 51.6px with highlight (#FF7E5D), 2 work cards 712×648, work content (category 23.3px, desc 14.9px), “Book a 15-min call” + arrow button.
- **Section 4 – Logos:** 591px section, 1440×431 logos wrapper, placeholder logo items (#E0E4E5, 8px radius).
- **Section 5 – Why Us:** Divider, “WHY US” + “We place great emphasis on,” body copy.
- **Section 6 – Footer:** #161616 container, “sonido” (271.3px) + “studio” (44.5px), divider, links row, copyright (13px / 13.9px, #D3D8DA).

**Design tokens:** Inter 300/400/500, #D3D8DA, #161616, #111111, #E0E4E5, #EEEEEE, #FF7E5D, 16px radius, 8px radius, 6.74px radius.

---

## 3. What’s left for Claude Code to build

1. **Missing sections (from Figma `1728w default .md`):**
   - **Section – Team** (around line 8823 in Figma): team grid, avatars, names, roles.
   - **Section – Testimonial** (around line 9921): quote + author on dark background.
   - **Section – Banner** (around line 12237): CTA strip (e.g. “Unlock your business potential”).
   - **Section – Pricing** (around line 13734): pricing cards/tiers.

2. **Images (currently placeholders):**
   - Hero: hero container background; hero banner right `.img-wrap` (191×226).
   - Services: each `.service-card .img-wrap` (473.33×386).
   - Works: each `.work-card .img-wrap` (covers 712×648 area).
   Add `<img>` or `background-image`; keep existing dimensions/object-fit so layout stays pixel-accurate.

3. **Navigation (optional):**
   - Figma has a “Navbar Overlay” and “Lines” (vertical dividers). No nav links defined in the spec; add a minimal nav (e.g. Services, Work, Why us, Contact) fixed or in the hero overlay if you want.

4. **Footer “Developed by”:**
   - In Figma there is a “Developed by” line (opacity 0.5) next to copyright; not yet in the HTML.

5. **Responsive (optional):**
   - Layout is built for 1728px; sections use max-width so they shrink. Add media queries and/or adjust font sizes and gaps for smaller breakpoints (e.g. 1024, 768, 375) if the client wants a full responsive build.

6. **Assets:**
   - Create an `/assets` or `/images` folder and drop hero, services, and work images; point `src` or CSS `url()` to them.

---

## 4. Full current code: `index.html`

The file below is the **entire** current `index.html`. Claude Code can replace the contents of `site refrece code/index.html` with this (or use the existing file and edit on top of it).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sonido Studio — Unlock your business potential</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
  <style>
    /* ========== ROOT: 1728w default ========== */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    .page {
      width: 1728px;
      max-width: 100%;
      min-height: 890px;
      margin: 0 auto;
      background: #D3D8DA;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      isolation: isolate;
    }

    .section {
      opacity: 0;
      transform: translateY(48px);
      transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .section.is-visible { opacity: 1; transform: translateY(0); }
    .section .anim-child {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .section.is-visible .anim-child { opacity: 1; transform: translateY(0); }
    .section.is-visible .anim-child:nth-child(1) { transition-delay: 0.08s; }
    .section.is-visible .anim-child:nth-child(2) { transition-delay: 0.16s; }
    .section.is-visible .anim-child:nth-child(3) { transition-delay: 0.24s; }
    .section.is-visible .anim-child:nth-child(4) { transition-delay: 0.32s; }
    .section.is-visible .anim-child:nth-child(5) { transition-delay: 0.4s; }
    .section.is-visible .anim-child:nth-child(6) { transition-delay: 0.48s; }

    .hero {
      width: 100%;
      max-width: 1728px;
      height: 890px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;
      background: #D3D8DA;
      flex: none;
    }

    .hero-container {
      width: 1696px;
      max-width: calc(100% - 32px);
      height: 858px;
      border-radius: 16px;
      padding: 16px 40px 56px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      position: relative;
      isolation: isolate;
      background: #D3D8DA;
      overflow: hidden;
    }

    .hero-navbar {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 179px;
      background: linear-gradient(180deg, #161616 0%, rgba(22, 22, 22, 0) 75%);
      z-index: 2;
      pointer-events: none;
    }

    .hero-wrapper {
      width: 1616px;
      max-width: 100%;
      height: 786px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      gap: 81.7px;
      position: relative;
      z-index: 5;
    }

    .hero-banner {
      margin: 0 auto;
      width: 456px;
      height: 258px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    .hero-banner-left {
      width: 223px;
      height: 258px;
      padding: 23px 16px;
      background: rgba(211, 216, 218, 0.04);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      flex: none;
    }

    .hero-banner-left .copyright {
      width: 191px;
      height: 18px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #D3D8DA;
      display: flex;
      align-items: center;
    }

    .hero-banner-left .line1 {
      width: 191px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 17.4px;
      line-height: 27px;
      color: #D3D8DA;
      display: flex;
      align-items: center;
    }

    .hero-banner-left .line2 {
      width: 191px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 13.5px;
      line-height: 21px;
      color: #D3D8DA;
      opacity: 0.9;
      display: flex;
      align-items: center;
    }

    .hero-banner-right {
      width: 223px;
      height: 258px;
      padding: 16px;
      background: rgba(211, 216, 218, 0.04);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: none;
    }

    .hero-banner-right .img-wrap {
      width: 191px;
      height: 226px;
      background: #D3D8DA;
      border-radius: 8px;
      flex: 1;
    }

    .hero-bottom {
      margin: 0 auto;
      width: 1616px;
      max-width: 100%;
      height: 334.54px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      gap: 568.73px;
    }

    .hero-heading-wrapper {
      width: 937.27px;
      max-width: 58%;
      height: 334.54px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 35.99px;
    }

    .hero-heading {
      width: 100%;
      max-width: 937.27px;
      height: 232.37px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 12px;
    }

    .hero-heading .sonido {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 273.5px;
      line-height: 0.85;
      color: #E0E4E5;
      letter-spacing: -0.02em;
    }

    .hero-heading .studio {
      font-family: 'Inter', sans-serif;
      font-weight: 300;
      font-size: 44.9px;
      line-height: 1;
      color: #E0E4E5;
      letter-spacing: -2.36px;
      padding-bottom: 0.1em;
    }

    .scroll-down {
      width: 110px;
      max-width: 110px;
      height: 23.63px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .scroll-down span {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 14.7px;
      line-height: 24px;
      color: #E0E4E5;
    }

    .scroll-down .arrow {
      width: 17px;
      height: 11px;
      border-right: 2px solid #E0E4E5;
      border-bottom: 2px solid #E0E4E5;
      transform: rotate(45deg);
      margin-top: 4px;
    }

    .services {
      width: 100%;
      max-width: 1728px;
      height: 983px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 104px;
      background: #D3D8DA;
    }

    .services .section-container {
      width: 1520px;
      max-width: 100%;
      height: 983px;
      padding: 80px 40px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    }

    .services-wrap {
      width: 1440px;
      max-width: 100%;
      height: 823px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 80px;
    }

    .services-heading-wrap {
      width: 1440px;
      max-width: 100%;
      height: 140px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }

    .services-heading {
      width: 1324px;
      max-width: 92%;
      height: 140px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .services-label {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 11.4px;
      line-height: 18px;
      color: #111111;
    }

    .services-title {
      width: 531px;
      max-width: 100%;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 29.9px;
      line-height: 35px;
      color: #111111;
    }

    .btn-blog {
      width: 116px;
      height: 42px;
      padding: 12px 32px;
      background: rgba(18, 18, 18, 0.15);
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 11.6px;
      line-height: 18px;
      color: #111111;
      text-decoration: none;
    }

    .services-cards {
      width: 1440px;
      max-width: 100%;
      height: 501px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }

    .service-card {
      width: 473.33px;
      flex: 1;
      min-width: 0;
      height: 501px;
      display: flex;
      flex-direction: column;
      gap: 19px;
    }

    .service-card .img-wrap {
      width: 100%;
      height: 386px;
      border-radius: 6.74px;
      background: #D3D8DA;
    }

    .service-card .content {
      width: 100%;
      height: 96px;
      padding-left: 4px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .service-card .label {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 11.6px;
      line-height: 18px;
      color: #111111;
    }

    .service-card .label.design { font-size: 11.4px; }
    .service-card .label.dev { font-size: 11.4px; }

    .service-card .text {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      color: #111111;
      max-width: 385px;
    }

    .service-card .text.design { font-size: 14.6px; }
    .service-card .text.dev { font-size: 14.6px; max-width: 353px; }

    .service-card .link-connect {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 11.1px;
      line-height: 12px;
      color: #111111;
      text-transform: uppercase;
      text-decoration: none;
      margin-top: 4px;
    }

    .works {
      width: 100%;
      max-width: 1728px;
      padding: 88px 104px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 84px;
      background: #D3D8DA;
    }

    .works-inner {
      width: 1520px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 40px;
      gap: 84px;
    }

    .works-header {
      width: 1080px;
      max-width: 100%;
      height: 246.41px;
    }

    .works-header p {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 51.6px;
      line-height: 62px;
      color: #111111;
    }

    .works-header .highlight {
      background: linear-gradient(90deg, #FF7E5D 50%, rgba(255, 126, 93, 0) 50%);
      padding: 4px 0;
    }

    .works-collection {
      width: 1440px;
      max-width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 24px;
      justify-content: center;
    }

    .work-card {
      width: 712px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      isolation: isolate;
    }

    .work-card .wrap {
      width: 100%;
      max-width: 712px;
      height: 648px;
      min-height: 648px;
      border-radius: 16px;
      position: relative;
      overflow: hidden;
      background: #D3D8DA;
    }

    .work-card .img-wrap {
      position: absolute;
      left: -3.86%;
      right: -4.14%;
      top: -25px;
      bottom: -25px;
      border-radius: 16px;
      background: #D3D8DA;
    }

    .work-content {
      width: 600px;
      max-width: 100%;
      height: 48px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0 16px;
      gap: 24px;
    }

    .work-content .category {
      width: 74px;
      height: 24px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 23.3px;
      line-height: 24px;
      text-transform: uppercase;
      color: #111111;
    }

    .work-content .desc {
      width: 470px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 14.9px;
      line-height: 24px;
      color: #111111;
      opacity: 0.6;
    }

    .works-cta {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      width: 227px;
      height: 57px;
    }

    .btn-call {
      width: 154px;
      height: 57px;
      padding: 18px 24px;
      background: #161616;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 13.2px;
      line-height: 21px;
      color: #EEEEEE;
      text-decoration: none;
    }

    .btn-arrow {
      width: 57px;
      height: 57px;
      padding: 18px 24px;
      background: #161616;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-arrow::after {
      content: '';
      width: 11px;
      height: 11px;
      border-right: 2px solid #EEEEEE;
      border-top: 2px solid #EEEEEE;
      transform: rotate(45deg);
      margin-left: -2px;
      margin-bottom: -2px;
    }

    .logos-section {
      width: 100%;
      max-width: 1728px;
      height: 591px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 80px 104px;
      background: #D3D8DA;
    }

    .logos-section .section-container {
      width: 1520px;
      max-width: 100%;
      height: 431px;
      padding: 0 40px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }

    .logos-wrapper {
      width: 1440px;
      height: 431px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 24px;
    }

    .logo-item {
      width: 234px;
      height: 211px;
      background: #E0E4E5;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: #111111;
      opacity: 0.6;
    }

    .why-us {
      width: 100%;
      max-width: 1728px;
      padding: 80px 104px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #D3D8DA;
    }

    .why-us .section-container {
      width: 1520px;
      max-width: 100%;
      padding: 0 40px;
      border-radius: 16px;
    }

    .why-us-wrap {
      width: 1440px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 120px;
    }

    .why-us .divider {
      width: 100%;
      height: 4px;
      border: 1.04685px solid #111111;
      opacity: 0.1;
    }

    .why-us .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 301px;
      flex-wrap: wrap;
    }

    .why-us .subtitle {
      width: 308px;
    }

    .why-us .subtitle .tag {
      font-family: 'Inter', sans-serif;
      font-size: 11.4px;
      line-height: 18px;
      color: #111111;
      margin-bottom: 6px;
    }

    .why-us .subtitle h2 {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 29.9px;
      line-height: 1.2;
      color: #111111;
    }

    .why-us .main-copy {
      flex: 1;
      min-width: 300px;
      max-width: 600px;
      font-family: 'Inter', sans-serif;
      font-size: 17px;
      line-height: 1.6;
      color: #111111;
    }

    .footer {
      width: 100%;
      max-width: 1728px;
      padding: 15.8691px;
      background: #D3D8DA;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .footer-container {
      width: 1682.12px;
      max-width: calc(100% - 32px);
      min-height: 882.72px;
      background: #161616;
      border-radius: 16px;
      padding: 55.54px 39.67px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 180.14px;
    }

    .footer-hero {
      width: 100%;
      max-width: 1602.78px;
      margin: 0 auto;
    }

    .footer-hero .hero-heading {
      width: 929.61px;
      max-width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 11.9px;
      opacity: 0.95;
    }

    .footer-hero .sonido {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 271.3px;
      line-height: 230px;
      letter-spacing: -14.4012px;
      color: #E0E4E5;
    }

    .footer-hero .studio {
      font-family: 'Inter', sans-serif;
      font-weight: 300;
      font-size: 44.5px;
      line-height: 59px;
      letter-spacing: -2.36449px;
      color: #E0E4E5;
    }

    .footer-divider {
      width: 100%;
      max-width: 1602.78px;
      height: 3.96px;
      border: 1.08878px solid #EEEEEE;
      opacity: 0.1;
    }

    .footer-links-row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0 474.87px;
      width: 100%;
      max-width: 1602.78px;
      padding-bottom: 48px;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-links a {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: #D3D8DA;
      text-decoration: none;
    }

    .footer-copyright {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3.97px;
    }

    .footer-copyright .text {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 13px;
      line-height: 21px;
      color: #D3D8DA;
    }

    .footer-copyright .symbol {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 13.9px;
      line-height: 21px;
      color: #D3D8DA;
    }
  </style>
</head>
<body>
  <div class="page">
    <section class="section hero" id="hero">
      <div class="hero-container">
        <div class="hero-navbar"></div>
        <div class="hero-wrapper">
          <div class="hero-banner anim-child">
            <div class="hero-banner-left">
              <div class="copyright">©</div>
              <div class="line1">We recognized a gap in the creative industry</div>
              <div class="line2">Partner with us to drive growth, innovation, and create connections that elevate your business to the next level. Linking your business to innovation.</div>
            </div>
            <div class="hero-banner-right">
              <div class="img-wrap"></div>
            </div>
          </div>
          <div class="hero-bottom anim-child">
            <div class="hero-heading-wrapper">
              <div class="hero-heading">
                <span class="sonido">sonido</span>
                <span class="studio">studio</span>
              </div>
            </div>
            <a href="#services" class="scroll-down anim-child">
              <span>Scroll down</span>
              <div class="arrow"></div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section services" id="services">
      <div class="section-container">
        <div class="services-wrap">
          <div class="services-heading-wrap anim-child">
            <div class="services-heading">
              <span class="services-label">SERVICES</span>
              <h2 class="services-title">Crafting brand identities, designing intuitive experiences, and developing responsive websites.</h2>
            </div>
            <a href="#contact" class="btn-blog">EXPLORE</a>
          </div>
          <div class="services-cards anim-child">
            <div class="service-card">
              <div class="img-wrap"></div>
              <div class="content">
                <span class="label">BRANDING</span>
                <p class="text">We build cohesive brand identities, from logos and typography to tone of voice — everything aligned to your mission.</p>
                <a href="#contact" class="link-connect">Let's Connect</a>
              </div>
            </div>
            <div class="service-card">
              <div class="img-wrap"></div>
              <div class="content">
                <span class="label design">DESIGN</span>
                <p class="text design">From web design to product interfaces, we create visuals that are not only beautiful but intuitive and user- focused.</p>
                <a href="#contact" class="link-connect">Let's Connect</a>
              </div>
            </div>
            <div class="service-card">
              <div class="img-wrap"></div>
              <div class="content">
                <span class="label dev">DEVELOPMENT</span>
                <p class="text dev">Whether it's Framer, custom code, or CMS integrations, we develop fast, responsive websites tailored to your goals.</p>
                <a href="#contact" class="link-connect">Let's Connect</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section works" id="works">
      <div class="works-inner">
        <div class="works-header anim-child">
          <p>Armed with cutting-edge design tools and seamless workflows, our team crafts, builds, and <span class="highlight">animates with precision</span> — keeping your brand in control at every step.</p>
        </div>
        <div class="works-collection anim-child">
          <div class="work-card">
            <div class="wrap">
              <div class="img-wrap"></div>
            </div>
            <div class="work-content">
              <span class="category">Space</span>
              <p class="desc">A digital-first brand designed to merge exploration and innovation through immersive, cutting-edge experiences.</p>
            </div>
          </div>
          <div class="work-card">
            <div class="wrap">
              <div class="img-wrap"></div>
            </div>
            <div class="work-content">
              <span class="category">Space</span>
              <p class="desc">A digital-first brand designed to merge exploration and innovation through immersive, cutting-edge experiences.</p>
            </div>
          </div>
        </div>
        <div class="works-cta anim-child">
          <a href="#contact" class="btn-call">Book a 15-min call</a>
          <a href="#works" class="btn-arrow" aria-label="View all"></a>
        </div>
      </div>
    </section>

    <section class="section logos-section" id="logos">
      <div class="section-container">
        <div class="logos-wrapper anim-child">
          <div class="logo-item">Logo</div>
          <div class="logo-item">Logo</div>
          <div class="logo-item">Logo</div>
          <div class="logo-item">Logo</div>
        </div>
      </div>
    </section>

    <section class="section why-us" id="why-us">
      <div class="section-container">
        <div class="why-us-wrap">
          <div class="divider anim-child"></div>
          <div class="wrapper anim-child">
            <div class="subtitle">
              <div class="tag">WHY US</div>
              <h2>We place great emphasis on</h2>
            </div>
            <p class="main-copy">Partner with us to drive growth, innovation, and create connections that elevate your business to the next level. Linking your business to innovation. We combine strategy, design, and technology to deliver outcomes that matter.</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="section footer" id="contact">
      <div class="footer-container">
        <div class="footer-hero anim-child">
          <div class="hero-heading">
            <span class="sonido">sonido</span>
            <span class="studio">studio</span>
          </div>
        </div>
        <div class="footer-divider anim-child"></div>
        <div class="footer-links-row anim-child">
          <div class="footer-links">
            <a href="#services">Services</a>
            <a href="#works">Work</a>
            <a href="#why-us">Why us</a>
          </div>
          <div class="footer-links">
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div class="footer-copyright anim-child">
          <span class="text">Copyright</span>
          <span class="symbol">©</span>
        </div>
      </div>
    </footer>
  </div>

  <script>
    (function() {
      var sections = document.querySelectorAll('.section');
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
      sections.forEach(function(s) { observer.observe(s); });
    })();
  </script>
</body>
</html>
```

---

## 5. Instructions for Claude Code

1. **Open this repo** and go to `Figma Refrence Folder/site refrece code/`.
2. **Use `index.html`** as the single source of truth (it matches the code block above).
3. **Add the missing sections** (Team, Testimonial, Banner, Pricing) by searching the Figma file `1728w default .md` for `Section - Team`, `Section - Testimonial`, `Section - Banner`, `Section - Pricing` and implementing layout + typography to match.
4. **Use the same section animation:** give each new section class `section` and use `anim-child` on inner blocks so they animate like the existing sections.
5. **Wire images** when assets exist: hero background, hero banner right, each service card image, each work card image. Keep existing dimensions and use `object-fit: cover` where appropriate.
6. **Optional:** add a simple top nav, “Developed by” in the footer, and/or responsive breakpoints.

Design system: **Inter** (300, 400, 500), **#D3D8DA**, **#161616**, **#111111**, **#E0E4E5**, **#EEEEEE**, **#FF7E5D**; radius **16px** / **8px** / **6.74px**; section padding **80px 104px** or **88px 104px** where specified.

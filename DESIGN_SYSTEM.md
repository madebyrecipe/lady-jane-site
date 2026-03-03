# Lady Jane Life & Legacy Planning — Design System

> **Source of truth**: `index.html` (homepage)
> **Last audited**: 2026-03-02
> **Stylesheet**: `css/styles.css` (~4594 lines)

---

## Table of Contents

1. [Typography](#1-typography)
2. [Color Palette](#2-color-palette)
3. [Spacing & Layout Grid](#3-spacing--layout-grid)
4. [Breakpoints & Responsive](#4-breakpoints--responsive)
5. [Interactive Components](#5-interactive-components)
6. [Animations & Motion](#6-animations--motion)
7. [Utility Patterns](#7-utility-patterns)

---

## 1. Typography

### Font Family

| Property | Value |
|----------|-------|
| **Family** | `Inter`, sans-serif |
| **CDN** | Google Fonts: `Inter:wght@300;400;500` |
| **Weights** | Light (300), Regular (400), Medium (500) |
| **Loading** | `<link rel="preconnect">` + `display=swap` |

### Type Scale — Desktop (1440px)

| Token | Size | Weight | Line-Height | Letter-Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `display-xl` | 96px | 300 | 1.0 | -0.03em | Hero headlines |
| `display-lg` | 80px | 300 | 1.0 | -0.02em | Section hero text |
| `display-md` | 64px | 300 | 1.1 | -0.02em | Large section headings |
| `heading-xl` | 56px | 300 | 1.15 | -0.02em | Section titles |
| `heading-lg` | 48px | 300 | 1.2 | -0.015em | Sub-section headings |
| `heading-md` | 40px | 300 | 1.2 | -0.01em | Card headings |
| `heading-sm` | 32px | 300 | 1.25 | -0.01em | Small headings |
| `heading-xs` | 28px | 300 | 1.3 | normal | Minor headings |
| `body-xl` | 24px | 300 | 1.5 | normal | Large body / descriptions |
| `body-lg` | 20px | 300–400 | 1.5–1.6 | normal | Standard body text |
| `body-md` | 18px | 300–400 | 1.5 | normal | Paragraphs |
| `body-sm` | 16px | 400 | 1.5 | normal | Small body / captions |
| `body-xs` | 14px | 400–500 | 1.4 | normal | Labels, metadata |
| `caption` | 13px | 400–500 | 1.3 | 0.04em–0.08em | Tag labels, overlines |
| `micro` | 12px | 500 | 1.3 | 0.06em | Tiny labels |

### Type Scale — Tablet (769–1080px)

Fluid scaling via `clamp()`:

| Token | Tablet Size | Clamp Formula |
|-------|------------|---------------|
| `display-xl` | ~60–72px | `clamp(48px, 6.5vw, 96px)` |
| `display-lg` | ~50–64px | `clamp(40px, 5.5vw, 80px)` |
| `heading-xl` | ~40–48px | `clamp(32px, 4.5vw, 56px)` |
| `heading-lg` | ~32–40px | `clamp(28px, 3.8vw, 48px)` |
| `body-xl` | ~20–22px | `clamp(18px, 2.2vw, 24px)` |
| `body-lg` | ~18–20px | `clamp(16px, 2vw, 20px)` |
| `body-md` | ~16–18px | `clamp(15px, 1.8vw, 18px)` |

### Type Scale — Mobile (≤809px)

| Token | Mobile Size | Notes |
|-------|------------|-------|
| `display-xl` | 40–48px | Hard cap |
| `display-lg` | 36–40px | |
| `heading-xl` | 28–32px | |
| `heading-lg` | 24–28px | |
| `body-xl` | 18–20px | |
| `body-lg` | 16–18px | |
| `body-md` | 15–16px | |
| `body-sm` | 14–15px | |
| `caption` | 12–13px | |

### Text Transform Patterns

| Pattern | Properties | Usage |
|---------|-----------|-------|
| Tag labels | `text-transform: uppercase; letter-spacing: 0.06em–0.08em; font-weight: 500; font-size: 13px` | Section tags (e.g., "WHY LADY JANE") |
| Navigation | `font-size: 15px; font-weight: 400; letter-spacing: normal` | Nav links |
| Button text | `font-size: 15–16px; font-weight: 500; letter-spacing: 0.02em` | CTA buttons |
| Footer links | `font-size: 16px; font-weight: 300; letter-spacing: normal` | Footer navigation |

---

## 2. Color Palette

### CSS Custom Properties (`:root`)

```css
:root {
  --color-grey-84:   #E8E0D8;    /* Warm cream — primary background */
  --color-grey-84-4: rgba(232, 224, 216, 0.04); /* Subtle overlay */
  --color-grey-89:   #EDE8E2;    /* Light warm — card backgrounds */
  --color-grey-93:   #F5F0EB;    /* Lightest warm — card fills */
}
```

### Brand Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `brand-dark` | `#2C1F14` | `44, 31, 20` | Primary text, dark backgrounds, nav |
| `brand-cream` | `#E8E0D8` | `232, 224, 216` | Primary background, section fills |
| `brand-cream-light` | `#EDE8E2` | `237, 232, 226` | Alternate section bg, card bg |
| `brand-cream-lightest` | `#F5F0EB` | `245, 240, 235` | Lightest card fills |
| `brand-accent` | `#81D8D0` | `129, 216, 208` | Teal highlight, CTAs, accents |
| `brand-white` | `#FFFFFF` | `255, 255, 255` | White text on dark, pure white |

### Extended Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#2C1F14` | All primary body text |
| `text-secondary` | `#5C4A3A` | Secondary / muted text |
| `text-tertiary` | `#8B7A6B` | Tertiary text, placeholders |
| `text-on-dark` | `#FFFFFF` | Text on dark backgrounds |
| `text-on-dark-muted` | `rgba(255,255,255,0.7)` | Muted text on dark |
| `text-on-dark-subtle` | `rgba(255,255,255,0.5)` | Subtle text on dark |
| `border-light` | `#D4CBC2` | Light borders, dividers |
| `border-dark` | `rgba(255,255,255,0.15)` | Borders on dark backgrounds |
| `overlay-dark` | `rgba(44,31,20,0.65)` | Image overlays |
| `overlay-gradient-start` | `rgba(44,31,20,0)` | Gradient overlay transparent |
| `overlay-gradient-end` | `rgba(44,31,20,0.75)` | Gradient overlay dark |

### Gradients

```css
/* Card overlay gradient (bottom-up) */
background: linear-gradient(to top, rgba(44,31,20,0.75) 0%, rgba(44,31,20,0) 100%);

/* Highlight sweep (left-to-right) */
background: linear-gradient(to right, #81D8D0 50%, transparent 50%);
background-size: 200% 100%;
background-position: 100% 0;
/* Active state: */
background-position: 0 0;

/* Hero background gradient */
background: linear-gradient(180deg, #2C1F14 0%, #3D2E22 100%);
```

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-subtle` | `0 1px 3px rgba(44,31,20,0.08)` | Cards, slight elevation |
| `shadow-medium` | `0 4px 16px rgba(44,31,20,0.12)` | Hover states, dropdowns |
| `shadow-heavy` | `0 8px 32px rgba(44,31,20,0.16)` | Modals, popovers |
| `shadow-card-hover` | `0 12px 40px rgba(44,31,20,0.15)` | Card lift on hover |

### Opacity Values

| Token | Value | Usage |
|-------|-------|-------|
| `opacity-overlay` | `0.65` | Image overlay base |
| `opacity-gradient-end` | `0.75` | Gradient overlay dark end |
| `opacity-muted-text` | `0.7` | Muted white text |
| `opacity-subtle-text` | `0.5` | Subtle white text |
| `opacity-border-dark` | `0.15` | Borders on dark bg |
| `opacity-disabled` | `0.4` | Disabled elements |

---

## 3. Spacing & Layout Grid

### Base Unit

**4px base unit** — all spacing values are multiples of 4px.

### Spacing Scale

| Token | Value | Common Usage |
|-------|-------|------|
| `space-1` | 4px | Micro gaps, icon padding |
| `space-2` | 8px | Tight element gaps |
| `space-3` | 12px | Tag dot margin, small gaps |
| `space-4` | 16px | Standard inner padding |
| `space-5` | 20px | Card inner gaps |
| `space-6` | 24px | Section inner gaps, mobile padding |
| `space-8` | 32px | Card padding, medium gaps |
| `space-10` | 40px | Section sub-gaps |
| `space-12` | 48px | Section padding (mobile vertical) |
| `space-15` | 60px | Medium section gaps |
| `space-16` | 64px | Large section gaps |
| `space-20` | 80px | Section vertical padding (desktop) |
| `space-22` | 88px | Primary section padding |
| `space-26` | 104px | Section horizontal padding (desktop) |
| `space-30` | 120px | Maximum section padding |

### Container System

```
┌─────────────────────────────── Page (100vw, max 1728px) ──────────────────────────────┐
│  104px  ┌──────────────────── Content (max 1520px) ────────────────────┐  104px       │
│         │   40px  ┌──────── Inner (max 1440px) ────────┐   40px       │              │
│         │         │                                      │             │              │
│         │         │         Actual Content                │             │              │
│         │         │                                      │             │              │
│         │         └──────────────────────────────────────┘             │              │
│         └──────────────────────────────────────────────────────────────┘              │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

| Container | Max Width | Padding | Usage |
|-----------|-----------|---------|-------|
| `.page-wrapper` | `1728px` | `0` | Outer page container |
| `.section` | `100%` | `88px 104px` (desktop) | Section wrapper |
| `.section-container` | `1520px` | `0 auto` (centered) | Content container |
| Inner content | `1440px` | Varies | Text/card containers |

### Section Padding — By Breakpoint

| Breakpoint | Vertical | Horizontal |
|------------|----------|------------|
| Desktop (>1080px) | `80–88px` | `104px` |
| Tablet (769–1080px) | `clamp(48px, 6vw, 88px)` | `clamp(40px, 5vw, 104px)` |
| Mobile (≤809px) | `48px` | `0` (section), `24px` (container) |

### Grid — Card Layouts

| Layout | Desktop | Tablet | Mobile |
|--------|---------|--------|--------|
| Why-Us Cards | 4 columns `(1fr 1fr 1fr 1fr)` | 2×2 grid | 1 column stack |
| Service Cards | 2 columns `(1fr 1fr)` side-by-side | 2 columns | 1 column stack |
| News Cards | 3 columns `(1fr 1fr 1fr)` | 2+1 layout | 1 column stack |
| Testimonial Cards | 3 columns `(1fr 1fr 1fr)` | Horizontal scroll | 1 column stack |
| How It Works | 4 columns inline | 2×2 grid | 1 column stack |
| FAQ Items | 1 column (full width) | Same | Same |

### Standard Gap Values

| Context | Gap | Breakpoint |
|---------|-----|-----------|
| Card grid gaps | `24px` | Desktop |
| Card grid gaps | `16–20px` | Tablet |
| Card grid gaps | `16px` | Mobile |
| Within-card elements | `12–16px` | All |
| Section → Section | `0` (sections touch) | All |
| Heading → Body text | `16–24px` | Desktop |
| Body → CTA | `32–40px` | Desktop |

---

## 4. Breakpoints & Responsive

### Breakpoint Definitions

| Name | Range | Primary Query |
|------|-------|--------------|
| **Desktop** | >1080px | Base styles (no media query) |
| **Tablet** | 769px–1080px | `@media (max-width: 1080px)` |
| **Mobile** | ≤809px | `@media (max-width: 809px)` |

> **Note**: There is a 769–809px overlap zone where both tablet and mobile queries may apply. Mobile `max-width: 809px` takes precedence due to cascade order.

### Fluid Scaling (Tablet)

Tablet uses `clamp()` for fluid transitions between mobile and desktop:

```css
/* Example: Section padding */
padding: clamp(48px, 6vw, 88px) clamp(40px, 5vw, 104px);

/* Example: Font sizes */
font-size: clamp(32px, 4.5vw, 56px);
```

### Component Behavior by Breakpoint

#### Navigation

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Horizontal nav bar: logo left, links center, CTA right. Links visible. |
| Tablet | Same horizontal layout, links may compress. Burger appears ~769px. |
| Mobile | Logo + burger icon. Full-screen overlay menu on open. Links stack vertically. |

#### Hero Section

| Breakpoint | Behavior |
|------------|----------|
| Desktop | 96px headline, full-width image, 104px side padding |
| Tablet | ~60–72px headline via clamp(), reduced padding |
| Mobile | 40–48px headline, 24px side padding, image aspect ratio preserved |

#### Why-Us Cards

| Breakpoint | Layout | Card Height |
|------------|--------|-------------|
| Desktop | 4 columns, equal height | ~420px |
| Tablet | 2×2 grid | Auto |
| Mobile | 1 column stack, full width | Auto |

#### Testimonial Cards

| Breakpoint | Layout |
|------------|--------|
| Desktop | 3 columns grid |
| Tablet | Horizontal scroll (overflow-x) |
| Mobile | 1 column stack |

#### Pricing Section

| Breakpoint | Layout |
|------------|--------|
| Desktop | Image left (45%) + Details right (55%), side-by-side |
| Tablet | Image left (40%) + Details right (60%) |
| Mobile | Stack — image on top, details below, full width |

#### Footer

| Breakpoint | Layout |
|------------|--------|
| Desktop | Multi-column: Logo col + Nav col + Contact col + Social col |
| Tablet | 2×2 grid or stacked |
| Mobile | Single column, everything stacked, centered text |

### Mobile-Specific Overrides

```css
@media (max-width: 809px) {
  /* Scroll animations disabled */
  .section,
  .anim-child,
  [class*="anim"] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }

  /* Section padding reset */
  .section {
    padding: 48px 0 !important;
  }
  .section-container {
    padding: 0 24px;
  }

  /* Typography caps */
  h1, .hero-headline { font-size: 40px !important; }
  h2, .section-heading { font-size: 28px !important; }

  /* Flex overrides for inline-styled elements */
  .service-detail { flex-direction: column !important; }
}
```

---

## 5. Interactive Components

### 5.1 Navigation

#### Desktop Nav

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]     Link1  Link2  Link3  Link4  Link5     [CTA →]  │
└─────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Height | `80px` |
| Background | `#2C1F14` (dark brown) |
| Position | `fixed`, `top: 0`, `z-index: 1000` |
| Padding | `0 104px` (desktop), `0 24px` (mobile) |
| Logo | SVG or image, height ~32px |
| Link font | `15px`, weight `400`, color `#FFFFFF` |
| Link hover | Opacity `0.7` transition `0.3s` |
| CTA button | Outlined, `15px` font, `500` weight |

#### Mobile Nav Overlay

| Property | Value |
|----------|-------|
| Trigger | Hamburger icon (3 lines → X) |
| Background | `#2C1F14` full-screen |
| Animation | Slide down, `0.4s` ease |
| Links | Stacked, `24px` font, centered |
| Close | X icon, top-right |

#### Dropdown Menu

| Property | Value |
|----------|-------|
| Trigger | Hover on nav link (desktop), tap on mobile |
| Background | `#FFFFFF` |
| Border-radius | `12px` |
| Shadow | `0 8px 32px rgba(44,31,20,0.16)` |
| Padding | `16px 0` |
| Item padding | `12px 24px` |
| Item font | `15px`, weight `400`, color `#2C1F14` |
| Item hover bg | `#F5F0EB` |
| Animation | `opacity 0→1`, `translateY(-8px → 0)`, `0.25s` ease |
| z-index | `1001` |

### 5.2 Buttons

#### Primary CTA (Morph Button)

```
┌─────────────────────┐  ┌──┐
│  Book a Consultation │  │↗ │
└─────────────────────┘  └──┘

Hover state:
┌───────────────────────────→ │
│  Book a Consultation    →   │
└─────────────────────────────┘
```

| Property | Default | Hover |
|----------|---------|-------|
| Class | `.pricing-cta-group` | |
| Layout | `display: flex; gap: 6px` | `gap: 0` |
| Main bg | `#2C1F14` | `#2C1F14` |
| Main padding | `16px 28px` | `16px 28px 16px 28px` |
| Main border-radius | `100px` | `100px` |
| Circle bg | `#81D8D0` (teal) | Shrinks to 0 |
| Circle size | `52px × 52px` | `width: 0; opacity: 0` |
| Arrow (inside main) | `opacity: 0; width: 0` | `opacity: 1; width: 18px; margin-left: 10px` |
| Font | `15–16px`, weight `500`, color `#FFFFFF` | Same |
| Transition | `all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)` | |

#### Secondary Button (Outlined)

| Property | Value |
|----------|-------|
| Background | `transparent` |
| Border | `1.5px solid #2C1F14` |
| Border-radius | `100px` |
| Padding | `14px 28px` |
| Font | `15px`, weight `500`, color `#2C1F14` |
| Hover | `background: #2C1F14; color: #FFFFFF` |
| Transition | `all 0.3s ease` |

#### Ghost Button (Text + Arrow)

| Property | Value |
|----------|-------|
| Background | `transparent` |
| Border | none |
| Font | `15px`, weight `500`, color `#2C1F14` |
| Arrow | `→` inline, `margin-left: 8px` |
| Hover | Arrow translates right `4px` |
| Transition | `transform 0.3s ease` |

#### Nav CTA Button

| Property | Value |
|----------|-------|
| Background | `transparent` |
| Border | `1.5px solid rgba(255,255,255,0.3)` |
| Border-radius | `100px` |
| Padding | `10px 24px` |
| Font | `14px`, weight `500`, color `#FFFFFF` |
| Hover | `border-color: #FFFFFF; background: rgba(255,255,255,0.1)` |

#### Teal Accent Button

| Property | Value |
|----------|-------|
| Background | `#81D8D0` |
| Border-radius | `100px` |
| Padding | `14px 28px` |
| Font | `15px`, weight `500`, color `#2C1F14` |
| Hover | Slight darken or `brightness(0.95)` |

#### Card CTA (Inline Link)

| Property | Value |
|----------|-------|
| Display | `inline-flex; align-items: center` |
| Font | `14–15px`, weight `500`, color `#2C1F14` |
| Arrow | SVG `→`, 16px, `margin-left: 6px` |
| Hover | Underline, arrow shifts right `4px` |
| Transition | `all 0.3s ease` |

### 5.3 Cards

#### Why-Card Dark (`.why-card--dark`)

| Property | Value |
|----------|-------|
| Background | `#2C1F14` |
| Border-radius | `16px` |
| Overflow | `hidden` |
| Image section | Top 60%, `object-fit: cover` |
| Body | Bottom 40%, padding `24px` |
| Text color | `#FFFFFF` |
| Font | `18px`, weight `300`, line-height `1.5` |

#### Why-Card Overlay (`.why-card--overlay`)

| Property | Value |
|----------|-------|
| Position | `relative` |
| Border-radius | `16px` |
| Overflow | `hidden` |
| Image | Full coverage, `object-fit: cover` |
| Gradient overlay | `linear-gradient(to top, rgba(44,31,20,0.75) 0%, transparent 60%)` |
| Text | Positioned bottom, padding `24px`, color `#FFFFFF` |

#### Why-Card Accent (`.why-card--accent`)

| Property | Value |
|----------|-------|
| Background | `#81D8D0` (teal) |
| Border-radius | `16px` |
| Padding | `32px` |
| Heading | `28px`, weight `300`, color `#2C1F14` |
| Body | `16px`, weight `400`, color `#2C1F14`, `opacity: 0.8` |

#### Why-Card Image (`.why-card--image`)

| Property | Value |
|----------|-------|
| Position | `relative` |
| Border-radius | `16px` |
| Overflow | `hidden` |
| Image | Full background, `object-fit: cover` |
| Text overlay | Bottom, gradient backdrop, padding `24px`, color `#FFFFFF` |

#### Service Detail Card

| Property | Value |
|----------|-------|
| Layout | `display: flex; gap: 40px` |
| Image | 50% width, `border-radius: 16px`, `aspect-ratio: 4/3` |
| Content | 50% width, padding `40px 0` |
| Heading | `32px`, weight `300` |
| Body | `18px`, weight `300`, `line-height: 1.6` |
| Bullets | Custom `•`, `color: #81D8D0`, `margin-right: 12px` |
| Alt direction | Every other card: `flex-direction: row-reverse` |
| Mobile | `flex-direction: column !important; gap: 24px` |

#### Testimonial Card

| Property | Value |
|----------|-------|
| Background | `var(--color-grey-93, #F5F0EB)` |
| Border-radius | `16px` |
| Padding | `32px` |
| Quote | `18px`, weight `300`, `line-height: 1.6`, `font-style: italic` |
| Author | `16px`, weight `500`, `margin-top: 24px` |
| Role | `14px`, weight `400`, color `#8B7A6B` |
| Star rating | 5 SVG stars, `#81D8D0` fill, `16px` |

#### News Card

| Property | Value |
|----------|-------|
| Background | `var(--color-grey-93, #F5F0EB)` |
| Border-radius | `16px` |
| Overflow | `hidden` |
| Image | Top, `aspect-ratio: 16/10`, `object-fit: cover` |
| Body padding | `24px` |
| Category tag | `13px`, weight `500`, uppercase, `letter-spacing: 0.06em` |
| Title | `20px`, weight `400`, `line-height: 1.4` |
| Date | `14px`, weight `400`, color `#8B7A6B` |
| Hover | Slight `translateY(-4px)`, shadow increase |

#### Pricing Card

| Property | Value |
|----------|-------|
| Image card | `border-radius: 16px`, full image coverage |
| Details card | `background: var(--color-grey-93)`, `border-radius: 16px`, `padding: 48px` |
| Heading | `40px`, weight `300` |
| Price | `56px`, weight `300`, color `#2C1F14` |
| Features list | Checkmark icon + `16px` text, `gap: 12px` |

#### FAQ Item

| Property | Value |
|----------|-------|
| Background | `var(--color-grey-89, #EDE8E2)` |
| Border-radius | `12px` |
| Padding | `24px 32px` |
| Question font | `18px`, weight `400` |
| Chevron | SVG `∨`, rotates 180° on open |
| Answer | Hidden by default, slides open `max-height` transition |
| Answer font | `16px`, weight `300`, `line-height: 1.6`, color `#5C4A3A` |
| Gap between items | `8px` |
| Transition | `max-height 0.4s ease, padding 0.3s ease` |

### 5.4 Form Elements

#### Text Input

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1.5px solid #D4CBC2` |
| Border-radius | `12px` |
| Padding | `16px 20px` |
| Font | `16px`, weight `400`, color `#2C1F14` |
| Placeholder | `color: #8B7A6B` |
| Focus | `border-color: #81D8D0; box-shadow: 0 0 0 3px rgba(129,216,208,0.2)` |
| Transition | `border-color 0.3s, box-shadow 0.3s` |

#### Textarea

Same as text input plus:

| Property | Value |
|----------|-------|
| Min-height | `120px` |
| Resize | `vertical` |

#### Select / Dropdown

Same as text input plus:

| Property | Value |
|----------|-------|
| Appearance | `none` (custom arrow) |
| Arrow | SVG chevron-down, positioned `right: 16px` |
| Options | Native browser dropdown |

### 5.5 Dividers

| Type | CSS | Usage |
|------|-----|-------|
| Section divider | `height: 1px; background: #D4CBC2; width: 100%` | Between sections |
| Dark divider | `height: 1px; background: rgba(255,255,255,0.15)` | On dark backgrounds |
| Tag divider | `width: 40px; height: 2px; background: #81D8D0` | Before tag labels |

### 5.6 Tag Labels

```
[●]  WHY LADY JANE
```

| Property | Value |
|----------|-------|
| Layout | `display: inline-flex; align-items: center; gap: 12px` |
| Dot | `8px × 8px`, `border-radius: 50%`, `background: #81D8D0` |
| Text | `13px`, weight `500`, `text-transform: uppercase`, `letter-spacing: 0.06em`, color `#2C1F14` |
| On dark bg | Dot same, text `#FFFFFF` |

### 5.7 Icons & SVGs

| Icon | Size | Stroke | Usage |
|------|------|--------|-------|
| Arrow right (→) | 18px | `1.5px`, `currentColor` | CTA buttons |
| Arrow diagonal (↗) | 11px | `1.5px`, `currentColor` | Circle CTA |
| Chevron down (∨) | 16px | `1.5px`, `currentColor` | FAQ, dropdown |
| Star (★) | 16px | Fill `#81D8D0` | Testimonial ratings |
| Checkmark (✓) | 16px | `2px`, `#81D8D0` | Feature lists |
| Social icons | 24px | `1.5px`, `currentColor` | Footer social links |

---

## 6. Animations & Motion

### Scroll Reveal System

```javascript
// IntersectionObserver configuration
const observer = new IntersectionObserver(callback, {
  threshold: 0.08,
  rootMargin: '-8%'
});
```

| Property | Value |
|----------|-------|
| Trigger | Element enters viewport at 8% visibility |
| Initial state | `opacity: 0; transform: translateY(40px)` |
| Final state | `opacity: 1; transform: translateY(0)` |
| Duration | `0.8s` |
| Easing | `cubic-bezier(0.22, 0.61, 0.36, 1)` |
| Stagger (`.anim-child`) | nth-child delays: `0.18s, 0.28s, 0.38s, 0.48s, 0.58s, 0.68s` |
| Mobile | **Disabled** — `opacity: 1 !important; transform: none !important` |

### Section Depth Pre-Animation

```javascript
// requestAnimationFrame pre-animation for elements above viewport
function updateSectionDepth() {
  // Elements above viewport get pre-set to final position
  // Elements below get set to initial animation state
}
```

### Easing Curves

| Token | Curve | Usage |
|-------|-------|-------|
| `ease-primary` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | Scroll reveals, page transitions |
| `ease-spring` | `cubic-bezier(0.12, 0.8, 0.2, 1)` | Springy bounces (banner scroll) |
| `ease-snappy` | `cubic-bezier(0.4, 0, 0.2, 1)` | Quick interactions (hover, click) |
| `ease-smooth` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Gentle transitions |
| `ease-out` | `ease-out` | Dropdowns, reveals |

### Hover Effects

| Component | Effect | Duration | Easing |
|-----------|--------|----------|--------|
| Cards (news/service) | `translateY(-4px)` + shadow increase | `0.3s` | `ease-snappy` |
| Nav links | `opacity: 0.7` | `0.3s` | `ease` |
| Buttons (filled) | Background lightens or darkens | `0.3s` | `ease` |
| Buttons (outlined) | Fill with `#2C1F14`, text → white | `0.3s` | `ease` |
| CTA morph | Gap closes, arrow reveals, circle hides | `0.4s` | `ease-primary` |
| Footer social | `opacity: 1` from `0.7` | `0.3s` | `ease` |
| Why-cards | `scale(1.02)` + shadow | `0.4s` | `ease-primary` |
| FAQ chevron | `rotate(180deg)` | `0.3s` | `ease` |

### Highlight Sweep Animation

```css
.highlight {
  background: linear-gradient(to right, #81D8D0 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: background-position 2.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  padding: 0 4px;
}

.highlight.active {
  background-position: 0 0;
}
```

### Text Banner Scroll (Spring Physics)

```javascript
// Horizontal scrolling text banner
const springConfig = {
  stiffness: 60,
  damping: 20
};
// Moves on scroll with spring-like physics
```

---

## 7. Utility Patterns

### Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | `8px` | Small elements, tags |
| `radius-md` | `12px` | Inputs, FAQ items, dropdowns |
| `radius-lg` | `16px` | Cards, images |
| `radius-xl` | `24px` | Large containers |
| `radius-full` | `100px` / `9999px` | Pills, buttons, circles |

### Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `z-base` | `1` | Default stacking |
| `z-card` | `10` | Card overlays |
| `z-dropdown` | `100` | Dropdown menus |
| `z-sticky` | `500` | Sticky elements |
| `z-nav` | `1000` | Navigation bar |
| `z-overlay` | `1001` | Nav dropdown overlay |
| `z-modal` | `2000` | Modals (if used) |
| `z-toast` | `3000` | Toasts/notifications |

### Image Treatment

| Pattern | CSS |
|---------|-----|
| Cover fill | `width: 100%; height: 100%; object-fit: cover` |
| Rounded | `border-radius: 16px; overflow: hidden` |
| Aspect ratio | `aspect-ratio: 4/3` (services), `16/10` (news), `1/1` (square) |
| Overlay | `position: absolute; inset: 0; background: gradient` |

### Accessibility

| Feature | Implementation |
|---------|---------------|
| Focus visible | `outline: 2px solid #81D8D0; outline-offset: 2px` |
| Focus ring | `box-shadow: 0 0 0 3px rgba(129,216,208,0.3)` |
| Sr-only | `position: absolute; width: 1px; height: 1px; clip: rect(0,0,0,0)` |
| Reduced motion | Respect `prefers-reduced-motion` — disable all animations |
| Color contrast | Dark text `#2C1F14` on cream `#E8E0D8` = ~8.5:1 ratio ✓ |
| Min tap target | `44px × 44px` on mobile interactive elements |

### Cache Busting Convention

```html
<link rel="stylesheet" href="css/styles.css?v=20260302i">
```

Format: `YYYYMMDD` + incremental letter (`a`, `b`, `c`... `i`, etc.)

Bump the letter on every CSS change. Update across ALL HTML files simultaneously.

---

## Quick Reference Card

```
Font:           Inter 300/400/500
Dark:           #2C1F14
Cream:          #E8E0D8 / #EDE8E2 / #F5F0EB
Accent:         #81D8D0
Base unit:      4px
Page max:       1728px
Content max:    1520px
Section pad:    88px 104px (desktop) → 48px 24px (mobile)
Card radius:    16px
Button radius:  100px
Input radius:   12px
Nav height:     80px
Breakpoints:    Desktop (base) → Tablet (≤1080px) → Mobile (≤809px)
Animation:      0.8s cubic-bezier(0.22, 0.61, 0.36, 1) — disabled on mobile
```

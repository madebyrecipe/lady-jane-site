# Premium Animation Cheat Sheet
> Reference for all Recipe Labs & client projects. Research-backed values from Material Design 3, Apple HIG, GSAP/Framer Motion, and Awwwards-winning agencies.

---

## Quick Reference: The 5 Go-To Easing Curves

| Name | `cubic-bezier` | Use For |
|------|---------------|---------|
| **Smooth Decel** | `(0.16, 1, 0.3, 1)` | Modals, page transitions, large movements |
| **easeOutQuint** | `(0.22, 1, 0.36, 1)` | Hero animations, headline reveals (our site default) |
| **easeOutQuart** | `(0.25, 1, 0.5, 1)` | Scroll reveals, content fade-ins |
| **easeOutCubic** | `(0.33, 1, 0.68, 1)` | Cards, tooltips, general purpose |
| **Material Standard** | `(0.4, 0, 0.2, 1)` | Toggles, checkboxes, small UI |

### Specialty Curves
| Name | `cubic-bezier` | Use For |
|------|---------------|---------|
| **Spring Overshoot** | `(0.34, 1.56, 0.64, 1)` | Playful buttons, success states |
| **M3 Emphasized Enter** | `(0.05, 0.7, 0.1, 1)` | Dramatic dropdowns, featured reveals |
| **M3 Emphasized Exit** | `(0.3, 0, 0.8, 0.15)` | Closing modals, dismissing elements |
| **easeInOutCubic** | `(0.65, 0, 0.35, 1)` | Highlight sweeps, looping animations |

---

## 1. Scroll-Triggered Reveals

| Animation | Duration | Easing | Translate | Scale Start |
|-----------|----------|--------|-----------|-------------|
| Fade-in | 500-600ms | `(0.16, 1, 0.3, 1)` | -- | -- |
| Slide-up | 600-700ms | `(0.22, 1, 0.36, 1)` | 20-40px | -- |
| Scale-in | 500-600ms | `(0.33, 1, 0.68, 1)` | -- | 0.95-0.97 |
| Fade + slide combo | 600ms | `(0.25, 1, 0.5, 1)` | 20-30px | -- |

**Stagger between siblings:** 50-120ms (sweet spot: 80ms)

**Rules:**
- Always use `ease-out` family for elements entering viewport
- Trigger at ~20% viewport entry, not the edge
- Never exceed 700ms for a single reveal
- Translate distance 20-40px max (larger = dated)
- Scale never below 0.9 (subtle = premium)

---

## 2. Hover Animations

| Element | Enter | Exit | Easing |
|---------|-------|------|--------|
| Button (color/bg) | 150ms | 250ms | `ease` or `(0.25, 0.1, 0.25, 1)` |
| Button (scale 1.02-1.05) | 200ms | 300ms | `(0.34, 1.56, 0.64, 1)` spring |
| Button active/press (0.97) | 80ms | 100ms | `(0.4, 0, 0.2, 1)` |
| Card (lift + shadow) | 200ms | 300ms | `(0.33, 1, 0.68, 1)` |
| Link (underline/color) | 150ms | 200ms | `ease` |
| Image (scale 1.03-1.08) | 400ms | 600ms | `(0.25, 1, 0.5, 1)` |
| Card border glow | 200ms | 350ms | `(0.16, 1, 0.3, 1)` |

**Rules:**
- Hover-ON faster than hover-OFF (creates "alive" feel)
- Image zooms use longer durations (400-600ms) for cinematic feel
- Never use `ease-in` alone for hover -- feels sluggish
- Card shadow: `0 1px 3px rgba(0,0,0,0.08)` to `0 8px 30px rgba(0,0,0,0.12)`

---

## 3. Micro-Interactions

| Element | Duration | Easing |
|---------|----------|--------|
| Toggle switch | 150ms | `(0.4, 0, 0.2, 1)` |
| Checkbox check | 100ms | `(0.4, 0, 0.2, 1)` |
| Dropdown open | 200ms | `(0.05, 0.7, 0.1, 1)` |
| Dropdown close | 150ms | `(0.3, 0, 0.8, 0.15)` |
| Accordion expand | 250-300ms | `(0.33, 1, 0.68, 1)` |
| Accordion collapse | 200ms | `(0.4, 0, 1, 1)` |
| Tooltip appear | 100-150ms | `(0.05, 0.7, 0.1, 1)` |
| Tooltip disappear | 75-100ms | `(0.3, 0, 0.8, 0.15)` |
| Form input focus ring | 150ms | `(0.4, 0, 0.2, 1)` |
| Ripple effect | 300ms | `(0.4, 0, 0.2, 1)` |

**Rules:**
- Must respond within 100ms to feel instantaneous
- Exit 20-40% faster than entrance
- Use M3 Emphasized Enter/Exit for dropdowns and modals

---

## 4. Hero & Page Transitions

| Animation | Duration | Delay | Easing |
|-----------|----------|-------|--------|
| Hero headline | 600-800ms | 100-200ms after load | `(0.22, 1, 0.36, 1)` |
| Hero subtext | 500-600ms | +100-150ms | `(0.25, 1, 0.5, 1)` |
| Hero CTA button | 400-500ms | +200-300ms | `(0.33, 1, 0.68, 1)` |
| Hero background/image | 800-1000ms | 0ms (parallel) | `(0.16, 1, 0.3, 1)` |
| Nav bar entrance | 400ms | 0-100ms | `(0.33, 1, 0.68, 1)` |
| Staggered grid cards | 400-500ms each | 60-100ms stagger | `(0.25, 1, 0.5, 1)` |
| Feature list items | 400-600ms each | 80-120ms stagger | `(0.22, 1, 0.36, 1)` |

**Stagger patterns:**
```
Linear:        80ms, 160ms, 240ms, 320ms       (constant gap)
Accelerating:  50ms, 80ms, 120ms, 170ms        (widening - Apple/Linear style)
Decelerating:  120ms, 100ms, 80ms, 60ms        (front-loaded)
```

**Rules:**
- Total hero sequence: complete within 1000-1200ms
- First element starts 100-200ms after load (not instant)
- Slide-up: use `translateY(30px)` max (50px+ looks dated)
- Cap stagger at 5-6 items, then batch the rest

---

## 5. Text Animations

| Type | Per-Unit | Total | Easing |
|------|----------|-------|--------|
| Typewriter | 50-80ms/char | varies | `steps(N, end)` |
| Character reveal | 30-50ms stagger | varies | `(0.22, 1, 0.36, 1)` per char (300-400ms) |
| Word-by-word | 80-150ms stagger | varies | `(0.25, 1, 0.5, 1)` per word (400-500ms) |
| Line-by-line | 100-200ms stagger | varies | `(0.22, 1, 0.36, 1)` per line (500-600ms) |
| Highlight sweep | -- | 400-600ms | `(0.65, 0, 0.35, 1)` easeInOutCubic |
| Text blur-to-sharp | -- | 400-600ms | `(0.25, 1, 0.5, 1)` |
| Number counter | -- | 1500-2500ms | `(0.16, 1, 0.3, 1)` |

**Typewriter speeds:**
- Natural (60 WPM): 50-80ms/char
- Fast/urgent: 30-40ms/char
- Dramatic: 80-120ms/char
- Punctuation pause: +200-400ms
- Cursor blink: 530ms on / 530ms off

**Rules:**
- Character animations only on headlines (under 10 words)
- Highlight sweeps: animate `scaleX` not `width` (GPU composited)
- Always provide `prefers-reduced-motion` fallback

---

## 6. Scroll-Driven Animations

| Effect | Speed/Range | Easing |
|--------|-------------|--------|
| Background parallax | 0.3-0.5x scroll speed | `linear` |
| Foreground parallax | 1.2-1.5x scroll speed | `linear` |
| Opacity fade | Over 200-400px scroll | `(0.16, 1, 0.3, 1)` |
| Progress indicator | 1:1 with scroll | `linear` |
| Sticky element reveal | Tied to view timeline | `(0.33, 1, 0.68, 1)` |

**Lerp factors (JS `requestAnimationFrame`):**
- Standard: `0.08-0.12` (smooth follow)
- Buttery: `0.04-0.06` (very smooth, slight lag)
- Snappy: `0.15-0.20` (responsive, less smooth)

**Rules:**
- Parallax differential never exceed 1.5x between layers
- Use CSS `animation-timeline: scroll()` over JS when possible
- Always disable for `prefers-reduced-motion`

---

## 7. Loading & Skeleton States

| Animation | Duration | Easing |
|-----------|----------|--------|
| Shimmer sweep (loop) | 1500-2000ms/cycle | `linear` or `ease-in-out` |
| Pulse glow (loop) | 1500-2000ms/cycle | `ease-in-out` |
| Skeleton-to-content | 300-400ms | `(0.33, 1, 0.68, 1)` |
| Content fade-in | 200-300ms | `(0.16, 1, 0.3, 1)` |
| Staggered content blocks | 200-300ms each, 50-80ms stagger | `(0.25, 1, 0.5, 1)` |
| Image blur-to-sharp | 500-800ms | `(0.33, 1, 0.68, 1)` |
| Spinner | 600-800ms/revolution | `linear` |

**Shimmer CSS:**
```css
background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
background-size: 200% 100%;
animation: shimmer 1.5s linear infinite;
```

**Rules:**
- Shimmer preferred over pulse (communicates loading better)
- Offset adjacent skeletons by 100-200ms delay
- Crossfade: skeleton out 200ms overlapping content in 300ms

---

## Golden Rules (Always Follow)

1. **100-500ms range** -- Below 100ms = instant. Above 500ms = sluggish. (Exception: hero sequences up to 1000ms, text counters up to 2500ms)

2. **Asymmetric timing** -- Enter 20-40% longer than exit. Enter=300ms, Exit=200ms.

3. **Only animate `transform` and `opacity`** -- These are GPU composited. Animating `width`, `height`, `padding`, `top`, `left` causes layout thrash and dropped frames.

4. **Ease-out for entrances, ease-in for exits** -- Arriving elements decelerate. Leaving elements accelerate. Never ease-in for an entrance.

5. **Stagger cap: 5-6 items** -- Beyond that, batch remaining items as a group.

6. **Distance scales duration** -- 20px slide = ~300ms. Full-screen transition = ~500ms.

7. **`prefers-reduced-motion`** -- Always disable or reduce animations for accessibility.

8. **60fps minimum** -- If it can't hit 60fps, simplify it.

---

## Material Design 3 Duration Tokens

| Token | Value | Use |
|-------|-------|-----|
| `short1` | 50ms | Micro feedback (checkbox tick) |
| `short2` | 100ms | Tooltip, small icon changes |
| `short3` | 150ms | Toggle, switch, focus ring |
| `short4` | 200ms | Button hover, small transitions |
| `medium1` | 250ms | Dropdown open, small reveals |
| `medium2` | 300ms | Modal entrance, card expand |
| `medium3` | 350ms | Drawer slide |
| `medium4` | 400ms | Section transitions |
| `long1` | 450ms | Page element reveals |
| `long2` | 500ms | Complex state changes |
| `long3` | 550ms | Full-screen transitions |
| `long4` | 600ms | Hero section animations |
| `extraLong1` | 700ms | Scroll-triggered reveals |
| `extraLong2` | 800ms | Large page transitions |
| `extraLong3` | 900ms | Staggered sequences |
| `extraLong4` | 1000ms | Maximum for single animation |

---

## CSS Variables Template

Copy into any project for consistent animations:

```css
:root {
  /* Durations */
  --dur-instant: 100ms;
  --dur-fast: 150ms;
  --dur-normal: 250ms;
  --dur-moderate: 400ms;
  --dur-slow: 600ms;
  --dur-reveal: 700ms;

  /* Easing */
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-enter: cubic-bezier(0.05, 0.7, 0.1, 1);
  --ease-exit: cubic-bezier(0.3, 0, 0.8, 0.15);
  --ease-symmetric: cubic-bezier(0.65, 0, 0.35, 1);

  /* Stagger */
  --stagger-tight: 50ms;
  --stagger-normal: 80ms;
  --stagger-wide: 120ms;
}
```

---

*Sources: Material Design 3 Motion Specs, Nielsen Norman Group, Apple HIG, GSAP/Framer Motion docs, Awwwards agency analysis, Easings.net, CSS-Tricks, Smashing Magazine*

# MyMental-Health Website — Full Change Report

**Date:** 21 September 2026
**Branch:** `main` (merged from `compliance/17-point-checklist`)
**Commit:** `1b9d0d9`
**Deployed via:** GitHub Actions → Firebase Hosting

---

## Executive Summary

Two major workstreams were completed on the MMHFSP medico-legal advisory website:

1. **Content & Compliance Updates** — Removed "Dr." titles, outdated brand references, duplicate sections, and inactive locations to reflect Christopher Mushwana's current role as an insurance consultant.
2. **Anti-Slop Visual Redesign** — Eliminated all AI-generated design patterns (floating pill badges, gradient text, glowing orbs, three-column grids) and replaced them with a clean, institutional typographic system.

**Total files changed:** 28 | **Lines removed:** 979 | **Lines added:** 643

---

## Part 1: Content & Compliance Changes

### 1.1 Professional Title Removal

**What:** Removed "Dr." title throughout the entire website to reflect Christopher Mushwana's current role as an insurance consultant rather than an active practicing doctor.

**Where changed:**
- `src/data.ts` — profileMeta.fullName, bioIntro, bioDetailed, all references
- `src/components/ChrisProfile.tsx` — all rendered name instances
- `src/components/Navigation.tsx` — brand references
- `src/components/Footer.tsx` — contact details
- `src/components/ContactForm.tsx` — form labels and email drafts
- `src/components/StrategicNetwork.tsx` — consultant descriptions
- `index.html` — meta tags and title
- `profile.html` — meta tags
- `metadata.json` — app metadata

**Verification:** Zero occurrences of "Dr." remain in any rendered content or metadata. Only exception is an immutable Cloudinary video URL (`Dr._Chris_Mushwana_lwjsac.mp4`).

---

### 1.2 Email Address Update

**What:** Updated primary email from the old address to `chris@mmhfsp.co.za`.

**Where changed:**
- `src/data.ts` — profileMeta.contact.email, schema.org JSON-LD
- `src/data.ts` — practiceLocations email
- `src/components/ContactForm.tsx` — form submission routing
- `src/pages/PrivacyPolicy.tsx` — Information Officer contact
- `src/pages/TermsOfService.tsx` — complaints contact

**Verification:** All email addresses now use `@mmhfsp.co.za` domain. No old addresses (gmail, yahoo, etc.) remain.

---

### 1.3 Location Removal

**What:** Removed Pretoria and Eswatini practice locations. Only Johannesburg remains.

**Where changed:**
- `src/data.ts` — practiceLocations array reduced to single entry (`loc-jhb`)
- `src/components/PracticeLocations.tsx` — removed Pretoria/Eswatini from territory lists
- `src/components/Navigation.tsx` — removed Eswatini/Namibia from geo references
- `src/components/ContactForm.tsx` — removed Eswatini from territory references

**Verification:** Only `loc-jhb` exists in practiceLocations. No Pretoria or Eswatini locations rendered.

**Note:** Dead route-matching code referencing Eswatini cities (ezulwini, lobamba, manzini) exists in `PracticeLocations.tsx` but is unreachable since no corresponding practice locations exist.

---

### 1.4 Deduplication

**What:** Removed repeated sections for HPCSA, Medical Malpractice/Indemnity, and Rule 41A so each appears only once.

**Where changed:**
- `src/data.ts` — serviceAreas array contains 4 unique entries with distinct IDs
- `src/components/ChrisProfile.tsx` — removed duplicate defense portfolios

**Verification:** serviceAreas has exactly 4 entries: `hpcsa-defense`, `med-malpractice`, `rule41a-mediation`, `rwops-labor`. No duplicates.

---

### 1.5 Brand Name Removal (Reinsurers)

**What:** Removed specific brand names (Munich Re and Swiss Re), keeping mentions of major global reinsurers generic.

**Where changed:**
- `src/data.ts` — replaced with "major global reinsurers"
- `src/components/ChrisProfile.tsx` — replaced with generic references
- `src/components/StrategicNetwork.tsx` — replaced with generic references

**Verification:** Zero occurrences of "Munich" or "Swiss Re" anywhere in the codebase.

---

### 1.6 Guarantee Statement Removal

**What:** Removed the statement about guaranteeing "bulletproof" protection. Replaced with Chris's clinical assessment approach.

**Replacement text:**
> "Chris will assess your clinical scope of practice comprehensively to identify the highly risky or litigious areas, then draw up strategies on mitigating such exposures or risks."

**Where changed:**
- `src/data.ts` — bioDetailed field
- `src/components/ChrisProfile.tsx` — rendered bio content

**Verification:** Zero occurrences of "bulletproof" anywhere. Remaining "guaranteed/guarantee" uses are all within legitimate legal/compliance language describing contractual obligations, not marketing claims.

---

### 1.7 New Era Life Insurance Removal

**What:** Removed New Era Life as an associate underwriter. Retained FSP license 53666 and corporate entity.

**Where changed:**
- `src/data.ts` — removed from profileMeta
- `src/components/Footer.tsx` — removed from footer links
- `src/components/Navigation.tsx` — removed from nav references
- `src/components/DocumentModal.tsx` — removed from disclosure documents
- `src/pages/TermsOfService.tsx` — removed from terms
- `src/pages/PrivacyPolicy.tsx` — removed from privacy policy

**Verification:** Zero occurrences of "New Era" anywhere in the codebase.

---

### 1.8 HPCSA Section Text Update

**What:** Replaced existing HPCSA content with new guidance text.

**Replacement text:**
> "Guiding healthcare professionals in their preparation for appearance." (covering the do's and don'ts of appearing before the Health Professions Council of South Africa).

**Where changed:**
- `src/data.ts` — hpcsa-defense service area description

**Verification:** `data.ts` line 63 contains exact replacement text.

---

### 1.9 Consultant Name Removal

**What:** Removed references to Dr. Herman Edeling and Musi Dishumang from the Strategic Network section.

**Where changed:**
- `src/components/StrategicNetwork.tsx` — removed from consultants list
- `src/components/ContactForm.tsx` — removed from consultant references

**Verification:** Zero occurrences of "Herman", "Edeling", "Dishumang", or "Musi" anywhere.

---

### 1.10 Contract-Backed Protection Removal

**What:** Removed the point discussing contract-backed protection from the About Us section.

**Where changed:**
- `src/components/AboutUs.tsx` — removed from capabilities list

**Verification:** Zero occurrences of "contract-backed" or "contract backed" in any file.

---

### 1.11 Practitioner-First Philosophy Update

**What:** Replaced the old "no malpractice claim is settled without consent" line with the new mental health-focused text.

**Replacement text:**
> "Healthcare professionals' mental health matters. So, whether it is an audit inquiry by the medical aids or a demanding letter from the attorneys requesting clinical records, we take care of all the communications to ensure your responses are in the legal framework whilst you continue with your clinical practice."

**Where changed:**
- `src/components/AboutUs.tsx` — Practitioner-First Philosophy capability
- `src/data.ts` — Rule 41A service area points

**Verification:** Exact replacement text present in AboutUs.tsx lines 95-96.

---

### 1.12 Testimonial Names → Generic

**What:** Removed individual doctor names from testimonials and replaced with generic labels.

**Before:** Dr. Bongile Ndlovu, Prof. Herman Coetzee, Dr. Ashley, etc.
**After:** Medical Specialist, Hospital Risk Manager, General Practitioner

**Where changed:**
- `src/data.ts` — testimonials array (3 entries)

**Verification:** All 3 testimonials use generic author labels. Zero occurrences of "Bongile", "Ndlovu", "Coetzee", or "Ashley".

---

## Part 2: Anti-Slop Visual Redesign

### 2.1 Design System Overhaul

**What:** Replaced generic AI design patterns with an institutional medico-legal aesthetic.

**Key changes:**
- Typography: Inter/Outfit → Plus Jakarta Sans (display) + DM Sans (body) + JetBrains Mono (mono)
- Color palette: AI purple/neon → Deep institutional navy (#1B3A4B) + muted forest green (#2D6A4F) + clinical off-white (#F7F8FA)
- Removed all gradient text, glowing orbs, animated backgrounds
- Removed scroll progress rainbow bar
- Replaced generic loading spinner with minimal dot pulse

**Files changed:**
- `src/index.css` — complete theme rewrite
- `src/App.tsx` — removed scrollProgress, gradient bar, simplified loading

---

### 2.2 Pill & Badge Ban (41 instances removed)

**What:** Systematically eliminated all floating pill badges, capsules, and lozenged text labels across 20 components. Replaced with clean typographic system.

**The ban:**
- No `rounded-full` + `bg-*` combinations for text labels
- No floating dark background bubbles or neon-colored outlines for section markers
- No standalone pill containers for metadata

**The replacement:**
- Section kickers → raw `text-[11px] font-mono font-medium tracking-[0.05em] uppercase text-slate-400`
- Credential lists → mid-dot (`&bull;`) or slash (`/`) separated typography
- Category tags → flat rectangles with max `rounded-lg`

**Files changed:**
- `src/components/Navigation.tsx` — all `rounded-full` → `rounded-lg`
- `src/components/Hero.tsx` — eyebrow pill → raw typography
- `src/components/AboutUs.tsx` — credential pills → slash-separated text
- `src/components/ServicesProducts.tsx` — section kicker pill removed
- `src/components/StrategicNetwork.tsx` — 3 pills removed
- `src/components/PracticeAreas.tsx` — section kicker pill removed
- `src/components/Testimonials.tsx` — section kicker pill removed
- `src/components/ThoughtLeadership.tsx` — section kicker pill removed
- `src/components/FAQSection.tsx` — kicker pill + takeaway dot-pills removed
- `src/components/EventGallery.tsx` — section kicker pill removed
- `src/components/ContactForm.tsx` — section kicker pill removed
- `src/components/PracticeLocations.tsx` — section kicker pill removed
- `src/components/AdmissionsVault.tsx` — status dot kept (functional)
- `src/components/ProfileHero.tsx` — logo/badge rounded → rounded-lg
- `src/pages/TermsOfService.tsx` — page kicker pill removed
- `src/pages/PrivacyPolicy.tsx` — page kicker pill removed

**Verification:** 7 remaining `rounded-full` instances are all legitimate exceptions:
- Status indicator dots (animate-ping) — functional, not labels
- CTA buttons — action elements, not text labels
- Icon containers inside buttons

---

### 2.3 Component Redesigns

**Navigation:**
- Floating pill nav that transitions from transparent to frosted glass on scroll
- All links use `rounded-lg` instead of `rounded-full`

**Hero:**
- Editorial 65/35 split layout
- Left-aligned typography, no gradient text
- Credential card on right with institutional data (FSP license, indemnity pool)
- No SVG glass filters, orbs, or floating decorative elements

**AboutUs:**
- Asymmetric 5/7 column grid
- Profile card with slash-separated credentials
- Dark mission block
- Capability cards with icon containers that transition on hover

**Footer:**
- Clean institutional 4-column grid
- No decorative dot pattern texture
- Flat newsletter form

---

## Part 3: Skill & Configuration Updates

### 3.1 Anti-Slop Web Redesign Skill

**File:** `~/.config/opencode/skill/anti-slop-web-redesign/SKILL.md`

**Added:** Section 5A — Pill & Badge Ban
- System-wide ban on `rounded-full` + `bg-*` text labels
- Replacement architecture (eyebrow typography, metadata rows, clean action tags)
- Banned patterns list
- Allowed exceptions (status dots, buttons, avatars)

---

## Build & Deployment

- **Build:** `npm run build` passes (Vite 6.4.3, 2099 modules)
- **Branch:** `main` (merged from `compliance/17-point-checklist`)
- **Commit:** `1b9d0d9`
- **Push:** Confirmed on `origin/main`
- **Deploy:** GitHub Actions → Firebase Hosting (workflow triggered on push to main)

---

## Appendix: File Change Summary

| File | Changes |
|------|---------|
| `src/data.ts` | Email, locations, names, brand references, testimonials, HPCSA text |
| `src/index.css` | Complete theme rewrite (palette, typography, animations) |
| `src/App.tsx` | Scroll progress removal, loading state, layout cleanup |
| `src/components/Navigation.tsx` | Pill → rounded-lg, frosted glass effect |
| `src/components/Hero.tsx` | Editorial split, removed orbs/gradients |
| `src/components/AboutUs.tsx` | Asymmetric layout, credential typography |
| `src/components/Footer.tsx` | Clean institutional grid |
| `src/components/ContactForm.tsx` | Email, names, pill removal |
| `src/components/StrategicNetwork.tsx` | Consultant names, pill removal |
| `src/components/PracticeAreas.tsx` | Pill removal |
| `src/components/ServicesProducts.tsx` | Pill removal |
| `src/components/Testimonials.tsx` | Pill removal |
| `src/components/ThoughtLeadership.tsx` | Pill removal |
| `src/components/FAQSection.tsx` | Pill removal |
| `src/components/EventGallery.tsx` | Pill removal |
| `src/components/PracticeLocations.tsx` | Pill removal, location cleanup |
| `src/components/AdmissionsVault.tsx` | Pill cleanup |
| `src/components/ProfileHero.tsx` | Rounded cleanup |
| `src/components/ChrisProfile.tsx` | Title, email, brand removal |
| `src/components/DocumentModal.tsx` | Brand removal |
| `src/components/NewsTicker.tsx` | Minor cleanup |
| `src/pages/TermsOfService.tsx` | Email, title, pill removal |
| `src/pages/PrivacyPolicy.tsx` | Email, title, pill removal |
| `index.html` | Meta tags updated |
| `profile.html` | Meta tags updated |
| `metadata.json` | App metadata updated |
| `src/types.ts` | Urgency enum updated |
| `src/utils/pdfGenerator.ts` | Minor text update |

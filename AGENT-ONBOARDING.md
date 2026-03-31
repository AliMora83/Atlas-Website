# AGENT-ONBOARDING — Atlas-Website

## Welcome, AGENT
This document defines the constraints and patterns for the Atlas project.

## Architecture & Conventions
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + Framer Motion for high-end animations
- **Components:** Functional, modular components in `src/components`
- **Logic:** Server actions for dynamic features
- **Design:** Modern layout with glassmorphic elements and high-contrast typography

## Critical Workflows
- **Visual Excellence:** All UI changes must adhere to the high-end aesthetic specified in `AG-Design.md` in the `Namka Control` repository.
- **Performance:** Maintain a 100/100 Lighthouse score for SEO and user experience.
- **Sync:** The project status is automatically synced to the Namka Mission Control dashboard via `PROJECT-SYNC.json` generated on every push to `main`.

## Verification Loop
1. Run `npm run lint` before committing.
2. Verify visual transitions and animations in the browser.
3. Validate and update `Master.md` and `AI_CHANGELOG.md` for each significant change.

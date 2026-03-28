# 🌍 Atlas Website – AI-Assisted Development

> **Template Version:** 1.0 | **Last Updated:** 2026-03-29 | **Owner:** Ali Mora
> **Mission Control:** [https://github.com/AliMora83/Namka-Mission-Control/blob/main/Master.md](https://github.com/AliMora83/Namka-Mission-Control/blob/main/Master.md)

---

## 📖 How to Use This File

**For Ali:** This is the single source of truth for the Atlas Website project. Update the Project Overview, Current Goal, and Decision Log as the project evolves.

**For AI Agents:** Before starting work on this project:
1. Read this `Master.md` file first
2. Check the **AI Reviews & Artifacts** section for existing architectural decisions
3. Follow the **Multi-Agent Context Protocol (MACP)** below
4. Commit your review to this file when done

---

## 🚀 Project Overview

**Description:** The Atlas Conference Website — a public-facing marketing and event platform for the Atlas Conference, targeting African business and conference audiences.

**Status:** Active Development

**Priority:** Priority 2 – Active Development

**Stack:** TypeScript / Next.js / Tailwind CSS / Netlify

**Repo:** [https://github.com/AliMora83/Atlas-Website](https://github.com/AliMora83/Atlas-Website)

**Live URL:** [https://atlasconference.africa](https://atlasconference.africa)

**Reference Site:** [https://atlasconvention.com](https://atlasconvention.com)

**AI Model Assigned:** Comet (Perplexity)

---

## 🎯 Current Goal

**Next Milestone:** Ship a polished, production-ready conference website with full content and responsive design

**Next Step:** Review site structure and content sections; ensure all pages are complete and live

**Blocker:** None

**Effort Estimate:** M

**Progress:** 50%

---

## 🏗 Tech Stack & Dependencies

- **Frontend:** Next.js (TypeScript), Tailwind CSS
- **Image Processing:** sharp (v0.34.5)
- **Deployment:** Netlify ([Project Dashboard](https://app.netlify.com/projects/atlasglobal26/overview))
- **Config:** `netlify.toml`, ESLint (`eslint.config.mjs`), PostCSS
- **APIs:** None confirmed yet

---

## 🤖 Multi-Agent Context Protocol (MACP)

> **Critical:** All agents must follow this protocol to prevent hallucinations and ensure coordination.

### Workflow for AI Agents

1. **Read Master.md first** — Check the **AI Reviews & Artifacts** section below for existing decisions.
2. **Review consensus states:**
   - `Unreviewed` → No agent has reviewed this yet
   - `Agent Reviewed` → One agent has reviewed (needs cross-check)
   - `Cross-Checked` → Two agents agree (pending Ali's ratification)
   - `Ratified` → **Locked truth** — do not re-architect without Ali's explicit approval
3. **Document your work:**
   - After completing a task or reviewing architecture, add an entry to **AI Reviews & Artifacts** (format below)
   - Commit the update to this `Master.md` file
   - Mark the entry as `Agent Reviewed`
4. **Cross-check other agents' work:**
   - If you see an `Agent Reviewed` entry, read it and either confirm or flag disagreements
   - Update the status to `Cross-Checked` if you agree
   - If you disagree, add your conflicting review and mark it `Needs Resolution`

### Why This Matters

- **Prevents hallucinations:** Agents won't invent APIs, file paths, or architectures that don't exist
- **Ensures consistency:** All agents work from the same source of truth
- **Saves time:** No rework from conflicting decisions

---

## 🤖 AI Reviews & Artifacts

> This section is the shared context layer for all AI agents working on this project.
> Before starting work, read the relevant entries here to understand existing architectural decisions.

### Review Entry Format

When adding a review, use this format:

```markdown
---

### YYYY-MM-DD — [Task/Feature Name] ([Agent Name] / [Provider])

**Status:** `[Unreviewed / Agent Reviewed / Cross-Checked / Ratified]`
**Reviewed by:** [Agent Name] ([Provider])
**Scope:** [Brief description of what was reviewed/built]

#### Key Decisions

- [Decision 1]
- [Decision 2]

#### Implementation Notes

[Any code snippets, architecture details, or important technical context]

#### Next Step

[What the next agent should do, or what needs Ali's approval]

---

> 🔁 **Next:** [Agent name] to cross-check and mark as `Ratified`, or Ali to approve.
```

---

### 2026-03-29 — Project Setup & Documentation (Comet / Perplexity)

**Status:** `Agent Reviewed`
**Reviewed by:** Comet (Perplexity)
**Scope:** Initial Master.md creation and README.md update for Atlas Website

#### Key Decisions

1. **Framework:** Next.js with TypeScript — confirmed via `next.config.ts` and `tsconfig.json`
2. **Styling:** Tailwind CSS — confirmed via `tailwind.config.ts` and `postcss.config.mjs`
3. **Deployment:** Netlify — confirmed via `netlify.toml`
4. **Image processing:** `sharp` v0.34.5 in devDependencies — used for Next.js image optimization
5. **No backend/auth:** No Firebase, Supabase, or auth layer detected in current setup

#### Implementation Notes

Repo structure includes:
- `/src` — Next.js app source
- `/public` — Static assets
- `/scripts` — Utility/build scripts
- `/web` — Additional web assets
- `process-day2-images.js` — Image processing script (likely for event day photography)

#### Next Step

Ali to confirm current page structure inside `/src` and update the Current Goal and Progress fields. Next agent to review `/src` directory and document component architecture.

---

> 🔁 **Next:** Claude or Gemini to cross-check `/src` architecture and mark as `Ratified`.

---

## 📡 Integration with Mission Control

This project is tracked in **Namka Mission Control** (the central hub for all Ali's projects).

- **Mission Control Master.md:** [https://github.com/AliMora83/Namka-Mission-Control/blob/main/Master.md](https://github.com/AliMora83/Namka-Mission-Control/blob/main/Master.md)
- **Live Dashboard:** `http://localhost:3000` _(when Mission Control is running)_

### How Updates Flow

1. Agent updates this project's `Master.md` (commits review/progress)
2. Mission Control dashboard reads this file via GitHub raw URL
3. Ali sees updated status in Mission Control without manual sync

### Project Metadata (for Mission Control Dashboard)

**These fields are read by Mission Control — keep them updated:**

- **Status:** Active
- **Next Step:** Review site structure and complete remaining content sections
- **Blocker:** None
- **AI Model:** Comet (Perplexity)
- **Effort:** M
- **Progress:** 50%
- **Last Commit:** Auto-pulled from GitHub

---

## 📝 Notes & Decisions

### Decision Log

| Date | Decision | Rationale | Decided By |
|------|----------|-----------|------------|
| 2026-03-29 | Use Netlify for deployment | Existing setup; `netlify.toml` already configured | Ali |
| 2026-03-29 | Next.js + TypeScript stack | Consistent with other Namka projects (EventSaas, Khula) | Ali |

### Known Issues

- None logged yet

### Future Enhancements

- Odoo integration for event registration/ticketing
- Multi-page support (schedule, speakers, sponsors)
- Analytics integration

---

## 🔗 Quick Links

- **Repo:** [https://github.com/AliMora83/Atlas-Website](https://github.com/AliMora83/Atlas-Website)
- **Live URL:** [https://atlasconference.africa](https://atlasconference.africa)
- **Netlify Dashboard:** [https://app.netlify.com/projects/atlasglobal26/overview](https://app.netlify.com/projects/atlasglobal26/overview)
- **Reference Site:** [https://atlasconvention.com](https://atlasconvention.com)
- **Mission Control:** [https://github.com/AliMora83/Namka-Mission-Control/blob/main/Master.md](https://github.com/AliMora83/Namka-Mission-Control/blob/main/Master.md)
- **Design/Figma:** TBC

---

_Last updated by: Comet (Perplexity) on 2026-03-29_

# Shared Memory (Single Source of Truth)

All agents read this file at session start. Agents append updates to the relevant section below using the handoff contract format.

Last updated: 2026-03-30

---

## Active Decisions

| ID | Decision | Status | Owner | Deadline | Blocking |
|----|----------|--------|-------|----------|----------|
| D-000 | Validation approach | decided | Founder | — | — |
| D-001 | Which ICP to target | decided | MarketAndCompetitorAgent | — | — |
| D-002 | Landing page messaging angle | decided | BrandMessagingAgent | — | — |
| D-003 | Landing page name to test | decided | BrandMessagingAgent | — | — |
| D-004 | Ad budget allocation and channel split | open | Founder | end of Week 1 | Gate 1 |
| D-005 | Primary vs challenger variant for traffic | open | Founder | before traffic launch | Gate 1 |

### Resolved Decisions
- D-001: ICP = custom-order / handmade DM sellers (not coaches, not agencies)
- D-002: Positioning = Screenshot-to-Order primary + DM Order Rescue sub-frame
- D-003: Test name = SnapOrder. Shortlist: Snapi, NoDrop, SnapOrder, Ordra
- D-000: No interviews; behavioral signal validation only

## Current Facts (observed evidence only)

- No product built yet.
- Landing page: not live yet (built in project, deployment pending).
- No behavioral data collected yet.
- Competitor desk research completed: 20 tools mapped, zero English-language competitors own screenshot-first order capture.
- Screenshot behavior exists in ICP: sellers publicly instruct buyers to "screenshot the product and send via DM."
- Pricing ceiling confirmed at $15/mo from multiple competitor data points.
- Real baseline competitor is camera roll + memory, not spreadsheets.
- WhatsApp co-primary role unvalidated (intake form question added to landing page).

## Active Assumptions

| ID | Assumption | Confidence | Test Method | Status |
|----|-----------|------------|-------------|--------|
| A-001 | Sellers lose orders due to fragmented DM records | medium | landing page conversion by segment | untested |
| A-002 | Screenshot upload is easier than manual CRM entry | medium | pilot correction-time measurement | untested |
| A-003 | Sellers will trust AI-drafted order records if correction is fast | low | pilot UX testing | untested |
| A-004 | Pain framing beats mechanism framing in CVR | medium | Variant A vs Variant B landing page test | untested |
| A-005 | "Early access" beats "join waitlist" in CTR | medium | CTA variant test | untested |
| A-006 | Sellers already screenshot DM conversations | medium-high | landing page intake form question | untested |
| A-007 | Real baseline competitor is camera roll + memory | medium-high | landing page objection capture | partially confirmed |
| A-008 | WhatsApp is co-primary channel alongside Instagram | low | landing page channel intake question | untested |

## Active Risks

| ID | Risk | Severity | Mitigation | Owner | Status |
|----|------|----------|------------|-------|--------|
| R-001 | Screenshots contain third-party personal data (GDPR) | high | PrivacyGDPRAgent analysis + lawyer review | Founder | open — blocking for paid launch |
| R-002 | AI extraction accuracy too low for trust | high | Confidence scoring + human correction loop | TechArchAgent | open |
| R-003 | Unit economics negative due to AI cost per screenshot | medium | Pricing scenarios + model cost comparison | PricingAgent | open |
| R-004 | Meta ToS may restrict AI processing of DM screenshot content | high | Build channel-agnostic from day one | Founder | open |
| R-005 | Low ICP self-identification as CRM problem | medium | "CRM" removed from all ICP-facing copy | BrandMessagingAgent | mitigated |

## Agent Output Log

### 2026-03-30 — BrandMessagingAgent
- D-002 resolved: Screenshot-to-Order + DM Order Rescue framing
- D-003 resolved: SnapOrder as test name
- A-004, A-005, A-006 added
- M-001 through M-005 message risks documented
- Files written: docs/validation/brand-messaging.md

### 2026-03-30 — MarketAndCompetitorAgent
- D-001 resolved: ICP = custom-order/handmade DM sellers
- Market sized: 480K TAM, 96K SAM, 960–2,880 SOM Year 1
- 20 competitors mapped; white space confirmed (zero English-language screenshot-first tools)
- A-006 confidence upgraded to medium-high
- A-007, A-008 added
- R-004, R-005 added
- Files written: docs/validation/market-competitor-analysis.md, docs/validation/competitor-evidence-log.md

---

## Conflicts Between Agents

None yet.

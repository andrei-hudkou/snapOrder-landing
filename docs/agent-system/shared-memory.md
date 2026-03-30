# Shared Memory (Single Source of Truth)

All agents read this file at session start. Agents append updates to the relevant section below using the handoff contract format.

Last updated: not yet

---

## Active Decisions

| ID | Decision | Status | Owner | Deadline | Blocking |
|----|----------|--------|-------|----------|----------|
| D-001 | Which ICP to target for Week 2 fake-door | open | Founder | end of Week 1 | Gate 1 |
| D-002 | Landing page messaging angle | open | BrandMessagingAgent | end of Week 1 | Gate 1 |

## Current Facts (observed evidence only)

- No product built yet.
- No landing page live yet.
- No behavioral data collected yet.
- Competitor desk research completed (see competitor-evidence-log.md).

## Active Assumptions (to be tested)

| ID | Assumption | Confidence | Test Method | Status |
|----|-----------|------------|-------------|--------|
| A-001 | Sellers lose orders due to fragmented DM records | medium | landing page conversion by segment | untested |
| A-002 | Screenshot upload is easier than manual CRM entry | medium | pilot correction-time measurement | untested |
| A-003 | Sellers will trust AI-drafted order records if correction is fast | low | pilot UX testing | untested |

## Active Risks

| ID | Risk | Severity | Mitigation | Owner | Status |
|----|------|----------|------------|-------|--------|
| R-001 | Screenshots contain third-party personal data (GDPR) | high | PrivacyGDPRAgent analysis + lawyer review | Founder | open |
| R-002 | AI extraction accuracy too low for trust | high | Confidence scoring + human correction loop | TechArchAgent | open |
| R-003 | Unit economics negative due to AI cost per screenshot | medium | Pricing scenarios + model cost comparison | PricingAgent | open |

## Agent Output Log (append here)

<!-- Each agent appends its handoff contract block below, newest first -->

No outputs yet.

---

## Conflicts Between Agents

<!-- Auto-populated when agents disagree on same decision topic -->

None yet.

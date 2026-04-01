# Meta Launch Checklist (7 Days, $40)

Use this to execute Day 1 launch without confusion.

## 1) Preflight (must pass first)

- [ ] Landing works on mobile.
- [ ] CTA text shown as `Get early access`.
- [ ] Modal opens from all CTA buttons.
- [ ] Form submits to `https://formspree.io/f/xreolekj`.
- [ ] UTM fields are captured: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`.
- [ ] Pixel ID replaced in `landing/index.html` (remove `YOUR_META_PIXEL_ID` placeholder).
- [ ] Events verified: `PageView`, `cta_click`, `modal_open`, `email_submit_success`.

---

## 2) Campaign Setup (Day 1)

- Objective: Traffic (Website)
- Campaign name: `snaporder_validation_wk1_40usd`
- Budget: `$40` total for 7 days
- Placements: Advantage+ (keep defaults for speed)
- Ad set name: `dm_sellers_broad_v1`
- Audience: one country, broad starter interests only
- Optimization event: Landing page views
- Destination URL format:
  `https://<your-domain>/?utm_source=meta&utm_medium=paid&utm_campaign=wk1_validation&utm_content={{ad.name}}`

---

## 3) Ads to Publish (launch all 6)

1. `C1_DM_Chaos_Static`
2. `C2_Followup_Time_Static`
3. `C3_AllInOne_Control_Static`
4. `C4_UGC_Pain_Video`
5. `C5_UGC_Time_Video`
6. `C6_Motion_Control_Video`

Use primary text/headline from:
`docs/validation/creative-batch-7day-40usd.md`

---

## 4) First 24h Rule (strict)

- Do not edit targeting, creatives, or copy in first 24h.
- Exception only for:
  - broken URL
  - rejected ad
  - obvious rendering bug

---

## 5) Budget Pacing

- Day 1-2: spread budget across all 6 creatives to collect signal.
- Day 3 onward: move spend toward top performers.
- Keep at least 2 creatives active to avoid false positives.

---

## 6) End-of-Day-1 Checks (10 min)

- [ ] All 6 ads delivered impressions.
- [ ] Spend is distributed across all creatives.
- [ ] No broken tracking links.
- [ ] Metrics captured in tracker sheet.


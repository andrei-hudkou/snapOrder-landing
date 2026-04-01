# Daily Optimization Tracker (7 Days, $40)

Use this every day for strict keep/kill/iterate decisions.

## 1) Creative-Level Tracking Table

| Day | Creative ID | Spend (USD) | Impressions | Link Clicks | CTR % | Landing Views | Leads | CPL (USD) | Decision | Reason |
|---|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| 1 | C1_DM_Chaos_Static |  |  |  |  |  |  |  | Pending | Collect baseline |
| 1 | C2_Followup_Time_Static |  |  |  |  |  |  |  | Pending | Collect baseline |
| 1 | C3_AllInOne_Control_Static |  |  |  |  |  |  |  | Pending | Collect baseline |
| 1 | C4_UGC_Pain_Video |  |  |  |  |  |  |  | Pending | Collect baseline |
| 1 | C5_UGC_Time_Video |  |  |  |  |  |  |  | Pending | Collect baseline |
| 1 | C6_Motion_Control_Video |  |  |  |  |  |  |  | Pending | Collect baseline |

Duplicate these 6 rows for each day (Day 2 to Day 7).

---

## 2) Day-2 Threshold Rules (strict)

Only evaluate a creative after minimum spend:

- Minimum spend gate: `Spend >= $5` per creative
- Baseline CTR: median CTR from creatives that reached gate
- Baseline CPL: median CPL from creatives that reached gate

### Decision logic

- **Keep** if `CTR > baseline CTR` and `CPL < baseline CPL`
- **Kill** if `Spend >= $5` and (`CTR < 0.8%` or `CPL > $6`)
- **Kill** if `Spend >= $7` and `Leads = 0`
- **Iterate** if close to baseline (within 10%) but not clearly winning

---

## 3) Midweek Reallocation Rules (Days 3-5)

- Reallocate toward top 2 creatives only.
- Keep at least 1 unchanged winner as control.
- Test at most 1-2 variants total.
- Change one variable per variant:
  - hook, or
  - first frame, or
  - headline

---

## 4) Quick Formulas

- `CTR % = (Link Clicks / Impressions) * 100`
- `CPL = Spend / Leads`
- `LPV rate = Landing Views / Link Clicks`
- `Lead rate = Leads / Landing Views`

---

## 5) Daily Notes (required)

- What changed today?
- Which creatives were killed and why?
- Which creatives were kept and why?
- What is tomorrow's one clear action?


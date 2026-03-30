# Fake-Door Ad Campaign Plan
Week 1–2 | Budget: $100–150 total

## Goal
Get 150–300 targeted landing page visits across 2–3 channels. Test two message angles against a real audience. Collect qualified signups and validate the screenshot assumption (A-006).

---

## Budget Split

| Channel | Budget | Purpose |
|---------|--------|---------|
| Meta ads (Instagram feed/stories) | $60–80 | Paid signal, fastest data |
| Reddit outreach (r/Etsy, r/smallbusiness) | $0 | Free signal, high-intent community |
| Direct DM outreach to sellers | $0 | Highest-intent signal, slowest |
| Reserve | $20–40 | Double down on what works in Week 2 |

---

## Meta Ads Setup

### Campaign structure
- 1 campaign: "SnapOrder Early Access"
- 2 ad sets: one per ICP label variant
- 2–3 ads per ad set: one per creative angle

### Ad Set A — ICP Label: "Handmade / Custom Sellers"
Targeting: Instagram business accounts, interests in handmade craft, Etsy, custom orders, small business

### Ad Set B — ICP Label: "Instagram Sellers / DM Sellers"
Targeting: Instagram business accounts, interests in selling on Instagram, DM sales, solopreneur

### Kill criteria
- Stop an ad set if $25 spent with zero landing page signups.
- Stop a creative if CTR <0.5% after 1,000 impressions.
- Stop channel entirely if $40 spent with fewer than 3 qualified signups.

---

## Creative Matrix (8 ads total)

### Angle 1 — Problem Recognition (Awareness)
**Hook:** "You're probably losing some orders and you don't even know it."

**Creative A1 (Static image):**
- Visual: messy Instagram DM thread on phone — 200+ unread messages
- Headline: "Stop losing orders in your DMs"
- Body: "Every DM order you forget is money left in your phone. SnapOrder fixes it."
- CTA: "Get early access"

**Creative A2 (Short video / Reel, 8–12 sec):**
- Scene 1 (0–3s): Phone screen — scrolling desperately through DMs
- Scene 2 (3–6s): Text on screen: "Which one was the pink hoodie order? 😬"
- Scene 3 (6–10s): Brand card with headline "Stop losing orders in your DMs"
- CTA overlay: "Get early access — it's free"

### Angle 2 — Mechanism Reveal (Consideration)
**Hook:** "Screenshot a DM. Your order is ready in seconds."

**Creative B1 (Static — before/after):**
- Left panel: raw DM screenshot showing an order inquiry
- Arrow in center
- Right panel: clean order card showing extracted fields (name, item, price, deadline)
- Headline: "Turn any DM into a tracked order. Instantly."
- CTA: "See how it works"

**Creative B2 (Short video, 10–15 sec):**
- Scene 1 (0–4s): DM conversation — "Hi I want the custom bag, beige, L size, by Dec 20, Lagos"
- Scene 2 (4–8s): Screenshot taken (phone animation)
- Scene 3 (8–12s): Order card appears: Customer / Item / Size / Deadline / Status: New
- Scene 4 (12–15s): "SnapOrder — Get early access free"

### Angle 3 — Outreach Copy (for Reddit / Communities / Direct DMs)
No paid budget. Posted as founder.

**Reddit post template (r/Etsy, r/smallbusiness, r/Instagram):**
```
Title: I'm building a tool for Instagram sellers who manage orders in DMs — would this be useful to you?

Quick context: I sell [or: I was watching friends who sell] handmade/custom products on Instagram and the order chaos is real — DMs everywhere, payments forgotten, customers following up about things buried in a thread.

I'm building SnapOrder: you take a screenshot of a DM conversation, upload it, and the app reads out the order details and creates a tracked record you can follow up on.

No CRM setup. No API integrations. Just screenshot → structured order.

Two questions before I build more:
1. Do you actually screenshot DMs to remember orders? (Yes/No is helpful)
2. Is this the real problem, or is there something more painful I'm missing?

Happy to share the early access link if it sounds useful.
```

**Direct DM template (to sellers with "DM for orders" in bio):**
```
Hey [name] — love your work. Quick question: how do you keep track of orders that come in through DMs? Do you use anything or just rely on memory/screenshots?

I'm building something that turns DM screenshots into structured order records automatically. Happy to share if it sounds relevant.
```

---

## UTM Tracking Setup

Add these to all ad URLs so you can separate traffic in analytics:

| Source | UTM string |
|--------|-----------|
| Meta Ad Set A (handmade) | `?utm_source=meta&utm_medium=paid&utm_campaign=handmade-makers` |
| Meta Ad Set B (ig sellers) | `?utm_source=meta&utm_medium=paid&utm_campaign=ig-sellers` |
| Reddit post | `?utm_source=reddit&utm_medium=organic&utm_campaign=community-post` |
| Direct DM outreach | `?utm_source=dm&utm_medium=outreach&utm_campaign=direct` |

---

## Metrics to Track Daily

| Metric | Target | Kill threshold |
|--------|--------|----------------|
| Landing page visits | 150+ by Day 7 | — |
| Visitor-to-signup CVR | ≥5% per channel | Pause channel <2% after 100 visits |
| Qualified signups | 10+ by Day 7 | — |
| Q4 "screenshot" yes rate | ≥60% | Reconsider core hook if <40% |
| Q3 primary channel = Instagram | ≥50% | Expand WhatsApp angle if <30% |

---

## Creative Production Notes

### If you have no design tools:
- Use **Canva** (free) for static images — create 1080×1080 and 1080×1920 versions
- Use your phone to record the DM scroll video — no professional production needed; raw phone footage converts well for this ICP
- Alternatively: use a screenshot of an anonymized real DM (blur the username if needed)

### The "before/after" creative (B1) is the highest-priority asset to produce
It makes the mechanism instantly clear without any explanation. Build this first.

---

## Week 2 Decision Rule
- If Meta Ad Set A (handmade) outperforms B: focus budget and messaging on handmade ICP
- If reddit/outreach outperforms paid: shift budget to content and organic
- If screenshot "yes" rate <40%: switch primary headline to Variant B (mechanism-led) or Variant D (AI Order Inbox)

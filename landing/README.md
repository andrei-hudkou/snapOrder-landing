# Landing Page — Deployment Guide

## What this is
Single-file landing page for SnapOrder early access validation.
No build step. No dependencies to install. Deploy in under 5 minutes.

---

## Step 1 — Set up your form backend (5 min)

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Click "New Form" and name it "SnapOrder Signups".
3. Copy the form endpoint — it looks like: `https://formspree.io/f/xabc1234`
4. Open `index.html` and replace `YOUR_FORM_ID` in this line:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. In Formspree settings, set the notification email to yours.

Free tier: 50 submissions/month. Upgrade ($10/mo) if you exceed that.

---

## Step 2 — Deploy to Netlify (2 min)

**Option A — Drag and drop (fastest)**
1. Go to [app.netlify.com](https://app.netlify.com) and sign up free.
2. Drag the entire `landing/` folder into the deploy area.
3. Your site is live instantly at a random URL like `https://amazing-newton-123.netlify.app`.
4. Rename it in Netlify settings to something like `snaporder-early.netlify.app`.

**Option B — Connect GitHub (recommended for tracking changes)**
1. Push this repo to GitHub.
2. In Netlify: New site → Import from Git → Select repo → Set publish directory to `landing`.
3. Every push to main auto-deploys.

**Option C — Custom domain**
In Netlify: Site settings → Domain management → Add custom domain.
If you buy `snaporder.co`, point it here.

---

## Step 3 — Set up analytics (5 min)

Add one of these to `<head>` in `index.html`:

**Plausible (privacy-friendly, $9/mo, recommended):**
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

**Google Analytics 4 (free):**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Track as a Goal/Conversion: form submission success (the thank-you message appearing).

---

## Step 4 — Run ads with UTM links

Use these URLs in your ads (replace with your actual domain):

| Ad Variant | URL |
|-----------|-----|
| Meta — Handmade makers | `https://snaporder-early.netlify.app?utm_source=meta&utm_medium=paid&utm_campaign=handmade-makers` |
| Meta — Instagram sellers | `https://snaporder-early.netlify.app?utm_source=meta&utm_medium=paid&utm_campaign=ig-sellers` |
| Reddit post | `https://snaporder-early.netlify.app?utm_source=reddit&utm_medium=organic&utm_campaign=community-post` |
| Direct DM outreach | `https://snaporder-early.netlify.app?utm_source=dm&utm_medium=outreach&utm_campaign=direct` |

UTM values are automatically captured in each signup via the hidden fields in the form.

---

## A/B Testing the Headline

The page currently uses **Variant A** (pain-led):
> "Stop losing orders in your DMs."

To test **Variant B** (mechanism-led):
1. Duplicate `index.html` → name it `index-b.html`
2. Change the `<h1>` to: "Screenshot your DM. Your order is ready in seconds."
3. Update sub-headline accordingly (see `docs/validation/brand-messaging.md`)
4. Use Netlify's split testing (Netlify → Deploys → Split Testing) to route 50% of traffic to each.

---

## Monitoring signups

- Formspree sends you an email for every new signup.
- In Formspree dashboard you can export all responses as CSV.
- Check daily against targets in `docs/validation/decision-gates.md` Gate 1.

---

## Files
- `index.html` — main landing page (Variant A, pain-led)
- `README.md` — this file

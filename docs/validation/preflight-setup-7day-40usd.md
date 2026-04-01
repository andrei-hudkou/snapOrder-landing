# Preflight Setup (Day 0) - Beginner Checklist

Use this once before launching ads. Do not launch until all required checks pass.

## 1) Landing and CTA Checks

- [ ] Landing opens on mobile without layout issues.
- [ ] All visible CTA buttons read exactly: `Get early access`.
- [ ] Clicking each CTA opens the modal.
- [ ] Modal form has email field and submit button visible on mobile.

## 2) Form and UTM Checks

- [ ] Form action points to: `https://formspree.io/f/xreolekj`
- [ ] Test submit succeeds from mobile browser.
- [ ] Hidden UTM fields exist: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`.
- [ ] Visiting with UTM params pre-fills hidden fields.

## 3) Tracking Checks

- [ ] Replace `YOUR_META_PIXEL_ID` in `landing/index.html`.
- [ ] `PageView` event fires.
- [ ] `cta_click` event fires when CTA is clicked.
- [ ] `modal_open` event fires when modal opens.
- [ ] `email_submit_success` event fires on successful form submit.

## 4) Creative ID Setup (must be fixed before launch)

Use these IDs exactly in exports and Ads Manager:

- `C1_DM_Chaos_Static` (Pain, static)
- `C2_Followup_Time_Static` (Time, static)
- `C3_AllInOne_Control_Static` (Control, static)
- `C4_UGC_Pain_Video` (Pain, video)
- `C5_UGC_Time_Video` (Time, video)
- `C6_Motion_Control_Video` (Control, video)

## 5) Minimum Launch Readiness

Launch only if:

- [ ] All required checks above pass.
- [ ] 6 creative files are exported with correct dimensions.
- [ ] Destination URL works with UTM parameters.
- [ ] Budget and day-by-day decision rules are documented in your tracker.

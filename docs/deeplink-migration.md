# Deep Link + Hosting Split Migration

Goal: Serve marketing site (www + apex) from Netlify. Serve dynamic / deep links from Firebase on a dedicated subdomain (e.g. `links.lomaevents.com`).

## 1. Choose subdomain
`links.lomaevents.com` (recommended). Alternatives: `go.`, `app.`, `l.`

## 2. DNS Records
At your domain registrar:

| Host | Type | Value |
|------|------|-------|
| @ (apex) | A | 75.2.60.5 |
| @ (apex) | A | 99.83.190.102 |
| www | CNAME | YOUR-NETLIFY-SITE.netlify.app |
| links | CNAME | ghs.googlehosted.com |

Propagation: up to a few minutes (rarely 24h). Use `dig +short links.lomaevents.com` to verify.

## 3. Firebase Project Targets
Files added:
- `.firebaserc` (define `web` and `links` targets - replace `YOUR_FIREBASE_PROJECT_ID`).
- `firebase.json` with two hosting configs.

Replace placeholder:
```
sed -i '' 's/YOUR_FIREBASE_PROJECT_ID/real-project-id/g' .firebaserc
```

## 4. Initialize (first time only)
```
firebase login
firebase use real-project-id
firebase target:apply hosting web real-project-id
firebase target:apply hosting links real-project-id
```
(If you used the provided `.firebaserc` you may not need the target:apply commands.)

## 5. Deploy steps
Marketing site (Netlify) is automatic from Git (recommended). For Firebase deep link site:
```
npm run build   # ensures fresh build for /support redirect (optional here)
firebase deploy --only hosting:links
```
If you also want to deploy the fallback marketing shell to Firebase (not necessary), you could: `firebase deploy --only hosting:web`.

## 6. App Configuration
Update mobile apps:
- Android: Intent filter `<data android:host="links.lomaevents.com" android:pathPrefix="/s" android:scheme="https" />`
- iOS: Associated Domains: `applinks:links.lomaevents.com`
- Update any in-app logic building deep link URLs.

## 7. Transition Strategy
1. Release app versions supporting new domain.
2. Monitor traffic on old pattern (Netlify `/s/*`).
3. Once negligible, remove the `/s/*` block from `netlify.toml`.

## 8. Verification
```
dig +short lomaevents.com      # Netlify IPs
curl -I https://lomaevents.com  # Look for x-nf-request-id

dig +short links.lomaevents.com  # ghs.googlehosted.com -> Google IPs
curl -I https://links.lomaevents.com/s/test  # Firebase headers
```
If universal link open fails, test in Safari (iOS) or `adb shell am start -W -a android.intent.action.VIEW -d "https://links.lomaevents.com/s/test" your.package`.

## 9. Rollback
If issues arise, keep old `/s/*` redirect on Netlify; users still on old app versions keep functioning.

## 10. Cleanup
After full migration:
- Remove `/s/*` redirect from `netlify.toml`.
- Optionally tighten CSP / security headers on Netlify.

---
Generated helper doc. Adjust as your project evolves.

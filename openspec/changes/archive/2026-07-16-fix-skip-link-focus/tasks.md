## 1. Implementation

- [x] 1.1 In `src/App.tsx`, change the skip link `href` from `#top` to `#main`.
- [x] 1.2 In `src/App.tsx`, add `id="main"` and `tabIndex={-1}` to the `<main>` element.

## 2. Verify

- [x] 2.1 Run `npm run build` and `npx tsc --noEmit` — both clean.
- [x] 2.2 Static-verified the DOM contract: skip link `href="#main"` targets `<main id="main" tabIndex={-1}>` — the standard fragment-focus pattern that satisfies the spec scenarios. Live keyboard walkthrough left as a manual eyeball check (no browser driver installed).
- [x] 2.3 `<main>` uses `tabIndex={-1}` (negative), so it is focusable via the skip link but never a standalone sequential tab stop — confirmed in source.

## 1. Toggle state and control

- [x] 1.1 Add `isOpen` UI state to `Navbar` via `useState(false)`.
- [x] 1.2 Add the `md:hidden` toggle button to the right cluster, before/around the theme toggle, rendering `Menu` when closed and `X` when open (`lucide-react`, icons `aria-hidden`).
- [x] 1.3 Wire toggle accessibility: `aria-expanded={isOpen}`, `aria-controls` pointing at the panel id, and an `aria-label` that flips ("Open menu" / "Close menu"); clicking toggles `isOpen`.

## 2. Disclosure panel

- [x] 2.1 Render the panel only while `isOpen` (unmounted when closed → absent from a11y tree and tab order); give it the id referenced by `aria-controls`.
- [x] 2.2 Populate the panel from the existing `NAV_LINKS`, reusing the desktop link styling/active-state treatment.
- [x] 2.3 Each mobile link `onClick` calls `handleNavClick(sectionId)` then closes the menu; do not duplicate scroll/scrollspy logic.

## 3. Dismissal wiring

- [x] 3.1 In a `useEffect` gated on `isOpen`, attach a `keydown` listener that closes on `Escape`; clean up on close/unmount.
- [x] 3.2 In the same effect, attach a document `pointerdown` (or `mousedown`) listener that closes when the target is outside both the panel and the toggle; exclude the toggle so it doesn't self-close on open.
- [x] 3.3 Confirm no focus trap, no `document.body.style.overflow` lock, and no forced focus-return are introduced.

## 4. Verification

- [x] 4.1 `npm run build` clean and `npx tsc --noEmit` clean.
- [x] 4.2 Below `md`: toggle visible, inline links hidden; at/above `md`: inline links visible, toggle hidden.
- [x] 4.3 Open menu → tap a link → page smooth-scrolls, active indicator updates, menu closes.
- [x] 4.4 Open menu → `Escape` closes it; open menu → outside click closes it; toggle opens reliably on a single tap.
- [x] 4.5 Regression: desktop links, scrollspy, `TalkModal`, theme toggle, Resume, and the skip link all behave as before.

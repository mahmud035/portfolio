## Why

On viewports below the `md` breakpoint the in-page anchor links (`About`, `Skills`, `Projects`) are hidden and never replaced, so phone visitors have zero way to jump between sections — they can only scroll. The navbar already renders the brand, theme toggle, and Resume button on mobile; only the section links are missing.

## What Changes

- Add a hamburger toggle button to the navbar, visible only below `md` (mirrors the existing `hidden md:flex` link list with a `md:hidden` control).
- Toggling the button opens a **disclosure** panel containing the same section links; the icon swaps `Menu`↔`X` to reflect state.
- The panel closes on `Escape`, on outside click, and after a link is tapped (so the user lands on the target section, not a lingering menu).
- Tapping a mobile link reuses the navbar's existing `handleNavClick` (smooth scroll + scrollspy lock), then closes the panel.
- The panel is a lightweight disclosure — **no focus trap, no body scroll-lock, no forced focus-return**. This is deliberate for a 3-link menu and keeps the change from touching the `Modal` primitive.
- No breaking changes. All existing behavior (desktop links, scrollspy, `TalkModal`/`Modal`, skip link) is untouched; the change is purely additive and scoped to the navbar.

## Capabilities

### New Capabilities

- `mobile-navigation`: A disclosure-based menu that gives small-viewport users access to the in-page section links, with accessible toggle semantics and standard dismissal behavior.

### Modified Capabilities

<!-- None. The change is additive; no existing spec's requirements change. -->

## Impact

- **Code**: `src/components/layout/Navbar.tsx` only (new toggle button, disclosure panel, open/close UI state). No new dependencies — `Menu`/`X` icons come from the already-used `lucide-react`.
- **APIs / data**: none.
- **Existing capabilities**: `skip-navigation` and the `Modal`-based `TalkModal` are unaffected.

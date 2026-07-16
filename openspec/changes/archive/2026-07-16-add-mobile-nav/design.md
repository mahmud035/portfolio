## Context

`Navbar.tsx` renders the brand, an inline `<ul className="hidden ... md:flex">` of section links, the theme toggle, and the Resume button. Below the `md` breakpoint the link list is hidden and nothing replaces it, so phone users cannot jump between sections.

The navbar already owns the hard part of navigation: `handleNavClick(targetId)` sets the active link immediately, engages a programmatic-scroll lock so the `IntersectionObserver` scrollspy doesn't flash through intermediate sections, and releases the lock on `scrollend` (with a 1200ms timer fallback). Any mobile menu must route through this same function rather than reimplementing scroll/scrollspy behavior.

The repo also has a `Modal` primitive (`ui/Modal.tsx`) used by `TalkModal`. It provides focus-trap, body scroll-lock, focus-return, Esc, click-outside, portal, and reduced-motion handling — the full "modal dialog" contract. The menu here is 3 links; the proposal deliberately scopes it as a lightweight **disclosure**, not a dialog, so `Modal` is intentionally left untouched.

## Goals / Non-Goals

**Goals:**

- Give sub-`md` users access to the same `NAV_LINKS` section links.
- Reuse `handleNavClick` verbatim for navigation/scrollspy behavior.
- Accessible toggle semantics: `aria-expanded`, `aria-controls`, state-reflecting accessible name.
- Dismiss on Esc, outside interaction, and after a link tap.
- Keep the change additive and contained to `Navbar.tsx`; no existing behavior changes.

**Non-Goals:**

- No focus trap, no body scroll-lock, no forced focus-return (explicitly excluded — see spec).
- No reuse, refactor, or parameterization of `Modal`.
- No extraction of a shared hook (`useFocusTrap`/`useDisclosure`) — single use; the charter says extract only when logic is actually reused.
- No animation library dependency for the panel; no changes to desktop links, scrollspy, theme toggle, Resume, or the skip link.

## Decisions

### D1 — Disclosure, not dialog

Render the mobile menu as a disclosure: a toggle button controlling a collapsible region, page remains interactive behind it.

- **Why:** For 3 links, a focus-trapping full-screen dialog is over-engineered. A disclosure is the standard ARIA pattern for "button reveals a list," needs no scroll-lock or trap, and stays entirely local to the navbar.
- **Alternatives considered:**
  - *Reuse `Modal`:* its `role="dialog"` + centered `max-w-md` chrome and hardcoded scale/y animation don't fit a header-anchored menu; it also has no `className` seam. Rejected.
  - *Extract `Modal`'s behavior into a hook, build a bespoke drawer:* the charter-clean path **if** a trap were needed — but it isn't. Rejected as premature.

### D2 — State lives in `Navbar` local `useState`

`const [isOpen, setIsOpen] = useState(false)` inside `Navbar`. This is UI-behavior state, so local state is correct per the charter ("Local state only for UI behaviour"). The toggle button and panel are siblings under the existing `<nav>`.

### D3 — Navigation reuses `handleNavClick`, then closes

Each mobile link's `onClick` calls `handleNavClick(sectionId)` (unchanged) and then `setIsOpen(false)`. No duplication of scroll or scrollspy logic. Closing after navigation satisfies the "land on the section, not a lingering menu" requirement and sidesteps the focus-return question entirely — with no trap, focus follows the browser's default for an in-page anchor.

### D4 — Responsive visibility via Tailwind, mirroring the existing pattern

The toggle button is `md:hidden`; the desktop `<ul>` stays `hidden md:flex`. The two are mutually exclusive at the `md` breakpoint with no JS media queries — the panel simply isn't rendered (or is hidden) at/above `md`. When collapsed, the panel is removed from the DOM so it's absent from the accessibility tree and tab order (satisfies "absent from a11y tree while collapsed").

### D5 — Dismissal wiring

- **Esc:** a `keydown` listener active only while open; `Escape` → close.
- **Outside interaction:** a `pointerdown`/`mousedown` document listener active only while open; if the target is outside both the panel and the toggle, close. The toggle is excluded so its own click doesn't immediately re-close after opening.
- **Icon:** swap `Menu` ↔ `X` from `lucide-react` (already a dependency; `X` already used in `TalkModal`) to mirror open state; icon is `aria-hidden`, the button carries the accessible name.

## Risks / Trade-offs

- **Listener lifecycle leaks** → attach Esc/outside-click listeners inside a `useEffect` gated on `isOpen`, with a cleanup that removes them; nothing registered while closed.
- **Outside-click racing the toggle** (open then instantly close) → exclude the toggle element from the outside-click test, or rely on the toggle's own handler to flip state; verify the toggle opens reliably on a single tap.
- **Route to `Modal` in the future** (menu grows, needs a trap) → the spec's "no trap/scroll-lock" scenario is the guard; revisiting it is a deliberate spec change, not a silent drift. Documented, accepted.
- **Reduced motion** → if any open/close transition is added, keep it CSS-only and respect `prefers-reduced-motion`; the baseline needs no animation at all.

## Migration Plan

Purely additive, single file. No data or API changes, no flags. Rollback = revert the `Navbar.tsx` diff. Nothing else references the new markup.

## Open Questions

- None blocking. Optional polish (not required by spec): a subtle CSS height/opacity transition on open, and whether the panel should also list the Resume link (currently Resume stays in the always-visible right cluster, so the menu holds section links only).

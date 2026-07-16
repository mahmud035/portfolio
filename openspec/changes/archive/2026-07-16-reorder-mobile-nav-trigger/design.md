## Context

The header action cluster in `src/components/layout/Navbar.tsx` is a single flex row (`gap-2`) with three children in DOM order: the mobile toggle `<button>` (`md:hidden`), `<ThemeToggle>`, and the Resume `<Button>`. On mobile this renders `[☰] [☀] [Resume]`; on desktop the toggle is hidden so it renders `[☀] [Resume]`.

DOM order drives visual order, keyboard focus order, and screen-reader reading order for these siblings. The disclosure panel the toggle controls (`id="mobile-nav"`, wired via `aria-controls`) renders after the `<nav>`, at the end of the header.

## Goals / Non-Goals

**Goals:**

- Make the mobile toggle the trailing, edge-anchored control: `[☀] [Resume] [☰]`.
- Preserve identical desktop rendering and all existing behavior, state, handlers, and ARIA wiring.

**Non-Goals:**

- No visual separator, divider, or extra spacing — uniform `gap-2` stays.
- No change to the toggle icon, size, styling, scrollspy, outside-click, or Escape handling.
- No change to the brand/left side of the navbar.

## Decisions

- **Reorder JSX children, don't restructure.** Move the toggle `<button>` block so it renders after the Resume `<Button>` within the existing action-cluster `<div>`. This is the whole change.
  - *Why over alternatives:* CSS `order`/`flex-direction` tricks could reposition it visually while leaving DOM order (and thus focus/reading order) wrong — which would keep the a11y traversal backwards and defeat half the rationale. Reordering the DOM fixes appearance and traversal together, and keeps the code the obvious reading of the layout.

## Risks / Trade-offs

- **[No handler depends on child order]** → The outside-click test uses `headerRef.current.contains(...)` (whole header), and the disclosure panel is a separate sibling of `<nav>`. Reordering the cluster's children touches neither.
- **[Desktop regression]** → None: the toggle is `md:hidden`, so reordering a node hidden at desktop has no visual effect there. Verify by eye at both breakpoints.

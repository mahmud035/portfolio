## Why

On small viewports the navigation toggle sits mid-cluster (`[☰] [☀] [Resume]`), where it reads as just another icon rather than a primary control. Anchoring it to the trailing edge (`[☀] [Resume] [☰]`) matches the convention that disclosure toggles live at a screen edge, and — because the toggle carries `aria-controls` for the panel that renders at the end of the header — makes the trigger immediately precede the content it reveals in DOM, focus, and reading order.

## What Changes

- Move the mobile navigation toggle to be the **last** control in the header action cluster, so mobile reads `[☀] [Resume] [☰]` with the toggle edge-anchored.
- Keep uniform `gap-2` spacing between all three controls — no divider, no extra margin.
- No change on desktop: the toggle is hidden at and above the desktop breakpoint, so reordering it has no visual effect there.

## Capabilities

### New Capabilities

<!-- None. -->

### Modified Capabilities

- `mobile-navigation`: the requirement governing the toggle's presence gains a constraint on its **position** — the toggle SHALL be the trailing control in the header action cluster, after the theme and resume controls, so its position in traversal order immediately precedes the panel it controls.

## Impact

- **Code**: `src/components/layout/Navbar.tsx` — relocate the toggle `<button>` to after the Resume `<Button>` within the action cluster. Presentation-only; no logic, state, handlers, or ARIA wiring change.
- **APIs / dependencies**: none.
- **Risk**: minimal — reordering siblings that are hidden on desktop; no handler depends on child order (`headerRef.contains` outside-click test and the disclosure panel are unaffected).

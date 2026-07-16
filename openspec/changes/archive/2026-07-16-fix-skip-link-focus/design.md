## Context

`src/App.tsx` renders a visually-hidden "Skip to content" link (`sr-only focus:not-sr-only`) as the first focusable element, followed by `<Navbar />`, then `<main>` wrapping the page sections. The link currently points at `#top`, an `id` on the Hero `<section>`. The Hero section is not focusable, so activating the link scrolls the page but does not move keyboard focus — the browser keeps focus on the link, and the next Tab continues from the link's position (back into the navbar).

## Goals / Non-Goals

**Goals:**

- Activating the skip link moves keyboard focus into the main content region.
- After activation, the next Tab lands on the first interactive element inside `<main>`.
- Keep the skip link the first focusable control, visible on focus.

**Non-Goals:**

- No change to the navbar brand link (it may keep pointing at `#top` for "back to top").
- No new component, hook, or dependency.
- No visible layout or styling change to `<main>`.

## Decisions

### Decision 1: Target `<main>` via `id="main"`, not the Hero's `#top`

Point the skip link at the main content landmark rather than the top of the page. Semantically, "Skip to content" should bypass the nav and land on the content region — `<main>` is that region. Reusing `#top` conflates "skip past nav" with "scroll to top."

### Decision 2: Make `<main>` programmatically focusable with `tabIndex={-1}`

`tabIndex={-1}` lets an element receive focus via script or a fragment-target activation without inserting it into the sequential Tab order. This is the standard skip-link pattern: the browser's fragment navigation moves focus to the `id` target when that target is focusable. Focus lands on `<main>`, and the next Tab proceeds to the first focusable descendant. Because the value is `-1`, sequential tabbing never stops on `<main>` itself.

## Risks / Trade-offs

- **Focus ring on `<main>`**: a focused `<main>` could show a default outline. `<main>` has no visible box, so any ring is negligible; if it ever distracts, scope `outline-none` to `main:focus` only. Not doing so now to avoid over-engineering.
- **Older-browser focus behavior**: some very old browsers didn't move focus to fragment targets. All currently supported evergreen browsers do; `tabIndex={-1}` is the widely-recommended guard and needs no JS.

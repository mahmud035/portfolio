## Why

The "Skip to content" link targets `#top` (the Hero section), a non-focusable element. A plain in-page anchor to a non-focusable target scrolls the page but does not reliably move keyboard focus into the content — so after activating the skip link, a keyboard or screen-reader user's next Tab can land back in the navbar, defeating the link's entire purpose.

## What Changes

- Point the skip link at the main content region instead of the Hero section (`#top` → `#main`).
- Give `<main>` an `id="main"` and `tabIndex={-1}` so it can programmatically receive focus without becoming a Tab stop.
- Result: activating the skip link both scrolls to and moves focus into the main content, so the next Tab continues inside the content rather than returning to the nav.

## Capabilities

### New Capabilities

- `skip-navigation`: Keyboard/AT users can bypass the navbar and jump focus directly into the page's main content via a skip link.

### Modified Capabilities

<!-- None: no existing specs. -->

## Impact

- `src/App.tsx`: skip link `href` and the `<main>` element's attributes.
- No dependency, API, or data changes. Purely an accessibility correctness fix.

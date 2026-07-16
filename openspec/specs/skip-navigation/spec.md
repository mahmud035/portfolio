# skip-navigation

## Purpose

Let keyboard and assistive-technology users bypass the navigation and move focus directly into the page's main content via a skip link.

## Requirements

### Requirement: Skip link moves focus to main content

The page SHALL provide a keyboard-accessible skip link that, when activated, moves keyboard focus into the main content region so that subsequent keyboard navigation continues within the content rather than returning to the navigation.

The main content region MUST be programmatically focusable (able to receive focus via the skip link) without being inserted into the normal tab order as a standalone stop.

#### Scenario: Activating the skip link moves focus into main content

- **WHEN** a keyboard user focuses the "Skip to content" link and activates it
- **THEN** keyboard focus moves to the main content region
- **AND** the next Tab press advances to the first focusable element inside the main content, not back to the navbar

#### Scenario: Main region is not a standalone tab stop

- **WHEN** a keyboard user tabs through the page without using the skip link
- **THEN** the main content region itself is not reached as a separate tab stop
- **AND** focus proceeds directly to the interactive elements within it

#### Scenario: Skip link is the first reachable control

- **WHEN** the page loads and the user presses Tab for the first time
- **THEN** the "Skip to content" link receives focus and becomes visible

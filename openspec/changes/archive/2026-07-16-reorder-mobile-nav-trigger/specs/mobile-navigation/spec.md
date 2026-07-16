## MODIFIED Requirements

### Requirement: Mobile viewports expose a navigation toggle

Below the desktop navigation breakpoint, where the inline section links are hidden, the navbar SHALL present a toggle control that opens and closes a menu of the in-page section links. At and above the breakpoint the toggle SHALL NOT be shown and the inline links remain the sole navigation.

The toggle SHALL expose its expanded/collapsed state and the panel it controls to assistive technology, and SHALL carry an accessible name that reflects the current action.

Within the header action cluster, the toggle SHALL be the trailing control — positioned after the theme and resume controls — so that it is edge-anchored on small viewports and its position in DOM, focus, and reading order immediately precedes the disclosure panel it controls.

#### Scenario: Toggle is present only on small viewports

- **WHEN** the page is viewed below the desktop navigation breakpoint
- **THEN** the navigation toggle control is visible
- **AND** the inline section links are not shown

#### Scenario: Toggle is absent on desktop viewports

- **WHEN** the page is viewed at or above the desktop navigation breakpoint
- **THEN** the inline section links are visible
- **AND** the navigation toggle control is not shown

#### Scenario: Toggle communicates its state

- **WHEN** the menu is collapsed
- **THEN** the toggle reports a collapsed state to assistive technology
- **AND** its accessible name conveys that activating it opens the menu
- **WHEN** the menu is expanded
- **THEN** the toggle reports an expanded state to assistive technology
- **AND** its accessible name conveys that activating it closes the menu

#### Scenario: Toggle is the trailing control on small viewports

- **WHEN** the page is viewed below the desktop navigation breakpoint
- **THEN** the navigation toggle is the last control in the header action cluster, after the theme and resume controls
- **AND** it is reached after those controls in keyboard focus order
- **AND** it precedes the disclosure panel it controls in reading order

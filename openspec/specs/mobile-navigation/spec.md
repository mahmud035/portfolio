# mobile-navigation

## Purpose

Give small-viewport users access to the in-page section links that are hidden on mobile, through a lightweight disclosure menu with accessible toggle semantics and standard dismissal behavior.

## Requirements

### Requirement: Mobile viewports expose a navigation toggle

Below the desktop navigation breakpoint, where the inline section links are hidden, the navbar SHALL present a toggle control that opens and closes a menu of the in-page section links. At and above the breakpoint the toggle SHALL NOT be shown and the inline links remain the sole navigation.

The toggle SHALL expose its expanded/collapsed state and the panel it controls to assistive technology, and SHALL carry an accessible name that reflects the current action.

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

### Requirement: Toggling reveals and hides the section links

Activating the toggle SHALL open a panel containing the same in-page section links offered on desktop. Activating it again SHALL close the panel. The panel SHALL be absent from the accessibility tree and non-interactive while collapsed.

#### Scenario: Opening the menu

- **WHEN** a user activates the toggle while the menu is collapsed
- **THEN** the panel expands and its section links become visible and interactive

#### Scenario: Closing the menu with the toggle

- **WHEN** a user activates the toggle while the menu is expanded
- **THEN** the panel collapses and its section links are no longer interactive

### Requirement: Selecting a section link navigates and dismisses the menu

Selecting a section link from the mobile menu SHALL perform the same in-page navigation as the desktop links — smooth-scrolling to the target section and updating the active-section indicator — and SHALL then close the menu so the user lands on the section rather than a lingering overlay.

#### Scenario: Tapping a link scrolls and closes

- **WHEN** a user activates a section link in the open mobile menu
- **THEN** the page navigates to that section using the existing smooth-scroll behavior
- **AND** the active-section indicator updates to that section
- **AND** the menu closes

### Requirement: Menu dismisses on Escape and outside interaction

While the menu is open, pressing `Escape` SHALL close it, and interacting outside the menu and its toggle SHALL close it. Dismissing the menu SHALL NOT trap keyboard focus, lock body scrolling, or forcibly relocate focus — the disclosure is lightweight by design.

#### Scenario: Escape closes the menu

- **WHEN** the menu is open and the user presses `Escape`
- **THEN** the menu closes

#### Scenario: Outside interaction closes the menu

- **WHEN** the menu is open and the user interacts with an area outside both the menu panel and the toggle
- **THEN** the menu closes

#### Scenario: Disclosure does not trap focus or lock scroll

- **WHEN** the menu is open
- **THEN** keyboard focus is not trapped within the menu
- **AND** the body remains scrollable
- **AND** closing the menu does not forcibly move focus to a predetermined element

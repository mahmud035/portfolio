## 1. Reorder the action cluster

- [x] 1.1 In `src/components/layout/Navbar.tsx`, move the mobile toggle `<button>` so it renders after the Resume `<Button>` within the action-cluster `<div>` (order: `ThemeToggle` → `Button` → toggle). Change nothing else — same classes, ARIA, handlers, and `gap-2`.

## 2. Verify

- [x] 2.1 Below the desktop breakpoint, confirm the header renders `[☀] [Resume] [☰]` with the toggle edge-anchored, and that keyboard Tab reaches the toggle after theme and resume.
- [x] 2.2 At/above the desktop breakpoint, confirm rendering is unchanged (`[☀] [Resume]`, toggle hidden).
- [x] 2.3 Confirm toggle still opens/closes the menu, and Escape + outside-click dismissal still work.

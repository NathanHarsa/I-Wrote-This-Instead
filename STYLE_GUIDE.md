# STYLE_GUIDE.md

# I Wrote This Instead

## Development & Visual Style Guide

---

# 1. Purpose

This document defines the standards for maintaining consistency throughout the project.

The goal is to ensure that every page, component, and future feature feels like part of the same experience.

The website should always maintain:

- simplicity
- readability
- warmth
- intentional design
- focus on writing

---

# 2. General Design Rule

Before adding anything, ask:

> Does this improve the experience of reading?

If not, do not add it.

---

# 3. Layout Standards

## Content Width

All primary content should use:

```css
max-width: 700px;
```

Reason:

Long lines reduce reading comfort.

Poetry especially benefits from narrow text columns.

---

## Page Spacing

Pages should have generous vertical spacing.

Recommended:

```css
padding-top: 4rem;
padding-bottom: 4rem;
```

Adjust naturally for mobile.

---

## Side Padding

Desktop:

```css
24px
```

Mobile:

```css
16px
```

Never allow content to touch screen edges.

---

# 4. Spacing Scale

Use consistent spacing values.

Preferred scale:

```
4px
8px
12px
16px
24px
32px
48px
64px
96px
```

Avoid random values.

Bad:

```css
margin-top: 37px;
```

Good:

```css
margin-top: 32px;
```

---

# 5. Color Rules

## Background

Primary:

```
#F7F2E8
```

---

## Text

Primary:

```
#111111
```

Secondary:

```
#555555
```

---

## Borders

```
#DDD6C8
```

---

Never use:

- bright colors
- gradients
- neon colors
- pure white backgrounds
- pure black text

---

# 6. Typography Rules

## Poetry

Font:

JetBrains Mono

Fallback:

monospace

---

Poem text:

Desktop:

18px

Mobile:

16px

---

Line height:

```
1.9
```

---

## UI Text

Font:

Inter

Fallback:

system-ui

---

Navigation:

16px

---

Dates:

14px

Muted color.

---

# 7. Heading Rules

Only one H1 per page.

---

## Homepage

H1:

Website title.

---

## Poems Page

H1:

"Poems"

---

## Individual Poem

H1:

Poem title.

---

Use headings for structure.

Do not use headings only for visual size.

---

# 8. Component Styling Rules

Components should remain visually quiet.

Avoid:

- large borders
- shadows
- animations
- decorative elements

---

## Cards

Cards should use:

Border:

1px solid

Border radius:

6px

Padding:

16px

---

No:

drop shadows

gradients

large hover effects

---

# 9. Buttons

Buttons should feel like physical paper controls.

Rules:

Border:

1px solid

Radius:

6px

Padding:

12px 18px

---

Hover:

Slight opacity change.

Example:

```css
opacity: .75;
```

---

Do not use:

- pill buttons
- gradients
- glowing effects

---

# 10. Links

Links should be subtle.

Default:

Dark gray.

Hover:

Slight fade.

---

Avoid:

Bright blue links.

---

# 11. Markdown Styling

Markdown content should look like a printed page.

---

Paragraphs:

Spacing:

```
1rem
```

---

Headings:

Large spacing above.

---

Blockquotes:

Use:

- muted color
- left border
- indentation

Example:

```css
border-left: 2px solid;
padding-left: 1rem;
```

---

Horizontal Rules:

Use as section separators.

Large vertical spacing.

---

# 12. Responsive Rules

The site should work naturally at:

360px

480px

768px

1024px

1440px

---

Do not create completely separate mobile designs.

Use flexible layouts.

---

# 13. CSS Naming

Use camelCase class names.

Example:

```css
.poemTitle

.poemContainer

.navigationLink
```

---

Avoid:

```
.bigTitle

.redButton

.finalVersion
```

Names should describe purpose.

---

# 14. Component Naming

React components:

PascalCase

Examples:

```
PoemCard

Navbar

Footer

BackButton
```

---

Files:

Same as component name.

Example:

```
PoemCard.tsx
```

---

# 15. File Organization

Keep files close to their purpose.

Example:

Good:

```
components/
  PoemCard.tsx
```

Bad:

```
utils/
  randomComponents.tsx
```

---

# 16. Animation Rules

Animations should be almost invisible.

Allowed:

Opacity changes.

Small transitions.

---

Example:

```css
transition: opacity .15s ease;
```

---

Avoid:

- bouncing
- sliding
- spinning
- parallax
- scroll animations

---

# 17. Image Rules

Version 1:

No decorative images.

---

Future images must:

- support the writing
- not distract
- load efficiently

---

# 18. Icon Rules

Avoid icons unless necessary.

Text is preferred.

Example:

Good:

```
← Back to Poems
```

Better than:

```
[arrow icon]
```

---

# 19. Empty State Style

Empty states should feel human.

Example:

```
No poems have been published yet.

Please check back soon.
```

---

Avoid:

```
404 ERROR CODE: CONTENT NOT FOUND
```

---

# 20. Code Formatting

Use:

- consistent indentation
- readable naming
- small functions
- clear structure

---

Avoid:

- clever one-liners
- deeply nested logic
- unnecessary abstraction

---

# 21. Before Merging Changes

Check:

## Visual

✓ Colors match

✓ Typography matches

✓ Spacing matches

✓ Mobile works

---

## Technical

✓ TypeScript passes

✓ Build succeeds

✓ No warnings

✓ Accessibility preserved

---

# 22. Final Style Rule

The website should feel like:

A printed page.

Not an application.

A quiet place.

Not a platform.

A collection.

Not a feed.

Every design choice should protect that feeling.

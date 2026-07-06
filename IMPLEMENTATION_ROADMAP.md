# IMPLEMENTATION_ROADMAP.md

# I Wrote This Instead

## Development Roadmap

---

# Development Philosophy

This project should be built incrementally.

Each milestone should create a working improvement.

Do not build future features before the current milestone is complete.

The priority order is:

1. Foundation
2. Design system
3. Content system
4. Pages
5. Navigation
6. Polish
7. Deployment

---

# Milestone 0 — Project Initialization

## Goal

Create the base Next.js application.

---

## Tasks

- [ ] Initialize Next.js project
- [ ] Enable TypeScript
- [ ] Enable App Router
- [ ] Enable ESLint
- [ ] Create Git repository
- [ ] Install required dependencies

Required dependencies:

```
gray-matter
remark
remark-html
```

---

## Completion Criteria

- Application runs locally
- TypeScript works
- Build succeeds
- Dependencies installed

---

# Milestone 1 — Application Foundation

## Goal

Create the basic application structure.

---

## Tasks

Create:

```
app/

components/

lib/

poems/

public/

styles/
```

Implement:

- Root layout
- Metadata
- Global styles
- Font configuration
- Basic page structure

---

## Completion Criteria

- Homepage loads
- Global styles work
- Folder structure matches specification

---

# Milestone 2 — Design System

## Goal

Implement the visual identity.

---

## Tasks

Create:

- Cream paper background
- Typography system
- Spacing system
- Content width system
- Basic reusable styles

Design requirements:

Background:

```
#F7F2E8
```

Text:

```
#111111
```

Content width:

```
700px
```

---

## Completion Criteria

- Website matches the intended aesthetic
- Layout works on mobile
- Typography is consistent

---

# Milestone 3 — Site Navigation

## Goal

Create the shared website navigation.

---

## Tasks

Create:

```
Navbar.tsx

Footer.tsx
```

Add:

- Home link
- Poems link
- About link
- Website title

---

## Completion Criteria

- Navigation appears globally
- Links work
- Mobile layout works

---

# Milestone 4 — Markdown Poetry System

## Goal

Make markdown files the content source.

---

## Tasks

Create:

```
lib/markdown.ts

lib/poems.ts
```

Implement:

- Reading markdown files
- Parsing frontmatter
- Generating slugs
- Sorting poems
- Filtering unpublished poems

Required functions:

```
getAllPoems()

getPublishedPoems()

getPoemBySlug()

getAdjacentPoems()
```

---

## Completion Criteria

- Markdown files load correctly
- Metadata works
- Draft poems remain hidden

---

# Milestone 5 — Poems Archive

## Goal

Create the poem listing page.

---

## Tasks

Create:

```
app/poems/page.tsx
```

Create:

```
components/PoemCard.tsx
```

Display:

- Title
- Date
- Tags

---

## Completion Criteria

- All published poems appear
- Poems link correctly
- Sorting works

---

# Milestone 6 — Individual Poem Pages

## Goal

Allow readers to open individual poems.

---

## Tasks

Create:

```
app/poems/[slug]/page.tsx
```

Implement:

- Dynamic routes
- Static generation
- Markdown rendering
- Metadata generation

Create:

```
BackButton.tsx

PreviousNext.tsx
```

---

## Completion Criteria

- Each poem has its own URL
- Markdown renders properly
- Navigation works

---

# Milestone 7 — Homepage

## Goal

Create the entry experience.

---

## Tasks

Homepage should include:

- Website title
- Short introduction
- Link to poems
- Recent poems

---

## Completion Criteria

- Purpose of website is immediately clear
- Recent poems display correctly

---

# Milestone 8 — About Page

## Goal

Create the author page.

---

## Tasks

Create:

```
app/about/page.tsx
```

Include:

- Short biography
- Writing philosophy
- Purpose of website

---

## Completion Criteria

- Page matches design
- Navigation works

---

# Milestone 9 — Error Handling

## Goal

Handle invalid situations.

---

## Tasks

Create:

```
app/not-found.tsx
```

Handle:

- Missing poems
- Invalid routes
- Missing metadata

---

## Completion Criteria

- Errors are user friendly
- Design remains consistent

---

# Milestone 10 — Responsive Optimization

## Goal

Polish the mobile experience.

---

## Tasks

Test:

- Desktop
- Tablet
- Mobile

Adjust:

- Typography
- Spacing
- Navigation
- Layout

---

## Completion Criteria

- No horizontal scrolling
- Text remains readable
- Navigation works everywhere

---

# Milestone 11 — SEO

## Goal

Improve discoverability.

---

## Tasks

Add:

- Metadata
- Open Graph information
- Sitemap
- Robots configuration

---

## Completion Criteria

- Pages have proper metadata
- Poems have unique titles/descriptions

---

# Milestone 12 — Performance Review

## Goal

Maintain a lightweight website.

---

## Tasks

Review:

- Dependencies
- Bundle size
- Client components
- Build performance

---

## Completion Criteria

- Minimal JavaScript
- Fast builds
- No unnecessary packages

---

# Milestone 13 — Deployment

## Goal

Publish the website.

---

## Tasks

- Create production build
- Deploy to Vercel
- Configure domain
- Test production version

---

## Completion Criteria

- Website is publicly accessible
- Deployments work automatically

---

# Version 1 Complete

Version 1 is finished when:

✓ Website is deployed

✓ Poems are managed through markdown

✓ Readers can browse poems

✓ Readers can read individual poems

✓ Navigation works

✓ Mobile experience is polished

✓ Design matches the project identity

✓ Documentation is complete

---

# Future Milestones

Not part of Version 1:

- Dark mode
- Tags
- Search
- Collections
- Audio readings
- Timeline
- RSS feed
- Newsletter

Only implement these if they improve the writing experience.

---

# Final Rule

Build the smallest version that fully captures the purpose.

The goal is not to create a complex application.

The goal is to create a place where words can exist.
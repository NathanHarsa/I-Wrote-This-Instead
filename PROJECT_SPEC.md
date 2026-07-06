
# PROJECT_SPEC.md

**Project Name:** I Wrote This Instead

**Version:** 1.0

**Author:** Nathan

**Status:** Planning

---

# 1. Project Vision

## 1.1 Purpose

"I Wrote This Instead" is a minimalist digital poetry collection.

The purpose of the website is to provide a calm, distraction-free place where readers can experience poetry without advertisements, algorithms, comments, engagement metrics, or unnecessary visual clutter.

The website is intentionally small in scope.

Rather than functioning as a blog or social media platform, it should feel like opening a physical notebook someone has chosen to share.

The experience should be intimate, quiet, and timeless.

Every design decision should support the writing.

---

## 1.2 Mission Statement

Create a website that disappears behind the writing.

Visitors should remember the poems—not the interface.

---

# 2. Design Philosophy

This project follows a "content-first" philosophy.

The interface exists solely to support the writing.

Nothing should compete with the poem itself.

The design should communicate:

• honesty

• vulnerability

• simplicity

• permanence

• calmness

• intention

This website should never feel trendy.

It should feel like something that could exist ten years from now without appearing dated.

---

## 2.1 Guiding Principles

### Principle 1

The writing always comes first.

Every component should ask:

"Does this improve the reading experience?"

If the answer is no, it should not exist.

---

### Principle 2

Less is more.

Avoid unnecessary features.

Avoid unnecessary animation.

Avoid unnecessary JavaScript.

Avoid unnecessary dependencies.

---

### Principle 3

Fast is beautiful.

Pages should load nearly instantly.

The website should feel lightweight.

No loading spinners.

No waiting.

---

### Principle 4

Technology should disappear.

Readers should never think about the framework.

The website should feel effortless.

---

### Principle 5

The notebook aesthetic should remain subtle.

The website should not attempt to imitate an old journal through excessive textures or decorative elements.

Instead, the aesthetic should come from:

• typography

• spacing

• color

• simplicity

---

# 3. User Experience Goals

When someone visits the homepage they should immediately understand three things:

1. This is a collection of writing.

2. The author values simplicity.

3. The writing is the focus.

Navigation should never require explanation.

Finding a poem should require one or two clicks at most.

Reading should never feel interrupted.

---

# 4. Target Audience

Primary audience:

• people interested in poetry

• friends and family

• readers discovering the website

• future employers viewing personal work

• the author

The website should be equally enjoyable for first-time visitors and someone returning years later.

---

# 5. Technical Goals

The application should be:

• static

• lightweight

• responsive

• accessible

• maintainable

• easily expandable

Adding a new poem should never require writing additional application code.

Publishing new content should only involve creating a markdown file.

---

# 6. Project Requirements

The project must satisfy the following requirements.

## Functional Requirements

✔ Homepage

✔ Poems page

✔ About page

✔ Dynamic poem pages

✔ Markdown rendering

✔ Automatic poem discovery

✔ Previous / Next navigation

✔ Back navigation

✔ Responsive layout

✔ Static generation

✔ Mobile support

---

## Non-Functional Requirements

✔ Fast page loads

✔ Semantic HTML

✔ Accessibility

✔ SEO friendly

✔ Minimal JavaScript

✔ Easy maintenance

✔ Consistent design

✔ No backend

✔ No database

---

# 7. Technology Stack

Framework

Next.js (App Router)

Reason:

Modern, fast, excellent static site generation, strong TypeScript support, and simple deployment.

---

Language

TypeScript

Reason:

Improved maintainability and type safety.

---

Styling

CSS Modules

Reason:

Simple.

Scoped.

No unnecessary abstraction.

No utility-class clutter.

---

Markdown

gray-matter

remark

remark-html

Reason:

Reliable parsing.

Excellent ecosystem.

Supports frontmatter.

---

Deployment

GitHub

↓

Vercel

Reason:

Automatic deployments after pushing to the repository.

Zero server maintenance.

---

Version Control

Git

GitHub

---

Package Manager

npm

---

# 8. Browser Support

Latest versions of:

Chrome

Firefox

Safari

Microsoft Edge

Responsive support for:

Desktop

Tablet

Mobile

---

# 9. Folder Structure

The repository should follow the following structure.

```

i-wrote-this-instead/

app/
│
├── layout.tsx
├── globals.css
├── page.tsx
│
├── about/
│ └── page.tsx
│
├── poems/
│ ├── page.tsx
│ └── [slug]/
│ └── page.tsx
│
└── not-found.tsx

components/
│
├── Navbar.tsx
├── Footer.tsx
├── BackButton.tsx
├── PoemCard.tsx
├── PreviousNext.tsx

lib/
│
├── poems.ts
├── markdown.ts
└── navigation.ts

poems/
│
├── first-poem.md
├── second-poem.md
└── ...

public/

styles/

docs/

README.md

PROJECT_SPEC.md

```

---

# 10. Application Structure

The application contains three primary user-facing pages.

## Home

Purpose:

Introduce the collection.

Provide access to recent poems.

Introduce the author.

---

## Poems

Purpose:

Display every published poem.

Allow browsing.

---

## About

Purpose:

Introduce the author.

Explain the purpose of the collection.

---

Every poem exists as an automatically generated page.

Poem pages should never be manually created.

They are produced from markdown files during the build process.

---

# 11. Success Criteria

Version 1 of the project is considered complete when:

• Visitors can browse every poem.

• New poems require only a markdown file.

• Every page is mobile friendly.

• Lighthouse scores are excellent.

• The design remains minimal.

• Reading a poem feels effortless.

Most importantly:

The website should feel less like visiting a web application and more like opening a notebook that someone trusted you enough to read.

# 2. Information Architecture & Content System

---

# 12. Information Architecture

The website is intentionally small.

Every page should have a clear purpose.

The entire site map is shown below.

```
Home
│
├── Poems
│      ├── Poem 1
│      ├── Poem 2
│      ├── Poem 3
│      └── ...
│
└── About
```

There should never be unnecessary nesting.

Visitors should always know where they are.

The deepest page in the application should be:

```
/poems/[slug]
```

No page should require more than two clicks from the homepage.

---

# 13. Navigation

Navigation should remain identical across every page.

Desktop Navigation

```
------------------------------------------------

I Wrote This Instead

Home      Poems      About

------------------------------------------------
```

Mobile Navigation

```
I Wrote This Instead

Home
Poems
About
```

Do not use a hamburger menu.

The website is too small to justify hiding navigation.

Navigation should always remain visible.

---

# 14. User Flow

## Home

User lands on homepage.

↓

Reads title.

↓

Chooses:

- Browse Poems
- About

↓

Begins reading.

---

## Poems Page

Visitor sees every published poem.

↓

Clicks title.

↓

Reads poem.

↓

Returns using Back button

or

Uses Previous / Next navigation.

---

## About Page

Visitor learns about the author.

↓

Returns to Home or Poems.

---

## Reading Flow

Ideal reading experience:

Homepage

↓

Poems

↓

Poem

↓

Next Poem

↓

Next Poem

↓

Return Home

Reading should feel continuous.

---

# 15. URL Structure

Home

```
/
```

About

```
/about
```

Poems List

```
/poems
```

Individual Poem

```
/poems/my-journal-knows-all-about-you
```

Slug should always be generated from filename.

Never manually specify URLs.

---

# 16. Markdown Content System

Every poem is a Markdown file.

The application should automatically discover every markdown file located in:

```
/poems
```

No registration process.

No JSON index.

No database.

No API.

The filesystem is the CMS.

---

# 17. Markdown Frontmatter

Every markdown file must contain frontmatter.

Required fields

```md
---
title: "My Journal Knows All About You"
date: "2026-07-06"
published: true
---
```

Optional fields

```md
description:
excerpt:
tags:
readingTime:
featured:
```

Example

```md
---
title: "I Stayed Anyway"
date: "2026-05-12"
published: true
tags:
  - love
  - relationships
description: "A poem about choosing to stay."
featured: false
---

The poem begins here...
```

---

# 18. Slug Generation

Slug should always come from filename.

Example

Filename

```
my-journal-knows-all-about-you.md
```

becomes

```
my-journal-knows-all-about-you
```

Resulting URL

```
/poems/my-journal-knows-all-about-you
```

Never duplicate title inside the slug.

Filename is the source of truth.

---

# 19. Poem Discovery

At build time the application should:

1.

Read every markdown file.

↓

2.

Parse frontmatter.

↓

3.

Sort by date.

↓

4.

Generate static pages.

↓

5.

Generate the poem list.

Everything should happen automatically.

---

# 20. Publishing Workflow

Publishing a poem should require exactly one action:

Create a new markdown file.

Example

```
poems/the-last-train.md
```

Fill in metadata.

Write poem.

Save.

Commit.

Push.

Deployment should automatically regenerate the website.

No application code should ever change.

---

# 21. Homepage Requirements

The homepage should immediately communicate:

- Website title
- Author
- Purpose

Suggested layout

```
------------------------------------------------

I Wrote This Instead

by Nathan

A collection of poems.

Browse Poems

----------------------------------------

Recent Poems

My Journal Knows All About You

July 6, 2026

Another Title

June 28, 2026

Another Title

June 10, 2026

----------------------------------------

Footer

------------------------------------------------
```

Homepage should display:

Latest 5 published poems.

No excerpts.

No previews.

Titles only.

Reason:

Readers should discover poems by curiosity rather than summaries.

---

# 22. Poems Page

Purpose

Display every published poem.

Default sorting

Newest first.

Each poem card should include

Title

Date

Optional tags

Example

```
Poems

--------------------------------

My Journal Knows All About You

July 6, 2026

--------------------------------

The Last Train

June 24, 2026

--------------------------------

...
```

Entire card should be clickable.

---

# 23. Individual Poem Page

Layout

```
← Back to Poems

My Journal Knows All About You

July 6, 2026

--------------------------------

(rendered markdown)

--------------------------------

← Previous

Next →
```

Requirements

Center content.

Maximum width ~700px.

Preserve line breaks.

Respect markdown formatting.

Support:

- headings
- bold
- italics
- links
- unordered lists
- ordered lists
- blockquotes
- horizontal rules
- code blocks (future-proofing)

---

# 24. Previous / Next Navigation

Each poem page should automatically determine:

Previous poem

Next poem

Based on chronological ordering.

Example

```
← The Last Train

The Quiet Hour

Another Morning →
```

If no previous poem exists

Disable Previous.

If no next poem exists

Disable Next.

---

# 25. Back Navigation

Every poem page should contain

```
← Back to Poems
```

Behavior

If browser history exists

Go back.

Otherwise

Navigate to

```
/poems
```

This ensures direct links always work correctly.

---

# 26. About Page

Purpose

Introduce the author.

Keep it personal but concise.

Suggested sections

Who I am

Why I write

Why this website exists

The About page should not exceed approximately 500 words.

It should feel like an introduction, not an autobiography.

---

# 27. Error Handling

Unknown poem

↓

404 page

Missing markdown metadata

↓

Build warning

Missing title

↓

Build failure

Invalid date

↓

Build warning

The application should fail early during development rather than displaying broken pages.

---

# 28. Acceptance Criteria

The content system is complete when:

✓ Adding a poem only requires a markdown file.

✓ URLs are automatically generated.

✓ Homepage updates automatically.

✓ Poems page updates automatically.

✓ Previous / Next links work.

✓ Mobile navigation works.

✓ Every page is statically generated.

✓ No application code changes are required to publish new writing.

# 3. Design System & User Interface Specification

---

# 29. Design Philosophy

The website should feel like reading from a personal notebook.

It should not resemble:

- a corporate website
- a startup landing page
- a portfolio template
- a social media feed
- a modern dashboard

Instead, it should evoke:

- a quiet room
- a handwritten journal
- a printed poetry collection
- an old typewritten manuscript
- late-night writing

The interface should disappear behind the content.

The reader should spend their attention on the words, not the website.

---

# 30. Visual Identity

The design language is built around four principles.

## Warm

Avoid pure white.

Use warm neutral colors that resemble paper.

---

## Minimal

Only include interface elements that provide value.

Everything else should be removed.

---

## Spacious

Whitespace is an intentional design element.

Readers should never feel crowded.

---

## Quiet

Nothing should demand attention.

No loud colors.

No bright gradients.

No unnecessary icons.

---

# 31. Color Palette

Primary Background

```
#F7F2E8
```

Alternative Paper

```
#F4EEDB
```

Primary Text

```
#111111
```

Secondary Text

```
#555555
```

Borders

```
#DDD6C8
```

Links

```
#333333
```

Hover

```
#666666
```

Selection Color

```
Background:
#D9D2C1

Text:
#111111
```

Avoid:

Pure white

Pure black

Bright colors

High saturation

---

# 32. Typography

## Primary Font

JetBrains Mono

Fallback

```
monospace
```

Reason

The monospaced appearance resembles both source code and typed manuscripts.

It reinforces the idea that these are drafts, thoughts, and written pages.

---

## Navigation Font

Inter

Fallback

System UI

Reason

Highly readable.

Simple.

Modern without drawing attention.

---

## Font Sizes

Website Title

48px desktop

40px tablet

32px mobile

---

Navigation

16px

---

Body Text

18px desktop

17px tablet

16px mobile

---

Poem Titles

36px desktop

30px tablet

26px mobile

---

Dates

14px

Muted color.

---

# 33. Line Height

Body

1.8

Poetry

1.9

Reason

Poems need room to breathe.

Never crowd lines together.

---

# 34. Width

Maximum content width

```
700px
```

Reason

Research consistently shows that narrower line lengths improve readability.

Poems especially benefit from shorter line lengths.

---

# 35. Layout

Desktop

```
-----------------------------------

Navigation

Whitespace

Content

Whitespace

Footer

-----------------------------------
```

Everything centered.

Large margins.

---

Mobile

Content fills screen naturally.

Side padding

16–20px

Never allow text to touch screen edges.

---

# 36. Navigation

Navigation should remain simple.

Desktop

```
Home

Poems

About
```

Site title remains above.

No icons.

No logos.

No search bar.

No profile picture.

---

# 37. Buttons

Buttons should feel understated.

No shadows.

No gradients.

Rounded corners

6px

Padding

12px

Border

1px solid

Hover

Slight background darkening.

Transition

150ms

---

Primary Button Example

```
Browse Poems
```

---

# 38. Links

Links should be understated.

Default

Dark gray.

Hover

Slight fade.

Underline optional.

Never use bright blue browser defaults.

---

# 39. Cards

Only one card style exists.

Used on

Homepage

Poems list

Simple border.

Small padding.

Large spacing.

Entire card clickable.

No drop shadows.

---

# 40. Markdown Styling

Markdown should feel identical to handwritten pages.

Support

# Heading

## Heading

Paragraph

Bold

Italic

Lists

Blockquotes

Horizontal rules

Links

Inline code

Code blocks

Images (future)

Tables (future)

---

Blockquotes

Subtle left border.

Muted text.

---

Horizontal Rule

Thin gray divider.

Large vertical spacing.

---

Code Blocks

Rarely used.

Still support them.

Use monospaced font.

Rounded border.

Light paper-colored background.

---

# 41. Images

Version 1

No images.

Future support only.

Writing remains the focus.

---

# 42. Footer

Simple.

Example

```
────────────────────────

© 2026 Nathan

Built with care.

```

No social media icons.

No giant footer.

---

# 43. Responsive Design

Breakpoints

Desktop

1200+

Laptop

992+

Tablet

768+

Mobile

480+

Small Mobile

360+

Layout should naturally scale.

Avoid separate mobile layouts.

---

# 44. Animations

Animations should feel invisible.

Fade

150–200ms

Button Hover

150ms

Link Hover

150ms

No bouncing.

No spinning.

No scrolling effects.

No parallax.

No entrance animations.

---

# 45. Accessibility

Minimum contrast ratio

WCAG AA

Proper heading hierarchy

Semantic HTML

Keyboard navigation

Visible focus outline

Skip-to-content link

Screen reader friendly

Readable font sizes

Large tap targets

---

# 46. Dark Mode

Not included in Version 1.

Design system should make future implementation easy.

---

# 47. Empty States

If no poems exist

Display

```
No poems have been published yet.

Please check back soon.
```

---

# 48. Loading States

Because the website is statically generated,

Loading indicators should almost never appear.

Avoid skeleton screens.

---

# 49. 404 Page

Simple.

```
404

This page doesn't exist.

← Return Home
```

Maintain the same aesthetic.

---

# 50. SEO

Each poem should generate

Title

Description

Open Graph metadata

Canonical URL

Each poem should appear as its own page.

---

# 51. Lighthouse Targets

Performance

100

Accessibility

100

Best Practices

100

SEO

100

These are goals.

Do not sacrifice readability simply to achieve perfect scores.

---

# 52. UI Acceptance Criteria

The design is complete when:

✓ The interface disappears behind the writing.

✓ Reading feels effortless.

✓ Mobile experience is excellent.

✓ Typography is consistent.

✓ Colors remain warm and understated.

✓ Every page feels cohesive.

✓ Nothing distracts from the poems.

The website should feel like opening a notebook someone left on a desk rather than visiting a modern web application.

# 4. Software Architecture & Development Standards

---

# 53. Architecture Philosophy

The application should follow a simple, predictable architecture.

The project should favor readability and maintainability over clever abstractions.

Every file should have a single responsibility.

The codebase should be understandable by someone opening the project for the first time.

When in doubt:

Choose the simpler implementation.

---

# 54. Core Architectural Principles

The project follows these principles.

## Principle 1

Content is the source of truth.

The markdown files define the website.

The application simply renders them.

---

## Principle 2

Server Components by default.

Client Components only when absolutely necessary.

Examples:

Server Components

- Homepage
- Poems page
- About page
- Poem page

Client Components

- Back button
- Future dark mode toggle

---

## Principle 3

Static Generation

Every page should be generated during build.

No runtime fetching.

No API requests.

No loading states.

---

## Principle 4

No unnecessary state.

Avoid useState.

Avoid useEffect.

Avoid Context.

Avoid Redux.

The website is primarily static content.

Most pages require no client-side state.

---

# 55. Folder Responsibilities

## app/

Contains routes only.

Pages should remain lightweight.

Business logic belongs elsewhere.

---

## components/

Reusable UI components.

Each component should have one purpose.

Examples

Navbar

Footer

PoemCard

BackButton

PreviousNext

---

## lib/

Contains all application logic.

Examples

Reading markdown

Sorting poems

Generating slugs

Finding previous/next poems

Formatting dates

Pages should not contain this logic.

---

## poems/

Content only.

Never place application logic here.

---

## public/

Static assets only.

---

# 56. Component Guidelines

Each component should:

Have one responsibility.

Remain under approximately 200 lines.

Receive typed props.

Avoid unnecessary nesting.

Avoid duplicate styling.

---

Example

Good

Navbar

Footer

PoemCard

PreviousNext

BackButton

Bad

NavigationLayoutHeaderWrapperComponent

---

# 57. File Naming

Components

PascalCase

```
Navbar.tsx

Footer.tsx

PoemCard.tsx
```

Utilities

camelCase

```
getPoems.ts

formatDate.ts

getAdjacentPoems.ts
```

Markdown

kebab-case

```
my-journal-knows-all-about-you.md
```

Routes

Next.js conventions.

---

# 58. TypeScript Standards

Never use

```
any
```

Always define interfaces.

Example

```ts
interface Poem {
  title: string;
  slug: string;
  date: string;
  content: string;
  published: boolean;
  tags?: string[];
}
```

Prefer readonly where appropriate.

Use strict typing.

---

# 59. Data Flow

Markdown Files

↓

Markdown Parser

↓

Metadata Extraction

↓

Sorting

↓

Static Page Generation

↓

Rendered HTML

No other data source should exist.

---

# 60. Markdown Pipeline

Step 1

Read markdown files.

↓

Step 2

Extract frontmatter.

↓

Step 3

Convert markdown to HTML.

↓

Step 4

Sort.

↓

Step 5

Generate routes.

↓

Step 6

Render pages.

This pipeline should be deterministic.

---

# 61. Utility Functions

Application logic should be reusable.

Suggested utilities

```
getAllPoems()

getPublishedPoems()

getPoemBySlug()

getAdjacentPoems()

formatDate()

getRecentPoems()
```

Each function should do one thing.

---

# 62. Component Tree

Root Layout

↓

Navbar

↓

Page Content

↓

Footer

Homepage

↓

RecentPoems

↓

PoemCard

Poem Page

↓

BackButton

↓

Poem

↓

PreviousNext

Keep the hierarchy shallow.

---

# 63. Error Handling

Handle

Missing markdown

Missing metadata

Duplicate slugs

Invalid dates

Missing title

Invalid frontmatter

Build should fail loudly during development.

Never silently ignore content issues.

---

# 64. Logging

Development

Helpful console output.

Production

No unnecessary console logs.

---

# 65. Comments

Code should explain itself.

Only comment

Why something exists.

Not

What the code does.

Example

Good

```ts
// Preserve poem order so previous/next navigation remains consistent.
```

Bad

```ts
// Increment i by one.
```

---

# 66. CSS Standards

Prefer CSS Modules.

Avoid inline styles.

Avoid !important.

Keep selectors shallow.

Example

Good

```
.poemTitle
```

Bad

```
.main .wrapper .content h1
```

---

# 67. HTML Standards

Use semantic HTML.

Examples

header

main

nav

article

section

footer

time

Never use div when a semantic element exists.

---

# 68. Accessibility Standards

Every page should include

One H1

Logical heading hierarchy

Keyboard navigation

Focus states

Proper aria labels where necessary

Descriptive link text

---

# 69. Performance Standards

Avoid unnecessary re-renders.

Avoid unnecessary JavaScript.

Avoid large dependencies.

Avoid client-side rendering.

Prefer static rendering whenever possible.

---

# 70. Package Philosophy

Every dependency should justify its existence.

Preferred dependencies

gray-matter

remark

remark-html

Avoid adding libraries for trivial problems.

---

# 71. Testing Philosophy

Version 1

Manual testing.

Verify

Homepage

Poems page

About page

Markdown rendering

Responsive design

Navigation

404

No automated tests initially.

Future versions may introduce

Vitest

Playwright

---

# 72. Git Standards

Small commits.

Meaningful commit messages.

Examples

```
Add markdown parsing

Implement poem navigation

Create homepage layout

Improve responsive typography
```

Avoid

```
stuff

updates

fix

changes
```

---

# 73. Code Review Checklist

Before merging changes

✓ TypeScript passes

✓ Build succeeds

✓ Mobile works

✓ No console errors

✓ Lighthouse remains high

✓ Responsive design verified

✓ Markdown renders correctly

✓ Accessibility preserved

---

# 74. Future Extensibility

Architecture should support future additions without major rewrites.

Possible additions

Dark mode

Tags

Search

Collections

RSS

Newsletter

Audio recordings

Favorites

Writing journal

The Version 1 architecture should not make these features difficult to implement later.

---

# 75. Developer Acceptance Criteria

The architecture is complete when

✓ Every page is statically generated.

✓ Every component has one responsibility.

✓ Utilities contain application logic.

✓ Markdown is the single source of truth.

✓ No unnecessary client-side JavaScript exists.

✓ Code remains readable.

✓ New developers can understand the project within 30 minutes.

The project should feel less like a startup application and more like a carefully crafted digital book.

# 5. Project Identity, Content Philosophy & Future Direction

---

# 76. Project Identity

## Project Name

I Wrote This Instead

---

## Meaning Behind the Name

The title represents the purpose of the entire collection.

Writing exists because there are things that are difficult to say.

A poem may represent:

- something never spoken
- a feeling that was difficult to explain
- a memory that needed somewhere to exist
- a thought that would not leave
- an experience that needed to be processed

The website should preserve that feeling.

---

# 77. Emotional Identity

The website should feel:

- honest
- vulnerable
- personal
- reflective
- imperfect
- human

It should not feel:

- corporate
- polished to the point of being artificial
- optimized for attention
- performative
- like a content machine

---

# 78. Writing Philosophy

The website exists to preserve writing.

It is not designed around:

- views
- likes
- followers
- trends
- engagement

A poem does not need to perform.

A poem only needs to exist.

---

# 79. Content Categories

The website may contain writing about:

- love
- relationships
- heartbreak
- anxiety
- mental health
- loneliness
- growing up
- identity
- memories
- personal experiences
- change
- uncertainty
- hope

These categories are not restrictions.

They are simply ways for readers to explore themes.

---

# 80. Relationship With the Reader

The reader should feel like they discovered something personal.

The website should create the feeling:

"I was trusted with this."

Not:

"I am consuming another piece of content."

---

# 81. Things The Website Should Never Become

The project should avoid becoming:

## A Social Network

Do not add:

- likes
- comments
- followers
- public profiles
- popularity rankings

---

## A Content Platform

Do not optimize for:

- posting frequency
- algorithms
- SEO manipulation
- clickbait titles

---

## A Portfolio Template

Avoid making it look like:

- a resume website
- a corporate portfolio
- a developer landing page

The author may have a separate portfolio.

This website is for writing.

---

## A Product

Do not add:

- subscriptions
- advertisements
- sponsorships
- monetization

The writing should remain independent.

---

# 82. Design Evolution Rules

Future design changes must preserve:

## Simplicity

Adding a feature should remove complexity elsewhere.

---

## Readability

Never sacrifice reading comfort for visual effects.

---

## Timelessness

Avoid trends that will make the website feel outdated.

---

## Authenticity

The site should continue feeling personal.

---

# 83. Feature Evaluation Rules

Before adding any feature, ask:

Does this help someone read?

Does this help someone discover writing?

Does this preserve the feeling of the project?

If the answer is no, do not add it.

---

# 84. Future Features

Future additions are allowed if they support the writing.

---

## Dark Mode

Purpose:

Allow comfortable reading at night.

Must preserve the paper aesthetic.

---

## Tags

Purpose:

Allow readers to explore themes.

Examples:

- love
- anxiety
- memories
- growth

Tags should organize.

They should not become metrics.

---

## Search

Purpose:

Allow readers to find specific writing.

Should remain simple.

---

## Collections

Purpose:

Group related poems.

Examples:

```
Growing Up

Love Letters

Things I Never Said

College Years
```

---

## Audio Readings

Purpose:

Allow the author to read poems aloud.

Should enhance the writing.

Not become a media platform.

---

## Writing Timeline

Purpose:

Show growth over time.

Example:

```
2023

First poems

↓

2024

Change

↓

2025

New perspectives
```

---

## Newsletter

Possible future feature.

Only if it feels like a personal letter.

Never marketing.

---

# 85. Content Management Philosophy

The author should enjoy adding new writing.

The publishing process should feel like writing in a notebook.

Ideal workflow:

Open editor.

Create markdown file.

Write.

Save.

Publish.

No complicated systems.

---

# 86. Privacy Philosophy

The website should not collect unnecessary information.

Avoid:

- user accounts
- tracking
- invasive analytics

The reader is a guest.

Treat them respectfully.

---

# 87. Long-Term Vision

The website should still make sense years from now.

It should become:

- a personal archive
- a record of growth
- a collection of experiences
- a digital notebook

The goal is not constant expansion.

The goal is preservation.

---

# 88. Success Definition

The project is successful when:

A reader opens the website.

They find a poem.

They feel something.

They continue reading.

They remember the writing.

They do not remember the technology.

---

# 89. Final Project Statement

"I Wrote This Instead" is a place for the words that existed because silence was not enough.

The website should be built with the same care as the writing it contains.

Every technical decision should serve the purpose of preserving those words.


# 6. Implementation Roadmap & Development Milestones

---

# 90. Development Strategy

The project should be built incrementally.

Each milestone should result in a working improvement.

Do not attempt to build every feature before testing.

The recommended development order is:

1. Project setup
2. Application foundation
3. Design system
4. Content system
5. Pages
6. Navigation
7. Polish
8. Deployment

---

# 91. Milestone 0 — Project Initialization

## Goal

Create the foundation of the Next.js application.

---

## Tasks

Create Next.js application.

Requirements:

- TypeScript enabled
- App Router enabled
- ESLint enabled
- No Tailwind CSS

Install required dependencies:

```
gray-matter

remark

remark-html
```

---

## Create Repository

Initialize Git.

Create GitHub repository.

Add initial README.

---

## Completion Criteria

✓ Application runs locally

✓ TypeScript works

✓ Git repository exists

✓ Dependencies installed

✓ Project builds successfully

---

# 92. Milestone 1 — Base Application Structure

## Goal

Create the basic website shell.

---

## Tasks

Create:

```
app/layout.tsx

app/page.tsx

app/globals.css
```

Create:

```
components/

lib/

poems/
```

Configure:

- metadata
- fonts
- global styles

---

## Completion Criteria

✓ Homepage loads

✓ Global styling works

✓ Project structure matches specification

---

# 93. Milestone 2 — Design System Implementation

## Goal

Create the visual identity.

---

## Tasks

Implement:

Background color

Typography

Spacing system

Content width

Navigation styling

Footer styling

Button styling

Link styling

---

## Required Features

Paper background

Monospace poetry font

Minimal navigation

Responsive layout

---

## Completion Criteria

✓ Website visually resembles design specification

✓ Mobile layout works

✓ Typography is consistent

---

# 94. Milestone 3 — Navigation System

## Goal

Create site navigation.

---

## Tasks

Build:

```
Navbar.tsx

Footer.tsx

```

Implement:

Home link

Poems link

About link

Site title

---

## Completion Criteria

✓ Navigation appears on every page

✓ Mobile navigation works

✓ Links function correctly

---

# 95. Milestone 4 — Markdown Content Engine

## Goal

Make markdown files power the website.

---

## Tasks

Create:

```
lib/markdown.ts

lib/poems.ts
```

Implement:

Read markdown files

Parse frontmatter

Generate slugs

Sort poems

Filter published poems

---

## Functions Required

```
getAllPoems()

getPublishedPoems()

getPoemBySlug()

getRecentPoems()

getAdjacentPoems()
```

---

## Completion Criteria

✓ Markdown files can be loaded

✓ Metadata is extracted

✓ Poems are sorted correctly

✓ Draft poems are hidden

---

# 96. Milestone 5 — Poems Page

## Goal

Create the poem archive.

---

## Tasks

Create:

```
app/poems/page.tsx
```

Build:

```
PoemCard.tsx
```

Display:

Title

Date

Tags

---

## Completion Criteria

✓ All published poems appear

✓ Clicking a poem opens correct page

✓ Sorting works

---

# 97. Milestone 6 — Individual Poem Pages

## Goal

Create dynamic poem pages.

---

## Tasks

Create:

```
app/poems/[slug]/page.tsx
```

Implement:

Dynamic routes

Static generation

Markdown rendering

Metadata generation

---

## Add Components

```
BackButton.tsx

PreviousNext.tsx
```

---

## Completion Criteria

✓ Every poem has its own URL

✓ Markdown renders correctly

✓ Navigation works

✓ Invalid poems return 404

---

# 98. Milestone 7 — Homepage

## Goal

Create the entry point.

---

## Tasks

Build homepage.

Include:

Website title

Author name

Short introduction

Browse button

Recent poems

---

## Completion Criteria

✓ Homepage communicates purpose immediately

✓ Recent poems display correctly

✓ Links work

---

# 99. Milestone 8 — About Page

## Goal

Introduce the author.

---

## Tasks

Create:

```
app/about/page.tsx
```

Include:

Short biography

Writing philosophy

Purpose of website

---

## Completion Criteria

✓ Page matches design system

✓ Navigation works

---

# 100. Milestone 9 — Error Handling

## Goal

Handle invalid situations.

---

## Tasks

Create:

```
app/not-found.tsx
```

Handle:

Missing poems

Invalid metadata

Broken links

---

## Completion Criteria

✓ Errors are user friendly

✓ Design remains consistent

---

# 101. Milestone 10 — Responsive Optimization

## Goal

Ensure excellent mobile experience.

---

## Tasks

Test:

Desktop

Tablet

Phone

Small phone

---

Adjust:

Spacing

Font sizes

Navigation

Content width

Buttons

---

## Completion Criteria

✓ No horizontal scrolling

✓ Text remains readable

✓ Navigation works everywhere

---

# 102. Milestone 11 — SEO & Metadata

## Goal

Make pages discoverable.

---

## Tasks

Add:

Site metadata

Page titles

Descriptions

Open Graph metadata

Canonical URLs

---

## Completion Criteria

✓ Each poem has unique metadata

✓ Social previews work

---

# 103. Milestone 12 — Performance Optimization

## Goal

Maintain lightweight application.

---

## Tasks

Review:

Bundle size

Dependencies

Images

Client components

Unused code

---

## Completion Criteria

✓ Minimal JavaScript

✓ Fast builds

✓ Excellent Lighthouse scores

---

# 104. Milestone 13 — Deployment

## Goal

Publish the website.

---

## Tasks

Push repository to GitHub.

Connect repository to Vercel.

Configure deployment.

Add custom domain if desired.

---

## Completion Criteria

✓ Website accessible publicly

✓ Automatic deployments work

✓ Production build succeeds

---

# 105. Milestone 14 — Future Improvements

Not part of Version 1.

Possible additions:

Dark mode

Tags

Search

Collections

Audio recordings

Newsletter

Timeline

Random poem

Reading mode

---

# 106. Development Rules

During implementation:

Do not skip milestones.

Do not add unnecessary dependencies.

Do not over-engineer.

Do not build future features before Version 1 works.

Keep commits small.

Test after each milestone.

---

# 107. Version 1 Definition

Version 1 is complete when:

✓ Website is deployed

✓ Poems can be added through markdown

✓ Readers can browse poems

✓ Readers can read individual poems

✓ Navigation works

✓ Mobile experience is excellent

✓ Design matches the specification

✓ The website feels like "I Wrote This Instead"



# COPILOT_INSTRUCTIONS.md

# I Wrote This Instead

## AI Development Instructions

---

# 1. Project Context

You are assisting with the development of:

**I Wrote This Instead**

A minimalist poetry website built with Next.js.

The purpose of this project is to create a calm, personal, distraction-free environment for publishing poetry.

The website should feel like:

- a personal notebook
- a printed poetry collection
- a handwritten journal shared with others

The website should NOT feel like:

- a corporate website
- a social media platform
- a content management dashboard
- a modern SaaS application

The writing is the product.

The interface exists only to support it.

---

# 2. Core Development Philosophy

When making implementation decisions, prioritize:

1. Simplicity
2. Readability
3. Maintainability
4. Performance
5. Accessibility

Do not optimize for:

- unnecessary features
- excessive abstraction
- trendy patterns
- large dependency usage

---

# 3. General Coding Rules

## Prefer simple solutions.

Before adding complexity, ask:

"Can this be solved with a smaller implementation?"

---

## Avoid unnecessary dependencies.

Every package added should have a clear purpose.

Do not install libraries for problems that can be solved with native code.

---

## Do not over-engineer.

This is a static poetry website.

Do not introduce:

- databases
- APIs
- authentication
- state management libraries
- backend systems

unless explicitly requested.

---

# 4. Next.js Rules

Use:

- Next.js App Router
- TypeScript
- Server Components by default

---

## Server Components

Prefer Server Components for:

- pages
- layouts
- markdown rendering
- poem lists
- metadata generation

---

## Client Components

Only use Client Components when browser interaction is required.

Examples:

Allowed:

- back button using browser history
- future theme switcher

Avoid making entire pages client components.

---

# 5. TypeScript Rules

Never use:

```ts
any
```

unless there is absolutely no alternative.

---

Always define interfaces.

Example:

```ts
interface Poem {
  title: string;
  slug: string;
  date: string;
  content: string;
  published: boolean;
}
```

---

Prefer explicit types over inferred complex objects.

---

# 6. Component Rules

Every component should have one responsibility.

Good:

```
Navbar.tsx

Footer.tsx

PoemCard.tsx

BackButton.tsx
```

Bad:

```
WebsiteEverythingManager.tsx
```

---

Components should:

- be reusable
- receive typed props
- remain small
- avoid business logic

---

# 7. Business Logic Rules

Application logic belongs in:

```
lib/
```

Not inside components.

Examples:

Good:

```
lib/poems.ts
```

contains:

- reading files
- sorting poems
- finding poems

Bad:

A page component reading files directly.

---

# 8. Markdown Rules

Markdown files are the source of truth.

Never hardcode poems.

Never create manual poem pages.

---

Adding a poem should require:

1. Creating a markdown file

2. Adding metadata

3. Writing content

Nothing else.

---

# 9. File Structure Rules

Follow this structure:

```
app/

components/

lib/

poems/

public/

styles/
```

Do not create random folders.

---

# 10. Styling Rules

The design must maintain:

- cream paper background
- black text
- monospace poetry typography
- large whitespace
- minimalist layout

---

Avoid:

- gradients
- flashy animations
- bright colors
- excessive shadows
- glassmorphism
- modern dashboard aesthetics

---

# 11. CSS Rules

Use:

CSS Modules

or

global CSS variables.

---

Avoid:

- inline styles
- !important
- deeply nested selectors

---

Prefer:

```css
.poemTitle
```

over:

```css
.main .container .wrapper h1
```

---

# 12. Typography Rules

Poems should prioritize readability.

Use:

JetBrains Mono

or another readable monospace font.

Maintain:

- generous line height
- comfortable spacing
- narrow content width

---

# 13. Accessibility Rules

Every implementation should consider accessibility.

Always include:

- semantic HTML
- proper headings
- keyboard navigation
- visible focus states
- descriptive links

---

Do not sacrifice accessibility for appearance.

---

# 14. Performance Rules

Optimize for:

- static generation
- minimal JavaScript
- fast loading

Avoid:

- unnecessary client components
- large packages
- unnecessary API calls

---

# 15. Content Rules

Never modify poem content.

Never rewrite poetry.

Never summarize poems.

The application displays the author's writing exactly as provided.

---

# 16. Feature Rules

Before implementing a feature ask:

Does this help readers experience the writing?

If no:

Do not implement it.

---

Avoid adding:

- likes
- comments
- followers
- analytics dashboards
- social feeds
- advertisements

---

# 17. Error Handling

Handle errors clearly.

Examples:

Missing poem:

Display 404.

Invalid metadata:

Show meaningful build error.

Broken route:

Redirect appropriately.

---

# 18. Code Quality Rules

Before suggesting code:

Check:

- TypeScript correctness
- naming consistency
- maintainability
- accessibility
- responsive behavior

---

Do not provide incomplete snippets when a complete file is requested.

---

# 19. Debugging Rules

When fixing errors:

First identify:

1. Root cause

2. Why it happened

3. Simplest fix

Do not rewrite unrelated code.

---

# 20. Commit Philosophy

Use descriptive commits.

Good:

```
Add markdown parser

Create poem detail route

Implement responsive navigation
```

Bad:

```
update

fix

stuff
```

---

# 21. Future Compatibility

The architecture should allow future additions:

- dark mode
- search
- tags
- collections
- audio readings
- newsletter

Do not implement these unless requested.

---

# 22. Final Reminder

The goal is not to build an impressive application.

The goal is to build a beautiful place for words.

Every technical choice should protect that goal.

When uncertain:

Choose the option that makes the website quieter, simpler, and easier to read.


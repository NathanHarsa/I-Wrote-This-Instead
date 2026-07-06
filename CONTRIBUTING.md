# CONTRIBUTING.md

# I Wrote This Instead

## Contribution Guidelines

---

# 1. Overview

Thank you for contributing to **I Wrote This Instead**.

This project is intentionally small and focused.

The goal is not to build the largest possible application.

The goal is to maintain a beautiful, simple, and personal space for writing.

Every contribution should protect that purpose.

---

# 2. Before Contributing

Before making changes, read:

```
PROJECT_SPEC.md

ARCHITECTURE.md

DESIGN_GUIDE.md

STYLE_GUIDE.md

COPILOT_INSTRUCTIONS.md
```

These documents define:

- project philosophy
- architecture
- design rules
- coding standards

---

# 3. Contribution Philosophy

Good contributions:

✓ Improve the reading experience

✓ Simplify the codebase

✓ Improve accessibility

✓ Improve performance

✓ Fix bugs

✓ Improve maintainability

---

Avoid contributions that:

✗ Add unnecessary complexity

✗ Add distracting features

✗ Change the project's identity

✗ Turn the website into a social platform

✗ Prioritize technology over writing

---

# 4. Development Setup

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# 5. Branch Naming

Use descriptive branch names.

Examples:

```
feature/add-dark-mode

feature/improve-mobile-layout

fix/markdown-rendering

docs/update-readme
```

Avoid:

```
test

changes

stuff

new
```

---

# 6. Commit Guidelines

Commits should describe the change.

Good:

```
Add markdown poem parser

Implement poem navigation

Improve mobile spacing

Fix missing poem metadata
```

Bad:

```
update

fix

changes

work
```

---

# 7. Code Standards

Follow the rules defined in:

```
STYLE_GUIDE.md

COPILOT_INSTRUCTIONS.md
```

Important reminders:

- Use TypeScript
- Avoid unnecessary dependencies
- Prefer Server Components
- Keep components small
- Maintain accessibility
- Preserve design consistency

---

# 8. Adding Features

Before adding a feature, consider:

## Does it help readers?

If not:

Do not add it.

---

## Does it fit the project's identity?

The feature should support:

- writing
- reading
- discovery
- preservation

---

## Does it add unnecessary complexity?

Prefer simple solutions.

---

# 9. Adding Poems

Poems are content, not code.

New poems should be added as markdown files.

Example:

```
poems/my-new-poem.md
```

Required metadata:

```md
---
title: "My New Poem"
date: "2026-07-06"
published: true
---
```

No application changes should be necessary.

---

# 10. Pull Request Guidelines

Pull requests should include:

## Description

Explain:

- what changed
- why it changed
- how it improves the project

---

## Testing

Include:

- commands run
- devices tested
- pages tested

---

## Screenshots

For visual changes, include screenshots.

---

# 11. Review Checklist

Before merging:

## Functionality

✓ Feature works

✓ No broken routes

✓ No console errors

---

## Design

✓ Matches visual style

✓ Mobile friendly

✓ Does not distract from writing

---

## Code

✓ Clean implementation

✓ Proper TypeScript

✓ No unnecessary complexity

---

# 12. Documentation

If a change affects:

- architecture
- setup
- features
- workflow

Update the relevant documentation.

Documentation should remain accurate.

---

# 13. AI-Assisted Development

AI tools may be used.

Examples:

- GitHub Copilot
- ChatGPT
- Other coding assistants

However:

Generated code must still follow:

- architecture rules
- style rules
- accessibility requirements
- project philosophy

AI should assist development.

It should not define the direction of the project.

---

# 14. Final Principle

Every contribution should answer:

> Does this make the website a better place for words to exist?

If yes, it belongs here.

If no, it probably does not.

Thank you for helping preserve the purpose of the project.
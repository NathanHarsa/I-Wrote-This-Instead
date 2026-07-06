---
title: "Example Poem"
date: "2026-07-06"
published: false
description: "An example showing the markdown format used for poems."
tags:
  - example
  - template
featured: false
---

# Example Poem

This file demonstrates the format used for every poem on the website.

Delete this text and replace it with the actual poem.

---

## Formatting Examples

Normal paragraph text appears like this.

Poetry should preserve line breaks exactly as written.

Example:

```
A line of writing

Another line

A final thought
```

---

## Emphasis

Use italics:

*This is italic text.*

Use bold:

**This is bold text.**

---

## Quotes

For a quote or referenced thought:

> A sentence can live longer than the moment it was written.

---

## Lists

Lists are supported:

- Memory
- Love
- Change
- Growth

---

## Links

Links can be included if necessary:

[Example Link](https://example.com)

---

# Metadata Rules

Every poem must include:

## title

The displayed title of the poem.

Example:

```yaml
title: "The Last Train"
```

---

## date

The publication date.

Format:

```
YYYY-MM-DD
```

Example:

```yaml
date: "2026-07-06"
```

---

## published

Controls visibility.

Published:

```yaml
published: true
```

Hidden:

```yaml
published: false
```

Draft poems should remain unpublished.

---

# Optional Metadata

## description

Short description for SEO.

Example:

```yaml
description: "A poem about growing up."
```

---

## tags

Used for future organization.

Example:

```yaml
tags:
  - anxiety
  - relationships
```

---

## featured

Used for future homepage features.

Example:

```yaml
featured: true
```

---

# Writing Guidelines

Poems should:

- preserve original formatting
- maintain intentional line breaks
- avoid unnecessary HTML
- focus on the writing itself

The markdown file should contain the poem, not website-specific code.

---

# Publishing Workflow

1. Create markdown file.

2. Add metadata.

3. Write poem.

4. Set:

```yaml
published: true
```

5. Commit.

6. Deploy.

The website handles everything else.

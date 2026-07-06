
# I Wrote This Instead

A minimalist digital poetry collection.

---

## Overview

**I Wrote This Instead** is a personal poetry archive built around the idea that some things are easier to write than to say.

The website is designed to feel like opening a personal notebook.

There are:

- no distractions
- no algorithms
- no engagement metrics
- no unnecessary features

The focus is entirely on the writing.

---

# Philosophy

This project follows a simple idea:

> The website should disappear behind the words.

The design is intentionally minimal.

The goal is not to build another content platform.

The goal is to preserve writing.

---

# Features

Version 1 includes:

- Minimal homepage
- Poetry archive
- Individual poem pages
- Markdown-based writing system
- Responsive mobile design
- About page
- Previous / next poem navigation
- Static generation
- Fast loading

---

# Technology

Built with:

## Framework

[Next.js](https://nextjs.org/)

React framework for production applications.

---

## Language

TypeScript

Provides strong typing and maintainability.

---

## Styling

CSS Modules

Simple, scoped styling without unnecessary complexity.

---

## Content

Markdown files

Every poem exists as a markdown document.

The filesystem acts as the content management system.

---

## Deployment

Vercel

Automatic deployment from GitHub.

---

# Project Structure

```
i-wrote-this-instead/

app/
├── about/
├── poems/
├── layout.tsx
└── page.tsx

components/

lib/

poems/

public/

styles/
```

---

# Running Locally

## Requirements

Install:

- Node.js
- npm
- Git

---

## Clone Repository

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd i-wrote-this-instead
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

The website will be available at:

```
http://localhost:3000
```

---

# Adding A New Poem

Adding a poem should only require creating a markdown file.

Navigate to:

```
/poems
```

Create a new file:

Example:

```
the-last-train.md
```

---

Add metadata:

```md
---
title: "The Last Train"
date: "2026-07-06"
published: true
tags:
  - memories
  - change
---

Your poem goes here.
```

---

Save the file.

Commit.

Push.

The website will automatically update after deployment.

---

# Markdown Formatting

Supported formatting:

## Headings

```md
# Heading
```

---

## Bold

```md
**important**
```

---

## Italics

```md
*emphasis*
```

---

## Quotes

```md
> A thought
```

---

## Lists

```md
- item one
- item two
```

---

# Development Workflow

Recommended process:

1. Create feature branch

2. Make changes

3. Test locally

4. Commit changes

5. Push to GitHub

6. Deploy

---

# Available Commands

Development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Start production:

```bash
npm start
```

Lint:

```bash
npm run lint
```

---

# Deployment

The recommended deployment method is Vercel.

Steps:

1. Push repository to GitHub.

2. Connect repository to Vercel.

3. Select Next.js framework.

4. Deploy.

Future pushes automatically create new deployments.

---

# Design Goals

The website should remain:

- simple
- personal
- readable
- timeless
- fast

Avoid adding features that distract from the writing.

---

# Future Ideas

Possible future improvements:

- Dark mode
- Tags
- Search
- Collections
- Audio readings
- Writing timeline
- RSS feed
- Reading mode

These should only be added if they improve the reading experience.

---

# Contributing

This project is primarily a personal writing archive.

If contributing code, please read:

```
CONTRIBUTING.md
```

and follow the project's design philosophy.

---

# License

To be determined.

---

# Final Note

This project exists because some thoughts need somewhere to live.

The technology should simply provide the place.

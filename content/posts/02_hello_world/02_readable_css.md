---
title: 'Test Post Two: Writing Readable CSS'
description: 'A short test post about keeping stylesheets easy to maintain.'
slug: '/blog/test-readable-css'
date: '2026-09-25'
tags: ['CSS', 'Tools', 'Lessons']
draft: false
---

This is the second test post. It should have both a Previous and a Next link.

## Name things by purpose

Use class names that describe what something is, not how it looks. `.post-title` ages better than `.big-green-text`.

## Use variables

```css
:root {
  --accent: #64ffda;
  --radius: 4px;
}

.button {
  border: 1px solid var(--accent);
  border-radius: var(--radius);
}
```

## References

- [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

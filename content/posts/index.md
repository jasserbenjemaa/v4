---
title: 'What Coding Has Taught Me About Building Things'
description: 'Small habits that made me a better engineer: read more than you write, ship early, and build for real people.'
slug: '/blog/what-coding-taught-me'
date: '2026-10-05'
tags: ['Coding', 'Lessons', 'Career']
draft: false
---

When I started coding, I thought the job was typing the right syntax. Years later, most of what I've learned has nothing to do with syntax. Here are the lessons that stuck.

## Read more code than you write

The fastest way to improve is to read other people's code: open source libraries, your teammates' pull requests, even your own code from six months ago. You learn naming, structure and trade-offs that no tutorial covers.

## Make it work, then make it right

A messy solution that runs teaches you more than a perfect design that never ships. Get a version working first, then refactor once you understand the problem.

```js
// First pass: it works
function total(items) {
  let sum = 0;
  for (const item of items) sum += item.price * item.qty;
  return sum;
}

// Second pass: it says what it means
const total = items => items.reduce((sum, { price, qty }) => sum + price * qty, 0);
```

## Debugging is the real skill

Most of your time goes to figuring out why something doesn't work. Get good at it:

- Reproduce the bug reliably before changing anything.
- Change one thing at a time.
- Read the error message all the way through. It usually tells you more than you expect.
- Explain the problem out loud to someone, or to a rubber duck.

## Build for real people

Code runs on devices used by people with different abilities, connections and habits. Semantic HTML, keyboard support and clear error messages are not extras. They are part of the job.

> Good software is code that someone else can use, and someone else can maintain.

## Keep a small project going

Always have a side project, however tiny. It's the safest place to try new tools, make mistakes and finish things. Shipping something small teaches you more than starting something big.

**This is a starter post.** Swap in your own stories and examples, since personal details are what make a post worth reading.

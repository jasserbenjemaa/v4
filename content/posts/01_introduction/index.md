---
title: 'My Roadmap to Becoming an AI Engineer'
description: 'The custom learning path I built to become an AI engineer: transformers and LLMs, agentic systems, and running it all on my own home server.'
slug: '/blog/ai-engineer-roadmap'
date: '2026-10-06'
tags: ['AI', 'Roadmap', 'Learning']
draft: false
---

In this post I'm sharing my personal journey toward becoming an AI engineer. I looked at a lot of roadmaps online, and in the end I built my own. I skipped several of the standard introductory topics because I already covered them at university.

My roadmap has three phases.

## Phase 1: Foundations, Transformers and LLMs

This phase builds the base that everything else sits on.

1. **NLP foundations with PyTorch.** I start with the core ideas of natural language processing, using PyTorch as my main deep learning framework.
2. **Transformers.** I focus on transformer architectures through hands-on projects, because building something teaches me more than reading about it.
3. **LLM internals.** I look at how large language models work and what is really happening under the hood.

## Phase 2: Orchestration frameworks and agentic systems

This is my favorite part of the roadmap. Orchestration frameworks like LangChain, LangGraph and LangSmith let you use the real power of LLMs and autonomous agents. Based on the resources I've gathered, this phase covers:

- **Agent architectures:** building ReAct agents, tool-using agents and graph-based agent structures.
- **RAG (Retrieval-Augmented Generation):** connecting models to external knowledge sources.
- **Prompt engineering:** writing effective prompts for complex workflows.
- **Agents in production:** moving agent systems from local prototypes to production environments.
- **Middleware and harness engineering:** building robust execution layers and environment harnesses for AI agents.
- **Agent security foundations:** setting security boundaries, guardrails and control logic.

## Phase 3: AI system operations, evaluation and self-hosting

In the last phase I move into AI system operations and evaluation. The goal is to measure how a system performs and to set up real-time monitoring in production.

For deployment, I'm turning my second PC into a dedicated home server running Ubuntu Server. On it I'll deploy open-source models, alongside API integrations like the Gemini API.

## Why a custom roadmap

A ready-made roadmap is a good starting point, but it can't know what you already learned. Cutting the topics I'd already covered lets me go straight to the practical work, and I can adjust the plan as I learn more.

I'll write about each phase as I go.

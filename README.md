# Screenshot-to-CRM Startup Project

Lightweight CRM for small sellers who receive orders through Instagram DMs and chat. Sellers screenshot conversations, AI extracts structured order data, and the app tracks orders through a simple workflow.

## Project Status
- Stage: pre-MVP validation
- Current phase: Week 1 signal discovery
- Product: not built yet

## Repository Structure

```
docs/
  agent-system/           # Agent operating system
    master-agent-playbook.md    # Operating principles, cadence, guardrails
    specialized-agent-prompts.md # Copy-paste prompts for all 16 agents
    agent-role-coverage.md      # Function coverage matrix + dependency graph
    shared-memory.md            # Single source of truth for all agents
    decision-log.md             # Immutable decision record
    daily-brief.md              # Daily synthesis for MasterDecisionAgent
  validation/             # Validation artifacts
    decision-gates.md           # Quantitative gates for each phase
    week1-discovery-workbook.md # Week 1 execution plan
    week1-execution-log.md      # Week 1 progress tracking
    competitor-evidence-log.md  # Competitor and substitute research
```

## How to Use This System

1. Read `docs/agent-system/master-agent-playbook.md` for operating principles.
2. Check `docs/agent-system/agent-role-coverage.md` for which agents to activate and in what order.
3. Copy prompts from `docs/agent-system/specialized-agent-prompts.md` into separate chats.
4. All agents read and write to `docs/agent-system/shared-memory.md`.
5. Track decisions in `docs/agent-system/decision-log.md`.
6. Use `docs/validation/decision-gates.md` to decide when to progress between phases.

## Key Constraints
- Solo founder, ~20h/week
- No user interviews (behavioral signals only)
- Global English-speaking market
- Validation before building

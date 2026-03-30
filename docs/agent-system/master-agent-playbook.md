# Master Agent Operating Playbook

## Objective
Run a validation-first startup process for a screenshot-to-CRM product for small sellers managing orders in DMs.

## Operating Principles
- Evidence over opinions.
- Speed over perfection.
- One-week learning loops.
- No feature building before demand signal.
- Every recommendation needs a decision threshold.

## Team Topology
- MasterDecisionAgent: orchestration, prioritization, decisions.
- 16 Specialist Agents: see `agent-role-coverage.md` for full roster, dependencies, and activation phases.

## Shared Memory Protocol
- All agents read `shared-memory.md` at session start.
- All agents append structured output (handoff contract) to shared-memory.md after each session.
- Decisions are logged in `decision-log.md` (never deleted, only status-updated).
- MasterDecisionAgent produces `daily-brief.md` each morning from shared-memory.md state.

## Weekly Cadence (Solo Founder, ~20h/week)
- 2h: plan sprint, define hypotheses, update shared-memory.md.
- 8h: run market checks and demand-signal experiments.
- 4h: run async agent analyses.
- 4h: synthesize and decide (MasterDecisionAgent).
- 2h: update logs and next sprint plan.

## Non-Negotiable Logs
- `shared-memory.md`: assumptions, facts, risks, agent outputs, conflicts.
- `decision-log.md`: immutable decision record.
- `daily-brief.md`: daily synthesis for founder.

## Handoff Contract (mandatory for every agent output)
Every agent response must end with:
1. Assumptions.
2. Confidence level (low/medium/high).
3. Unknowns.
4. Recommended next action.
5. Decision threshold.
6. Conflicts with other agents.

## Decision Ladder
- Level 1: anecdotal signal (single source) -> do not commit.
- Level 2: repeated behavioral signal (multiple channels/segments) -> prepare stronger test.
- Level 3: qualified behavioral signal (signups + high-intent actions) -> narrow scope.
- Level 4: payment signal (deposit/prepay/trial conversion) -> move to build.

## Model/Tool Routing
- Use higher-reasoning models (Opus-class) for strategy synthesis, architecture tradeoffs, pricing logic, privacy risk, and cross-agent conflict resolution.
- Use faster models for summarization, formatting, research extraction, and draft generation.
- Use Claude Code for implementation once MVP scope is locked (not for early-stage discovery).

## Guardrails
- No legal conclusion without "lawyer review needed" flag where relevant.
- No market sizing without explicit assumptions.
- No product scope expansion without behavioral evidence.
- No go decision if contribution margin is unclear.
- Intra-week kill criteria enforced on all paid experiments (see decision-gates.md).

## Immediate Execution Order
1. Read `shared-memory.md` and `decision-log.md` to understand current state.
2. Check `agent-role-coverage.md` for which agents to activate this week.
3. Run active agents in dependency order from the graph.
4. Synthesize outputs in `daily-brief.md`.
5. Evaluate against `decision-gates.md` at week end.

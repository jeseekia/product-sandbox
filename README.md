# Product Sandbox

A fullstack JavaScript practice repository for product-style workflow and UI development.

This repo is intentionally separate from production so you can practice the full workflow safely:

- clone a repository
- install dependencies
- create a branch
- make incremental commits
- push your branch
- open a pull request
- respond to code review feedback
- push updates to the same PR until it is ready to merge

## Week 1 assignment

Each intern must complete this project independently and submit their own PR.

### Project goal
Build a small participant operations dashboard using mock data.

### Required features
- Display a list of participants
- Show at least 3 statuses using badges
- Add search by participant name
- Add at least 1 filter
- Add a details panel for a selected participant
- Keep all data mocked in code

### Stretch ideas
- Add sort by team or status
- Add a second filter
- Add an empty state for no search results
- Add a loading state
- Improve layout and styling

## Git and PR expectations

### Branch naming
Use this format:

`<your-name>/product-week1`

Example:

`jordan/product-week1`

### Commit expectations
Make incremental commits. Do not wait until everything is done.

Good examples:
- `chore: set up product sandbox locally`
- `feat: add participant search`
- `feat: add status badges`
- `feat: add participant detail panel`
- `fix: clean up filter logic`
- `docs: update project notes`

### PR expectations
Open one PR for your work in this repo.

Use this title format:

`Week 1 Product Sandbox - <Your Name>`

Your PR should include:
- a short summary of what you built
- what is complete
- what is still rough or unfinished
- screenshots or a short screen recording if possible

### Review expectations
Your PR is not final when you first open it.

You are expected to:
1. Read review comments carefully
2. Make updates on the same branch
3. Commit your changes
4. Push new commits to the same PR
5. Reply to comments when you address them

## Setup

### Requirements
- Node 18+
- npm 9+

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```

## Starter structure

- `src/data/participants.js` contains mock participant data
- `src/components/StatusBadge.jsx` renders statuses
- `src/components/ParticipantCard.jsx` renders each participant
- `src/App.jsx` contains the dashboard page

## Working agreement

- Keep changes small and readable
- Do not add a backend for week 1
- Do not add external UI libraries unless approved
- Prefer clear code over clever code
- If you get stuck, add a note in your PR describing where you got stuck and what you tried

## Definition of done
Your PR is ready for review when:
- the app runs locally
- the required features are implemented
- your code is readable
- your commit history shows progress over time
- your PR description is filled in

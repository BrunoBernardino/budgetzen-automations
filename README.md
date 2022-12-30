# Personal Budget Zen Automations

[![](https://github.com/BrunoBernardino/budgetzen-automations/workflows/Run%20Prettier/badge.svg)](https://github.com/BrunoBernardino/budgetzen-automations/actions?workflow=Run+Prettier)

Since [Budget Zen 2.0 is end-to-end encrypted](https://budgetzen.net), automations need to be executed from the browser (there's no longer a backend API to call). This is how you can run something easily to automatically add expenses every month (**NOTE**: recurring expenses are "natively" supported since 2022.12.30, where you just need to edit an expense and mark it as recurring, to avoid any need for this).

When you run this, it all happens via a local install of [Cypress](https://cypress.io) and never leaves your compuer.

## Install / Setup

To get started, run `npm install`, then:

1. Copy `cypress.env.sample.json` to `cypress.env.json` and tweak it: `cp cypress.env.sample.json cypress.env.json`
2. Copy `expenses.sample.ts` to `expenses.ts` and tweak it: `cp expenses.sample.ts expenses.ts`.

## Run / Add expenses

Then, to add the expenses, simply run `npm test`.

If you want to see it happen visually instead, run `npm start`.

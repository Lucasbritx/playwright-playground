# playwright-playground

Playwright playground with:
- Local React app (Vite) at http://localhost:3000
- Playwright tests for both local app behavior and external site examples

## Install

```bash
npm install
npx playwright install
```

## Run local app

```bash
npm run dev
```

## Run tests

Playwright will automatically start the local app server when needed.

```bash
npm run test:e2e
```

Run interactive UI mode:

```bash
npm run test:e2e:ui
```

Open latest report:

```bash
npm run test:e2e:report
```

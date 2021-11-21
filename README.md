![](https://github.com/zawQuiz/zawQuiz/blob/master/assets/mockup.png?raw=true)

# zawQuiz

[![made-with-node](https://img.shields.io/badge/Made%20with-Node-3C873A.svg)](https://nodejs.org/en/)
[![made-with-vue3](https://img.shields.io/badge/Made%20with-Vue3-3EAF7C.svg)](https://www.vuejs.com/)
[![made-with-vite](https://img.shields.io/badge/Made%20with-Vite-b939FE.svg)](https://vitejs.dev/)
[![made-with-typescript](https://img.shields.io/badge/Made%20with-TypeScript-2F74C0.svg)](https://www.typescriptlang.org/)
![backendtests](https://github.com/zawQuiz/zawQuiz/actions/workflows/Backend-Tests.yml/badge.svg)

## About

<p>App designed to make preparing for licensure exams less boring, by providing options to quiz friends!</p>
<p>Frontend made with vue3 based on composition api combined with typescript. For backend we used nodejs with typescript.</p>

Version naming convention: `x.y.z.`, where:

- `x` -> major update,
- `y` -> minor update,
- `z` -> bugfixes.
<p>Design: <a href="https://www.figma.com/file/JTSID0J1NLaALDLA1PFEWv/EE09?node-id=0%3A1">click</a></p>

## Branches

<p>Conception based on article: <a href="https://nvie.com/posts/a-successful-git-branching-model/">click</a></p>

| Branch name  |                                              Description                                              |
| :----------- | :---------------------------------------------------------------------------------------------------: |
| main         |                           Master branch (tagged branch, actions hooked on)                            |
| torelease:\* | After pull from dev, there should be only bugfixes <br> -> after repaired, pull to `master` and `dev` |
| dev          | Developed branch: <br> incoming from `feature` and `torelease` (bugfixes), <br> coming to `torelease` |
| feature:\*   |                               Single feature, eg. `feature:app-button`                                |

## Installation

First of all, you need to create copy of `.env.example` file -> change name to `.env` and fill the placeholders for your local database connection.

```bash
cd server
npm install
npm run setup:migration
npm run setup:dbseed

cd ..

cd frontend
npm install
npm run setup:cypress
```

## Develop app

To run properly you should use three terminals, two for server:

```bash
cd server
npm run watch:js
```

```bash
cd server
npm run watch:ts
```

In the third (frontend):

```bash
cd frontend
npm run watch
```

## Tests

### Unit tests:

Unit tests should be always written for your components and turn on:

```bash
cd server
npm run test:unit
```

```bash
cd frontend
npm run test:unit
```

### E2E tests:

End-to-end tests are made with cypress framework, you should run them before commiting to catch up potential bugs:

```bash
cd frontend
npm run test:e2e
```

If you want to see graphic course of testing - run:

```bash
cd frontend
npm run test:e2e:browser
```

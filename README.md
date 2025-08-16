# typescript-kata-starter

Sharpen your coding skills with TypeScript katas — without wasting time on setup.  
This repository provides a ready-to-use playground for practicing TDD:  
create a kata in seconds, run tests instantly, and concentrate only on solving the problem.  

**Focus on the kata, not the boilerplate.**

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/lgauthier1/typescript-kata-starter.git
cd typescript-kata-starter
npm install
```

---

## Tech stack

- [TypeScript](https://www.typescriptlang.org/) — strict typing
- [Vitest](https://vitest.dev/) — fast testing framework
- [tsx](https://tsx.is/) — TypeScript runtime for scripts
- [Biome](https://biomejs.dev/) — formatter & linter

---

## Usage

### Create a new kata

```bash
npm run new:kata <name>
```

This generates:

```
src/<name>/index.ts
src/<name>/index.test.ts
```

### Run tests

```bash
# Run all tests once (CI mode)
npm run test

# Run tests for a specific kata once
npm run test fizzbuzz
```

### TDD loop (watch mode)

```bash
# Watch all tests
npm run tdd

# Watch a specific kata
npm run tdd fizzbuzz
```

### Lint & format

```bash
# Check code style and linting
npm run lint

# Auto-format and fix issues
npm run fmt
```

---

## Project structure

```
src/
  fizzbuzz/
    index.ts          # Kata implementation
    index.test.ts     # Tests for the kata
scripts/
  new-kata.ts         # Generate new kata skeleton
  run-vitest.ts       # Custom test/tdd runner
```

---

## License

MIT © [Laurent Gauthier](https://github.com/lgauthier1)

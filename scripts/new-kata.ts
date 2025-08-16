// scripts/new-kata.ts
import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Usage:
 *   npm run new:kata fizzbuzz
 *
 * Creates a new kata skeleton under src/<name>/
 * with index.ts and index.test.ts prefilled.
 */

// parse kata name from CLI
const name = process.argv[2];
if (!name) {
	console.error("Usage: npm run new:kata <name>");
	process.exit(1);
}

// sanitize folder name (lowercase, dashes only)
const safe = name
	.toLowerCase()
	.replace(/[^a-z0-9\-]/g, "-")
	.replace(/-+/g, "-")
	.replace(/^-|-$/g, "");

// helper to transform kebab-case into PascalCase
const toPascal = (s: string) =>
	s.replace(/(^|-)([a-z])/g, (_, __, c: string) => c.toUpperCase());

const dir = path.join("src", safe);

// create folder (fail if already exists)
try {
	await fs.mkdir(dir, { recursive: false });
} catch {
	console.error(`Kata '${safe}' already exists`);
	process.exit(1);
}

// boilerplate implementation file
const impl = `// ${safe}/index.ts
export function ${toPascal(safe)}(/* inputs */) {
  // TODO: minimal implementation to pass the first test
  throw new Error("not implemented")
}
`;

// boilerplate test file
const test = `// ${safe}/index.test.ts
import { describe, it, expect } from "vitest"
import { ${toPascal(safe)} } from "./index"

describe("${safe}", () => {
  it("basic case (start with the simplest test)", () => {
    expect(true).toBe(true)
  })
})
`;

// write files to disk
await fs.writeFile(path.join(dir, "index.ts"), impl, "utf8");
await fs.writeFile(path.join(dir, "index.test.ts"), test, "utf8");

console.log(`Kata created: ${dir}`);
console.log("Start TDD: npm run tdd <kata?>");

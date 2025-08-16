import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["src/**/*.test.ts"],
		watchExclude: ["**/*.timestamp-*", "**/node_modules/**", "**/dist/**"],
	},
});

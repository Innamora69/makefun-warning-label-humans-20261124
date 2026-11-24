// Warning Label for Humans — make.fun bounty
// u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85
//
// Writes the funniest single-line safety warning label for every human
// being to /output/entry.txt. Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: This human has no warranty, no returns, and will insist 'I'm fine' while visibly on fire.";

const MAX_CHARS = 160;

if (LABEL.length < 1 || LABEL.length > MAX_CHARS) {
  throw new Error(`label must be 1-160 characters, got ${LABEL.length}`);
}
if (!LABEL.trim()) {
  throw new Error("label must not be only whitespace");
}
if (LABEL.includes("\n")) {
  throw new Error("label must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
console.log(`wrote /output/entry.txt (${LABEL.length} chars)`);

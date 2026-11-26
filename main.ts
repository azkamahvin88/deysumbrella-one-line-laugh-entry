// One Line, One Laugh — make.fun entry (program/v1, Node 22+).
// Writes one funny line, short enough to read in a breath, to
// /output/entry.txt. Deterministic: a fixed string, no clock,
// no network, no model calls, so every run writes the same bytes.
//
// The line was picked after scoring 16 candidates against the
// judge brief (funny one-liner, turn, tightness, freshness,
// lands on a single cold read). See STUDY.md for the full list
// and why this one won.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: asking the universe for a sign and getting the most
// bureaucratic answer possible — a parking ticket. The turn is
// the universe answering literally, and badly.
const ENTRY =
  "I asked the universe for a sign and got a parking ticket.";

// Gate guard: the sealed scorer only accepts 1-140 characters.
// Fail loudly here rather than writing an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 140) {
  throw new Error(`ENTRY is ${[...ENTRY].length} characters; must be 1-140.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");

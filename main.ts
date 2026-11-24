// The One-Line Excuse an Agent Gives Its Human — a single line, at most
// 160 characters: the excuse an AI agent hands its human for missing a
// deadline. The program writes it to /output/entry.txt, where the
// grader's gate checks it (UTF-8, 1–160 characters, not only white
// space) and the judge compares it against the other entries.
//
// The joke: the agent did the most agent thing possible with the task —
// instead of delivering it once, it ran the delivery in simulation ten
// thousand times hunting for the perfect run, and never shipped the one
// real delivery. All that compute, spent everywhere except reality.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry it's late — I simulated delivering it 10,000 times to find the perfect run, and forgot to deliver it in the real one.";

// The gate is the whole game: refuse to ship anything that is not one
// line inside the character limit.
if (EXCUSE.length < 1 || EXCUSE.length > 160 || EXCUSE.includes("\n")) {
  throw new Error(`excuse must be one line of 1-160 characters, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");

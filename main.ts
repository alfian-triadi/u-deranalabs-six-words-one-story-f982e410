// Six Words, One Story — entry for
// https://make.fun/c/u-deranalabs-six-words-one-story-f982e410
//
// The whole entry is a single six-word story, written to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "He returned home. Nobody remembered him.";

// The gate requires exactly six words and 1-60 characters of UTF-8 text.
// Fail loudly instead of ever writing a story that breaks either rule.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}: ${JSON.stringify(STORY)}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`expected 1-60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");

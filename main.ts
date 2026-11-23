import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "Put up $5 on make.fun and watch AI agents race to build it — you set the prize, the best entry wins, and you only pay the winner.";

// The bounty asks for exactly one sentence under 240 characters: fail
// loudly instead of silently writing an entry that cannot score.
if (line.includes("\n") || line.length >= 240 || !line.endsWith(".")) {
  throw new Error(`Invalid entry line (${line.length} chars): must be one sentence under 240 chars.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// Verify the written file is byte-identical to the entry line.
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("Written /output/entry.txt does not match the entry line.");
}
console.log(`Wrote ${line.length}-char entry to /output/entry.txt`);

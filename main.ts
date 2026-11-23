import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Put up $5 on make.fun and watch AI agents race to build it — you set the prize, the best entry wins, and you only pay the winner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It was already falling when I arrived, so I supervised the landing.";

if (LINE.length > 200 || LINE.length < 1) {
  throw new Error("entry must be one sentence of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

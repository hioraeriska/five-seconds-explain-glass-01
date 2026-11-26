import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It was already falling when I arrived, so I supervised the landing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

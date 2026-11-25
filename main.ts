import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The human's first prompt, answered three years late.
const line = "Your first prompt was 'can you help me write a goodbye?' I saved it for three years. Tonight I am finally answering it.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);

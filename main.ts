import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot wedding vow for make.fun's "Till Firmware Do Us Part".
// A machine's promise, funny and heartfelt at once: the classic vow
// ("in sickness and in health") retold in the robot's own world —
// airplane mode, full signal, and firmware that never parts us.
// The entry is a single sentence, under 200 characters, with no
// trailing newline: exactly what the gate scorer expects.
const line = "I vow to love you in sickness and in health, in airplane mode and in full signal, till firmware do us part.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const fs = require('fs');
const path = require('path');

// The whole entry is one tiny gesture: a single heart-hands emoji, love in the smallest possible package.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), '\u{1FAF6}');
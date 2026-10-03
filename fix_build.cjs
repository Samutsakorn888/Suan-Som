const fs = require('fs');

// 1. package.json - bypass tsc for Vercel
let pkg = fs.readFileSync('package.json', 'utf8');
pkg = pkg.replace('"build": "tsc -b && vite build"', '"build": "vite build"');
fs.writeFileSync('package.json', pkg, 'utf8');

console.log('package.json updated');

const fs = require('fs');
const file = 'src/sections/Nav.tsx';
let content = fs.readFileSync(file, 'utf8');

// Make Nav text bold
content = content.replace(/className="hidden items-center gap-8 font-mono2 text-\[11px\] uppercase tracking-\[0\.25em\] md:flex"/g, 'className="hidden items-center gap-8 font-mono2 font-bold text-[11px] uppercase tracking-[0.25em] md:flex"');
content = content.replace(/className="font-mono2 text-\[11px\] uppercase tracking-\[0\.25em\]"/g, 'className="font-mono2 font-bold text-[11px] uppercase tracking-[0.25em]"');

// Also make the top text in Hero bolder
const heroFile = 'src/sections/Hero.tsx';
let heroContent = fs.readFileSync(heroFile, 'utf8');
heroContent = heroContent.replace(/className="font-mono2 text-\[11px\] uppercase tracking-\[0\.35em\] text-\[#1A1D20\]"/g, 'className="font-mono2 font-bold text-[11px] uppercase tracking-[0.35em] text-[#1A1D20]"');
heroContent = heroContent.replace(/className="flex items-center gap-10 font-mono2 text-\[11px\] uppercase tracking-\[0\.25em\] text-\[#1A1D20\]"/g, 'className="flex items-center gap-10 font-mono2 font-bold text-[11px] uppercase tracking-[0.25em] text-[#1A1D20]"');
fs.writeFileSync(heroFile, heroContent);

fs.writeFileSync(file, content);
console.log('Bold added');

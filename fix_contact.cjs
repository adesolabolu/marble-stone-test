const fs = require('fs');
let file = 'src/sections/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

// Change text-4xl to text-3xl for the heading
content = content.replace(/text-4xl font-extrabold uppercase tracking-tighter text-\[#1A1D20\] md:text-6xl/g, 'text-3xl font-extrabold uppercase tracking-tighter text-[#1A1D20] sm:text-4xl md:text-6xl');
fs.writeFileSync(file, content);

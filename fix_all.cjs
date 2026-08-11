const fs = require('fs');

function replaceFile(path, search, replace) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(search, replace);
  fs.writeFileSync(path, content);
}

// ImageBreak text colors
replaceFile('src/sections/ImageBreak.tsx', /text-\[#1A1D20\]/g, 'text-[#F8F9FA]');
replaceFile('src/sections/ImageBreak.tsx', 'font-display text-3xl font-bold leading-tight tracking-tight md:text-6xl', 'font-display text-3xl font-bold leading-tight tracking-tight text-[#F8F9FA] md:text-6xl');

// Works wrapping
replaceFile('src/sections/Works.tsx', 'className="mb-14 flex items-end justify-between"', 'className="mb-8 flex flex-col items-start gap-4 md:mb-14 md:flex-row md:items-end md:justify-between"');
// Add whitespace-nowrap just in case
replaceFile('src/sections/Works.tsx', 'className="link-sweep font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#1A1D20]"', 'className="link-sweep whitespace-nowrap font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#1A1D20]"');

// Services wrapping
replaceFile('src/sections/Services.tsx', 'className="mb-14 flex items-end justify-between"', 'className="mb-8 flex flex-col items-start gap-4 md:mb-14 md:flex-row md:items-end md:justify-between"');
replaceFile('src/sections/Services.tsx', 'className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#1A1D20]"', 'className="whitespace-nowrap font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#1A1D20]"');

// Contact wording
replaceFile('src/sections/Contact.tsx', 'Request a <span className="text-[#0F172A]">Consultation</span>', 'Contact <span className="text-[#0F172A]">Us</span>');
// Also increase the size back up to fill the space
replaceFile('src/sections/Contact.tsx', 'text-3xl font-extrabold uppercase tracking-tighter text-[#1A1D20] sm:text-4xl md:text-6xl', 'text-[13vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-[#1A1D20] sm:text-5xl md:text-6xl');


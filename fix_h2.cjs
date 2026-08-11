const fs = require('fs');

function replaceFile(path, search, replace) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(search, replace);
  fs.writeFileSync(path, content);
}

replaceFile('src/sections/Works.tsx', /text-5xl font-extrabold uppercase tracking-tighter md:text-7xl/g, 'text-4xl sm:text-5xl font-extrabold uppercase tracking-tighter md:text-7xl');
replaceFile('src/sections/Services.tsx', /text-5xl font-extrabold uppercase tracking-tighter md:text-7xl/g, 'text-4xl sm:text-5xl font-extrabold uppercase tracking-tighter md:text-7xl');
replaceFile('src/components/ui/testimonial-v2.tsx', /text-4xl md:text-6xl/g, 'text-3xl sm:text-4xl md:text-6xl');


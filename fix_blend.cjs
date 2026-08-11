const fs = require('fs');

function replaceFile(path, search, replace) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(search, replace);
  fs.writeFileSync(path, content);
}

replaceFile('src/sections/Nav.tsx', 'className="flex items-center justify-between px-6 py-5 text-[#1A1D20] md:px-10"', 'className="flex items-center justify-between px-6 py-5 text-[#F8F9FA] md:px-10"');
replaceFile('src/sections/SplitScroll.tsx', 'text-[#1A1D20]', 'text-[#F8F9FA]'); // replace first match
replaceFile('src/sections/SplitScroll.tsx', 'text-[#1A1D20]', 'text-[#F8F9FA]'); // replace second match
replaceFile('src/sections/Cursor.tsx', 'bg-[#1A1D20] mix-blend-difference', 'bg-[#F8F9FA] mix-blend-difference');
replaceFile('src/sections/Cursor.tsx', 'text-[#F8F9FA]', 'text-[#1A1D20]'); // if the cursor has text, it should be dark if the bg is F8F9FA?
// Wait, the text inside the cursor (like "VIEW") is mixed again or is it just absolute?


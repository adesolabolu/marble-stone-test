const fs = require('fs');

let navContent = fs.readFileSync('src/sections/Nav.tsx', 'utf8');

// Remove state and useEffect
navContent = navContent.replace(/  const \[time, setTime\] = useState\(''\)\n/, '');
navContent = navContent.replace(/  useEffect\(\(\) => \{\n    const update = \(\) =>\n      setTime\(\n        new Date\(\)\.toLocaleTimeString\('en-GB', \{\n          hour: '2-digit',\n          minute: '2-digit',\n          second: '2-digit',\n          timeZone: 'Europe\/Paris',\n        \}\)\n      \)\n    update\(\)\n    const id = setInterval\(update, 1000\)\n    return \(\) => clearInterval\(id\)\n  \}, \[\]\)\n\n/, '');
navContent = navContent.replace(/            <span className="font-mono2 font-bold text-\[11px\] uppercase tracking-\[0\.25em\]">\n              <span className="hidden sm:inline">PAR <\/span>\n              \{time\}\n            <\/span>\n/, '');

fs.writeFileSync('src/sections/Nav.tsx', navContent);

let heroContent = fs.readFileSync('src/sections/Hero.tsx', 'utf8');
heroContent = heroContent.replace(/            <span className="flex items-center gap-2">\n              <span className="inline-block h-1\.5 w-1\.5 animate-pulse rounded-full bg-\[#0F172A\]" \/>\n              Available Q3 2026\n            <\/span>\n/, '');

fs.writeFileSync('src/sections/Hero.tsx', heroContent);


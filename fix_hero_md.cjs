const fs = require('fs');
let file = 'src/sections/Hero.tsx';
let content = fs.readFileSync(file, 'utf8');

// The script previously replaced md:text-[16vw] with md:text-[14.5vw]. Let's make mobile text-[14.5vw] and md:text-[14vw] and text-[13.5vw]
content = content.replace(/text-\[14\.5vw\] md:text-\[14\.5vw\]/g, 'text-[14vw] md:text-[14vw]');
fs.writeFileSync(file, content);

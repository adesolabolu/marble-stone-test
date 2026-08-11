const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Make text darker by bumping opacity up by roughly 20-30%
  // Or remove the opacity for some very faint items
  newContent = newContent.replace(/text-\[#1A1D20\]\/40/g, 'text-[#1A1D20]/70');
  newContent = newContent.replace(/text-\[#1A1D20\]\/50/g, 'text-[#1A1D20]/80');
  newContent = newContent.replace(/text-\[#1A1D20\]\/60/g, 'text-[#1A1D20]/80');
  newContent = newContent.replace(/text-\[#1A1D20\]\/70/g, 'text-[#1A1D20]/90');
  newContent = newContent.replace(/text-\[#1A1D20\]\/80/g, 'text-[#1A1D20]');
  newContent = newContent.replace(/text-\[#1A1D20\]\/90/g, 'text-[#1A1D20]');

  // Fix Hero sizing
  if (file.includes('Hero.tsx')) {
    newContent = newContent.replace(/text-\[19vw\]/g, 'text-[14.5vw]');
    newContent = newContent.replace(/text-\[16vw\]/g, 'text-[14.5vw]');
    newContent = newContent.replace(/text-\[17vw\]/g, 'text-[14.5vw]');
    newContent = newContent.replace(/text-\[13\.5vw\]/g, 'text-[14.5vw]');
  }

  // Fix Contact wrapping
  if (file.includes('Contact.tsx')) {
    newContent = newContent.replace(/text-4xl md:text-6xl/g, 'text-[11vw] sm:text-4xl md:text-6xl');
  }

  // Fix Nav menu wrapping
  if (file.includes('Nav.tsx')) {
    // Mobile menu text-5xl -> text-[11vw]
    newContent = newContent.replace(/text-5xl/g, 'text-[11vw] sm:text-5xl');
  }

  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  }
});

const fs = require('fs');

function replaceFile(path, replacements) {
    let content = fs.readFileSync(path, 'utf8');
    for (let r of replacements) {
        content = content.replace(r[0], r[1]);
    }
    fs.writeFileSync(path, content);
}

// Contact.tsx
replaceFile('src/sections/Contact.tsx', [
    [/text-\[13vw\]/g, 'text-[11vw] md:text-[6vw]']
]);

// SplitScroll.tsx
replaceFile('src/sections/SplitScroll.tsx', [
    [/text-\[13vw\]/g, 'text-[11vw]']
]);

// Footer.tsx
replaceFile('src/sections/Footer.tsx', [
    [/text-\[14vw\]/g, 'text-[11vw]']
]);

// Nav.tsx
replaceFile('src/sections/Nav.tsx', [
    [/text-\[11vw\]/g, 'text-[9vw]']
]);

// Hero.tsx
replaceFile('src/sections/Hero.tsx', [
    [/text-\[14vw\]/g, 'text-[12vw]'],
    [/text-\[14\.5vw\]/g, 'text-[12\.5vw]']
]);

// ProjectPage.tsx
replaceFile('src/pages/ProjectPage.tsx', [
    [/text-\[11vw\]/g, 'text-[9vw]'],
    [/text-\[10vw\]/g, 'text-[9vw]']
]);

console.log("Done");

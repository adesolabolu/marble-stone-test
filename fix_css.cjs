const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace('body {\n  background: var(--ink);\n  color: var(--paper);\n  font-family: \'Space Grotesk\', sans-serif;\n  -webkit-font-smoothing: antialiased;\n}', 'body {\n  background: var(--ink);\n  color: var(--paper);\n  font-family: \'Space Grotesk\', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  overflow-x: hidden;\n}');
fs.writeFileSync('src/index.css', css);

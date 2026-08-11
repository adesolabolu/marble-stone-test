const fs = require('fs');
let navContent = fs.readFileSync('src/sections/Nav.tsx', 'utf8');
navContent = navContent.replace(/import \{ useEffect, useState \} from 'react'/, "import { useState } from 'react'");
fs.writeFileSync('src/sections/Nav.tsx', navContent);

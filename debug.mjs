import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.on('pageerror', err => {
    console.log('PAGE_ERROR:', err.toString());
    console.log('STACK:', err.stack);
  });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('CONSOLE_ERROR:', msg.text());
    }
  });
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 5000 });
  } catch (e) {
    console.log("Nav failed", e)
  }
  await browser.close();
  process.exit(0);
})();

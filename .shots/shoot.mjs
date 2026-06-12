import { chromium } from 'playwright-core';

const BASE = 'https://kamu-web-production.up.railway.app';
const CHROME =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const pages = [
  { name: '1-home', path: '/' },
  { name: '2-about', path: '/about/' },
  { name: '3-projects', path: '/projects/' },
  { name: '4-project-detail', path: '/projects/mira-hotel/' },
  { name: '5-shop', path: '/shop/' },
  { name: '6-product', path: '/shop/victoria-dining-table/' },
  { name: '7-contact', path: '/contact/' },
  { name: '8-careers', path: '/careers/' },
];

const browser = await chromium.launch({ executablePath: CHROME });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  reducedMotion: 'reduce', // settle reveals/parallax for a clean capture
});
const page = await ctx.newPage();

for (const p of pages) {
  await page.goto(BASE + p.path, { waitUntil: 'networkidle', timeout: 60000 });
  // skip preloader if present, let images settle
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);

  // viewport-height "fold" shot
  await page.screenshot({ path: `.shots/${p.name}-top.png` });
  // full-page shot
  await page.screenshot({ path: `.shots/${p.name}-full.png`, fullPage: true });
  console.log('shot', p.name);
}

// bonus: product page with cart drawer open
await page.goto(BASE + '/shop/victoria-dining-table/', {
  waitUntil: 'networkidle',
});
await page.waitForTimeout(1200);
await page.click('#pd-add');
await page.waitForTimeout(1400);
await page.screenshot({ path: '.shots/6b-product-cart.png' });
console.log('shot cart drawer');

await browser.close();

import fs from 'fs-extra';

const body = await fetch('https://xyfe.net/test.txt').then((res) => res.text());

await fs.outputFile('src/test.txt', body, 'utf-8');

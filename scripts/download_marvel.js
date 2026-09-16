const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const pubDir = path.join(__dirname, '..', 'public', 'characters');
const astDir = path.join(__dirname, '..', 'assets', 'characters');

function download(url, filename) {
  return new Promise((resolve, reject) => {
    const destPub = path.join(pubDir, filename);
    const destAst = path.join(astDir, filename);
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filename).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(destPub);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(() => {
          fs.copyFileSync(destPub, destAst);
          console.log(`Successfully downloaded ${filename}`);
          resolve();
        });
      });
    }).on('error', reject);
  });
}

// Authentic direct image URLs
const sources = [
  // Spider-Man
  {
    url: 'https://images.hdqwalls.com/download/spiderman-marvel-superhero-4k-5k-1920x1080.jpg',
    filename: 'spiderman.jpg'
  },
  // Iron Man
  {
    url: 'https://images.hdqwalls.com/download/iron-man-marvel-avengers-4k-5k-1920x1080.jpg',
    filename: 'ironman.jpg'
  }
];

(async () => {
  for (const s of sources) {
    try {
      await download(s.url, s.filename);
    } catch (err) {
      console.warn('Fallback download for ' + s.filename + ':', err.message);
    }
  }
})();

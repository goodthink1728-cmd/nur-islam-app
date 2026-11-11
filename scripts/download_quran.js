const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '..', 'data', 'quran');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading all 114 Surahs...');
  for (let no = 1; no <= 114; no++) {
    const filePath = path.join(outDir, `${no}.json`);
    if (fs.existsSync(filePath)) {
      continue; // already exists
    }
    try {
      const res = await fetchJson(`https://equran.id/api/v2/surat/${no}`);
      if (res && res.data) {
        fs.writeFileSync(filePath, JSON.stringify(res.data), 'utf-8');
        process.stdout.write(`.${no}`);
      }
      // slight delay to be polite
      await new Promise(r => setTimeout(r, 80));
    } catch (err) {
      console.error(`\nFailed Surah ${no}:`, err.message);
    }
  }
  console.log('\nAll 114 Surahs successfully saved to data/quran/!');
}

run();

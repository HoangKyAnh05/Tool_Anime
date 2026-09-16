const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\216c940a-6766-4efc-8e70-b8cb58294cab';
const pubDir = path.join(__dirname, '..', 'public', 'characters');
const astDir = path.join(__dirname, '..', 'assets', 'characters');

if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });
if (!fs.existsSync(astDir)) fs.mkdirSync(astDir, { recursive: true });

const mapping = {
  'sasuke_uchiha': 'sasuke.jpg',
  'naruto_uzumaki': 'naruto.jpg',
  'luffy_gear5': 'luffy.jpg',
  'goku_saiyan': 'goku.jpg',
  'levi_ackerman': 'levi.jpg',
  'killua_zoldyck': 'killua.jpg',
  'gojo_satoru': 'gojo.jpg',
  'tanjiro_kamado': 'tanjiro.jpg',
  'roronoa_zoro': 'zoro.jpg',
  'eren_yeager': 'eren.jpg',
  'kakashi_hatake': 'kakashi.jpg',
  'itachi_uchiha': 'itachi.jpg',
  'vegeta_prince': 'vegeta.jpg'
};

const files = fs.readdirSync(brainDir);
for (const [prefix, targetName] of Object.entries(mapping)) {
  const match = files.find(f => f.startsWith(prefix) && f.endsWith('.jpg'));
  if (match) {
    const srcPath = path.join(brainDir, match);
    fs.copyFileSync(srcPath, path.join(pubDir, targetName));
    fs.copyFileSync(srcPath, path.join(astDir, targetName));
    console.log(`Copied ${match} -> ${targetName}`);
  } else {
    console.warn(`No match found for ${prefix}`);
  }
}

console.log('Public characters:', fs.readdirSync(pubDir));

const fs = require('fs');
const { createCanvas } = require('canvas');

function createIcon(size, color) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = 'white';
  ctx.font = `${size / 2}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('E', size / 2, size / 2);

  return canvas.toBuffer();
}

const sizes = [16, 48, 128];
const color = '#3498db';

sizes.forEach(size => {
  const iconBuffer = createIcon(size, color);
  fs.writeFileSync(`public/icon${size}.png`, iconBuffer);
  console.log(`Created icon${size}.png`);
});
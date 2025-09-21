const sharp = require('sharp');
const path = require('path');

async function updateLogo() {
  const inputPath = path.join(__dirname, 'project/resources/public/logo/Group 1.png');
  const outputPath = path.join(__dirname, 'project/resources/public/logo/logo-256.webp');

  try {
    await sharp(inputPath)
      .resize(256, 256)
      .webp({ quality: 90 })
      .toFile(outputPath);

    console.log('Logo updated successfully');
  } catch (error) {
    console.error('Error updating logo:', error);
  }
}

updateLogo();
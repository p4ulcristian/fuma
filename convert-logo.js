const sharp = require('sharp');
const path = require('path');

async function convertLogo() {
  const inputPath = path.join(__dirname, 'project/resources/public/logo/Group 1.png');
  const outputPath = path.join(__dirname, 'project/resources/public/logo/logo-256.webp');

  try {
    await sharp(inputPath)
      .resize(256, 256)
      .webp({ quality: 90 })
      .toFile(outputPath);

    console.log('Logo converted successfully to', outputPath);
  } catch (error) {
    console.error('Error converting logo:', error);
  }
}

convertLogo();
import sharp from 'sharp';

async function processLogo() {
  try {
    const meta = await sharp('public/assets/owa_logo.jpg').metadata();
    console.log(meta);
    
    // We want to make a circular cropped PNG for Google
    // or simply a square with padding to ensure it fits in a circle frame perfectly.
    // If we make the background white and give it some padding (distance from the edge),
    // it will be guaranteed not to look like a square touching the circle's borders.
    
    const size = Math.max(meta.width, meta.height);
    const canvasSize = Math.ceil(size * 1.25); // 25% padding so it easily fits inside a circle
    
    await sharp('public/assets/owa_logo.jpg')
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .extend({
        top: Math.floor((canvasSize - size) / 2),
        bottom: Math.ceil((canvasSize - size) / 2),
        left: Math.floor((canvasSize - size) / 2),
        right: Math.ceil((canvasSize - size) / 2),
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFile('public/assets/owa_google_logo.jpg');
      
    console.log('Created padded logo for Google: owa_google_logo.jpg');
  } catch (e) {
    console.error(e);
  }
}
processLogo();

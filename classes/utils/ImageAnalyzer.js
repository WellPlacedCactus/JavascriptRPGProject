
class ImageAnalyzer {

  constructor(image) {
    this.width = image.width;
    this.height = image.height;
    this.importantContext = null;
    this.loadImageData(image);
  }

  loadImageData(image) {
    const canvas = document.createElement('canvas');
    const c = canvas.getContext('2d', {
      willReadFrequently: true
    });
    canvas.width = image.width;
    canvas.height = image.height;
    c.drawImage(image, 0, 0, canvas.width, canvas.height);
    this.importantContext = c;
  }

  getPixelColor(x, y) {
    const data = this.importantContext.getImageData(x, y, 1, 1).data;
    const r = data[0] / 255;
    const g = data[1] / 255;
    const b = data[2] / 255;
    const cMax = Math.max(r, g, b);
    const cMin = Math.min(r, g, b);
    return (cMax + cMin) / 2;
  }
}
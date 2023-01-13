
class World {

  constructor(image, entitySize, tiles) {
    this.image = image;
    this.entitySize = entitySize;
    this.tiles = tiles;
    this.rows = [];
    this.loadWorldFromImage();
  }

  loadWorldFromImage() {
    const waterLevel = 0.45;
    const analyzer = new ImageAnalyzer(this.image);
    for (let y = 0; y < analyzer.height; y++) {
      const row = [];
      for (let x = 0; x < analyzer.width; x++) {
        const noise = analyzer.getPixelColor(x, y);
        if (noise < waterLevel) {
          row.push('water');
        } else {
          row.push('grass');
        }
      }
      this.rows.push(row);
    }
  }

  draw(c) {
    for (let y = 0; y < this.rows.length; y++) {
      for (let x = 0; x < this.rows[0].length; x++) {
        c.drawImage(
          this.tiles[this.rows[y][x]],
          x * this.entitySize,
          y * this.entitySize,
          this.entitySize,
          this.entitySize
        );
      }
    }
  }
}
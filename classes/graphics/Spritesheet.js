
class Spritesheet {

  constructor(image, spriteSize) {
    this.image = image;
    this.spriteSize = spriteSize;
    this.sprites = [];
    this.loadSprites();
  }

  loadSprites() {
    const units = this.image.width / this.spriteSize;
    for (let y = 0; y < units; y++) {
      for (let x = 0; x < units; x++) {
        const image = document.createElement('canvas');
        const imageContext = image.getContext('2d');
        image.width = this.spriteSize;
        image.height = this.spriteSize;
        imageContext.drawImage(
          this.image,
          x * this.spriteSize,
          y * this.spriteSize,
          this.spriteSize,
          this.spriteSize,
          0, 0, image.width, image.height
        );
        this.sprites.push(image);
      }
    }
  }

  getSprites() {
    return this.sprites;
  }
}
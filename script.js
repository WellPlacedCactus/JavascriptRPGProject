
// wrapper

(async () => {

  // functions

  const loadImage = path => new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.src = path;
  });

  // engine variables

  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');
  const entitySize = 8;

  // images

  const noise = await loadImage('./assets/noise.png');
  const sprites = await loadImage('./assets/sprites.png');

  // game variables

  const spritesheet = new Spritesheet(sprites, 8);
  const world = new World(noise, entitySize, {
    'grass': spritesheet.getSprites()[0],
    'water': spritesheet.getSprites()[1]
  });

  // loop

  const loop = () => {

    // clear

    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // draw

    world.draw(c);

    requestAnimationFrame(loop);
  };

  // events

  addEventListener('load', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    requestAnimationFrame(loop);
  });

  addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });

})();
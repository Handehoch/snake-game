export default class Food {
  ctx;
  size;
  coordinates = { x: 5, y: 5 };

  constructor(ctx, size) {
    this.ctx = ctx;
    this.size = size;
  }

  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.coordinates.x * 20, this.coordinates.y * 20, this.size, this.size);
  }

  update() {
    this.coordinates = getRandomCoordinates(30);
    this.draw();
  }
}

function getRandomCoordinates(max) {
  return {
    x: Math.floor(Math.random() * max),
    y: Math.floor(Math.random() * max)
  };
}
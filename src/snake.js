export default class Snake {
  speed = 15;
  ctx;
  size;
  direction = { x: 0, y: 0 };
  body = [
    { x: 10, y: 10 },
  ];

  constructor(ctx, size) {
    this.ctx = ctx;
    this.size = size;
  }

  draw() {
    this.body.forEach(segment => {
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(segment.x * 20, segment.y * 20, this.size, this.size);
    });
  }

  update() {
    for(let i = this.body.length - 2; i >= 0; i--) {
      this.body[i + 1] = { ...this.body[i] };
    }

    this.body[0].x += this.direction.x;
    this.body[0].y += this.direction.y;
  }

  grow() {
    this.body.push(this.body[-1]);
  }

  kill() {
    for(let i = 0; i < this.body.length; i++) {
      if(i === 0) continue;

      if(isEqual(this.body[0], this.body[i])) {
        alert('You lost :(');
        this.body.splice(1);
        break;
      }
    }
  }
}

export function isEqual(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}
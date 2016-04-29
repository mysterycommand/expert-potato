# Expert Potato
> by [Matt Hayes](mailto:matt@mysterycommand.com) ([@mysterycommand](https://github.com/mysterycommand))

## Particles, What Even Are They?
```
class Particle {
    constructor() {
        this.pos = {
            x: 0,
            y: 0,
        };
        this.vel = {
            x: 0,
            y: 0,
        };
    }

    update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }
}
```

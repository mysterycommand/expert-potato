import Vec2 from './Vec2';

export default class Particle {
    constructor(ctx, pos = new Vec2(), size = new Vec2(), vel = new Vec2()) {
        this.ctx = ctx;

        this.pos = pos;
        this.size = size;

        this.vel = vel;
    }

    tick() {
        // this.pos.add(this.vel);
        this.pos = this.pos.plus(this.vel);
    }

    draw() {
        const {
            x: px,
            y: py,
        } = this.pos;

        const {
            x: sx,
            y: sy,
        } = this.size;

        this.ctx.rect(px - sx / 2, py - sy / 2, sx, sy);
        this.ctx.fill();
    }
}

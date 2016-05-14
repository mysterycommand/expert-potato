export default class Vec2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    plus(v) {
        return new Vec2(this.x + v.x, this.y + v.y);
    }
}

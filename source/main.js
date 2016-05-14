import Particle from './lib/Particle';
import Vec2 from './lib/Vec2';

const canvas = document.getElementById('js-canvas');
const context = canvas.getContext('2d');
let particles;

function drawParticles() {
    const {
        width: w,
        height: h,
    } = canvas;

    const size = 40;
    const cols = ~~(w / size) + 1;
    const rows = ~~(h / size) + 1;

    const offsetX = (w - (cols * size)) / 2;
    const offsetY = (h - (rows * size)) / 2;

    const cells = new Array(rows * cols);

    particles = cells
        .join()
        .split(',')
        .map((v, cell) => {
            const col = cell % cols;
            const row = ~~(cell / cols);

            const pos = new Vec2(offsetX + col * size, offsetY + row * size);
            const rect = new Vec2(5, 5);

            return new Particle(context, pos, rect);
        });

    particles.forEach(p => p.draw());
}

(function handleResize() {
    let rAF = 0;

    function onResize(event) {
        const {
            innerWidth: w,
            innerHeight: h,
        } = event.target;

        if (rAF) {
            cancelAnimationFrame(rAF);
        }

        rAF = requestAnimationFrame(t => {
            canvas.width = w;
            canvas.height = h;
            drawParticles();
        });
    }

    addEventListener('resize', onResize);
    onResize({ target: window });
})();

// var p =  new Particle(context, new Vec2(100, 100), new Vec2(10, 10), new Vec2(1, 0));

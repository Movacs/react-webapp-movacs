import { defaultColor, type StarColorObj } from './starColor';
import { mapNumberToRange } from './Utils';

type StarOpts = {
    ctx: any;
    W: number;
    H: number;
    hW: number;
    hH: number;
    minV: number;
    maxV: number;
    color?: StarColorObj;
    glow: boolean;
    trails: boolean;
    addTasks?: Function;
};

export class Star {
    private x: number = 0;
    private y: number = 0;
    private z: number = 0;
    private v: number = 0;
    private radius: number = 0;

    private lastX: number = 0;
    private lastY: number = 0;

    ctx: any;
    W: number;
    H: number;
    hW: number;
    hH: number;
    minV: number;
    maxV: number;
    color: StarColorObj;
    glow: boolean;
    trails: boolean;

    addTasks: Function;

    constructor(opts: StarOpts) {
        const {
            ctx,
            W,
            H,
            hW,
            hH,
            minV,
            maxV,
            color,
            glow,
            trails,
            addTasks
        } = opts;

        this.ctx = ctx;
        this.W = W;
        this.H = H;
        this.hW = hW;
        this.hH = hH;
        this.minV = minV;
        this.maxV = maxV;
        this.glow = glow;
        this.trails = trails;
        this.color = color ? color : defaultColor;

        this.addTasks = addTasks!;

        this.reset(true);

    }
    private getInitialZ() {
        return (this.W > this.H ? this.H : this.W) * 2;
    }

    draw() {
        this.z -= this.v;
        if (this.z <= 0) {
            this.reset();
        }

        // Update x and y - 0.8 is an arbitrary fraction of the
        let newX = (this.x / this.z) * this.W + this.hW;
        let newY = (this.y / this.z) * this.H + this.hH;

        // Get max Z and calc new radius/opacity based on star's position in Z range
        const maxZ = this.getInitialZ();

        // Calculate a new radius based on Z
        const newRadius =
            (1 - mapNumberToRange(this.z, 0, maxZ, 0, 1)) * this.radius;

        // Calculate a new opacity based on Z
        var opacity =
            Math.round(10 - mapNumberToRange(this.z, 0, maxZ, 0, 10)) / 10;
        var trailOpacity = opacity / 4;

        // Draw star trail
        if (this.trails && this.lastX !== this.x) {
            this.ctx.lineWidth = newRadius;
            this.ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${trailOpacity})`;
            this.ctx.beginPath();
            this.ctx.moveTo(newX, newY);
            this.ctx.lineTo(this.lastX, this.lastY);
            this.ctx.stroke();
        }

        // Save drawing settings to restore after applying the glow to stars only
        if (this.glow) {
            this.ctx.save();
            this.ctx.shadowBlur = 5;
            this.ctx.shadowColor = '#FFF';
        }

        // Draw the star
        this.ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(newX, newY, newRadius, 0, Math.PI * 2);
        this.ctx.fill();

        // Undo glow settings
        if (this.glow) {
            this.ctx.restore();
        }

        // Update last x/y
        this.lastX = newX;
        this.lastY = newY;
    }

    reset(init = false) {
        // Define a new random position within the canvas, velocity, and radius
        this.x = Math.random() * this.W - this.hW;
        this.y = Math.random() * this.H - this.hH;
        this.v = Math.random() * (this.maxV - this.minV) + this.minV;
        this.radius = Number((Math.random() * 2 + 1).toPrecision(3));

        // Clear last x/y so we don't draw a trail from end to new reset location
        this.lastX = this.x;
        this.lastY = this.y;

        // If not init (ie. not first run), send to furthest Z, otherwise randomize
        this.z = !init ? this.getInitialZ() : Math.random() * this.getInitialZ();
    }

}
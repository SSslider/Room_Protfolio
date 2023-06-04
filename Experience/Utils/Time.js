import { EventEmitter } from "events";

export default class Time extends EventEmitter {
    constructor() {
        super();
        this.start = Date.now();
        this.current = this.start;  
        this.elapsed = 0;   // the time since we start the experience
        this.delta = 16;    // time between each frame

        this.update();
    }

    update() {
        const currrentTime = Date.now()
        this.delta = currrentTime - this.current;
        this.current = currrentTime;
        this.elapsed = this.current - this.start;

        // console.log(this.delta)
        this.emit("update");
        // window.requestAnimationFrame(this.update.bind(this));
        window.requestAnimationFrame(() => this.update());
    }
  }
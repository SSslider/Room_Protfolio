import Experience from "../Experience.js";
import * as THREE from 'three';

import Room from "./Room.js";
import Environment from "./Evironment.js";
import Controls from "./Controls.js";
import Floor from "./Floor.js";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        // when all the resources are properly loaded, it will be rendered
        this.resources.on("ready", () => {
            this.environment = new Environment();
            this.room = new Room();
            this.floor = new Floor();
            this.controls = new Controls();
            // console.log("created room");
        })
    }

    resize() {}

    update() {
        if(this.room) {
            this.room.update();
        }
        if(this.controls) {
            this.controls.update();
        }
    }
}
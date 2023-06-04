import Experience from "../Experience.js";
import * as THREE from 'three';

export default class Environment {
    constructor() {
 
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
    

        this.setSunlight();
    }

    setSunlight() {
        this.sunLight = new THREE.DirectionalLight("#fff", 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(1024, 1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(-1.5, 7 ,3);
        this.scene.add(this.sunLight);
        // shadow helper
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);
        

        this.ambientLight = new THREE.AmbientLight("#fff", 1);
        this.scene.add(this.ambientLight);
    }

    resize() {}

    update() {}
}
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-interface',
  standalone: true,
  template: `
    <p>
      three-interface works!
    </p>
  `,
  styleUrls: ['./three-interface.component.css']
})
export class ThreeInterfaceComponent implements AfterViewInit {

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Access the nativeElement of the host element to get the DOM element
    const element = this.elementRef.nativeElement;
    element.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const axesHelper = new THREE.AxesHelper(2);
    this.scene.add(axesHelper);

    this.camera.position.set(0, 2, 5);

    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    this.scene.add(box);

    function animate() {
      box.rotation.x += 0,5;
      box.rotation.y += 0,5;
      requestAnimationFrame(animate);
    }

    this.renderer.render(this.scene, this.camera);

    this.renderer.setAnimationLoop(animate);
}
}

import { Component } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap'; 
import * as TWEEN from '@tweenjs/tween.js';

@Component({
  selector: 'app-new-three',
  templateUrl: './new-three.component.html',
  styleUrls: ['./new-three.component.css']
})
export class NewThreeComponent {

  constructor() { }

  ngAfterViewInit(): void {

    //Scene
    const scene = new THREE.Scene();

    //Create Torus
    const geometry = new THREE.TorusGeometry( 2.5, 1, 16, 100, Math.PI * 2 );
    const material = new THREE.MeshStandardMaterial({
      color: 0x6da1c9,
      metalness: 0.8,
      roughness: 0.4,
      wireframe: true // Set wireframe to true
    });
    const mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.x = Math.PI / 2;
    scene.add( mesh );

    //Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    //Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100);
    camera.position.z = 20;
    scene.add(camera);

    //Light
    const light = new THREE.PointLight(0xfffffff, 1, 100);
    light.position.set(0, 10, 10);
    scene.add(light);

    //Renderer
    const canvas = document.querySelector('.webgl') as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize( sizes.width, sizes.height );
    renderer.setPixelRatio(2);
    renderer.render(scene, camera);

    //Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate= true;
    controls.autoRotateSpeed = 5;

    //Resize
    window.addEventListener('resize', ()=> {
      //Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      //Update camera
      camera.aspect = sizes.width/sizes.height
      camera.updateProjectionMatrix()
      renderer.setSize(sizes.width, sizes.height)
    })

    //Render loop
    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    }
    loop();

    //Timeline Animation
    const tl = gsap.timeline({defaults: {duration: 1} });
    tl.fromTo(mesh.scale, {z:0, x:0, y:0}, {z: 1, x: 1, y: 1})
    tl.fromTo('nav', {y: '-100%'} , {y: '0%'})
    tl.fromTo('#login', {opacity: 0}, {opacity: 1} )
    tl.fromTo('#signup', {opacity: 0}, {opacity: 1} )
    tl.fromTo('#entrar', {opacity: 0}, {opacity: 1} )
    tl.fromTo('.title', {opacity: 0}, {opacity: 1} )

//Mouse Animation Color
let mouseDown = false;
let rgb = [];
window.addEventListener('mousedown', () => (mouseDown = true))
window.addEventListener('mouseup ', () => (mouseDown = false))

window.addEventListener('mousemove', (e) => {
  if(mouseDown){
    rgb = [
      Math.round((e.pageX / sizes.width)* 255), 
      Math.round((e.pageY / sizes.height)* 255), 
      150,
    ]

    //Lets animate
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
    gsap.to(mesh.material.color, {r:newColor.r, g:newColor.g, b:newColor.b})
  }
})

/*function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill(null)
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill(null).forEach(addStar);*/

const button = document.getElementById('login');
const buttonSign = document.getElementById('signup');
const buttonEnt = document.getElementById('entrar');
const lines: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[] = []; // an array to store all of the line meshes

function addBlueLines() {
  console.log("algo",button)
  const geometry = new THREE.PlaneGeometry(0.1, 30, 1, 10);
  const material = new THREE.MeshBasicMaterial({
    color: 0x85b1d2,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
  });
  const line = new THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>(geometry, material);
  lines.push(line);

  const [x, y, z] = Array(3)
    .fill(null)
    .map(() => THREE.MathUtils.randFloatSpread(100));

  line.position.set(x, y, z);
  line.rotation.set(
    THREE.MathUtils.randFloatSpread(2 * Math.PI),
    THREE.MathUtils.randFloatSpread(2 * Math.PI),
    THREE.MathUtils.randFloatSpread(2 * Math.PI)
  );

  // Scale the line randomly to create a flickering effect
  const scale = THREE.MathUtils.randFloat(1, 3);
  line.scale.set(scale, scale, scale);

  scene.add(line);

  // Animate the line to fade out and remove from the scene
  const duration = THREE.MathUtils.randFloat(1, 3);
  const delay = THREE.MathUtils.randFloat(0, 2);
  const targetOpacity = 0;
  const targetScale = new THREE.Vector3(0, 0, 0);
  const tween = new TWEEN.Tween({
    opacity: 1,
    scale: line.scale.clone(),
  })
    .to({ opacity: targetOpacity, scale: targetScale }, duration * 1000)
    .delay(delay * 1000)
    .onUpdate((obj) => {
      line.material.opacity = obj.opacity;
      line.scale.copy(obj.scale);
    })
    .onComplete(() => {
      scene.remove(line);
    })
    .start();

  if (button) {
    button.addEventListener('mouseover', () => {
      lines.forEach((line) => {
        gsap.to(line.material.color, { r: 1, g: 0, b: 0 });
      });
    });

    button.addEventListener('mouseout', () => {
      lines.forEach((line) => {
        gsap.to(line.material.color, { r: 0.522, g: 0.694, b: 0.823 });
      });
    });
  }

  if (buttonSign) {
    buttonSign.addEventListener('mouseover', () => {
      lines.forEach((line) => {
        gsap.to(line.material.color, { r: 0, g: 1, b: 0  });
      });
    });

    buttonSign.addEventListener('mouseout', () => {
      lines.forEach((line) => {
        gsap.to(line.material.color, { r: 0.522, g: 0.694, b: 0.823 });
      });
    });
  }

  if (buttonEnt) {
    buttonEnt.addEventListener('mouseover', () => {
      lines.forEach((line) => {
        gsap.to(line.material.color, { r: 0, g: 0, b: 1 });
      });
    });

    buttonEnt.addEventListener('mouseout', () => {
      lines.forEach((line) => {
        gsap.to(line.material.color, { r: 0.522, g: 0.694, b: 0.823 });
      });
    });
  }
}

  // Create 200 blue lines
Array(200).fill(lines).forEach(addBlueLines);
}
}

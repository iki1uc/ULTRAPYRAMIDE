// NC² AUTO‑REPAIR 3D VISUALIZER – AR‑3D‑1.0

import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js";

let scene, camera, renderer;

// INIT 3D
function init3D(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 2, 8);

  renderer = new THREE.WebGLRenderer({ antialias:true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5,5,5);
  scene.add(light);
}

// SPHERE
function addSphere(color, x, y, z){
  const geo = new THREE.SphereGeometry(0.3, 32, 32);
  const mat = new THREE.MeshStandardMaterial({ color });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  scene.add(mesh);
}

// VISUALIZE
export function NC2_Repair3D(ARE){
  init3D();

  let y = 0;

  // OK MODULES – GREEN
  ARE.loaded.forEach((m,i)=>{
    addSphere(0x00ff00, -3 + (i % 6), y, 0);
    if(i % 6 === 5) y -= 1;
  });

  // REPAIRED MODULES – YELLOW
  ARE.repaired.forEach((m,i)=>{
    addSphere(0xffff00, 3 - (i % 6), y, 0);
    if(i % 6 === 5) y -= 1;
  });

  // MISSING MODULES – RED
  ARE.missing.forEach((m,i)=>{
    addSphere(0xff0000, 0 + (i % 6), y, 0);
    if(i % 6 === 5) y -= 1;
  });

  animate();
}

// ANIMATE
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

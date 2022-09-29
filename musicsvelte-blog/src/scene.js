import * as THREE from 'three';
import { Color } from 'three';

const scene = new THREE.Scene(); 
scene.background = new Color('#3a424c')

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Texture Loader
const vinylTexture = new THREE.TextureLoader().load('../public/images/vinyl-02.png');

// Objects
const geometry = new THREE.RingGeometry(.17, 1.7, 50, 25);
const particlesGeometry = new THREE.BufferGeometry;
const particleCount = 12000;

const posArray = new Float32Array(particleCount * 3);

for(let i = 0; i < particleCount * 3; i++) {
    // posArray[i] = Math.random();
    posArray[i] = (Math.random() - 0.5) * 14;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

//---------- Materials ----------//
const material = new THREE.MeshBasicMaterial({
    map: vinylTexture,
});

const particleMaterial = new THREE.PointsMaterial({
    size: .0055,
    color: 0xffffff
});
//----------------------------------//


// Mesh
const ring = new THREE.Mesh(geometry, material);
const particleMesh = new THREE.Points(particlesGeometry, particleMaterial);

//---------- Lights ----------// 

const light = new THREE.AmbientLight( 0xfff ); // soft white light
scene.add( light );


let renderer;
scene.add(particleMesh, ring);
camera.position.z = 5;

//---------------------------------------------------------//

document.addEventListener('mousemove', onDocumentMouseMove);

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function onDocumentMouseMove(e) {
    mouseX = (e.clientX - windowHalfX);
    mouseY = (e.clientY - windowHalfY);
}

const clock = new THREE.Clock()

const animate = () => {
    requestAnimationFrame(animate);
    
    targetX = mouseX * .001;
    targetY = mouseY * .001;

    const elapsedTime = clock.getElapsedTime()

        // Update objects
    ring.rotation.z = .5 * elapsedTime;
    particleMesh.rotation.y = -.1 * elapsedTime;

    if(mouseX > 0) {
        particleMesh.rotation.y = mouseY * (elapsedTime * 0.00007);
        particleMesh.rotation.x = mouseX * (elapsedTime * 0.00007);
    }

    if(mouseX < 0) {
        particleMesh.rotation.y = mouseY * (elapsedTime * 0.00007);
        particleMesh.rotation.x = mouseX * (elapsedTime * 0.00007);
    }

    ring.rotation.x += .2 * (targetY - ring.rotation.x);
    ring.position.z += -.2 * (targetY - ring.rotation.x);

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)
};

const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};

export const createScene = (el) => {
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
    resize();
    animate();
}

window.addEventListener('resize', resize);
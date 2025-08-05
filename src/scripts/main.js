// import * as THREE from 'three';
import * as THREE from 'three';
// console.log('Current directory: ' + process.cwd());
// console.log(__dirname)
// console.log(__filename)

import {OrbitControls} from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "../../node_modules/postprocessing";
// import { WebGLRenderer } from "three";
const canvas = document.querySelector( '#container' );

const loader = new GLTFLoader();

// const renderer = new THREE.WebGLRenderer({ 
// 	powerPreference: "high-performance",
// 	antialias: false,
// 	stencil: false,
// 	depth: false
// } );
const renderer = new THREE.WebGLRenderer({
	antialias: false,
	powerPreference: "high-performance",
	alpha: true,
	stencil: false,
	canvas: container
})
renderer.setPixelRatio( 5);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.gammaFactor = 2.2;
renderer.gammaOutput = true;
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}


// renderer.setSize( canvas.innerWidth, canvas.innerHeight );
// function resizeRendererToDisplaySize(renderer) {
// 	const canvas = renderer.domElement;
// 	const pixelRatio = window.devicePixelRatio;
// 	const width  = Math.floor( canvas.clientWidth );
// 	const height = Math.floor( canvas.clientHeight);
// 	if (canvas.width !== width ||canvas.height !== height) {
// 		renderer.setSize(width, height, false);
// 		camera.aspect = width / height;
// 		camera.updateProjectionMatrix();
// 	  }
//   }



// -------------------------------------------resize
// window.addEventListener( 'resize', onWindowResize, false );

// const stl = getComputedStyle(canvas);
// const [w, h] = [parseInt(stl.width), parseInt(stl.height)];
// renderer.setSize(w, h, false);
// renderer.setPixelRatio( window.devicePixelRatio );

// container = document.getElementById('container');
// renderer.setSize( canvas.width, canvas.height);
// canvas.appendChild(renderer.domElement);
// const container = document.getElementById('container');
// container.appendChild(renderer.domElement);
// resizeRendererToDisplaySize()
// renderer.setAnimationLoop( animate );
// document.body.appendChild( renderer.domElement );


// --------------------camera------------------------------
const fov = 50;
const aspect = 2; // the canvas default
const near = 0.1;
const far = 30;
const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const controls = new OrbitControls( camera, renderer.domElement );
camera.position.z = 6;
// camera.position.y = 1;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x3e414f);
// --------------------resize windows------------------------------
// function onWindowResize(){

//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize( window.innerWidth, window.innerHeight );

// }
// onWindowResize( window.innerWidth, window.innerHeight );
// --------------------composer------------------------------
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
//composer.addPass(new EffectPass(camera, new BloomEffect()));



// --------------------light not working------------------------------

	const color = 0xFFFFFF;
	const intensity = 0;
	const light = new THREE.DirectionalLight( color, intensity );
	light.position.set( - 1, 2, 4 );
	scene.add( light );

// --------------------geo------------------------------
// ---------------------- change material -------------
// const material = new THREE.MeshToonMaterial();
const material =  THREE.MeshLambertMaterial;
// gltfLoader = (gltf) => {
//   const model = gltf.scene;
//   model.traverse((o) => {
//     if (o.isMesh) o.material = material;
//   });
// }
loader.load( '/predator/chr2goomerged3.glb', function ( gltf ) {
  const model = gltf.scene;

//   gltf.scene.traverse((o) => {
//      if (o.material && o.material.map) {
//         console.log(o.name);
//         o.material.map.encoding = 3001; linear encoding
//      }
//   });
  scene.add( model );
}, undefined, function ( error ) {

  console.error( error );

} );



//const ambientLight = new THREE.AmbientLight(0xffffff, 3);

// const geometry = new THREE.BoxGeometry( boxWidth, boxHeight, boxDepth );

// const boxWidth = 1;
// const boxHeight = 1;
// const boxDepth = 1;

// function makeInstance( geometry, color, x ) {

// 	const material = new THREE.MeshPhongMaterial( { color } );

// 	const cube = new THREE.Mesh( geometry, material );
// 	scene.add( cube );

// 	cube.position.x = x;

// 	return cube;

// }
// --------------------material------------------------------
// const loader = new THREE.TextureLoader();

// var textureLoader = new THREE.TextureLoader();
// textureLoader.crossOrigin = true;

// const texture = textureLoader.load('/predator/images.png',
//   function(texture) {
//     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//     texture.repeat.set( 2, 2 );
//     var material = new THREE.MeshLambertMaterial( {map: texture} );
//   }
// );
// texture.colorSpace = THREE.SRGBColorSpace;
// const material = new THREE.MeshPhongMaterial({
// color: 0xFF8844,
// map: texture,
// });


// const material = new THREE.MeshPhongMaterial( { color } );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// const cubes = [
// 	makeInstance( geometry, 0x44aa88, 0 ),
// 	makeInstance( geometry, 0x8844aa, - 2 ),
// 	makeInstance( geometry, 0xaa8844, 2 ),
// ];

// camera.position.z = 5;
// renderer.render( scene, camera );
function render( time ) {

	time *= 0.001; // convert time to seconds

	// const canvas = renderer.domElement;
	// camera.aspect = canvas.clientWidth / canvas.clientHeight;
	// camera.updateProjectionMatrix();

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

	// cubes.forEach( ( cube, ndx ) => {

	// 	const speed = 1 + ndx * .1;
	// 	const rot = time * speed;
	// 	cube.rotation.x = rot;
	// 	cube.rotation.y = rot;

	// } );

	renderer.render( scene, camera );

	requestAnimationFrame( function render() {

		requestAnimationFrame(render);
		composer.render();
	
	});
}

requestAnimationFrame( render );

// function animate() {

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render( scene, camera );		
// }
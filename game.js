//import * from "https://cdnjs.cloudflare.com/ajax/libs/three.js/102/three.js";
//import * from "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js";


var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
	75, //field of view
	window.innerWidth/window.innerHeight,  //aspect ratio
	0.1, //near plane
	1000 //far plane
)
camera.position.z = 5;


var renderer = new THREE.WebGLRenderer({antialias: true/*result will lookm jagged otherwise*/});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize',()=> {
	renderer.setSize(window.innerWidth,window.innerHeight);
	camera.aspect = window.innerWidth/window.innerHeight;
	
	camera.updateProjectionMatrix();
	
})


var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

//load objects from blender with gtf
var loader = new THREE.GLTFLoader();

loader.load(
	// resource URL
	"testBox2.glb",
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
		console.log(gltf.scene);

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {
		console.log(" a loading error has occured: ");
		console.log( error );

	}
);


var geometry = new THREE.SphereGeometry(1,10,10);
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
var mesh = new THREE.Mesh(geometry,material);

var geometry2 = new THREE.BoxGeometry(1,1,1);

/*var material2 = new THREE.MeshLambertMaterial({color: 0xFFCC00});*/

var material2 = new THREE.MeshStandardMaterial({color: 0xFF0000});
material2.uuid = "C9902A8A-6A7D-4A4A-9F7F-FA6B0DCC851C";
//material2.type = "MeshStandardMaterial";
material2.name = "material2";
//material2.color = decToHex(16711680, true);

material2.roughness = 0.4000000059604645;
material2.metalness = 0;
material2.emissive = 0;
material2.side = 2;
material2.depthFunc = 3;
material2.depthTest = true;
material2.depthWrite = true;

//material2 = {"uuid":"C9902A8A-6A7D-4A4A-9F7F-FA6B0DCC851C","type":"MeshStandardMaterial","name":"material2","color":16711680,"roughness":0.4000000059604645,"metalness":0,"emissive":0,"side":2,"depthFunc":3,"depthTest":true,"depthWrite":true};
var mesh2 = new THREE.Mesh(geometry2,material2);

/*
var mesh4 = new THREE.Object3D();
mesh4.metadata = 
*/

var mesh3 = new THREE.Object3D({"metadata":{"version":4.5,"type":"Object","generator":"Object3D.toJSON"},"geometries":[{"uuid":"8535E467-5DA4-4136-8B7B-C32ADA99F9C9","type":"BufferGeometry","data":{"attributes":{"position":{"itemSize":3,"type":"Float32Array","array":[-1,1,1,1,1,-1,-1,1,-1,1,1,1,1,1,1,-1,-1,1,1,-1,1,-1,1,1,-1,1,1,-1,-1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,1,1,1,-1,1,-1,1,1,-1,-1,1,1,1,-1,1,-1,1,-1,-1,-1,-1,-1,1,1,-1],"normalized":false},"normal":{"itemSize":3,"type":"Float32Array","array":[0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1],"normalized":false},"uv":{"itemSize":2,"type":"Float32Array","array":[0.625,0.75,0.375,1,0.625,1,0.375,0.75,0.625,0.75,0.375,0.5,0.375,0.75,0.625,0.5,0.625,0.5,0.375,0.25,0.375,0.5,0.625,0.25,0.625,0,0.375,0.25,0.625,0.25,0.375,0,0.375,0.5,0.125,0.25,0.125,0.5,0.375,0.25,0.875,0.5,0.625,0.25,0.625,0.5,0.875,0.25],"normalized":false}},"index":{"type":"Uint16Array","array":[0,1,2,0,3,1,4,5,6,4,7,5,8,9,10,8,11,9,12,13,14,12,15,13,16,17,18,16,19,17,20,21,22,20,23,21]},"boundingSphere":{"center":[0,0,0],"radius":1.7320508075688772}}}],"materials":[{"uuid":"C9902A8A-6A7D-4A4A-9F7F-FA6B0DCC851C","type":"MeshStandardMaterial","name":"Material","color":16711680,"roughness":0.4000000059604645,"metalness":0,"emissive":0,"side":2,"depthFunc":3,"depthTest":true,"depthWrite":true}],"object":{"uuid":"BD5B713D-780E-42B2-A9EE-D4B3E30A3892","type":"Mesh","name":"Cube","layers":1,"matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],"geometry":"8535E467-5DA4-4136-8B7B-C32ADA99F9C9","material":"C9902A8A-6A7D-4A4A-9F7F-FA6B0DCC851C"}});
//mesh3 =  {"metadata":{"version":4.5,"type":"Object","generator":"Object3D.toJSON"},"geometries":[{"uuid":"8535E467-5DA4-4136-8B7B-C32ADA99F9C9","type":"BufferGeometry","data":{"attributes":{"position":{"itemSize":3,"type":"Float32Array","array":[-1,1,1,1,1,-1,-1,1,-1,1,1,1,1,1,1,-1,-1,1,1,-1,1,-1,1,1,-1,1,1,-1,-1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,1,1,1,-1,1,-1,1,1,-1,-1,1,1,1,-1,1,-1,1,-1,-1,-1,-1,-1,1,1,-1],"normalized":false},"normal":{"itemSize":3,"type":"Float32Array","array":[0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1],"normalized":false},"uv":{"itemSize":2,"type":"Float32Array","array":[0.625,0.75,0.375,1,0.625,1,0.375,0.75,0.625,0.75,0.375,0.5,0.375,0.75,0.625,0.5,0.625,0.5,0.375,0.25,0.375,0.5,0.625,0.25,0.625,0,0.375,0.25,0.625,0.25,0.375,0,0.375,0.5,0.125,0.25,0.125,0.5,0.375,0.25,0.875,0.5,0.625,0.25,0.625,0.5,0.875,0.25],"normalized":false}},"index":{"type":"Uint16Array","array":[0,1,2,0,3,1,4,5,6,4,7,5,8,9,10,8,11,9,12,13,14,12,15,13,16,17,18,16,19,17,20,21,22,20,23,21]},"boundingSphere":{"center":[0,0,0],"radius":1.7320508075688772}}}],"materials":[{"uuid":"C9902A8A-6A7D-4A4A-9F7F-FA6B0DCC851C","type":"MeshStandardMaterial","name":"Material","color":16711680,"roughness":0.4000000059604645,"metalness":0,"emissive":0,"side":2,"depthFunc":3,"depthTest":true,"depthWrite":true}],"object":{"uuid":"BD5B713D-780E-42B2-A9EE-D4B3E30A3892","type":"Mesh","name":"Cube","layers":1,"matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],"geometry":"8535E467-5DA4-4136-8B7B-C32ADA99F9C9","material":"C9902A8A-6A7D-4A4A-9F7F-FA6B0DCC851C","isObject3D":true}};
console.log(JSON.stringify(mesh3));
console.log(JSON.stringify(mesh2));
mesh2.position.set(2,2,-1);
mesh2.rotation.set(45,0,0);
mesh2.scale.set(1,2,1);

scene.add(mesh);
scene.add(mesh2);
scene.add(mesh3);

var light = new THREE.PointLight(0xFFFFFF,1,500);
light.position.set(10,0,25);
scene.add(light);

var render = function(){
	mesh.rotation.x += 0.05;

	requestAnimationFrame(render);
	renderer.render(scene,camera);
}

function onMouseMove(event)
{
	event.preventDefault();
	
	mouse.x = (event.clientX / window.innerWidth ) * 2 -1;
	mouse.y = - (event.clientY / window.innerHeight ) * 2 + 1;
	
	raycaster.setFromCamera(mouse,camera);
	
	var intersects = raycaster.intersectObjects(scene.children, true);
	for (var i = 0; i < intersects.length;i++)
	{
		intersects[i].object.material.color.set(0xff0000)
		this.t0 = new TimelineMax({paused: false}).delay(.3);
		this.t0.to(intersects[i].object.scale,1,{x:2,ease: Expo.easeOut})
		this.t0.to(intersects[i].object.scale,0.5,{x:0.5,ease: Expo.easeOut})
		this.t0.to(intersects[i].object.position,1,{x:3,ease: Expo.easeOut})
		this.t0.to(intersects[i].object.rotation,0.5,{y:Math.PI*.5,ease: Expo.easeOut}, "=-1.5")
	}
}

render();

//animation timeline from green sock

this.t1 = new TimelineMax({paused: true}).delay(.3);
this.t1.to(this.mesh2.scale,1,{x:2,ease: Expo.easeOut})
this.t1.to(this.mesh2.scale,0.5,{x:0.5,ease: Expo.easeOut})
this.t1.to(this.mesh2.position,1,{x:3,ease: Expo.easeOut})
this.t1.to(this.mesh2.rotation,0.5,{y:Math.PI*.5,ease: Expo.easeOut}, "=-1.5")

document.body.addEventListener('click',()=>{
	this.t1.play();
})

window.addEventListener('mousemove', onMouseMove);


//random functions
function decToHex(integral, _0x = false)
{
	_6thPlace = '';
	_5thPlace = '';
	_4thPlace = '';
	_3rdPlace = '';
	_2ndPlace = '';
	_1stPlace = '';
	_6th = (integral - integral%16)/16;
	_6thRem = integral%16;
	//console.log("6th = " + _6th + ", rem = " + _6threm);
	_5th = (_6th - _6th%16)/16;
	_5thRem = _6th%16;
	//console.log("5th = " + _5th + ", rem = " + _5threm);
	_4th = (_5th - _5th%16)/16;
	_4thRem = _5th%16;
	_3rd = (_4th - _4th%16)/16;
	_3rdRem = _4th%16;
	_2nd = (_3rd - _3rd%16)/16;
	_2ndRem = _3rd%16;
	_1st = (_2nd - _2nd%16)/16;
	_1stRem = _2nd%16;
	if(_6thRem < 10){_6thPlace = _6thRem.toString()}
	else{ _6thPlace = String.fromCharCode(_6thRem + 87)};
	if(_5thRem < 10){_5thPlace = _5thRem.toString()}
	else{ _5thPlace = String.fromCharCode(_5thRem + 87)};
	if(_4thRem < 10){_4thPlace = _4thRem.toString()}
	else{ _4thPlace = String.fromCharCode(_4thRem + 87)};
	if(_3rdRem < 10){_3rdPlace = _3rdRem.toString()}
	else{ _3rdPlace = String.fromCharCode(_3rdRem + 87)};
	if(_2ndRem < 10){_2ndPlace = _2ndRem.toString()}
	else{ _2ndPlace = String.fromCharCode(_2ndRem + 87)};
	if(_1stRem < 10){_1stPlace = _1stRem.toString()}
	else{ _1stPlace = String.fromCharCode(_1stRem + 87)};
	
	if(_0x === true)
	{return ("0x" + _1stPlace + _2ndPlace + _3rdPlace + _4thPlace + _5thPlace + _6thPlace)}
	else{
	return (_1stPlace + _2ndPlace + _3rdPlace + _4thPlace + _5thPlace + _6thPlace)
	};
}
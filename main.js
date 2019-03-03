//http://binteractive.org/?p=260

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 2000 );
camera.position.z = 1000;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.Color( 0xff0000 );
scene.fog = new THREE.Fog( 0xff0000, 1, 2000 );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.35 );

directionalLight.position.x = Math.random() - 0.5;
directionalLight.position.y = Math.random() - 0.5;
directionalLight.position.z = Math.random() - 0.5;

directionalLight.position.normalize();

scene.add( directionalLight );

var ambient = new THREE.AmbientLight( 0x101010 );
scene.add( ambient );

var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );

var group = new THREE.Object3D();

for ( var i = 0; i < 500; i++ ) {
	var _cubesize = Math.random() * 100 + 10;
	var geometry = new THREE.BoxGeometry(_cubesize,_cubesize,_cubesize);
	
	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.x = Math.random() * 1000 - 500;
	mesh.position.y = Math.random() * 1000 - 500;
	mesh.position.z = Math.random() * 1000 - 500;
	
	mesh.rotation.x = Math.random() * 2 * Math.PI;
	mesh.rotation.y = Math.random() * 2 * Math.PI;
	
	group.add( mesh );
}

scene.add( group );

var animate = function() {
	requestAnimationFrame( animate );
	group.rotation.x += 0.003;
	group.rotation.y += 0.002;
	group.rotation.z += 0.001;
	renderer.render(scene, camera);
}
animate();
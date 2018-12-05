let canvas
let scene
let camera
let cube
let renderer

function setup(){
  canvas = createCanvas(80, 20, WEBGL)

  scene = new THREE.Scene()



  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 1000)
  //camera.position.z = (window.innerWidth/ window.innerHeight)



  let geometry = new THREE.BoxGeometry(80, 20, 80)
  let material = new THREE.MeshNormalMaterial( { side: 2} )
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  document.addEventListener('keypress', onDocumentKeyPress, false)
}

function draw(){
  background(0)
  renderer.render(scene,camera)
}

function onDocumentKeyPress(){
  let keyCode=event.which
  let positionU=1.6
  let rotationU=0.2

  //a
    if (keyCode==97) {
      camera.position.x -= positionU
    }
  //d
    else if (keyCode==100){
      camera.position.x += positionU
    }
  //w
    else if (keyCode==119){
      camera.position.z -= positionU
    }
  //s
    else if (keyCode==115){
      camera.position.z += positionU
    }
  //q
    else if (keyCode==113){
      camera.position.y += positionU
    }
  //e
    else if (keyCode==101){
      camera.position.y -= positionU
    }
  // //t
  // 	else if (keyCode==116){
  // 		camera.rotation.x += rotationU
  // 	}
  // //g
  // 	else if (keyCode==103){
  // 		camera.rotation.x -= rotationU
  //	}
  //f
    else if (keyCode==102){
      camera.rotation.y += rotationU
    }
  //h
    else if (keyCode==104){
      camera.rotation.y -= rotationU
    }

}

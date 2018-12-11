let canvas
let scene
let camera
let cube
let renderer

function setup(){
  canvas = createCanvas(400, 100, WEBGL)

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 1000)
  //camera.position.z = (window.innerWidth/ window.innerHeight)


  let geometry = new THREE.BoxGeometry(80, 20, 80)
  let material = new THREE.MeshBasicMaterial({
    map: new THREE.CanvasTexture(canvas.elt)
  })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  document.addEventListener('keypress', onDocumentKeyPress, false)
}

function draw(){
  background(0)
  TWEEN.update()
  renderer.render(scene,camera)
}

function onDocumentKeyPress(){
  let keyCode=event.which
  let positionU=1.6
  let rotationU=0.2

  //a
    if (keyCode==97) {
      camera.position.x -= positionU
        new TWEEN.Tween(camera.position)
        .to({x: camera.position.x-0.2}, 1000)
        .start()
    }

  //d
    else if (keyCode==100){
      camera.position.x += positionU
        new TWEEN.Tween(camera.position)
        .to({x: camera.position.x+0.2}, 1000)
        .start()
    }

  //w
    else if (keyCode==119){
      camera.position.z -= positionU
        new TWEEN.Tween(camera.position)
        .to({z: camera.position.z-0.2}, 1000)
        .start()
    }

  //s
    else if (keyCode==115){
      camera.position.z += positionU
        new TWEEN.Tween(camera.position)
        .to({z: camera.position.z+0.2}, 1000)
        .start()
    }

  //e
    else if (keyCode==101){
      camera.position.y -= positionU
        new TWEEN.Tween(camera.position)
        .to({y: camera.position.y-0.2}, 1000)
        .start()
    }

  //q
    else if (keyCode==113){
      camera.position.y += positionU
        new TWEEN.Tween(camera.position)
        .to({y: camera.position.y+0.2}, 1000)
        .start()
      }

  //f
    else if (keyCode==102){
      camera.rotation.y += rotationU
        new TWEEN.Tween(camera.rotation)
        .to({y: camera.rotation.y+0.2}, 1000)
        .start()
    }

  //h
    else if (keyCode==104){
      camera.rotation.y -= rotationU
        new TWEEN.Tween(camera.rotation)
        .to({y: camera.rotation.y-0.2}, 1000)
        .start()
    }

}

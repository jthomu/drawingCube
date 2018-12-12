let canvas
let scene
let camera
let cube
let renderer
let material

let drawingCanvas = document.getElementById('drawing-canvas')
let drawingContext = drawingCanvas.getContext('2d')
let drawStartPos = new THREE.Vector2()

function setup(){
  canvas = createCanvas(80, 20, WEBGL)

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 1000)
  //camera.position.z = (window.innerWidth/ window.innerHeight)

  let geometry = new THREE.BoxGeometry(80, 20, 80)
  material = new THREE.MeshBasicMaterial({ side: 2})
  material.map = new THREE.CanvasTexture(drawingCanvas)
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)


  let paint = false

  drawingCanvas.addEventListener( 'mousedown', function( e ) {
    paint = true;
    drawStartPos.set( e.offsetX, e.offsetY )
  } )
  drawingCanvas.addEventListener( 'mousemove', function( e ) {
    if( paint ) draw( drawingContext, e.offsetX, e.offsetY )
  } )
  drawingCanvas.addEventListener( 'mouseup', function( e ) {
    paint = false
  } )
  drawingCanvas.addEventListener( 'mouseleave', function( e ) {
    paint = false
  } )

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  document.addEventListener('keypress', onDocumentKeyPress, false)
}

function draw(drawContext, x, y){
//  background(0)
  TWEEN.update()


      drawingContext.fillStyle = '#FFFFFF'
      drawingContext.fillRect( 0, 0, 800, 200 )
      drawingContext.moveTo( drawStartPos.x, drawStartPos.y )
      drawingContext.strokeStyle = '#000000'
      drawingContext.lineTo( x-0.25, y )
      drawingContext.stroke()
      drawStartPos.set( x, y )

    material.map.needsUpdate = true

  renderer.render(scene,camera)
}

function onDocumentKeyPress(){
  let keyCode=event.which
  let positionU=0.5
  let rotationU=0.1

  //a
    if (keyCode==97) {
      camera.position.x -= positionU
        new TWEEN.Tween(camera.position)
        .to({x: camera.position.x-0.45}, 450)
        .start()
    }

  //d
    else if (keyCode==100){
      camera.position.x += positionU
        new TWEEN.Tween(camera.position)
        .to({x: camera.position.x+0.45}, 450)
        .start()
    }

  //w
    else if (keyCode==119){
      camera.position.z -= positionU
        new TWEEN.Tween(camera.position)
        .to({z: camera.position.z-0.45}, 450)
        .start()
    }

  //s
    else if (keyCode==115){
      camera.position.z += positionU
        new TWEEN.Tween(camera.position)
        .to({z: camera.position.z+0.45}, 450)
        .start()
    }

  //e
    else if (keyCode==101){
      camera.position.y -= positionU
        new TWEEN.Tween(camera.position)
        .to({y: camera.position.y-0.45}, 450)
        .start()
    }

  //q
    else if (keyCode==113){
      camera.position.y += positionU
        new TWEEN.Tween(camera.position)
        .to({y: camera.position.y+0.45}, 450)
        .start()
      }

  //f
    else if (keyCode==102){
      camera.rotation.y += rotationU
        new TWEEN.Tween(camera.rotation)
        .to({y: camera.rotation.y+0.45}, 450)
        .start()
    }

  //h
    else if (keyCode==104){
      camera.rotation.y -= rotationU
        new TWEEN.Tween(camera.rotation)
        .to({y: camera.rotation.y-0.45}, 450)
        .start()
    }



}

import * as THREE from 'three'

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

mesh.position.x = 1
mesh.position.y = -0.6
mesh.position.z = 1

mesh.position.set(0.7, -0.6, 1)
mesh.scale.set(2, 0.25, 0.5)
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

console.log(mesh.position.length())

const sizes = {
  width: 800,
  height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

camera.lookAt(mesh.position)
scene.add(camera)

console.log(mesh.position.distanceTo(camera.position))
const canvas = document.querySelector('canvas.webgl')

const axisHelper = new THREE.AxesHelper(2)
scene.add(axisHelper)


const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

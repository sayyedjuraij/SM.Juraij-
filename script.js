// 🔥 LOADER
window.addEventListener("load", () => {
  gsap.to("#loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
    }
  });
});

// 🔥 GSAP ANIMATIONS
gsap.from(".hero-content h1", {
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-content p", {
  y: 50,
  opacity: 0,
  delay: 0.3
});

// 🔥 THREE.JS BACKGROUND
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// 🔥 GEOMETRY
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xffd700 });

const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// 🔥 LIGHT
const light = new THREE.PointLight(0xffffff);
light.position.set(5,5,5);
scene.add(light);

// 🔥 ANIMATION LOOP
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

// 🔥 MOUSE FOLLOW
document.addEventListener("mousemove", (e) => {
  gsap.to(".hero-content", {
    x: e.clientX * 0.02,
    y: e.clientY * 0.02
  });
});

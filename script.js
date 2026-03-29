// LOADER
window.onload = () => {
gsap.to("#loader",{opacity:0,duration:1,onComplete:()=>{document.getElementById("loader").style.display="none";}});
};

// CURSOR
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

// MAGNETIC BUTTON
document.querySelectorAll(".magnetic").forEach(btn=>{
btn.addEventListener("mousemove",(e)=>{
const rect=btn.getBoundingClientRect();
const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;
gsap.to(btn,{x:x*0.3,y:y*0.3});
});
btn.addEventListener("mouseleave",()=>{
gsap.to(btn,{x:0,y:0});
});
});

// SCROLL ANIMATION
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".section").forEach(sec=>{
gsap.from(sec,{opacity:0,y:100,duration:1,scrollTrigger:{trigger:sec,start:"top 80%"}});
});

// THREE JS PARTICLES
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({canvas:document.querySelector("#bg")});
renderer.setSize(window.innerWidth,window.innerHeight);

const particlesGeometry=new THREE.BufferGeometry();
const particlesCount=2000;
const posArray=new Float32Array(particlesCount*3);

for(let i=0;i<particlesCount*3;i++){
posArray[i]=(Math.random()-0.5)*10;
}

particlesGeometry.setAttribute('position',new THREE.BufferAttribute(posArray,3));

const particlesMaterial=new THREE.PointsMaterial({size:0.02,color:0xffd700});
const particlesMesh=new THREE.Points(particlesGeometry,particlesMaterial);
scene.add(particlesMesh);

camera.position.z=5;

function animate(){
requestAnimationFrame(animate);
particlesMesh.rotation.y+=0.0005;
renderer.render(scene,camera);
}
animate();

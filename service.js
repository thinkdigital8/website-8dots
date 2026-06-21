/* ============================================================
   service.js — shared JS for all service / sub-service pages
   ============================================================ */

/* ---------- Navbar scroll ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

/* ---------- Hamburger ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ---------- Scroll reveal ---------- */
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 }).observe(el);
});

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ============================================================
   THREE.JS — Service hero scene
   ============================================================ */
const THREE = window.THREE;

function resizeRenderer(renderer, canvas) {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if (canvas.width !== w || canvas.height !== h) { renderer.setSize(w, h, false); return true; }
  return false;
}

/* ---- Hero Canvas ---- */
(function svcHeroScene() {
  const canvas = document.getElementById('svcCanvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 2, 0.1, 300);
  camera.position.z = 22;

  /* Particles */
  const N = 2500;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i*3]   = (Math.random()-0.5)*80;
    pos[i*3+1] = (Math.random()-0.5)*50;
    pos[i*3+2] = (Math.random()-0.5)*40;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({
    color: 0xffffff, size: 0.09, transparent: true, opacity: 0.3, sizeAttenuation: true,
  })));

  /* Wireframe shapes */
  const shapes = [
    new THREE.IcosahedronGeometry(1.5, 1),
    new THREE.OctahedronGeometry(1.3, 0),
    new THREE.TorusGeometry(1.0, 0.35, 12, 24),
    new THREE.BoxGeometry(1.4, 1.4, 1.4),
    new THREE.TetrahedronGeometry(1.4, 0),
    new THREE.DodecahedronGeometry(1.2, 0),
  ];
  const wireMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.15 });

  const meshes = [];
  for (let i = 0; i < 10; i++) {
    const m = new THREE.Mesh(shapes[i % shapes.length], wireMat.clone());
    m.position.set((Math.random()-0.5)*55, (Math.random()-0.5)*32, (Math.random()-0.5)*15-5);
    m.scale.setScalar(0.5 + Math.random()*1.0);
    m.userData = {
      rx: (Math.random()-0.5)*0.009,
      ry: (Math.random()-0.5)*0.013,
      fs: 0.3+Math.random()*0.5,
      fa: 0.3+Math.random()*0.6,
      iy: m.position.y,
    };
    scene.add(m); meshes.push(m);
  }

  /* Centre accent geometry */
  const accent = new THREE.Mesh(
    new THREE.TorusKnotGeometry(2.5, 0.7, 160, 16, 2, 3),
    new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.7, roughness: 0.15, transparent: true, opacity: 0.6 })
  );
  accent.position.set(18, 0, -5);
  scene.add(accent);

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const dl = new THREE.DirectionalLight(0xffffff, 2);
  dl.position.set(10, 10, 10); scene.add(dl);

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = (e.clientX/window.innerWidth - 0.5)*2;
    my = (e.clientY/window.innerHeight - 0.5)*2;
  });

  let t = 0;
  (function animate() {
    requestAnimationFrame(animate); t += 0.004;
    resizeRenderer(renderer, canvas);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    camera.position.x += (mx*3 - camera.position.x)*0.025;
    camera.position.y += (-my*2 - camera.position.y)*0.025;
    meshes.forEach(m => {
      m.rotation.x += m.userData.rx;
      m.rotation.y += m.userData.ry;
      m.position.y = m.userData.iy + Math.sin(t*m.userData.fs)*m.userData.fa;
    });
    accent.rotation.x = t*0.3;
    accent.rotation.y = t*0.5;
    renderer.render(scene, camera);
  })();
})();

/* ---- CTA Wave ---- */
(function ctaBandScene() {
  const canvas = document.getElementById('ctaBandCanvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xffffff, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 2, 0.1, 200);
  camera.position.set(0, 4, 16); camera.lookAt(0, 0, 0);

  const planeGeo = new THREE.PlaneGeometry(80, 80, 60, 60);
  const plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({
    color: 0x1a1a1a, wireframe: true, transparent: true, opacity: 0.15,
  }));
  plane.rotation.x = -Math.PI/2.5;
  scene.add(plane);

  const posArr = planeGeo.attributes.position.array;
  const origY  = new Float32Array(posArr.length/3);
  for (let i = 0; i < origY.length; i++) origY[i] = posArr[i*3+2];

  let t = 0;
  (function animate() {
    requestAnimationFrame(animate); t += 0.008;
    resizeRenderer(renderer, canvas);
    camera.aspect = canvas.clientWidth/canvas.clientHeight;
    camera.updateProjectionMatrix();
    for (let i = 0; i < origY.length; i++) {
      const x = posArr[i*3], z = posArr[i*3+1];
      posArr[i*3+2] = origY[i] + Math.sin(x*0.15+t)*1.5 + Math.cos(z*0.1+t*0.7)*1.2;
    }
    planeGeo.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  })();
})();

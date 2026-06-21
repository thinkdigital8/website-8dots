/* ============================================================
   8dots — main.js  |  Three.js (Black & White theme)
   ============================================================ */

/* ---------- Navbar ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

/* ---------- Hamburger ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ---------- Scroll reveal ---------- */
document.querySelectorAll('.service-card, .work-card, .testi-card, .feature-item, .contact-item, .section-header')
  .forEach(el => el.classList.add('reveal'));
new IntersectionObserver((entries, obs) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 }).observe
  ? document.querySelectorAll('.reveal').forEach(el =>
      new IntersectionObserver((entries, obs) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
      }, { threshold: 0.12 }).observe(el)
    )
  : document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

/* ---------- Counter ---------- */
function animateCounter(el) {
  const target = +el.dataset.target;
  let current = 0, step = target / (1800 / 16);
  const t = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(t);
  }, 16);
}
const heroStats = document.querySelector('.hero-stats');
if (heroStats) new IntersectionObserver((entries, obs) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.stat-num').forEach(animateCounter); obs.unobserve(e.target); }});
}, { threshold: 0.5 }).observe(heroStats);

/* ---------- Contact form ---------- */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.querySelector('span').textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('formSuccess').style.display = 'block';
    btn.querySelector('span').textContent = 'Send Message';
    btn.disabled = false;
    e.target.reset();
  }, 1500);
});

const THREE = window.THREE;
function resizeRenderer(renderer, canvas) {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if (canvas.width !== w || canvas.height !== h) { renderer.setSize(w, h, false); return true; }
  return false;
}

/* ==========================================================
   HERO — Black particle field + white wireframe geometry
   ========================================================== */
(function heroScene() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 2, 0.1, 1000);
  camera.position.z = 18;

  /* Particle cloud — pure white */
  const N = 3500;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i*3]   = (Math.random() - 0.5) * 70;
    pos[i*3+1] = (Math.random() - 0.5) * 45;
    pos[i*3+2] = (Math.random() - 0.5) * 35;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true, opacity: 0.35, sizeAttenuation: true })));

  /* Floating wireframe meshes */
  const meshes = [];
  const geos = [
    new THREE.IcosahedronGeometry(1.3, 1),
    new THREE.OctahedronGeometry(1.1, 0),
    new THREE.TorusGeometry(0.9, 0.3, 12, 24),
    new THREE.TetrahedronGeometry(1.2, 0),
    new THREE.BoxGeometry(1.2, 1.2, 1.2),
    new THREE.DodecahedronGeometry(1.0, 0),
  ];
  const wireMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.18 });
  for (let i = 0; i < 14; i++) {
    const mesh = new THREE.Mesh(geos[i % geos.length], wireMat.clone());
    mesh.position.set((Math.random()-0.5)*50, (Math.random()-0.5)*30, (Math.random()-0.5)*12-6);
    const s = 0.5 + Math.random() * 1.2;
    mesh.scale.setScalar(s);
    mesh.userData = { rotX: (Math.random()-0.5)*0.01, rotY: (Math.random()-0.5)*0.014, fs: 0.3+Math.random()*0.5, fa: 0.4+Math.random()*0.7, iy: mesh.position.y };
    scene.add(mesh); meshes.push(mesh);
  }

  /* Solid accent meshes — white */
  const solidGeos = [new THREE.IcosahedronGeometry(0.8,1), new THREE.OctahedronGeometry(0.7,0)];
  const solidMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.5, roughness: 0.3 });
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dl = new THREE.DirectionalLight(0xffffff, 2); dl.position.set(10,10,10); scene.add(dl);
  for (let i = 0; i < 5; i++) {
    const m = new THREE.Mesh(solidGeos[i%2], solidMat.clone());
    m.position.set((Math.random()-0.5)*35, (Math.random()-0.5)*20, (Math.random()-0.5)*8);
    m.scale.setScalar(0.4 + Math.random()*0.5);
    m.userData = { rotX: (Math.random()-0.5)*0.012, rotY: (Math.random()-0.5)*0.018, fs: 0.4+Math.random()*0.4, fa: 0.3+Math.random()*0.5, iy: m.position.y };
    scene.add(m); meshes.push(m);
  }

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX/window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY/window.innerHeight - 0.5) * 2;
  });

  let t = 0;
  (function animate() {
    requestAnimationFrame(animate); t += 0.005;
    resizeRenderer(renderer, canvas);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    camera.position.x += (mouseX*3 - camera.position.x)*0.03;
    camera.position.y += (-mouseY*2 - camera.position.y)*0.03;
    meshes.forEach(m => {
      m.rotation.x += m.userData.rotX;
      m.rotation.y += m.userData.rotY;
      m.position.y = m.userData.iy + Math.sin(t*m.userData.fs)*m.userData.fa;
    });
    renderer.render(scene, camera);
  })();
})();

/* ==========================================================
   SHOWCASE — Subtle white grid nebula
   ========================================================== */
(function showcaseScene() {
  const canvas = document.getElementById('showcaseCanvas');
  if (!canvas) return;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, 2, 0.1, 200);
  camera.position.z = 20;

  const N = 1500;
  const pos = new Float32Array(N*3);
  for (let i = 0; i < N; i++) {
    const r = Math.random()*28;
    const th = Math.random()*Math.PI*2, ph = Math.acos(2*Math.random()-1);
    pos[i*3]   = r*Math.sin(ph)*Math.cos(th);
    pos[i*3+1] = r*Math.sin(ph)*Math.sin(th);
    pos[i*3+2] = r*Math.cos(ph);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.09, transparent: true, opacity: 0.5 })));

  let t = 0;
  (function animate() {
    requestAnimationFrame(animate); t += 0.003;
    resizeRenderer(renderer, canvas);
    camera.aspect = canvas.clientWidth/canvas.clientHeight;
    camera.updateProjectionMatrix();
    scene.rotation.y = t*0.08;
    scene.rotation.x = Math.sin(t*0.05)*0.12;
    renderer.render(scene, camera);
  })();
})();

/* ==========================================================
   FLOAT CANVAS — Spinning torus knot (white/gray)
   ========================================================== */
(function floatScene() {
  const canvas = document.getElementById('floatCanvas');
  if (!canvas) return;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 8;

  /* Solid torus knot */
  const knotGeo = new THREE.TorusKnotGeometry(2, 0.55, 200, 20, 2, 3);
  const knotMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.7, roughness: 0.15 });
  const knot = new THREE.Mesh(knotGeo, knotMat);
  scene.add(knot);

  /* Wireframe overlay */
  scene.add(new THREE.Mesh(knotGeo, new THREE.MeshBasicMaterial({ color: 0x444444, wireframe: true, transparent: true, opacity: 0.2 })));

  /* Orbiting dots */
  const orbN = 100, orbPos = new Float32Array(orbN*3);
  for (let i = 0; i < orbN; i++) {
    const angle = (i/orbN)*Math.PI*2, r = 3.5 + Math.random()*1.5;
    orbPos[i*3] = Math.cos(angle)*r;
    orbPos[i*3+1] = (Math.random()-0.5)*4;
    orbPos[i*3+2] = Math.sin(angle)*r;
  }
  const orbGeo = new THREE.BufferGeometry();
  orbGeo.setAttribute('position', new THREE.BufferAttribute(orbPos, 3));
  const orbs = new THREE.Points(orbGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.07, transparent: true, opacity: 0.6 }));
  scene.add(orbs);

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const l1 = new THREE.DirectionalLight(0xffffff, 3); l1.position.set(5,5,5); scene.add(l1);
  const l2 = new THREE.PointLight(0xaaaaaa, 4, 20); l2.position.set(-5,-3,3); scene.add(l2);

  let t = 0;
  (function animate() {
    requestAnimationFrame(animate); t += 0.005;
    resizeRenderer(renderer, canvas);
    camera.aspect = canvas.clientWidth/canvas.clientHeight;
    camera.updateProjectionMatrix();
    knot.rotation.x = t*0.4; knot.rotation.y = t*0.6;
    orbs.rotation.y = t*0.25;
    /* subtle color pulse between pure white and light gray */
    const g = 0.75 + 0.25*Math.sin(t*0.5);
    knotMat.color.setRGB(g, g, g);
    renderer.render(scene, camera);
  })();
})();

/* ==========================================================
   CTA WAVE — white wireframe wave on white bg (dark lines)
   ========================================================== */
(function ctaScene() {
  const canvas = document.getElementById('ctaCanvas');
  if (!canvas) return;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xffffff, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 2, 0.1, 200);
  camera.position.set(0,4,16); camera.lookAt(0,0,0);

  const W=80, H=80, SEG=60;
  const planeGeo = new THREE.PlaneGeometry(W, H, SEG, SEG);
  const plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({ color: 0x1a1a1a, wireframe: true, transparent: true, opacity: 0.18 }));
  plane.rotation.x = -Math.PI/2.5;
  scene.add(plane);

  const posArr = planeGeo.attributes.position.array;
  const origY = new Float32Array(posArr.length/3);
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

/* ==========================================================
   SERVICE ICONS — mini B&W 3D objects
   ========================================================== */
(function serviceIcons() {
  const configs = [
    { geo: new THREE.SphereGeometry(0.5,16,16) },       /* digital marketing */
    { geo: new THREE.BoxGeometry(0.7,0.7,0.7) },        /* web dev */
    { geo: new THREE.CylinderGeometry(0.3,0.3,0.8,8) }, /* app dev */
    { geo: new THREE.OctahedronGeometry(0.55,0) },       /* hire dev */
    { geo: new THREE.TorusGeometry(0.35,0.15,8,16) },   /* graphic */
  ];
  configs.forEach((cfg, idx) => {
    const canvas = document.getElementById(`icon3d-${idx}`);
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(56,56);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45,1,0.1,10);
    camera.position.z = 2.2;

    /* solid + wireframe */
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.2 });
    scene.add(new THREE.Mesh(cfg.geo, mat));
    scene.add(new THREE.Mesh(cfg.geo, new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true, transparent: true, opacity: 0.3 })));

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const dl = new THREE.DirectionalLight(0xffffff, 2); dl.position.set(2,3,2); scene.add(dl);

    (function animate() {
      requestAnimationFrame(animate);
      scene.children[0].rotation.x += 0.012;
      scene.children[0].rotation.y += 0.016;
      scene.children[1].rotation.x = scene.children[0].rotation.x;
      scene.children[1].rotation.y = scene.children[0].rotation.y;
      renderer.render(scene, camera);
    })();
  });
})();

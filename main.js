/* ============================================================
   8Dots — main.js  |  Three.js + UI interactions
   ============================================================ */

/* ---------- Navbar scroll ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ---------- Hamburger menu ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll(
  '.service-card, .work-card, .testi-card, .feature-item, .contact-item, .section-header'
);
revealEls.forEach(el => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* ---------- Counter animation ---------- */
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(animateCounter);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

/* ---------- Contact form ---------- */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('formSuccess').style.display = 'block';
    btn.textContent = 'Send Message';
    btn.disabled = false;
    e.target.reset();
  }, 1500);
});

/* ============================================================
   THREE.JS SCENES
   ============================================================ */

const THREE = window.THREE;

/* ---- Helper: resize canvas to fill container ---- */
function resizeRenderer(renderer, canvas) {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (canvas.width !== w || canvas.height !== h) {
    renderer.setSize(w, h, false);
    return true;
  }
  return false;
}

/* ==========================================================
   SCENE 1 — Hero: Particle Field + Floating Geometry
   ========================================================== */
(function heroScene() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.set(0, 0, 18);

  /* ---- Particles ---- */
  const particleCount = 3000;
  const positions = new Float32Array(particleCount * 3);
  const colors    = new Float32Array(particleCount * 3);
  const colorA = new THREE.Color('#6366f1');
  const colorB = new THREE.Color('#06b6d4');
  const colorC = new THREE.Color('#8b5cf6');
  const palette = [colorA, colorB, colorC];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 60;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    const c = palette[Math.floor(Math.random() * 3)];
    colors[i * 3]     = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

  const pMat = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
  });
  scene.add(new THREE.Points(pGeo, pMat));

  /* ---- Floating meshes ---- */
  const meshes = [];
  const geoTypes = [
    new THREE.IcosahedronGeometry(1.2, 1),
    new THREE.OctahedronGeometry(1.0, 0),
    new THREE.TorusGeometry(0.8, 0.3, 16, 32),
    new THREE.TetrahedronGeometry(1.1, 0),
    new THREE.DodecahedronGeometry(0.9, 0),
  ];
  const matOptions = [
    new THREE.MeshStandardMaterial({ color: 0x6366f1, metalness: 0.8, roughness: 0.2, wireframe: false }),
    new THREE.MeshStandardMaterial({ color: 0x8b5cf6, metalness: 0.6, roughness: 0.3, wireframe: false }),
    new THREE.MeshStandardMaterial({ color: 0x06b6d4, metalness: 0.9, roughness: 0.1, wireframe: false }),
    new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.7, roughness: 0.25 }),
  ];

  for (let i = 0; i < 12; i++) {
    const geo = geoTypes[i % geoTypes.length];
    const mat = matOptions[i % matOptions.length].clone();
    mat.transparent = true;
    mat.opacity = 0.6 + Math.random() * 0.3;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 25,
      (Math.random() - 0.5) * 10 - 5
    );
    const s = 0.4 + Math.random() * 0.8;
    mesh.scale.setScalar(s);
    mesh.userData = {
      rotSpeed: (Math.random() - 0.5) * 0.012,
      floatSpeed: 0.3 + Math.random() * 0.5,
      floatAmp: 0.3 + Math.random() * 0.6,
      initY: mesh.position.y,
    };
    scene.add(mesh);
    meshes.push(mesh);
  }

  /* ---- Lights ---- */
  scene.add(new THREE.AmbientLight(0xffffff, 0.3));
  const dLight = new THREE.DirectionalLight(0x6366f1, 2);
  dLight.position.set(10, 10, 10);
  scene.add(dLight);
  const pLight = new THREE.PointLight(0x06b6d4, 3, 40);
  pLight.position.set(-10, -5, 8);
  scene.add(pLight);
  const pLight2 = new THREE.PointLight(0x8b5cf6, 2, 30);
  pLight2.position.set(15, 8, 5);
  scene.add(pLight2);

  /* ---- Mouse parallax ---- */
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* ---- Animate ---- */
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.005;

    resizeRenderer(renderer, canvas);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    /* parallax camera */
    camera.position.x += (mouseX * 3 - camera.position.x) * 0.03;
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.03;

    /* rotate particle cloud slowly */
    pGeo.attributes.position.array.forEach((_, i) => {});
    scene.rotation.y = t * 0.03;

    /* float meshes */
    meshes.forEach(m => {
      m.rotation.x += m.userData.rotSpeed;
      m.rotation.y += m.userData.rotSpeed * 1.3;
      m.position.y = m.userData.initY + Math.sin(t * m.userData.floatSpeed) * m.userData.floatAmp;
    });

    renderer.render(scene, camera);
  }
  animate();
})();

/* ==========================================================
   SCENE 2 — Showcase section: ambient nebula
   ========================================================== */
(function showcaseScene() {
  const canvas = document.getElementById('showcaseCanvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.z = 20;

  const N = 2000;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r = Math.random() * 30;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
    pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i*3+2] = r * Math.cos(phi);
    const mix = Math.random();
    col[i*3]   = 0.39 + mix * 0.27;
    col[i*3+1] = 0.4  - mix * 0.25;
    col[i*3+2] = 0.95 - mix * 0.15;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
  scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.1, vertexColors: true, transparent: true, opacity: 0.6 })));

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.003;
    resizeRenderer(renderer, canvas);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    scene.rotation.y = t * 0.1;
    scene.rotation.x = Math.sin(t * 0.05) * 0.15;
    renderer.render(scene, camera);
  }
  animate();
})();

/* ==========================================================
   SCENE 3 — Float canvas: spinning torus knot hero object
   ========================================================== */
(function floatScene() {
  const canvas = document.getElementById('floatCanvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 8);

  /* Torus knot */
  const knotGeo = new THREE.TorusKnotGeometry(2, 0.6, 200, 20, 2, 3);
  const knotMat = new THREE.MeshStandardMaterial({
    color: 0x6366f1,
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 1,
  });
  const knot = new THREE.Mesh(knotGeo, knotMat);
  scene.add(knot);

  /* Wireframe overlay */
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.15 });
  scene.add(new THREE.Mesh(knotGeo, wireMat));

  /* Inner glow sphere */
  const glowGeo = new THREE.SphereGeometry(1.5, 32, 32);
  const glowMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.05 });
  scene.add(new THREE.Mesh(glowGeo, glowMat));

  /* Orbiting particles */
  const orbCount = 80;
  const orbPos = new Float32Array(orbCount * 3);
  for (let i = 0; i < orbCount; i++) {
    const angle = (i / orbCount) * Math.PI * 2;
    const r = 3.5 + Math.random() * 1.5;
    orbPos[i*3]   = Math.cos(angle) * r;
    orbPos[i*3+1] = (Math.random() - 0.5) * 4;
    orbPos[i*3+2] = Math.sin(angle) * r;
  }
  const orbGeo = new THREE.BufferGeometry();
  orbGeo.setAttribute('position', new THREE.BufferAttribute(orbPos, 3));
  const orbs = new THREE.Points(orbGeo, new THREE.PointsMaterial({ color: 0x06b6d4, size: 0.08, transparent: true, opacity: 0.8 }));
  scene.add(orbs);

  /* Lights */
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const l1 = new THREE.DirectionalLight(0x6366f1, 4); l1.position.set(5, 5, 5); scene.add(l1);
  const l2 = new THREE.PointLight(0x06b6d4, 5, 20); l2.position.set(-5, -3, 3); scene.add(l2);
  const l3 = new THREE.PointLight(0xec4899, 3, 15); l3.position.set(3, -5, -3); scene.add(l3);

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.005;
    resizeRenderer(renderer, canvas);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    knot.rotation.x = t * 0.4;
    knot.rotation.y = t * 0.6;
    orbs.rotation.y = t * 0.3;

    /* Color shift */
    const hue = (t * 0.05) % 1;
    knotMat.color.setHSL(hue, 0.8, 0.5);
    l2.color.setHSL((hue + 0.33) % 1, 1, 0.5);

    renderer.render(scene, camera);
  }
  animate();
})();

/* ==========================================================
   SCENE 4 — CTA Band: abstract wave mesh
   ========================================================== */
(function ctaScene() {
  const canvas = document.getElementById('ctaCanvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.set(0, 4, 16);
  camera.lookAt(0, 0, 0);

  const W = 80, H = 80, SEG = 60;
  const planeGeo = new THREE.PlaneGeometry(W, H, SEG, SEG);
  const planeMat = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true, transparent: true, opacity: 0.25 });
  const plane = new THREE.Mesh(planeGeo, planeMat);
  plane.rotation.x = -Math.PI / 2.5;
  scene.add(plane);

  const posArr = planeGeo.attributes.position.array;
  const origY = new Float32Array(posArr.length / 3);
  for (let i = 0; i < origY.length; i++) origY[i] = posArr[i * 3 + 2];

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.008;
    resizeRenderer(renderer, canvas);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    for (let i = 0; i < origY.length; i++) {
      const x = posArr[i * 3];
      const z = posArr[i * 3 + 1];
      posArr[i * 3 + 2] = origY[i] + Math.sin(x * 0.15 + t) * 1.5 + Math.cos(z * 0.1 + t * 0.7) * 1.2;
    }
    planeGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  animate();
})();

/* ==========================================================
   SCENE 5 — Service card mini 3D icons
   ========================================================== */
(function serviceIconScenes() {
  const configs = [
    /* 0 digital marketing */
    { geo: new THREE.SphereGeometry(0.5, 16, 16), color: 0x6366f1 },
    /* 1 web dev */
    { geo: new THREE.BoxGeometry(0.7, 0.7, 0.7), color: 0x8b5cf6 },
    /* 2 app dev */
    { geo: new THREE.CylinderGeometry(0.3, 0.3, 0.8, 8), color: 0x06b6d4 },
    /* 3 hire dev */
    { geo: new THREE.OctahedronGeometry(0.55, 0), color: 0x10b981 },
    /* 4 graphic */
    { geo: new THREE.TorusGeometry(0.35, 0.15, 8, 16), color: 0xec4899 },
  ];

  configs.forEach((cfg, idx) => {
    const canvas = document.getElementById(`icon3d-${idx}`);
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(56, 56);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 10);
    camera.position.z = 2.2;

    const mat = new THREE.MeshStandardMaterial({ color: cfg.color, metalness: 0.8, roughness: 0.15 });
    const mesh = new THREE.Mesh(cfg.geo, mat);
    scene.add(mesh);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dl = new THREE.DirectionalLight(0xffffff, 2); dl.position.set(2, 3, 2); scene.add(dl);
    const pl = new THREE.PointLight(cfg.color, 3, 5); pl.position.set(-1, -1, 1); scene.add(pl);

    function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.015;
      renderer.render(scene, camera);
    }
    animate();
  });
})();

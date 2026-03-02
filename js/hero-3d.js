import * as THREE from 'three';

(function () {
  /* ---------- renderer ---------- */
  const canvas = document.getElementById('hero-3d');
  if (!canvas) return;
  const container = canvas.parentElement;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  /* ---------- scene & camera ---------- */
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x1C1B2E, 0.035);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.5, 12);

  /* ---------- lights ---------- */
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));

  const warmLight = new THREE.PointLight(0xC9956B, 1.8, 30);
  warmLight.position.set(-5, 4, 6);
  scene.add(warmLight);

  const coolLight = new THREE.PointLight(0xEDE8E2, 1.2, 30);
  coolLight.position.set(5, -2, 4);
  scene.add(coolLight);

  /* ---------- materials ---------- */
  const matOrange = new THREE.MeshStandardMaterial({
    color: 0xC9956B, roughness: 0.35, metalness: 0.15,
    transparent: true, opacity: 0.7
  });
  const matLight = new THREE.MeshStandardMaterial({
    color: 0xEDE8E2, roughness: 0.4, metalness: 0.1,
    transparent: true, opacity: 0.5
  });
  const matDark = new THREE.MeshStandardMaterial({
    color: 0x2A2940, roughness: 0.6, metalness: 0.2,
    transparent: true, opacity: 0.6
  });
  const matGlass = new THREE.MeshStandardMaterial({
    color: 0xE8E0D8, roughness: 0.15, metalness: 0.3,
    transparent: true, opacity: 0.25
  });
  const matWire = new THREE.MeshBasicMaterial({
    color: 0xC9956B, wireframe: true, transparent: true, opacity: 0.12
  });
  const matWire2 = new THREE.MeshBasicMaterial({
    color: 0xEDE8E2, wireframe: true, transparent: true, opacity: 0.08
  });

  /* ---------- orbit rings ---------- */
  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(5.5, 0.015, 16, 100),
    matWire
  );
  ring1.rotation.x = Math.PI * 0.45;
  ring1.rotation.y = Math.PI * 0.1;
  scene.add(ring1);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(4.2, 0.012, 16, 80),
    matWire2
  );
  ring2.rotation.x = Math.PI * 0.3;
  ring2.rotation.y = -Math.PI * 0.2;
  scene.add(ring2);

  /* ---------- floating shapes ---------- */
  const shapes = [];

  function addShape(geo, mat, x, y, z, s, speed, amp, phase, rotSpeed) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(s);
    scene.add(mesh);
    shapes.push({ mesh, baseY: y, speed, amp, phase, rotSpeed });
  }

  addShape(
    new THREE.TorusGeometry(0.6, 0.22, 16, 40),
    matOrange, 4.5, 2.8, -1, 0.8, 0.6, 0.5, 0, 0.008
  );
  addShape(
    new THREE.SphereGeometry(0.5, 32, 32),
    matLight, -4.2, 3.2, -2, 0.7, 0.5, 0.4, 1.2, 0.005
  );
  addShape(
    new THREE.TorusKnotGeometry(0.4, 0.12, 80, 16),
    matDark, 5.8, 0.2, -3, 0.6, 0.4, 0.35, 2.0, 0.01
  );
  addShape(
    new THREE.IcosahedronGeometry(0.65, 0),
    new THREE.MeshBasicMaterial({ color: 0xE8E0D8, wireframe: true, transparent: true, opacity: 0.18 }),
    -5.5, -1.2, -1.5, 0.9, 0.45, 0.3, 3.5, 0.007
  );
  addShape(
    new THREE.OctahedronGeometry(0.4, 0),
    matGlass, 1.5, 3.8, -4, 0.7, 0.55, 0.45, 0.8, 0.012
  );
  addShape(
    new THREE.DodecahedronGeometry(0.35, 0),
    matLight, 6.2, -2.5, -2, 0.65, 0.35, 0.25, 4.2, 0.009
  );
  addShape(
    new THREE.ConeGeometry(0.3, 0.7, 6),
    matOrange, -6.5, 1.0, -3, 0.5, 0.5, 0.4, 1.8, 0.011
  );
  addShape(
    new THREE.CapsuleGeometry(0.2, 0.5, 8, 16),
    matDark, 0.5, -2.8, -2, 0.6, 0.3, 0.3, 2.5, 0.006
  );

  /* ---------- particles ---------- */
  const particleCount = 40;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    pPos[i * 3]     = (Math.random() - 0.5) * 18;
    pPos[i * 3 + 1] = (Math.random() - 0.5) * 12;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xEDE8E2, size: 0.03, transparent: true, opacity: 0.35,
    sizeAttenuation: true
  });
  scene.add(new THREE.Points(pGeo, pMat));

  /* ---------- grid ---------- */
  const gridHelper = new THREE.GridHelper(20, 30, 0x2A2940, 0x1E1D30);
  gridHelper.position.y = -3.5;
  gridHelper.material.transparent = true;
  gridHelper.material.opacity = 0.15;
  scene.add(gridHelper);

  /* ---------- mouse parallax ---------- */
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

  document.addEventListener('mousemove', function (e) {
    mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* ---------- animation loop ---------- */
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;

    scene.rotation.y = mouse.x * 0.08;
    scene.rotation.x = mouse.y * 0.04;

    ring1.rotation.z = t * 0.05;
    ring2.rotation.z = -t * 0.03;

    for (const s of shapes) {
      s.mesh.position.y = s.baseY + Math.sin(t * s.speed + s.phase) * s.amp;
      s.mesh.rotation.x += s.rotSpeed;
      s.mesh.rotation.y += s.rotSpeed * 0.7;
    }

    const positions = pGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 1] += Math.sin(t * 0.3 + i) * 0.001;
    }
    pGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  /* ---------- init ---------- */
  resize();
  window.addEventListener('resize', resize);
  animate();
})();

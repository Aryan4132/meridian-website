import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface CyberCore3DProps {
  className?: string;
  height?: string | number;
  accentColor?: string;
  modelId?: string;
  vramText?: string;
  speedText?: string;
}

export const CyberCore3D: React.FC<CyberCore3DProps> = ({
  className = '',
  height = '320px',
  accentColor = '#00f0ff',
  modelId = 'qwen3.5',
  vramText = '6.6 GB',
  speedText = '92 tok/s',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hudPins, setHudPins] = useState<{ x: number; y: number; visible: boolean }[]>([
    { x: 0, y: 0, visible: false },
    { x: 0, y: 0, visible: false },
  ]);

  const colorRef = useRef<string>(accentColor);
  colorRef.current = accentColor;

  const modelIdRef = useRef<string>(modelId);
  modelIdRef.current = modelId;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const containerHeight = container.clientHeight || 320;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / containerHeight, 0.1, 1000);
    camera.position.z = 6.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, containerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Core Mesh
    const innerGeo = new THREE.IcosahedronGeometry(1.1, 3);
    const innerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colorRef.current),
      wireframe: true,
      emissive: new THREE.Color(colorRef.current),
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Middle Layer - TorusKnot
    const middleGeo = new THREE.TorusKnotGeometry(1.6, 0.22, 128, 16, 2, 3);
    const middleMat = new THREE.MeshStandardMaterial({
      color: 0x7000ff,
      wireframe: true,
      emissive: 0x4800aa,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.7,
    });
    const middleMesh = new THREE.Mesh(middleGeo, middleMat);
    coreGroup.add(middleMesh);

    // Outer Shell - Dodecahedron
    const outerGeo = new THREE.DodecahedronGeometry(2.3, 0);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xff00aa,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Particle Cloud Ring
    const particleCount = 300;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.6 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.6;

      particlePositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      const baseC = new THREE.Color(colorRef.current);
      particleColors[i * 3] = baseC.r;
      particleColors[i * 3 + 1] = baseC.g;
      particleColors[i * 3 + 2] = baseC.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // Click Shockwave Geometry & Ring
    const shockwaveGeo = new THREE.RingGeometry(0.1, 0.15, 64);
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorRef.current),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
    });
    const shockwaveMesh = new THREE.Mesh(shockwaveGeo, shockwaveMat);
    shockwaveMesh.rotation.x = Math.PI / 2;
    scene.add(shockwaveMesh);

    let shockwaveActive = false;
    let shockwaveScale = 0.1;
    let shockwaveOpacity = 1;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 3, 20);
    cyanLight.position.set(4, 4, 5);
    scene.add(cyanLight);

    const magentaLight = new THREE.PointLight(0xff00aa, 3, 20);
    magentaLight.position.set(-4, -4, -3);
    scene.add(magentaLight);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const y = -(((e.clientY - rect.top) / container.clientHeight) * 2 - 1);
      targetRotationY = x * 0.9;
      targetRotationX = y * 0.9;
    };

    const handleClick = () => {
      shockwaveActive = true;
      shockwaveScale = 0.1;
      shockwaveOpacity = 1;
    };

    const domElem = renderer.domElement;
    window.addEventListener('mousemove', handleMouseMove);
    domElem.addEventListener('click', handleClick);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    // Orbiting 3D Pin Anchor Vectors
    const pinVector1 = new THREE.Vector3(1.8, 1.2, 0);
    const pinVector2 = new THREE.Vector3(-1.8, -1.2, 0);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth color morphing to target accent color
      const targetColor = new THREE.Color(colorRef.current);
      innerMat.color.lerp(targetColor, 0.05);
      innerMat.emissive.lerp(targetColor, 0.05);
      cyanLight.color.lerp(targetColor, 0.05);
      shockwaveMat.color.lerp(targetColor, 0.05);

      // Smooth inertia rotation
      currentRotationX += (targetRotationX - currentRotationX) * 0.06;
      currentRotationY += (targetRotationY - currentRotationY) * 0.06;

      coreGroup.rotation.x = currentRotationX + Math.sin(elapsedTime * 0.5) * 0.1;
      coreGroup.rotation.y = currentRotationY + elapsedTime * 0.25;

      innerMesh.rotation.y = -elapsedTime * 0.6;
      middleMesh.rotation.x = elapsedTime * 0.5;
      middleMesh.rotation.z = elapsedTime * 0.3;
      outerMesh.rotation.y = elapsedTime * 0.2;
      particles.rotation.y = elapsedTime * 0.12;

      // Vertical float pulse
      coreGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

      // Handle shockwave ring expansion
      if (shockwaveActive) {
        shockwaveScale += 0.18;
        shockwaveOpacity -= 0.04;
        shockwaveMesh.scale.set(shockwaveScale, shockwaveScale, 1);
        shockwaveMat.opacity = Math.max(0, shockwaveOpacity);
        if (shockwaveOpacity <= 0) {
          shockwaveActive = false;
        }
      }

      // Calculate 3D Pin projections to 2D HTML overlay
      const p1 = pinVector1.clone().applyMatrix4(coreGroup.matrixWorld).project(camera);
      const p2 = pinVector2.clone().applyMatrix4(coreGroup.matrixWorld).project(camera);

      const toScreen = (v: THREE.Vector3) => ({
        x: ((v.x + 1) * width) / 2,
        y: ((-v.y + 1) * containerHeight) / 2,
        visible: v.z < 1,
      });

      setHudPins([toScreen(p1), toScreen(p2)]);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      domElem.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      innerGeo.dispose();
      innerMat.dispose();
      middleGeo.dispose();
      middleMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      shockwaveGeo.dispose();
      shockwaveMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`cyber-core-3d-container ${className}`}
      style={{
        width: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
    </div>
  );
};

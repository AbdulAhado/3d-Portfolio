'use client';

/**
 * HeroScene.jsx — Three.js / React Three Fiber scene for the Hero section.
 * Lazy-loaded via React.lazy() — not in initial bundle.
 *
 * Features:
 * - Glass torus knot mesh (MeshPhysicalMaterial)
 * - 600-point particle field
 * - Mouse-reactive rotation
 * - Bloom post-processing
 */
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Main mesh: glass torus knot ───────────────────────────── */
function GlassMesh({ mousePos }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Slow auto-rotation
    meshRef.current.rotation.x = t * 0.12;
    meshRef.current.rotation.y = t * 0.18;
    // Subtle mouse tracking
    meshRef.current.rotation.x += (mousePos.current.y * 0.3 - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (mousePos.current.x * 0.3 - meshRef.current.rotation.y) * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} castShadow>
        <torusKnotGeometry args={[1.2, 0.38, 180, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.25}
          speed={1.5}
          roughness={0.05}
          metalness={0.9}
          transparent
          opacity={0.85}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

/* ─── Floating particle orbs ─────────────────────────────────── */
function ParticleField() {
  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);

  const geoRef = useRef();
  useFrame(({ clock }) => {
    if (geoRef.current) {
      geoRef.current.rotation.y = clock.getElapsedTime() * 0.04;
      geoRef.current.rotation.x = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={geoRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#06b6d4"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Ambient glow sphere ────────────────────────────────────── */
function GlowOrb() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.4;
    }
  });
  return (
    <Sphere ref={ref} args={[2.5, 32, 32]} position={[0, 0, -3]}>
      <meshBasicMaterial color="#2563eb" transparent opacity={0.04} />
    </Sphere>
  );
}

/* ─── Scene root ─────────────────────────────────────────────── */
function SceneContents({ mousePos }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={2} color="#a855f7" />
      <pointLight position={[-4, -2, 2]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[0, -4, -2]} intensity={1} color="#2563eb" />

      <Stars
        radius={30}
        depth={20}
        count={800}
        factor={3}
        saturation={0.5}
        fade
        speed={0.4}
      />

      <GlassMesh mousePos={mousePos} />
      <ParticleField />
      <GlowOrb />
    </>
  );
}

/* ─── Canvas wrapper ─────────────────────────────────────────── */
const HeroScene = ({ mousePos }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 1.5]}     // cap pixel ratio for perf
      style={{ background: 'transparent' }}
    >
      <SceneContents mousePos={mousePos} />
    </Canvas>
  );
};

export default HeroScene;

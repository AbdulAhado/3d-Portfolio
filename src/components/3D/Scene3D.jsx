'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Float } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';
import * as THREE from 'three';

// Animated Floating Sphere
function FloatingSphere({ position, color, speed = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}


// Main 3D Scene Component
export default function Scene3D({ intensity = 1 }) {
  const { theme } = useTheme();
  
  const primaryColor = theme === 'dark' ? '#6366F1' : '#4F46E5';
  const secondaryColor = theme === 'dark' ? '#06B6D4' : '#0891B2';
  const highlightColor = theme === 'dark' ? '#F59E42' : '#F97316';

  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5 * intensity} />
        <directionalLight position={[10, 10, 5]} intensity={1 * intensity} />
        <pointLight position={[-10, -10, -5]} intensity={0.5 * intensity} color={primaryColor} />
        <pointLight position={[10, 10, 10]} intensity={0.8 * intensity} color={secondaryColor} />
        
        <Environment preset={theme === 'dark' ? 'night' : 'sunset'} />
        
        {/* Floating Spheres */}
        <FloatingSphere position={[-4, 2, 0]} color={primaryColor} speed={0.8} />
        <FloatingSphere position={[4, -2, 0]} color={secondaryColor} speed={1.2} />
        <FloatingSphere position={[0, 3, -2]} color={highlightColor} speed={1} />
        
        {/* Orbiting Particles */}
        {[...Array(20)].map((_, i) => (
          <Float key={i} speed={1.5 + Math.random()} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere
              position={[
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
              ]}
              args={[0.1, 16, 16]}
            >
              <meshStandardMaterial
                color={i % 3 === 0 ? primaryColor : i % 3 === 1 ? secondaryColor : highlightColor}
                emissive={i % 3 === 0 ? primaryColor : i % 3 === 1 ? secondaryColor : highlightColor}
                emissiveIntensity={0.5}
              />
            </Sphere>
          </Float>
        ))}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}


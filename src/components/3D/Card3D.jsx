'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '../../context/ThemeContext';
import * as THREE from 'three';

export default function Card3D({ children, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const meshRef = useRef();
  const { theme } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[4, 3, 0.2]} />
      <meshStandardMaterial
        color={theme === 'dark' ? '#1F2937' : '#F3F4F6'}
        metalness={0.8}
        roughness={0.2}
        emissive={theme === 'dark' ? '#6366F1' : '#4F46E5'}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}







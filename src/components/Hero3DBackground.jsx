import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';

// Individual Interactive 3D Cube Object Component
const FloatingCube = ({ position, color, size }) => {
  const meshRef = useRef();

  // Rotates the object on every single frame tick using WebGL hardware acceleration
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial 
          color={color} 
          wireframe={true} // Clean cyber-grid tech look
          transparent 
          opacity={0.25} 
        />
      </mesh>
    </Float>
  );
};

const Hero3DBackground = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1, // Sits safely between your background color and text layers
      pointerEvents: 'none' // Ensures users can still click links/buttons without blockage
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Lights Engine Layout Setup */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#42999e" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#9d4edd" />

        {/* Floating Geometry Clusters */}
        <FloatingCube position={[-2.2, 1.5, -1]} color="#138086" size={[0.6, 0.6, 0.6]} />
        <FloatingCube position={[2.5, -1.8, 0]} color="#9d4edd" size={[0.8, 0.8, 0.8]} />
        <FloatingCube position={[3, 2, -2]} color="#42999e" size={[0.4, 0.4, 0.4]} />
        <FloatingCube position={[-3, -2, -1]} color="#185054" size={[0.7, 0.7, 0.7]} />

        {/* 🌌 High-Performance Interactive Starfield Layer */}
        <Stars 
          radius={100} 
          depth={50} 
          count={800} 
          factor={4} 
          saturation={0.5} 
          fade 
          speed={1.5} 
        />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
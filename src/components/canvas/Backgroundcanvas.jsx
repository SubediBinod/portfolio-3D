import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const StarField = ({ count = 600, radius = 8 }) => {
  const ref = useRef();

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = radius * (0.3 + Math.random() * 0.9);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const t = Math.random() * 0.6 + 0.2;
      col[i * 3] = 0.28 * t + 0.05;
      col[i * 3 + 1] = 0.7 * t + 0.05;
      col[i * 3 + 2] = 0.85 * t + 0.05;
    }
    return { positions: pos, colors: col };
  }, [count, radius]);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [positions, colors]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <points ref={ref}>
      <primitive object={geometry} attach="geometry" />
      <pointsMaterial
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.95}
      />
    </points>
  );
};

const BackgroundCanvas = () => {
  return (
    <div className="background-canvas absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.2} position={[5, 5, 5]} />
        <StarField count={650} radius={10} />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
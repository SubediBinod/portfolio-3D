// ...existing code...
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

/**
 * Computers component renders the loaded GLTF model.
 * This file intentionally avoids throwing if the model is missing;
 * the parent will not mount the Canvas unless the model file exists.
 */
const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        visible
        position={[-20, 50, 10]}
        angle={0.12}
        intensity={1}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  // guard: only one r3f canvas allowed at a time
  const canCreate = typeof window !== "undefined" && !window.__R3F_CANVAS_CREATED;
  const [isMobile, setIsMobile] = useState(false);
  const [modelExists, setModelExists] = useState(false);
  const glRef = useRef(null);

  // check model file presence before attempting to render Canvas
  useEffect(() => {
    let mounted = true;
    fetch("/desktop_pc/scene.gltf", { method: "HEAD" })
      .then((res) => {
        if (!mounted) return;
        setModelExists(res.ok);
        if (!res.ok) console.warn("Computers model not found at /desktop_pc/scene.gltf");
      })
      .catch(() => {
        if (!mounted) return;
        setModelExists(false);
        console.warn("Error checking /desktop_pc/scene.gltf");
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (canCreate) window.__R3F_CANVAS_CREATED = true;
    return () => {
      if (canCreate) window.__R3F_CANVAS_CREATED = false;
    };
  }, [canCreate]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const disposeRenderer = () => {
    const renderer = glRef.current;
    if (!renderer) return;
    try {
      if (typeof renderer.forceContextLoss === "function") renderer.forceContextLoss();
      else {
        const gl = renderer.getContext && renderer.getContext();
        const ext = gl && gl.getExtension && gl.getExtension("WEBGL_lose_context");
        if (ext && typeof ext.loseContext === "function") ext.loseContext();
      }
    } catch (e) {}
    try {
      if (typeof renderer.dispose === "function") renderer.dispose();
    } catch (e) {}
    try {
      const canvasEl = renderer && renderer.domElement;
      if (canvasEl && canvasEl.parentNode) canvasEl.parentNode.removeChild(canvasEl);
    } catch (e) {}
    glRef.current = null;
  };

  useEffect(() => {
    return () => disposeRenderer();
  }, []);

  // Vite HMR cleanup
  if (import.meta && import.meta.hot) {
    import.meta.hot.dispose(() => disposeRenderer());
  }

  // If we are not allowed to create a Canvas or model missing -> don't render it
  if (!canCreate || !modelExists) {
    // If model missing, render nothing (prevents white screen). You can render a placeholder instead:
    return null;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ antialias: true, preserveDrawingBuffer: false }}
      onCreated={(state) => {
        glRef.current = state.gl;
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
// ...existing code...
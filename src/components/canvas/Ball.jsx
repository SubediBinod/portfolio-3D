// ...existing code...
import React, { useEffect, useRef, useState } from "react";
import {
  html,
  css,
  javascript,
  reactjs,
  redux,
  tailwind,
  java,
  spring,
  mongodb,
  mysql,
  docker,
  git,
} from "../../assets";

/**
 * TagSphere - lightweight rotating 3D cloud of tech logos/names.
 * No three.js required, no extra deps. Safe fallback to static grid on small screens.
 */

const DEFAULT_ICONS = [
  { id: "html", src: html, label: "HTML" },
  { id: "css", src: css, label: "CSS" },
  { id: "js", src: javascript, label: "JavaScript" },
  { id: "react", src: reactjs, label: "React" },
  { id: "redux", src: redux, label: "Redux" },
  { id: "tailwind", src: tailwind, label: "Tailwind" },
  { id: "java", src: java, label: "Java" },
  { id: "spring", src: spring, label: "Spring" },
  { id: "mongodb", src: mongodb, label: "MongoDB" },
  { id: "mysql", src: mysql, label: "MySQL" },
  { id: "docker", src: docker, label: "Docker" },
  { id: "git", src: git, label: "Git" },
];

const fibonacciSphere = (samples, radius = 1) => {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2; // y goes from 1 to -1
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push({ x: x * radius, y: y * radius, z: z * radius });
  }
  return points;
};

const TagSphere = ({ icons = DEFAULT_ICONS, size = 260, radius = 120 }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const pointsRef = useRef([]);
  const animRef = useRef(null);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    const count = icons.length;
    pointsRef.current = fibonacciSphere(count, radius);
    // ensure refs array length
    itemRefs.current = itemRefs.current.slice(0, count);
  }, [icons, radius]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !pointsRef.current.length) return;
    let rx = 0.0;
    let ry = 0.0;
    let lastTime = performance.now();

    const animate = (t) => {
      const now = t || performance.now();
      const delta = Math.min(40, now - lastTime);
      lastTime = now;

      if (!isPaused) {
        ry += (delta * 0.0006); // rotation around Y
        rx += (delta * 0.00025); // rotation around X
      }

      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);

      const centerX = el.clientWidth / 2;
      const centerY = el.clientHeight / 2;
      const depth = radius * 2;

      pointsRef.current.forEach((p, i) => {
        // rotate Y
        let x1 = cosY * p.x - sinY * p.z;
        let z1 = sinY * p.x + cosY * p.z;
        // rotate X
        let y1 = cosX * p.y - sinX * z1;
        let z2 = sinX * p.y + cosX * z1;

        // perspective projection factor
        const perspective = depth / (depth - z2);
        const x2 = x1 * perspective;
        const y2 = y1 * perspective;

        const screenX = Math.round(centerX + x2);
        const screenY = Math.round(centerY + y2);
        const scale = Math.max(0.45, (perspective / 1.7)); // clamp scale

        const node = itemRefs.current[i];
        if (node) {
          node.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -50%) scale(${scale})`;
          node.style.zIndex = Math.round(1000 + z2); // z-order
          node.style.opacity = `${Math.max(0.35, Math.min(1, (z2 + radius) / (2 * radius) + 0.35))}`;
        }
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPaused, radius]);

  // pause on hover to allow clicks
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const enter = () => setPaused(true);
    const leave = () => setPaused(false);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  // Fallback: on very small screens, render a static flex grid
  const smallScreen = typeof window !== "undefined" && window.innerWidth < 420;
  if (smallScreen) {
    return (
      <div className="tag-sphere-fallback w-full flex flex-wrap gap-3 justify-center items-center p-4">
        {icons.map((ic) => (
          <div key={ic.id} className="w-20 h-20 flex items-center justify-center bg-tertiary rounded-lg p-2">
            <img src={ic.src} alt={ic.label} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="tag-sphere-container relative w-full"
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        touchAction: "none",
        perspective: `${radius * 3}px`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transformStyle: "preserve-3d",
          pointerEvents: "auto",
        }}
      >
        {icons.map((ic, i) => (
          <div
            key={ic.id}
            ref={(el) => (itemRefs.current[i] = el)}
            onClick={() => {
              /* optional: open project or show tooltip */
              // console.log("clicked", ic.label);
            }}
            role="button"
            tabIndex={0}
            className="tag-sphere-item absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate3d(${size / 2}px, ${size / 2}px, 0) translate(-50%,-50%)`,
              transition: "transform 120ms linear, opacity 200ms linear",
              willChange: "transform, opacity",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 6,
              width: 56,
              height: 56,
              borderRadius: 10,
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
            }}
            title={ic.label}
          >
            <img src={ic.src} alt={ic.label} style={{ maxWidth: "70%", maxHeight: "70%", objectFit: "contain" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

const TagSphereCanvas = (props) => {
  // simply render TagSphere - this file replaces Ball.jsx
  // size props: you can set size to match icon container in Tech list
  return (
    <div className="w-full h-full flex items-center justify-center">
      <TagSphere {...props} size={220} radius={100} />
    </div>
  );
};

export default TagSphereCanvas;
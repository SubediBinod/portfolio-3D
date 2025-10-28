import React, { useEffect, useMemo, useRef, useState } from "react";
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
 * Full-screen floating icon cloud — many small icons spread across the viewport.
 * Lightweight DOM-based animation (no three.js). Pointer events are disabled so UI remains interactive.
 */

const ICON_POOL = [
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
];

const rand = (min, max) => Math.random() * (max - min) + min;

const makeItems = (count, w) =>
  Array.from({ length: count }).map((_, i) => {
    const src = ICON_POOL[i % ICON_POOL.length];
    // position across full viewport
    const left = `${rand(2, 98)}%`;
    const top = `${rand(2, 98)}%`;
    const size = Math.round(rand(w < 480 ? 18 : 22, w < 480 ? 40 : 64));
    const dur = `${rand(8, 22).toFixed(1)}s`;
    const delay = `${rand(0, 8).toFixed(2)}s`;
    const rotate = `${rand(-20, 20).toFixed(1)}deg`;
    const opacity = rand(0.18, 0.9).toFixed(2);
    return { id: `icon-${i}-${Date.now()}`, src, left, top, size, dur, delay, rotate, opacity };
  });

const BackgroundTagCloud = ({ count = 64 }) => {
  const [items, setItems] = useState([]);
  const containerRef = useRef(null);

  const generate = (w) => {
    const n = w < 640 ? Math.max(18, Math.floor(count / 4)) : w < 900 ? Math.max(32, Math.floor(count / 2)) : count;
    setItems(makeItems(n, w));
  };

  useEffect(() => {
    const onResize = () => generate(window.innerWidth);
    generate(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [count]);

  // subtle reposition every 18-30s to keep motion fresh
  useEffect(() => {
    const id = setInterval(() => generate(window.innerWidth), 22000 + Math.floor(Math.random() * 8000));
    return () => clearInterval(id);
  }, []);

  return (
    <div ref={containerRef} className="bg-tag-cloud" aria-hidden="true">
      {items.map((it) => (
        <img
          key={it.id}
          src={it.src}
          alt=""
          className="bg-tag-cloud-icon"
          style={{
            left: it.left,
            top: it.top,
            width: it.size,
            height: it.size,
            animationDuration: it.dur,
            animationDelay: it.delay,
            transform: `translate(-50%,-50%) rotate(${it.rotate})`,
            opacity: it.opacity,
          }}
          draggable={false}
        />
      ))}
    </div>
  );
};

export default BackgroundTagCloud;
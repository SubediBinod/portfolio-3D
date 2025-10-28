import React, { useEffect, useRef, useState, Suspense } from "react";
/* use this to wrap any Canvas component to mount only when visible */
const LazyMount = ({ children, rootMargin = "0px 0px 200px 0px" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : 200 }}>
      {visible ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
};

export default LazyMount;
"use client";
import { useEffect, useRef } from "react";

const PATH_LENGTH = 307.919;

export default function ScrollTop() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    if (!wrap || !path) return;

    const update = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      // Direct DOM write — no React setState, no re-render, no async delay.
      // This runs synchronously inside the scroll event so the circle
      // updates in lock-step with the user's finger / scroll wheel.
      const offset =
        maxScroll > 0
          ? PATH_LENGTH - (scrollY / maxScroll) * PATH_LENGTH
          : PATH_LENGTH;

      path.style.strokeDashoffset = String(offset);

      if (scrollY > 50) {
        wrap.classList.add("show");
      } else {
        wrap.classList.remove("show");
      }
    };

    // Set correct initial state before first scroll
    update();

    // { passive: true } lets the browser know we won't call preventDefault(),
    // so it can dispatch the event without waiting for our handler — maximum
    // scroll performance.
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={wrapRef} className="scroll-top" onClick={scrollToTop}>
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          ref={pathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: `${PATH_LENGTH}, ${PATH_LENGTH}`,
            strokeDashoffset: PATH_LENGTH,
            // No CSS transition — we update every frame directly,
            // so transition would add lag not smoothness.
          }}
        />
      </svg>
    </div>
  );
}

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef(null);

  useEffect(() => {
    // Detect if device is primarily touch-based (no fine pointer = no real cursor)
    const isTouchOnly = window.matchMedia("(pointer: coarse)").matches;

    if (isTouchOnly) {
      // On touch-only devices, just hide the dot entirely — there's no cursor
      if (dotRef.current) dotRef.current.style.display = "none";
      return;
    }

    // --- Mouse behavior (desktop) ---
    const moveCursor = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
        dotRef.current.style.opacity = "1";
      }
    };

    const hideCursor = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        background: "#3b82f6",
        pointerEvents: "none",
        zIndex: 9999,
        top: 0,
        left: 0,
        opacity: 0, 
        transition: "opacity 0.2s ease, transform 0.05s linear",
      }}
    />
  );
}
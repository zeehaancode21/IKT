import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
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
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
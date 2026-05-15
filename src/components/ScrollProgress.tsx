import { useScrollProgress } from "@/hooks/useScrollAnimation";

const ScrollProgress = () => {
  const progress = useScrollProgress();
  return (
    <div
      className="progress-bar"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
};

export default ScrollProgress;

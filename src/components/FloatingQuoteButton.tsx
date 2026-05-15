import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingQuoteButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg shadow-accent/30 hover:scale-110 transition-transform animate-pulse"
      title="Request Quote"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingQuoteButton;

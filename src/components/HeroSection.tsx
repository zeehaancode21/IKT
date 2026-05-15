import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
  };
}

const UNSPLASH_ACCESS_KEY = "y-0NjtyOH2xNuezIuX_KsS0l3MjHUnEWwgsulS2wk7Q";

const HeroSlider = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState(0);

  /* FETCH IMAGES */
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=steel-construction&count=8&client_id=${UNSPLASH_ACCESS_KEY}`
        );

        const data: UnsplashPhoto[] = await response.json();

        const imageUrls = data.map(
          (photo) =>
            `${photo.urls.regular}&auto=format&fit=crop&w=1920&q=80`
        );

        setPhotos(imageUrls);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchPhotos();
  }, []);

  /* AUTO SLIDER */
  useEffect(() => {
    if (photos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === photos.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [photos]);

  /* PRELOAD */
  useEffect(() => {
    photos.forEach((photo) => {
      const img = new Image();
      img.src = photo;
    });
  }, [photos]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND IMAGES */}
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Slide ${index}`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
            index === currentImage
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-4xl font-bold md:text-6xl"
        >
          Modern Steel Construction
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-2xl text-gray-200 md:text-xl"
        >
          High-quality steel fabrication, industrial construction, and structural engineering solutions.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          {/* <button
            className="btn-primary text-base flex items-center"
            onClick={() =>
              window.open("mailto:zeeshaanm10114@gmail.com")
            }
          >
            Quick Mail
            <ArrowRight className="ml-2 w-5 h-5" />
          </button> */}
          <a href="#about" className="flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 px-6 py-3 font-medium text-white transition hover:scale-105">
            Get Started
            <ArrowRight size={18} />
          </a>

          <a href="#services" className="btn-outline text-base">
            Our Services
          </a>
        </motion.div>
      </div>

      {/* SCROLL ICON */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown size={34} />
      </motion.div>
    </section>
  );
};

export default HeroSlider;
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
  };
  alt_description?: string;
  description?: string;
}

const UNSPLASH_ACCESS_KEY = "beUQwqByJ8Q0W1geBx-UbB12yF49uXrQND0FYYlspQM";

/* FALLBACK IMAGES — curated, verified free-to-use Unsplash photos */
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1609627016501-b862497c7294?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1557143930-d4e7a86a194f?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1444847840129-0ac27946a0a7?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1584099667019-c7fbb1f55664?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1493476523860-a6de6ce1b0c3?auto=format&fit=crop&w=1920&q=80",
];

/* DYNAMIC TEXT CONTENT */
const heroContent = [
  {
    title: "Fabrication-Ready Shop Drawings",
    highlight: "Shop Drawings",
    subtitle:
      "Clear enough for fabrication teams, detailed enough for engineers, and organized enough to prevent unnecessary RFIs before lunch.",
  },
  {
    title: "Connection Detailing That Actually Connects",
    highlight: "Connection Design",
    subtitle:
      "Every bolt, weld, and plate clearly detailed so fabricators don't need detective skills or spiritual guidance to interpret your drawings.",
  },
  {
    title: "Precision Steel Detailing",
    highlight: "Steel Detailing",
    subtitle:
      "Because 'close enough' is an excellent philosophy for street food, not structural steel. We create fabrication-ready drawings that fit together without inspiring emergency site meetings.",
  },
  {
    title: "Tekla Modeling Specialists",
    highlight: "Tekla Experts",
    subtitle:
      "Detailed 3D models built with precision, patience, and significantly fewer emotional breakdowns than traditional coordination workflows.",
  },
  {
    title: "Fast Turnarounds Without the Chaos",
    highlight: "Rapid Delivery",
    subtitle:
      "Meeting tight deadlines with structured workflows instead of the industry-standard approach of panic, caffeine, and midnight optimism.",
  },
  {
    title: "Complex Structures Simplified",
    highlight: "Complex Steel",
    subtitle:
      "Industrial plants, stadiums, warehouses, bridges, and geometries that look illegal — because architects enjoy testing everyone equally.",
  },
  {
    title: "Global Structural Expertise",
    highlight: "Global Projects",
    subtitle:
      "Supporting international projects with detailing accuracy strong enough to survive audits, revisions, and extremely aggressive coordination calls.",
  },
  {
    title: "Engineering With Accountability",
    highlight: "Trusted Accuracy",
    subtitle:
      "Deliverables precise enough that contractors can stop saying, 'we'll adjust it somehow on site,' like that's a real engineering strategy.",
  },
  {
    title: "Steel Detailing Without Drama",
    highlight: "Reliable Workflow",
    subtitle:
      "Structured processes, accurate deliverables, and surprisingly low levels of construction-industry chaos. Honestly, it feels unnatural sometimes.",
  },
  {
    title: "Built Around Real Fabrication",
    highlight: "Fabricator Friendly",
    subtitle:
      "Models and drawings based on how steel is actually fabricated — not on theoretical dimensions invented comfortably far away from the shop floor.",
  },
  {
    title: "Detailing That Saves Time",
    highlight: "Efficient Execution",
    subtitle:
      "Reducing revisions, delays, and site fixes because rebuilding structural steel is generally considered a poor use of everyone's budget.",
  },
  {
    title: "Modern Engineering Workflows",
    highlight: "Modern Construction",
    subtitle:
      "Advanced software, experienced detailers, and just enough sarcasm to survive the daily realities of the construction industry.",
  },
  {
    title: "Coordination You Can Trust",
    highlight: "Project Coordination",
    subtitle:
      "Keeping architects, engineers, fabricators, and contractors aligned — which, statistically speaking, is already an impressive achievement.",
  },
  {
    title: "Drawings That Make Sense",
    highlight: "Clear Documentation",
    subtitle:
      "Readable, logical, and properly organized drawings that don't require five phone calls and a crisis meeting to understand.",
  },
  {
    title: "Built for Real-World Construction",
    highlight: "Site Practicality",
    subtitle:
      "We detail steel for actual construction conditions, not for imaginary projects where every site is perfectly level and nobody makes mistakes.",
  },
  {
    title: "Industrial Detailing Expertise",
    highlight: "Industrial Projects",
    subtitle:
      "Heavy industrial detailing executed with precision, because industrial shutdown delays are somehow even more expensive than everyone expected.",
  },
  {
    title: "Accurate Models. Fewer Problems.",
    highlight: "Precision Modeling",
    subtitle:
      "Highly coordinated models that reduce fabrication issues, field conflicts, and those unforgettable sentences starting with 'slight modification required on-site.'",
  },
  {
    title: "Reliable From Start to Finish",
    highlight: "Project Reliability",
    subtitle:
      "Consistent quality, dependable delivery, and workflows designed to keep projects moving instead of generating fresh confusion every Tuesday.",
  },
  {
    title: "Steel Detailing for Serious Projects",
    highlight: "Professional Execution",
    subtitle:
      "For contractors and fabricators who prefer accuracy, coordination, and functioning structures over expensive surprises and inspirational guesswork.",
  },
];

const HeroSlider = () => {
  const [photos, setPhotos] = useState<string[]>(FALLBACK_IMAGES);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  /* FETCH IMAGES */
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Fix: Use search endpoint with encoded query
        const query = encodeURIComponent("structural steel frame construction");
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${UNSPLASH_ACCESS_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Unsplash request failed: ${response.status}`);
        }

        const data = await response.json();
        const photos = data.results || [];

        if (photos.length === 0) {
          console.log("No photos found, using fallback set");
          return;
        }

        // Filter out rebar/bar images
        const filteredPhotos = photos.filter((photo: UnsplashPhoto) => {
          const text = `${photo.alt_description || ""} ${photo.description || ""}`.toLowerCase();
          return !(
            text.includes("bar") ||
            text.includes("reinforcement") ||
            text.includes("steel bar") ||
            text.includes("reinforcement bar") ||
            text.includes("mesh bar") ||
            text.includes("rebar")
          );
        });

        const imageUrls = (filteredPhotos.length ? filteredPhotos : photos)
          .slice(0, 8)
          .map(
            (photo: UnsplashPhoto) =>
              `${photo.urls.regular}&auto=format&fit=crop&w=1920&q=80`
          );

        if (imageUrls.length) {
          setPhotos(imageUrls);
          console.log("Successfully loaded images from Unsplash");
        }
      } catch (error) {
        // API failed — FALLBACK_IMAGES stays in place
        console.error("Failed to fetch images, using fallback set:", error);
      }
    };

    fetchPhotos();
  }, []);

  /* IMAGE SLIDER */
  useEffect(() => {
    if (photos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === photos.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [photos]);

  /* TEXT SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) =>
        prev === heroContent.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* PRELOAD IMAGES */
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
          key={photo}
          src={photo}
          alt={`Steel construction ${index}`}
          className={`absolute inset-0 h-full w-full object-cover 
transition-[opacity,transform] duration-5000 ease-in-out 
will-change-[opacity,transform] transform-gpu ${index === currentImage
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
            }`}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

      {/* ORANGE GLOW EFFECT */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl animate-pulse" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentText}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            {/* HEADING */}
            <motion.h1
              className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, letterSpacing: "0.15em" }}
              animate={{ opacity: 1, letterSpacing: "0em" }}
              transition={{ duration: 0.8 }}
            >
              {heroContent[currentText].title
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className={`inline-block mr-4 ${heroContent[currentText].highlight.includes(word)
                      ? "bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent"
                      : ""
                      }`}
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.h1>

            {/* ANIMATED UNDERLINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "140px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto mt-6 h-[3px] rounded-full bg-gradient-to-r from-orange-400 to-amber-300"
            />

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl"
            >
              {heroContent[currentText].subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <a
            href="#projects"
            className="group rounded-full bg-orange-500 px-8 py-3 font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/30"
          >
            <span className="flex items-center gap-2">
              Explore Projects
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-white/70 transition-colors hover:text-white"
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
      >
        <ChevronDown size={34} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default HeroSlider;
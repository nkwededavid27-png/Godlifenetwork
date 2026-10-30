import { useState, useEffect } from "react";

const images = [
  "/IMG_2631.jpg",
  "/IMG_2704.jpg",
  "/IMG_2715.jpg",
  "/blog-banner.jpg"
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <img
        className="w-80 h-180 m-auto sm:w-135 md:w-200 md:h-210  lg:h-210 mt-5 md:mt-0 rounded-3xl object-cover"
        src={images[index]}
        alt="slideshow"
      />
    </div>
  );
}

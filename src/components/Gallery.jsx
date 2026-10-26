import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
    const images = [
        "/join-hero.jpeg",
        "/Join-hero1.jpeg",
        "/Word-hero.jpeg",
        "/IMG_2630.jpg",
        "/IMG_2631.jpg",
        "/IMG_2632.jpg",
        "/IMG_2633.jpg",
        "/IMG_2634.jpg",
        "/IMG_2635.jpg",
        "/IMG_2636.jpg",
        "/IMG_2641.jpg",
        "/IMG_2642.jpg",
        "/IMG_2643.jpg",
        "/IMG_2645.jpg",
        "/IMG_2647.jpg",
        "/IMG_2650.jpg",
        "/IMG_2651.jpg",
        "/IMG_2653.jpg",
        "/IMG_2656.jpg",
        "/IMG_2658.jpg",
        "/IMG_2659.jpg",
        "/IMG_2660.jpg",
        "/IMG_2661.jpg",
        "/IMG_2700.jpg",
        "/IMG_2701.jpg",
        "/IMG_2704.jpg",
        "/IMG_2706.jpg",
        "/IMG_2707.jpg",
        "/IMG_2708.jpg",
        "/IMG_2710.jpg",
        "/IMG_2711.jpg",
        "/IMG_2712.jpg",
        "/IMG_2715.jpg",
        "/IMG_2720.jpg",
        "/IMG_2721.jpg",
        "/IMG_2724.jpg",
        "/IMG_2725.jpg",
        "/IMG_2726.jpg",
        "/IMG_2728.jpg",
        "/IMG_2732.jpg",
        "/IMG_2733.jpg",
        "/IMG_2734.jpg",
        "/IMG_2743.jpg",
        "/IMG_2745.jpg",
        "/IMG_2746.jpg",
        "/IMG_2752.jpg",
        "/IMG_2753.jpg",
        "/IMG_2754.jpg",
        "/IMG_2755.jpg",
        "/IMG_2756.jpg",
        "/IMG_2757.jpg",
        "/IMG_2760.jpg",
        "/IMG_2761.jpg",
        "/IMG_2762.jpg",
        "/IMG_2765.jpg",
        "/IMG_2770.jpg",
        "/IMG_2771.jpg",
        "/IMG_2772.jpg",
        "/IMG_2773.jpg",
        "/IMG_2774.jpg",
        "/IMG_2776.jpg",
        "/IMG_2779.jpg",
        "/IMG_2783.jpg",
        "/IMG_2784.jpg",
        "/IMG_2786.jpg",
        "/IMG_2787.jpg",
        "/IMG_2789.jpg",
        "/IMG_2791.jpg",
        "/IMG_2793.jpg",
        "/IMG_2796.jpg",
        "/IMG_2797.jpg",
        "/IMG_2803.jpg",
        "/IMG_2804.jpg",
    ];

    const [visibleImages, setVisibleImages] = useState(4);
    const [selectedImage, setSelectedImage] = useState(null);

    const loadMore = () => {
        setVisibleImages((prev) => prev + 4);
    };

    const nextImage = () => {
        if (selectedImage === null) return;

        setSelectedImage(
            (selectedImage + 1) % images.length
        );
    };

    const previousImage = () => {
        if (selectedImage === null) return;

        setSelectedImage(
            selectedImage === 0
                ? images.length - 1
                : selectedImage - 1
        );
    };

    return (
        <section className="py-20 px-5 lg:px-12">
            <h2 className="text-4xl font-bold text-red-600 text-center mb-12">
                Gallery
            </h2>

            {/* Gallery Grid */}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images
                    .slice(0, visibleImages)
                    .map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            onClick={() => setSelectedImage(index)}
                            className="w-full h-52 object-cover rounded-lg cursor-pointer hover:scale-105 transition duration-300 shadow-md"
                        />
                    ))}
            </div>

            {/* Load More Button */}

            {visibleImages < images.length && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={loadMore}
                        className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                    >
                        Load More
                    </button>
                </div>
            )}

            {/* Lightbox */}

            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

                    {/* Close Button */}

                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-5 right-5 text-white"
                    >
                        <X size={35} />
                    </button>

                    {/* Previous */}

                    <button
                        onClick={previousImage}
                        className="absolute left-5 text-white"
                    >
                        <ChevronLeft size={50} />
                    </button>

                    {/* Image */}

                    <img
                        src={images[selectedImage]}
                        alt=""
                        className="max-w-[90%] max-h-[90vh] rounded-lg"
                    />

                    {/* Next */}

                    <button
                        onClick={nextImage}
                        className="absolute right-5 text-white"
                    >
                        <ChevronRight size={50} />
                    </button>

                    {/* Image Counter */}

                    <div className="absolute bottom-6 text-white text-lg">
                        {selectedImage + 1} / {images.length}
                    </div>
                </div>
            )}
        </section>
    );
}
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
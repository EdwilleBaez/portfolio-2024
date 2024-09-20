import React, { useState } from 'react';

type CarouselProps = {
    images: string[];
    initialIndex: number; // Add this prop
};

const Carousel: React.FC<CarouselProps> = ({ images, initialIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [hovered, setHovered] = useState<string | null>(null);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 flex">
                <div
                    className="w-1/2 h-full"
                    onClick={goToPrevious}
                    onMouseEnter={() => setHovered('left')}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: 'pointer' }}
                />
                <div
                    className="w-1/2 h-full"
                    onClick={goToNext}
                    onMouseEnter={() => setHovered('right')}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <img
                src={images[currentIndex]}
                alt={`Imagen ${currentIndex + 1}`}
                className="w-full h-full object-cover object-center"
            />
            <button
                onClick={goToPrevious}
                onMouseEnter={() => setHovered('left')}
                onMouseLeave={() => setHovered(null)}
                className={`text-2xl w-10 h-10 absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/75 rounded-full transition-opacity ${
                    hovered === 'left' ? 'opacity-100' : 'opacity-60'
                }`}
            >
                &#10094;
            </button>
            <button
                onClick={goToNext}
                onMouseEnter={() => setHovered('right')}
                onMouseLeave={() => setHovered(null)}
                className={`text-2xl w-10 h-10 absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/75 rounded-full transition-opacity ${
                    hovered === 'right' ? 'opacity-100' : 'opacity-60'
                }`}
            >
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
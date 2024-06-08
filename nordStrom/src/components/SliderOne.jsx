import React, { useState, useEffect } from 'react';
import "../components/SliderOne.css";

function SliderOne() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://n.nordstrommedia.com/it/174067d3-1128-403d-a7bc-12fdb6563340.jpeg?h=720&w=1608",
        "https://n.nordstrommedia.com/it/a8f1f3ed-54d8-49a3-9f2c-3bc7405d5ef3.jpeg?h=720&w=1608",
        "https://n.nordstrommedia.com/it/dab6ecc2-fd17-4382-87eb-c1bef859d130.jpeg?h=720&w=1608"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="sliderOne">
            <button onClick={prevSlide}>&#10094;</button>
            <img src={images[currentIndex]} alt={`slider-img-${currentIndex + 1}`} />
            <button onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default SliderOne;

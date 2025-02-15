import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    // Handle touch events
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const difference = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50; // Minimum distance for a swipe

        if (Math.abs(difference) > minSwipeDistance) {
            if (difference > 0) {
                // Swiped left - go to next slide
                nextSlide();
            } else {
                // Swiped right - go to previous slide
                prevSlide();
            }
        }

        // Reset values
        touchStartX.current = null;
        touchEndX.current = null;
    };

    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <div className="slider-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <button className="slider-button prev" onClick={prevSlide}>❮</button>
            <button className="slider-button next" onClick={nextSlide}>❯</button>
            
            {slides.map((slide, index) => (
                <div
                    className={`slide ${index === current ? 'active' : ''}`}
                    key={index}
                >
                    {index === current && (
                        <div className="slide-content">
                            <div className="video-container">
                                {slide.type === 'video' ? (
                                    <video 
                                        className="slide-media"
                                        autoPlay 
                                        loop={false}
                                        muted
                                        controls={false}
                                        playsInline
                                        onEnded={() => nextSlide()}
                                    >
                                        <source src={slide.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img 
                                        src={slide.src} 
                                        alt={slide.title} 
                                        className="slide-media"
                                    />
                                )}
                            </div>
                            <div className="slide-text-container">
                                <h3 className="slide-title">Client Testimonial</h3>
                                <p className="slide-description">{slide.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider; 
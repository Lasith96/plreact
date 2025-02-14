import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <div className="slider-container">
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
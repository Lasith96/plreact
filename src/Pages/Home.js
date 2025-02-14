import React, { useState, useEffect } from 'react';
import './Home.css';
import residentialHero from '../assets/residentialhero.jpg';
import commercialHero from '../assets/commercialhero.jpg';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            image: residentialHero,
            heading: "Revive Your Home with Flawless Floors",
            text: "Expert floor cleaning and restoration services for your home. Making Sydney's floors spotless and like new."
        },
        {
            image: commercialHero,
            heading: "Impress Clients with Spotless Floors",
            text: "Professional floor care solutions for businesses. Keeping Sydney's commercial spaces pristine."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, );

    return (
        <div className="home">
            <div className="hero-container">
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`hero ${index === activeIndex ? 'active' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)
                            ), url(${slide.image})`
                        }}
                    >
                        <div className="hero-content">
                            <h1>{slide.heading}</h1>
                            <p>{slide.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

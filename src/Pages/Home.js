import React, { useState, useEffect } from 'react';
import './Home.css';
import residentialHero from '../assets/residentialhero.jpg';
import commercialHero from '../assets/commercialhero.jpg';
import Slider from '../components/Slider';
import Button from '../components/button1.js';
import aboutUsImage from '../assets/aboutus.png';
import Footer from '../components/Footer';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const heroSlides = [
        {
            type: 'image',
            src: residentialHero,
            title: "Revive Your Home with Flawless Floors",
            description: "Expert floor cleaning and restoration services for your home. Making Sydney's floors spotless and like new."
        },
        {
            type: 'image',
            src: commercialHero,
            title: "Impress Clients with Spotless Floors",
            description: "Professional floor care solutions for businesses. Keeping Sydney's commercial spaces pristine."
        }
    ];

    const testimonialSlides = [
        {
            type: 'video',
            src: '/videos/cleaning1.mp4',
            description: "...our workshop floor has never looked this clean! 10/10 Would recommend"
        },
        {
            type: 'video',
            src: '/videos/cleaning2.mp4',
            description: "We've had multiple cleaners come out but noone did as good a job as ProLion Floor Care."
        },
        {
            type: 'video',
            src: '/videos/cleaning3.mp4',
            description: "...I thought we were going to have to throw this out until Hash and his team brought it back to life!"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % heroSlides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, );

    useEffect(() => {
        // Set up intersection observer for fade-in effect
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 }); // Start animation when 10% of the section is visible

        // Observe testimonials section
        const testimonialSection = document.querySelector('.testimonials-section');
        if (testimonialSection) {
            observer.observe(testimonialSection);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-scroll');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const testimonialSection = document.querySelector('.testimonials-section');
        if (testimonialSection) {
            observer.observe(testimonialSection);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home">
            <div className="hero-container">
                {heroSlides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`hero ${index === activeIndex ? 'active' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)
                            ), url(${slide.src})`
                        }}
                    >
                        <div className="hero-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="content-wrapper">
                <div className="about-section" id="about">
                    <h2>About Us</h2>
                    <div className="about-content">
                        <div className="about-image">
                            <img src={aboutUsImage} alt="ProLion Floor Care Team" />
                        </div>
                        <div className="about-text">
                            <p>At ProLion FloorCare, we are committed to delivering top-tier cleaning and restoration services for both residential and commercial spaces. Based in Sydney, we have been proudly serving our community for over five years, backed by a team with over 20 years of combined experience in floor restoration.</p>
                            
                            <p>Our expertise covers a wide range of flooring materials, including carpets, vinyl, tiles, grout, timber, and more. Whether it's deep cleaning, stain removal, or full-scale restoration, we bring industry-leading knowledge and techniques to every job.</p>
                            
                            <div className="certifications">
                                <p>We are <span className="highlight">IICRC</span> (Institute of Inspection Cleaning and Restoration Certification) and <span className="highlight">SCRIA</span> (Specialised Cleaning & Restoration Industry Association) certified, ensuring that our services meet the highest standards of quality and professionalism.</p>
                            </div>
                            
                            <p>At ProLion FloorCare, we don't just clean – we restore, protect, and enhance the longevity of your floors, giving your space a fresh and polished look.</p>
                            
                            <Button>📞 Contact us today and experience the ProLion difference!</Button>
                        </div>
                    </div>
                </div>

                <div className="residential-services" id="residential">
                    <h2>Residential Cleaning Services</h2>
                    <p className="service-intro">
                        Your home deserves the best care, and at ProLion FloorCare, we specialize in deep cleaning and restoration to keep your living space fresh, clean, and allergen-free. Whether it's carpets, upholstery, vinyl, or tiles, our expert team ensures your home looks and feels revitalized.
                    </p>
                    
                    <h3>Our residential services include:</h3>
                    <ul className="service-list">
                        <li>Carpet & upholstery cleaning and restoration</li>
                        <li>Specialist stain removal</li>
                        <li>Odor control and treatment</li>
                        <li>Water damage restoration</li>
                        <li>Anti-allergen treatment</li>
                        <li>Oriental and natural sisal rug cleaning</li>
                        <li>Vinyl, tile, grout, timber, and cork floor care</li>
                    </ul>
                    
                    <p className="service-outro">
                        We use industry-leading techniques and eco-friendly solutions to restore and maintain your home's surfaces. Let us bring your floors and furniture back to life with our professional touch!
                    </p>
                    
                    <Button>📞 Book your home cleaning today!</Button>
                </div>

                <div className="commercial-services" id="commercial">
                    <h2>Commercial Cleaning Services</h2>
                    <p className="service-intro">
                        A clean workspace is essential for productivity and a great first impression. ProLion FloorCare provides specialized commercial cleaning services designed to maintain the professional appearance of your business while ensuring a safe and hygienic environment.
                    </p>
                    
                    <h3>Our commercial services include:</h3>
                    <ul className="service-list">
                        <li>Carpet & upholstery cleaning for offices, retail stores, and hotels</li>
                        <li>Stain and odor removal for high-traffic areas</li>
                        <li>Water damage restoration for unexpected spills or flooding</li>
                        <li>Floor sealing and maintenance for vinyl, tile, grout, timber, and cork</li>
                        <li>Specialized cleaning for restaurants, healthcare facilities, and educational institutions</li>
                    </ul>
                    
                    <p className="service-outro">
                        With certified professionals and high-grade cleaning solutions, we ensure that your commercial space stays spotless and well-maintained.
                    </p>
                    
                    <Button>📞 Get a customized cleaning plan for your business today!</Button>
                </div>

                <div className="testimonials-section" id="testimonials">
                    <h2>What Our Clients Say</h2>
                    <Slider slides={testimonialSlides} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;

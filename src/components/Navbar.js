import React, { useState } from 'react';
import './Navbar.css';
import Button1 from './Button1';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = 120; // Height of your navbar plus some padding
            const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img 
                        src="/navlogo.png" 
                        alt="ProLion Floor Care Logo" 
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
                    />
                </div>
                
                <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <div className="nav-items">
                        <div className="nav-link" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                            Home
                        </div>
                        <div className="nav-link" onClick={() => scrollToSection('about')}>
                            About Us
                        </div>
                        <div className="nav-link" onClick={() => scrollToSection('residential')}>
                            Residential
                        </div>
                        <div className="nav-link" onClick={() => scrollToSection('commercial')}>
                            Commercial
                        </div>
                        <div className="nav-link" onClick={() => scrollToSection('testimonials')}>
                            Testimonials
                        </div>
                    </div>
                    <div className="quote-button">
                        <Button1>Request a Quote</Button1>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

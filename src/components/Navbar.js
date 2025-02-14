import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './button1.js';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { path: '/', text: 'Home' },
        { path: '/residential', text: 'Residential' },
        { path: '/commercial', text: 'Commercial' },
        { path: '/testimonials', text: 'Testimonials' },
        { path: '/about', text: 'About Us' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src="/navlogo.png" alt="Company Logo" />
                    </Link>
                </div>

                <div className="mobile-menu">
                    <button 
                        className="hamburger" 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <div className="nav-items">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                    <div className="quote-button">
                        <Button onClick={closeMenu}>Request a Quote</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

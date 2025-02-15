import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>📞 0411 169 565</p>
                    <p>✉ hash@prolionfloorcare.com.au</p>
                    <p>🌐 www.prolionfloorcare.com.au</p>
                </div>
                
                <div className="footer-section">
                    <h3>Certifications</h3>
                    <p>✅ Certified by IICRC & SCRIA</p>
                    <p>🔒 Fully insured & trusted professionals</p>
                    <p>ABN: 33 646 602 691</p>
                </div>
                
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=100071084015800" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="social-link">
                            <i className="fab fa-facebook-f"></i>
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 ProLion FloorCare. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 
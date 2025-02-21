import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './services.css';
import Button1 from '../components/button1';
import Footer from '../components/Footer';

const services = [
    {
        id: 1,
        title: "Carpet & Upholstery Cleaning",
        description: `At ProLionFloorCare, we're experts in transforming tired carpets and upholstery into fresh, vibrant centerpieces of your space. Over time, dust, dirt, and allergens build up deep within fibers—far beyond the reach of standard vacuuming. Our advanced carpet and upholstery cleaning services use powerful, eco-friendly techniques to lift dirt, remove stains, and extend the life of your furnishings.

        Why Choose Our Carpet & Upholstery Cleaning?

        ✅ Deep Steam Cleaning – Our commercial-grade equipment reaches deep into fibers, using high-temperature steam to dissolve and extract embedded dirt, leaving your carpets thoroughly cleaned from base to surface.
        
        ✅ Eco-Friendly Solutions – We use biodegradable, non-toxic cleaning solutions that are tough on stains but gentle on your family and pets. Our products are carefully selected to maintain indoor air quality while delivering professional results.
        
        ✅ Stain & Odor Removal – Our specialized treatment process targets stubborn stains like wine, coffee, pet accidents, and more. We don't just mask odors—we eliminate them at the molecular level using enzyme-based cleaners.
        
        ✅ Improved Air Quality – Our deep-cleaning process removes up to 98% of allergens, dust mites, and microscopic pollutants, creating a healthier indoor environment for your family or employees.

        Whether it's a high-traffic office carpet or your family's favorite couch, we customize our approach to protect delicate fabrics while achieving the deepest clean. Our certified technicians assess each item's material and condition, ensuring the perfect balance of cleaning power and fabric care.

        Trust ProLionFloorCare to revitalize your carpets and upholstery with our proven three-step process:
        1. Initial inspection and spot testing
        2. Deep steam cleaning with eco-friendly solutions
        3. Final grooming and deodorizing treatment

        Let us bring life back to your spaces—fresh, clean, and allergen-free.`,
        image: "/images/carpet-cleaning.jpg",
        ctaText: "Schedule Carpet Cleaning"
    },
    {
        id: 2,
        title: "Tile & Grout Cleaning",
        description: `Tiles can add beauty and elegance to a space, but over time, dirt and grime can dull their shine, especially in grout lines that absorb moisture and bacteria. At ProLionFloorCare, our tile and grout cleaning service brings your floors back to life, restoring brightness and cleanliness with professional precision.

        Our Tile & Grout Cleaning Process:

        🧽 High-Pressure Cleaning
        • Advanced rotary tools with adjustable pressure settings
        • Specialized cleaning solutions that break down years of buildup
        • Thorough extraction that removes all debris and cleaning agents
        
        🦠 Mold & Mildew Treatment
        • Professional-grade sanitizing agents
        • Deep penetration into porous surfaces
        • Prevention of future growth
        
        ✨ Grout Restoration
        • Color-matched grout cleaning
        • Repair of damaged or crumbling grout
        • Professional recoloring services available
        
        🛡️ Protection & Sealing
        • Premium penetrating sealers
        • Stain-resistant barrier
        • Long-lasting protection

        We handle all types of tiled surfaces—ceramic, porcelain, natural stone, and more—ensuring no damage while achieving a sparkling finish. Our technicians are trained in the specific care requirements of each material type, from delicate natural stone to durable porcelain.

        From kitchens and bathrooms to commercial lobbies and patios, ProLionFloorCare ensures your tiles shine like new, leaving a lasting impression that speaks to your attention to detail.`,
        image: "/images/tile-cleaning.jpg",
        ctaText: "Schedule Tile Cleaning"
    },
    {
        id: 3,
        title: "Vinyl & Hardwood Floor Polishing",
        description: `Vinyl and hardwood floors can lose their shine over time due to daily wear, scratches, and exposure to cleaning chemicals. At ProLionFloorCare, our expert vinyl and hardwood floor polishing services are designed to restore your floors' natural beauty, leaving them glossy, durable, and protected.

        For vinyl flooring, we use specialized stripping and sealing techniques to remove old layers of wax and grime before applying high-quality finishes that enhance durability and give your floors a sleek, clean appearance. Our eco-friendly sealants also protect against scuffs and spills, extending the life of your floors.

        When it comes to hardwood, our polishing process gently buffs away surface scratches and dull spots, revitalizing the natural wood grain and bringing out a beautiful, lasting shine. We use non-toxic polishes that not only enhance aesthetics but also offer added protection against daily wear.

        Whether it's your home or business, shiny, well-maintained floors make a lasting impression. Let ProLionFloorCare breathe new life into your vinyl and hardwood floors, leaving them spotless, vibrant, and ready to impress.`,
        image: "/images/floor-polishing.jpg",
        ctaText: "Schedule Floor Polishing"
    },
    {
        id: 4,
        title: "Commercial Floor Maintenance",
        description: `Keeping commercial spaces clean and presentable is essential for creating a professional and welcoming environment. ProLionFloorCare offers tailored commercial floor maintenance solutions that keep your business looking its best while protecting your floors from long-term wear and tear.

        We understand that every commercial space has unique needs, whether it's a bustling office, retail store, restaurant, or industrial facility. Our expert team provides a comprehensive range of floor care services, including routine cleaning, deep scrubbing, stripping and sealing, and high-gloss polishing. We work with all flooring types—vinyl, tile, hardwood, concrete, and carpet—using advanced equipment and eco-friendly products that ensure a thorough clean without disrupting your operations.

        Our flexible scheduling options mean we can clean after hours, weekends, or during low-traffic times to minimize disruption. Plus, our regular maintenance plans help prevent costly repairs and extend the life of your flooring.

        Invest in your business's first impression. With ProLionFloorCare, you'll receive professional, reliable, and cost-effective floor care that leaves your space spotless and welcoming for clients and employees alike.`,
        image: "/images/commercial-cleaning.jpg",
        ctaText: "Schedule Commercial Service"
    },
    {
        id: 5,
        title: "Stain Removal & Odor Treatment",
        description: `Stubborn stains and lingering odors can make even the cleanest spaces feel uninviting. ProLionFloorCare specializes in advanced stain removal and odor treatment solutions, designed to eliminate tough spots and deep-seated smells from carpets, rugs, upholstery, and hard flooring.

        Our trained technicians use industry-leading products and techniques to tackle the most persistent stains—from wine, coffee, and ink to pet accidents and grease. We don't just mask the problem; we treat the root cause. Our deep-cleaning methods break down stains at the molecular level, ensuring they're lifted for good.

        Odors can be even more stubborn, especially when trapped deep within carpet fibers or porous materials. Our odor-neutralizing treatments go beyond surface cleaning, targeting the source of unpleasant smells and eliminating bacteria that contribute to lingering odors. Whether it's pet smells, smoke, mildew, or food odors, we leave your space smelling fresh and clean.

        Don't let stains and odors ruin your floors or furniture. With ProLionFloorCare, you can enjoy spotless surfaces and a fresher, healthier environment—every time.`,
        image: "/images/stain-removal.jpg",
        ctaText: "Schedule Stain Treatment"
    }
];

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [dragStart, setDragStart] = useState(0);

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                setDirection(1);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isPaused]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 1,
            scale: 0.95,
            transformOrigin: 'center',
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transformOrigin: 'center',
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 1,
            scale: 0.95,
            transformOrigin: 'center',
        })
    };

    const handleDragStart = (event, info) => {
        setIsPaused(true);
        setDragStart(info.point.x);
        console.log('Drag started at:', info.point.x);
    };

    const handleDragEnd = (event, info) => {
        const dragEnd = info.point.x;
        const dragDiff = dragStart - dragEnd;
        console.log('Drag ended at:', dragEnd, 'Difference:', dragDiff);

        if (Math.abs(dragDiff) > 50) {
            if (dragDiff > 0) {
                console.log('Swiping left');
                setDirection(1);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
            } else {
                console.log('Swiping right');
                setDirection(-1);
                setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
            }
        }
        
        setTimeout(() => setIsPaused(false), 1000);
    };

    return (
        <>
            <div className="services-container">
                <h1 className="services-title">Our Services</h1>
                
                <div className="slideshow-container">
                    <AnimatePresence 
                        initial={false} 
                        custom={direction} 
                        mode="popLayout"
                    >
                        <motion.div
                            key={currentIndex}
                            className="slide-content"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { 
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                    mass: 0.5
                                },
                                scale: {
                                    duration: 0.4
                                }
                            }}
                            drag="x"
                            dragConstraints={{ left: -100, right: 100 }}
                            dragElastic={0.1}
                            dragMomentum={false}
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                            onHoverStart={() => setIsPaused(true)}
                            onHoverEnd={() => setIsPaused(false)}
                        >
                            <div className="service-image-container">
                                <img 
                                    src={services[currentIndex].image} 
                                    alt={services[currentIndex].title}
                                    className="service-image"
                                />
                            </div>
                            <div className="service-text">
                                <h2>{services[currentIndex].title}</h2>
                                {services[currentIndex].description.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                <Button1 
                                    text={services[currentIndex].ctaText}
                                    service={services[currentIndex].title}
                                    className="cta-button"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Services;

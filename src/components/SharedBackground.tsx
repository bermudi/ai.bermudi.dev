// Import necessary hooks from React
import { useState, useEffect, ReactNode, useRef } from 'react';
// Import GSAP animation library
import gsap from "gsap";
// Import ScrollTrigger plugin for scroll-based animations
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

interface SharedBackgroundProps {
    children: ReactNode;
}

const SharedBackground = ({ children }: SharedBackgroundProps) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const planetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Preload images
        const images = [
            '/backgrounds/background.png',
            '/backgrounds/planet.png'
        ];

        Promise.all(images.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        }))
            .then(() => setImagesLoaded(true))
            .catch(err => console.error('Error loading background images:', err));
    }, []);

    useEffect(() => {
        if (planetRef.current && containerRef.current) {
            gsap.to(planetRef.current, {
                yPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });
        }
    }, [imagesLoaded]);

    if (!imagesLoaded) {
        return null; // Don't render anything until images are loaded
    }

    return (
        <div ref={containerRef} className="relative w-full">
            {/* Space background */}
            <div
                className="fixed inset-0 w-full"
                style={{
                    backgroundImage: `url('/backgrounds/background.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat-y',
                    zIndex: -2,
                    height: '100%'
                }}
            />
            {/* Planet overlay */}
            <div
                ref={planetRef}
                className="fixed inset-x-0 bottom-0 w-full"
                style={{
                    backgroundImage: `url('/backgrounds/planet.png')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1,
                    height: '100vh'
                }}
            />
            {/* Content */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
};

// Export component for use in other files
export default SharedBackground;
// Import necessary hooks from React
import { useState, useEffect, ReactNode } from 'react';
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

    if (!imagesLoaded) {
        return null; // Don't render anything until images are loaded
    }

    return (
        <div className="relative w-full">
            {/* Space background */}
            <div
                className="fixed inset-0 w-full h-full"
                style={{
                    backgroundImage: `url('/backgrounds/background.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -2,
                    minHeight: '100vh'
                }}
            />
            {/* Planet overlay */}
            <div
                className="fixed inset-0 w-full h-full"
                style={{
                    backgroundImage: `url('/backgrounds/planet.png')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1,
                    minHeight: '100vh'
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
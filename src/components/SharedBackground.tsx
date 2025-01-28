// Import necessary hooks from React
import { useEffect, useRef } from "react";
// Import GSAP animation library
import gsap from "gsap";
// Import ScrollTrigger plugin for scroll-based animations
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Define SharedBackground component
const SharedBackground = () => {
    // Create ref for main container div
    const containerRef = useRef<HTMLDivElement>(null);
    // Create ref for space background div
    const spaceRef = useRef<HTMLDivElement>(null);
    // Create ref for planet overlay div
    const planetRef = useRef<HTMLDivElement>(null);

    // Set up animations when component mounts
    useEffect(() => {
        // Create GSAP context for scoped animations
        const ctx = gsap.context(() => {
            // Animate space background with parallax effect
            gsap.to(spaceRef.current, {
                y: -300, // Move background up by 300px
                ease: "none", // Linear animation
                scrollTrigger: {
                    trigger: containerRef.current, // Element that triggers animation
                    start: "top bottom", // Start when container's top hits viewport's bottom
                    end: "bottom top", // End when container's bottom hits viewport's top
                    scrub: true // Smooth animation tied to scroll position
                }
            });

            // Animate planet reveal and parallax effect
            gsap.fromTo(planetRef.current,
                {
                    y: "100vh", // Start position: 100% viewport height below
                    opacity: 1 // Start fully transparent
                },
                {
                    y: "-30vh", // End position: 30% viewport height above
                    opacity: 1, // End fully visible
                    ease: "none", // Linear animation
                    scrollTrigger: {
                        trigger: containerRef.current, // Element that triggers animation
                        start: "top bottom", // Start when container's top hits viewport's bottom
                        end: "bottom top", // End when container's bottom hits viewport's top
                        scrub: true // Smooth animation tied to scroll position
                    }
                }
            );
        });

        // Cleanup function to remove animations when component unmounts
        return () => ctx.revert();
    }, []); // Empty dependency array means this runs once on mount

    // Render component
    return (
        <div
            ref={containerRef}
            style={{
                position: "absolute", // Position relative to nearest positioned ancestor
                top: "100vh", // Start after first viewport height
                left: 0, // Align to left edge
                width: "100%", // Full width
                height: "200vh", // Double viewport height for scroll space
                overflow: "hidden" // Hide content outside container
            }}
        >
            {/* Space background div */}
            <div
                ref={spaceRef}
                style={{
                    backgroundImage: "url('/backgrounds/background.png')", // Space background image
                    backgroundSize: "cover", // Scale image to cover container
                    backgroundPosition: "center", // Center the background image
                    position: "absolute", // Position relative to container
                    top: 0, // Align to top
                    left: 0, // Align to left
                    width: "100%", // Full width
                    height: "200vh", // Double viewport height to match container
                }}
            />
            {/* Planet overlay div */}
            <div
                ref={planetRef}
                style={{
                    backgroundImage: "url('/backgrounds/planet.png')", // Planet image
                    backgroundSize: "contain", // Scale image to fit within container
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Don't repeat the image
                    position: "absolute", // Position relative to container
                    top: 0, // Align to top
                    left: 0, // Align to left
                    width: "100%", // Full width
                    height: "100vh", // Single viewport height
                }}
            />
        </div>
    );
};

// Export component for use in other files
export default SharedBackground;
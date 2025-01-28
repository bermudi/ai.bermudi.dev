import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxBackgroundProps {
    children: ReactNode;
    overlayClassName?: string;
}

const ParallaxBackground = ({ children, overlayClassName }: ParallaxBackgroundProps) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 300]); // Adjust these values to control parallax intensity

    return (
        <section className="min-h-screen relative overflow-hidden">
            <motion.div
                style={{
                    y,
                    backgroundImage: "url('/backgrounds/background2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: "-20%", // Extra space for parallax movement
                    left: 0,
                    right: 0,
                    bottom: "-20%", // Extra space for parallax movement
                }}
            />
            {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
            <div className="relative z-10">{children}</div>
        </section>
    );
};

export default ParallaxBackground; 
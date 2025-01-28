import { motion, useScroll, useTransform } from "framer-motion";

const SharedBackground = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, -300]); // Negative value to scroll up when scrolling down

    return (
        <motion.div
            style={{
                y,
                backgroundImage: "url('/backgrounds/background1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "fixed",
                top: "100vh", // Start after the hero section
                left: 0,
                right: 0,
                height: "100vh",
                zIndex: 0,
            }}
            className="opacity-100"
        />
    );
};

export default SharedBackground; 
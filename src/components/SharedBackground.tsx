import { motion, useScroll, useTransform } from "framer-motion";

const SharedBackground = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, -300]); // Negative value to scroll up when scrolling down

    return (
        <motion.div
            style={{
                y,
                backgroundImage: "url('/backgrounds/background8.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                minHeight: "300vh", // Cover all three sections
            }}
        />
    );
};

export default SharedBackground; 
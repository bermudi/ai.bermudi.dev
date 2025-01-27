import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import FutureSection from "../components/FutureSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <HeroSection />
      <FeaturesSection />
      <FutureSection />
      <ContactSection />
    </motion.div>
  );
};

export default Index;
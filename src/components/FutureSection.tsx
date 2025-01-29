import { motion } from "framer-motion";
import ImageGenerator from "./ImageGenerator";

const FutureSection = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white/10 rounded-full backdrop-blur-md border border-white/20"
            >
              Tomorrow's World
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
            >
              Create with{" "}
              <span className="text-white">
                AI
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 mb-12 leading-relaxed"
            >
              Transform your ideas into stunning visuals with our AI-powered image generation
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ImageGenerator />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;
import { motion } from "framer-motion";

const FutureSection = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
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
              Shaping the Future with{" "}
              <span className="text-white">
                Artificial Intelligence
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 mb-12 leading-relaxed"
            >
              AI is not just changing how we work and live—it's revolutionizing what's possible
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 py-4 overflow-hidden rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              <span className="text-lg font-medium text-white">Learn More</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;
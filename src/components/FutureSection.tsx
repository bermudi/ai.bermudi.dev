import { motion } from "framer-motion";

const FutureSection = () => {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(225deg,#FFE29F_0%,#FFA99F_48%,#FF719A_100%)] opacity-30" />
      <div className="absolute inset-0 backdrop-blur-sm" />
      <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white/10 rounded-full backdrop-blur-md border border-white/20"
            >
              Tomorrow's World
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Shaping the Future with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-red-300">
                Artificial Intelligence
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 mb-12 leading-relaxed"
            >
              AI is not just changing how we work and live—it's revolutionizing what's possible
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 py-4 overflow-hidden rounded-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 group-hover:opacity-90 transition-opacity" />
              <span className="relative text-lg font-medium">Learn More</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;
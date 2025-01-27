import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(102.3deg,rgba(147,39,143,1)_5.9%,rgba(234,172,232,1)_64%,rgba(246,219,245,1)_89%)] opacity-40" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 z-10 relative"
      >
        <div className="flex flex-col items-center gap-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base font-medium px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            The Future is Here
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-center leading-tight tracking-tighter"
          >
            Artificial
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              Intelligence
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
          >
            Exploring the boundless possibilities of AI technology and its impact on our future
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 overflow-hidden rounded-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:opacity-90 transition-opacity" />
            <span className="relative text-lg font-medium">Discover More</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
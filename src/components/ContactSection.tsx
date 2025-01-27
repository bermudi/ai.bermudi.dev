import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsla(277,75%,84%,1)_0%,hsla(297,50%,51%,1)_100%)] opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white/10 rounded-full backdrop-blur-md border border-white/20">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
            Be Part of the AI Revolution
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join us in shaping the future of artificial intelligence
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group rounded-2xl p-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity blur-xl" />
            <div className="relative backdrop-blur-xl bg-black/50 p-8 rounded-2xl border border-white/10">
              <form className="space-y-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/10 rounded-xl placeholder-gray-400 text-white border border-white/20 focus:outline-none focus:border-white/40 transition-colors text-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium text-lg transition-opacity hover:opacity-90"
                >
                  Stay Updated
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="min-h-screen">
      <div className="w-full px-4 min-h-screen flex items-center justify-center">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-2/3 mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm text-white font-medium bg-white/10 rounded-full backdrop-blur-md border border-white/20">
            Contáctanos
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            No te quedes atrás
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ponte en contacto con nosotros para conocer más y resolver todas tus dudas
          </p>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group rounded-2xl p-1"
          >
            <div className="backdrop-blur-xl bg-black/30 p-8 rounded-2xl border border-white/10">
              <form className="space-y-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/10 rounded-xl placeholder-gray-400 text-white border border-white/20 focus:outline-none focus:border-white/40 transition-colors text-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-xl font-medium text-lg transition-colors"
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
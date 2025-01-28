import { motion } from "framer-motion";
import ParallaxBackground from "./ParallaxBackground";

const features = [
  {
    title: "Machine Learning",
    description: "Advanced algorithms that learn and adapt from experience",
  },
  {
    title: "Neural Networks",
    description: "Sophisticated systems inspired by the human brain",
  },
  {
    title: "Deep Learning",
    description: "Multi-layered neural networks for complex problem solving",
  },
];

const FeaturesSection = () => {
  return (
    <ParallaxBackground overlayClassName="bg-[linear-gradient(90deg,hsla(221,45%,73%,1)_0%,hsla(220,78%,29%,1)_100%)] opacity-20">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Core Technologies
          </h2>
          <p className="text-xl text-gray-400">
            Exploring the fundamental technologies driving AI innovation
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:opacity-100 transition-opacity opacity-0" />
              <div className="relative backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxBackground>
  );
};

export default FeaturesSection;
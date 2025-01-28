import { motion, useInView } from "framer-motion";
import { useScrambleText } from "../utils/scrambleText";
import { useRef } from "react";

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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const titleRef = useScrambleText<HTMLHeadingElement>("Core Technologies", {
    duration: 1100,
    delay: 500,
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    inView: isInView,
  });

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            {/* Text content managed by scrambleText */}
          </h2>
          <p className="text-xl text-gray-400">
            Exploring the fundamental technologies driving AI innovation
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative backdrop-blur-sm bg-black/30 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors">
                <div className="h-20 w-20 rounded-xl bg-white/10 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
import { motion, useInView } from "framer-motion";
import { useScrambleText } from "../utils/scrambleText";
import { useRef, useEffect } from "react";
import { Crosshair, Shield, Settings, Wallet } from 'lucide-react';
import gsap from 'gsap';

const features = [
  {
    title: "Más Precisos",
    description: "Más precisos y confiables que nunca",
    longDescription: "Los modelos de IA actuales alcanzan niveles de precisión sin precedentes, reduciendo errores y proporcionando resultados más confiables en todas sus tareas.",
    icon: Crosshair,
  },
  {
    title: "Adaptables",
    description: "Adaptables a las necesidades específicas de su empresa",
    longDescription: "Nuestros modelos se ajustan a sus requisitos específicos, permitiendo una personalización completa para alinearse con sus objetivos empresariales.",
    icon: Settings,
  },
  {
    title: "Acceso Seguro",
    description: "Capaces de acceder a sus datos empresariales de forma segura (RAG)",
    longDescription: "Implementamos tecnología RAG (Retrieval-Augmented Generation) para garantizar un acceso seguro y eficiente a sus datos corporativos, manteniendo la confidencialidad.",
    icon: Shield,
  },
  {
    title: "Accesibles",
    description: "Económicamente accesibles para empresas de cualquier tamaño",
    longDescription: "Ofrecemos soluciones escalables y económicamente viables, permitiendo que empresas de todos los tamaños aprovechen el poder de la IA.",
    icon: Wallet,
  },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const iconRefs = useRef<(SVGElement | null)[]>([]);

  const titleRef = useScrambleText<HTMLHeadingElement>("¿Por Qué Ahora?", {
    duration: 1100,
    delay: 500,
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ¿?",
    inView: isInView,
  });

  useEffect(() => {
    iconRefs.current.forEach((iconRef, index) => {
      if (iconRef) {
        // Y-axis rotation for Shield and Wallet icons (index 1 and 3)
        if (index === 1 || index === 3) {
          gsap.to(iconRef, {
            rotationY: 360,
            duration: 20,
            repeat: -1,
            ease: "none",
            transformOrigin: "center center",
          });
        } else {
          gsap.to(iconRef, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "none",
            transformOrigin: "center center",
          });
        }
      }
    });
  }, []);

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
            La IA ha evolucionado significativamente en el último año. Los nuevos modelos son:
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group h-full"
              >
                <div className="relative backdrop-blur-sm bg-black/30 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors h-full flex flex-col">
                  <div className="relative w-20 h-20 rounded-xl bg-white/5 mb-6 flex items-center justify-center">
                    <Icon
                      ref={el => iconRefs.current[index] = el}
                      className="w-10 h-10 text-white/80"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <p className="text-gray-500 text-sm mt-auto">{feature.longDescription}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
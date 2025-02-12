import { motion, useInView } from "framer-motion";
import { useScrambleText } from "../utils/scrambleText";
import { useRef, useEffect, useState } from "react";
import { Crosshair, Shield, Settings, Wallet } from 'lucide-react';
import gsap from 'gsap';
import { SplitText } from "../utils/splitText";
import styled from "styled-components";
import { forwardRef, useImperativeHandle } from 'react';
import { scrambleText } from '../utils/scrambleText';

const AnimatedSection = styled.section<{ $startSplitAnimation: boolean }>`
  .char {
    display: inline-block;
    opacity: 0;
    transform: translateY(80px) rotateX(180deg) scale(0);
    transform-origin: 0% 50% -50px;
    animation: ${props => props.$startSplitAnimation ? 'charAnimation 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' : 'none'};
    will-change: transform, opacity;
  }
  @keyframes charAnimation {
    to {
      opacity: 1;
      transform: translateY(0) rotateX(0) scale(1);
    }
  }
  .char {
    animation-delay: calc(0.02s * var(--char-index, 0));
  }
`;

const features = [
  {
    title: "Más Precisos",
    description: "Más precisos y confiables que nunca",
    longDescription: "Los modelos de IA actuales alcanzan niveles de precisión sin precedentes, reduciendo errores y proporcionando resultados más confiables en todas sus tareas.",
    icon: Crosshair,
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
  {
    title: "Adaptables",
    description: "Adaptables a las necesidades específicas de su empresa",
    longDescription: "Nuestros modelos se ajustan a sus requisitos específicos, permitiendo una personalización completa para alinearse con sus objetivos empresariales.",
    icon: Settings,
  }
];

interface ScrambleRef {
  startScramble: () => void;
}

const ScrambleTextComponent = forwardRef<ScrambleRef, { text: string }>((props, ref) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useImperativeHandle(ref, () => ({
    startScramble: () => {
      if (spanRef.current) {
        // Cleanup previous animation if exists
        if (cleanupRef.current) {
          cleanupRef.current();
        }
        // Start new animation
        cleanupRef.current = scrambleText(spanRef.current, {
          text: props.text,
          duration: 1500,
          delay: 0,
          speed: 50,
          chars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        });
      }
    }
  }), [props.text]);

  // Initialize with scrambled text
  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.textContent = props.text
        .split('')
        .map(char => char === ' ' ? ' ' : 'X')
        .join('');
    }
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [props.text]);

  return <span ref={spanRef} className="inline-block opacity-0 transition-opacity duration-300" style={{ opacity: 1 }}>{props.text}</span>;
});

const FeaturesSection = () => {
  const containerRef = useRef(null);
  const titleContainerRef = useRef(null);
  const titleInView = useInView(titleContainerRef, { once: true, margin: "-100px" });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });
  const iconRefs = useRef<(SVGElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleSplit = useRef<any>(null);
  const scrambleRefs = useRef<(ScrambleRef | null)[]>([]);
  const [startSplitAnimation, setStartSplitAnimation] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(-1);
  const [animationsReady, setAnimationsReady] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setStartSplitAnimation(true);
    }
  }, [titleInView]);

  useEffect(() => {
    if (cardsInView) {
      setTimeout(() => {
        scrambleRefs.current.forEach((ref, index) => {
          setTimeout(() => {
            ref?.startScramble();
          }, index * 200);
        });
      }, 400);
    }
  }, [cardsInView]);

  useEffect(() => {
    if (titleRef.current) {
      titleSplit.current = new SplitText(titleRef.current, {
        type: "words,chars",
        tag: "span",
        charsClass: "char",
        wordsClass: "word"
      });
      // Add character indices for staggered animation
      titleSplit.current.chars.forEach((char: HTMLElement, index: number) => {
        char.style.setProperty('--char-index', index.toString());
      });
    }

    return () => {
      if (titleSplit.current) titleSplit.current.revert();
    };
  }, []);

  useEffect(() => {
    iconRefs.current.forEach((iconRef, index) => {
      if (iconRef) {
        // Y-axis rotation for Shield and Wallet icons (index 1 and 2)
        if (index === 1 || index === 2) {
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

  // Start next feature title animation
  useEffect(() => {
    if (currentFeatureIndex >= 0 && currentFeatureIndex < features.length - 1) {
      const timer = setTimeout(() => {
        setCurrentFeatureIndex(currentFeatureIndex + 1);
      }, 400); // Delay between each feature title animation
      return () => clearTimeout(timer);
    }
  }, [currentFeatureIndex]);

  return (
    <AnimatedSection className="min-h-screen" $startSplitAnimation={startSplitAnimation}>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          ref={titleContainerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 text-white perspective-400"
            style={{ opacity: startSplitAnimation ? 1 : 0 }}
          >
            ¿Por Qué Ahora?
          </h2>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            La IA ha evolucionado significativamente en el último año. Los nuevos modelos son:
          </motion.p>
        </motion.div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    <ScrambleTextComponent 
                      text={feature.title} 
                      ref={(el: ScrambleRef | null) => scrambleRefs.current[index] = el} 
                    />
                  </h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <p className="text-gray-500 text-sm mt-auto">{feature.longDescription}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturesSection;
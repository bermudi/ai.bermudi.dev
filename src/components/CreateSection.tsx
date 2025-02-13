import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SplitText } from "../utils/splitText";
import ImageGenerator from "./ImageGenerator";

const AnimatedSection = ({ children, startSplitAnimation }: { children: React.ReactNode, startSplitAnimation: boolean }) => {
  return (
    <section className="min-h-screen">
      <style>
        {`
          .char {
            display: inline-block;
            opacity: 0;
            transform: translateY(80px) rotateX(180deg) scale(0);
            transform-origin: 0% 50% -50px;
            animation: ${startSplitAnimation ? 'charAnimation 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' : 'none'};
            will-change: transform, opacity;
          }
          @keyframes charAnimation {
            to {
              opacity: 1;
              transform: translateY(0) rotateX(0) scale(1);
            }
          }
          .char {
            animation-delay: calc(0.02s * var(--char-index));
          }
        `}
      </style>
      {children}
    </section>
  );
};

const CreateSection = () => {
  const titleContainerRef = useRef(null);
  const titleInView = useInView(titleContainerRef, { once: true, margin: "-100px" });
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const h2Split = useRef<any>(null);
  const [startSplitAnimation, setStartSplitAnimation] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setStartSplitAnimation(true);
    }
  }, [titleInView]);

  useEffect(() => {
    if (h2Ref.current) {
      h2Split.current = new SplitText(h2Ref.current, {
        type: "words,chars",
        tag: "span",
        charsClass: "char",
        wordsClass: "word"
      });

      h2Split.current.chars.forEach((char: HTMLElement, index: number) => {
        char.style.setProperty('--char-index', index.toString());
      });
    }

    return () => {
      if (h2Split.current) {
        h2Split.current.revert();
      }
    };
  }, []);

  return (
    <AnimatedSection startSplitAnimation={startSplitAnimation}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={titleContainerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 mb-6 text-sm text-white font-medium bg-white/10 rounded-full backdrop-blur-md border border-white/20"
            >
              Un nuevo mundo
            </motion.span>

            <h2
              ref={h2Ref}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white perspective-400"
              style={{ opacity: startSplitAnimation ? 1 : 0 }}
            >
              Creando con <span className="text-white">IA</span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-400 mb-12 leading-relaxed"
            >
              Transforma tus ideas en imágenes impresionantes con solo unas palabras
            </motion.p>
          </motion.div>

          <ImageGenerator />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CreateSection;
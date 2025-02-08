import { motion, useInView } from "framer-motion";
import { useScrambleText } from "../utils/scrambleText";
import { useRef } from "react";
import { useId } from "react";

const defaultChars = 'abcdefghijklmnopqrstuvwxyz';

const HeroSection = () => {
  const filterId = useId();

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute w-full h-full max-w-[44em] left-1/2 -translate-x-1/2">
        <div className="absolute w-[min(100%,100vh)] aspect-square left-1/2 -translate-x-1/2 scale-[1.2] opacity-60 rounded-[100em]
          [box-shadow:inset_0_0_4em_3em_rgba(238,200,175,0.2),inset_0_0_2em_0.4em_rgba(238,200,175,0.2),0_0_0.1em_0.1em_rgba(238,200,175,0.2),0_0_1em_0.4em_rgba(238,200,175,0.3)]
          [translate:0_-70%] animate-onloadbgt"></div>
        <div className="absolute w-[min(100%,100vh)] aspect-square left-1/2 -translate-x-1/2 scale-[1.2] opacity-60 rounded-[100em]
          [box-shadow:inset_0_0_4em_3em_rgba(238,200,175,0.2),inset_0_0_2em_0.4em_rgba(238,200,175,0.2),0_0_0.1em_0.1em_rgba(238,200,175,0.2),0_0_1em_0.4em_rgba(238,200,175,0.3)]
          [translate:0_70%] animate-onloadbgb"></div>
      </div>

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
            className="text-sm md:text-base font-medium px-6 py-2 rounded-full bg-white/10  border border-white/20"
          >
            Tu futuro es aquí
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="header-text text-6xl md:text-8xl lg:text-9xl font-bold text-center leading-tight tracking-tighter"
          >
            <span className="relative z-20 text-white">
              Creando el
              <br />
              <span className="relative z-20 text-white" data-text="Intelligence">
                Mañana
              </span>
              {/* <br />
              Vision */}
            </span>
          </motion.div>
          <div className="space-y-4">
            <div className="relative inline-block">
              <p ref={useScrambleText<HTMLParagraphElement>(
                "En un mundo donde la IA genera tanto entusiasmo como",
                { duration: 500, delay: 0, chars: defaultChars }
              )} className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed absolute inset-0" />
              <span
                aria-hidden="true"
                className="invisible text-xl md:text-2xl text-center leading-relaxed pointer-events-none"
              >
                En un mundo donde la IA genera tanto entusiasmo como
              </span>
            </div>

            <div className="relative inline-block">
              <p ref={useScrambleText<HTMLParagraphElement>(
                "inquietud, ofrecemos claridad y dirección. Nuestra misión",
                { duration: 500, delay: 500, chars: defaultChars }
              )} className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed absolute inset-0" />
              <span
                aria-hidden="true"
                className="invisible text-xl md:text-2xl text-center leading-relaxed pointer-events-none"
              >
                inquietud, ofrecemos claridad y dirección. Nuestra misión
              </span>
            </div>

            <div className="relative inline-block">
              <p ref={useScrambleText<HTMLParagraphElement>(
                "es ayudar a empresas como la suya a implementar",
                { duration: 500, delay: 1000, chars: defaultChars }
              )} className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed absolute inset-0" />
              <span
                aria-hidden="true"
                className="invisible text-xl md:text-2xl text-center leading-relaxed pointer-events-none"
              >
                es ayudar a empresas como la suya a implementar
              </span>
            </div>

            <div className="relative inline-block">
              <p ref={useScrambleText<HTMLParagraphElement>(
                "soluciones de IA de manera segura, práctica y rentable.",
                { duration: 500, delay: 1500, chars: defaultChars }
              )} className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed absolute inset-0" />
              <span
                aria-hidden="true"
                className="invisible text-xl md:text-2xl text-center leading-relaxed pointer-events-none"
              >
                soluciones de IA de manera segura, práctica y rentable.
              </span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 overflow-hidden rounded-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:opacity-90 transition-opacity" />
            <span className="relative text-lg font-medium">Descubre más</span>
          </motion.button>
        </div>
      </motion.div>

      <svg className="filters" width="1440px" height="300px" viewBox="0 0 1440 300">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="-50%" y="-200%" width="200%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur4" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="19" result="blur19" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur9" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30" />
            <feColorMatrix in="blur4" result="color-0-blur" type="matrix" values="1 0 0 0 0 0 0.9803921568627451 0 0 0 0 0 0.9647058823529412 0 0 0 0 0 0.8 0" />
            <feOffset in="color-0-blur" result="layer-0-offsetted" dx="0" dy="0" />
            <feColorMatrix in="blur19" result="color-1-blur" type="matrix" values="0.8156862745098039 0 0 0 0 0 0.49411764705882355 0 0 0 0 0 0.2627450980392157 0 0 0 0 0 1 0" />
            <feOffset in="color-1-blur" result="layer-1-offsetted" dx="0" dy="2" />
            <feColorMatrix in="blur9" result="color-2-blur" type="matrix" values="1 0 0 0 0 0 0.6666666666666666 0 0 0 0 0 0.36470588235294116 0 0 0 0 0 0.65 0" />
            <feOffset in="color-2-blur" result="layer-2-offsetted" dx="0" dy="2" />
            <feColorMatrix in="blur30" result="color-3-blur" type="matrix" values="1 0 0 0 0 0 0.611764705882353 0 0 0 0 0 0.39215686274509803 0 0 0 0 0 1 0" />
            <feOffset in="color-3-blur" result="layer-3-offsetted" dx="0" dy="2" />
            <feMerge>
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="layer-1-offsetted" />
              <feMergeNode in="layer-2-offsetted" />
              <feMergeNode in="layer-3-offsetted" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default HeroSection;

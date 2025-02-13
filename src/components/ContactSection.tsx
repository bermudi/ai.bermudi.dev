import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "../utils/splitText";
import styled from "styled-components";
import { useInView } from "framer-motion";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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

const ContactSection = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleSplit = useRef<any>(null);
  const titleContainerRef = useRef(null);
  const titleInView = useInView(titleContainerRef, { once: true, margin: "-100px" });
  const [startSplitAnimation, setStartSplitAnimation] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setStartSplitAnimation(true);
    }
  }, [titleInView]);

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
    if (contactRef.current) {
      gsap.fromTo(contactRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0,
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top bottom-=10%',
            end: 'bottom bottom',
            scrub: 1,
            markers: false
          }
        }
      );
    }
  }, []);

  return (
    <AnimatedSection $startSplitAnimation={startSplitAnimation} className="min-h-screen">
      <div className="w-full px-4 min-h-screen flex items-center justify-center">
        <div ref={contactRef} className="w-[95%] md:w-2/3 mx-auto opacity-0">
          <span className="inline-block px-4 py-1 mb-6 text-sm text-white font-medium bg-white/10 rounded-full backdrop-blur-md border border-white/20">
            Contáctanos
          </span>
          <div ref={titleContainerRef}>
            <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              No te quedes atrás
            </h2>
          </div>
          <p className="text-xl text-gray-400 mb-12">
            Ponte en contacto con nosotros para conocer más y resolver todas tus dudas
          </p>
          <div className="relative group rounded-2xl p-1">
            <div className="backdrop-blur-xl bg-black/30 p-8 rounded-2xl border border-white/10">
              <form className="space-y-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/10 rounded-xl placeholder-gray-400 text-white border border-white/20 focus:outline-none focus:border-white/40 transition-colors text-lg"
                />
                <button
                  className="w-full px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-xl font-medium text-lg transition-colors"
                >
                  Stay Updated
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
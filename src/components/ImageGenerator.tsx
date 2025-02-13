import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Together from 'together-ai';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(containerRef.current,
              { opacity: 0, y: 50, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1,
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: 'top bottom-=10%',
                  end: 'bottom bottom',
                  scrub: 1,
                  markers: false
                }
              }
            );
        }
        return () => {
            if (containerRef.current) {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }
        };
    }, []);

    const generateImage = async () => {
        try {
            setIsLoading(true);
            const together = new Together({ apiKey: import.meta.env.VITE_TOGETHER_API_KEY });
            const response = await together.images.create({
                model: "black-forest-labs/FLUX.1-schnell-Free",
                prompt: prompt,
                width: 1024,
                height: 768,
                steps: 1,
                n: 1,
                response_format: "url"
            });
            setGeneratedImage(response.data[0].url);
        } catch (error) {
            console.error('Error al generar la imagen:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        if (!generatedImage) return;
        window.open(generatedImage, '_blank');
    };

    return (
        <div
            ref={containerRef}
            className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 relative overflow-hidden"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="relative">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Ingresa tu descripción aquí..."
                            className="w-full h-32 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={generateImage}
                        disabled={isLoading}
                        className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg border border-white/20 text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Generando...' : 'Crear'}
                    </motion.button>
                </div>

                <div className="relative">
                    <div className="aspect-[4/3] bg-white/5 rounded-lg border border-white/20 overflow-hidden">
                        {generatedImage ? (
                            <img
                                src={generatedImage}
                                alt="Imagen Generada"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <span>La imagen generada aparecerá aquí</span>
                            </div>
                        )}
                    </div>
                    {generatedImage && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleDownload}
                            className="absolute bottom-4 right-4 py-2 px-4 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg border border-white/20 text-white text-sm font-medium transition-all"
                        >
                            Ver Imagen
                        </motion.button>
                    )}
                </div>
            </div>

            <div className="mt-8 text-center">
                <motion.button
                    onClick={() => setShowDisclaimer(!showDisclaimer)}
                    className="text-sm text-gray-400 hover:text-gray-300 transition-colors underline underline-offset-4 cursor-pointer"
                >
                    {showDisclaimer ? 'Ocultar Advertencia' : 'Ver Advertencia'}
                </motion.button>

                <AnimatePresence>
                    {showDisclaimer && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-4 p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
                                <p className="text-sm text-gray-400 font-bold mb-2">
                                    Las imágenes generadas por IA pueden variar en precisión y detalle.  Los resultados están influenciados por la descripción proporcionada y las capacidades del modelo.
                                </p>
                                <p className="text-sm text-gray-400">
                                    Esta demostración utiliza un modelo rápido y económico por razones prácticas. Esta calidad representa el mínimo posible - las posibilidades son infinitas con modelos más avanzados.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ImageGenerator;
import { useState } from 'react';
import { motion } from 'framer-motion';
import Together from 'together-ai';

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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
            console.error('Error generating image:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="relative">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Enter your image prompt here..."
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
                        {isLoading ? 'Generating...' : 'Create'}
                    </motion.button>
                </div>

                <div className="relative aspect-[4/3] bg-white/5 rounded-lg border border-white/20 overflow-hidden">
                    {generatedImage ? (
                        <img
                            src={generatedImage}
                            alt="Generated"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <span>Generated image will appear here</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageGenerator; 
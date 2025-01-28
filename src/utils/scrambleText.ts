export interface ScrambleTextConfig {
    text: string;
    chars?: string;
    duration?: number;
    speed?: number;
    delay?: number;
    inView?: boolean;
}

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const scrambleText = (
    element: HTMLElement,
    config: ScrambleTextConfig
): () => void => {
    const finalText = config.text;
    const duration = config.duration ?? 2000;
    const speed = config.speed ?? 50;
    const delay = config.delay ?? 0;
    const chars = config.chars ?? defaultChars;
    const inView = config.inView ?? true;

    let frame: number;
    let startTime: number | null = null;
    let currentText = element.textContent || '';

    const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

    const updateText = (progress: number) => {
        const targetLength = finalText.length;
        const currentLength = Math.ceil(targetLength * progress);

        let result = '';
        for (let i = 0; i < targetLength; i++) {
            if (i < currentLength) {
                result += finalText[i];
            } else {
                result += getRandomChar();
            }
        }

        element.textContent = result;
    };

    const animate = (timestamp: number) => {
        if (!inView) {
            element.textContent = currentText;
            return;
        }

        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime - delay;

        if (elapsed < 0) {
            frame = requestAnimationFrame(animate);
            return;
        }

        const progress = Math.min(elapsed / duration, 1);

        if (progress < 1) {
            updateText(progress);
            frame = requestAnimationFrame(animate);
        } else {
            element.textContent = finalText;
        }
    };

    if (inView) {
        frame = requestAnimationFrame(animate);
    }

    // Return cleanup function
    return () => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
    };
};

// React hook for scrambleText
import { useEffect, useRef } from 'react';

export const useScrambleText = <T extends HTMLElement>(
    text: string,
    config?: Omit<ScrambleTextConfig, 'text'>
) => {
    const elementRef = useRef<T | null>(null);
    const cleanupRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        if (elementRef.current) {
            if (cleanupRef.current) {
                cleanupRef.current();
            }
            cleanupRef.current = scrambleText(elementRef.current, {
                text,
                ...config
            });
        }
        return () => {
            if (cleanupRef.current) {
                cleanupRef.current();
            }
        };
    }, [text, config]);

    return elementRef;
}; 

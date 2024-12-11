import React, { useEffect, useRef } from 'react';
import { useParticleAnimation } from '../../hooks/useParticleAnimation';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useParticleAnimation(canvasRef);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(to bottom right, #1a1a2e, #16213e)' }}
    />
  );
};
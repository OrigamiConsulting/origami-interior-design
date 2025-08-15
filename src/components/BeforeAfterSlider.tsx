'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeAlt = "Before transformation", 
  afterAlt = "After transformation",
  className = ""
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      e.preventDefault(); // Prevent page scrolling
      handleMove(e.touches[0].clientX);
    }
  };

  const handleStart = (e?: TouchEvent | MouseEvent) => {
    if (e) {
      e.preventDefault(); // Prevent default touch/mouse behavior
    }
    setIsDragging(true);
    setHasUserInteracted(true);
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !hasUserInteracted) {
      autoPlayRef.current = setInterval(() => {
        setSliderPosition(prev => {
          // Smooth cycle between 20% and 80%
          const time = Date.now() / 3000; // 3 second cycle
          const position = 50 + 30 * Math.sin(time); // Oscillates between 20-80
          return Math.max(20, Math.min(80, position));
        });
      }, 50); // Update every 50ms for smooth animation
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, hasUserInteracted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden rounded-3xl cursor-col-resize select-none ${className}`}
      onMouseDown={(e) => handleStart(e.nativeEvent)}
      onTouchStart={(e) => handleStart(e.nativeEvent)}
      style={{ touchAction: 'none' }}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
          draggable={false}
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
      </div>

      {/* After Image (Foreground with clip-path) */}
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-75 ease-out"
        style={{
          clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
        }}
      >
        <img 
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
          draggable={false}
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
      </div>

      {/* Slider Line and Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-75 ease-out"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl flex items-center justify-center cursor-col-resize border-4 border-dark-900/10"
          style={{ touchAction: 'none' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            scale: hasUserInteracted ? 1 : [1, 1.1, 1],
            boxShadow: hasUserInteracted ? "0 10px 25px rgba(0,0,0,0.3)" : ["0 10px 25px rgba(0,0,0,0.3)", "0 15px 35px rgba(247,147,30,0.4)", "0 10px 25px rgba(0,0,0,0.3)"]
          }}
          transition={{ 
            duration: hasUserInteracted ? 0.2 : 2, 
            repeat: hasUserInteracted ? 0 : Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center space-x-1">
            {/* Left Arrow */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-dark-600">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
            {/* Center divider */}
            <div className="w-0.5 h-6 bg-dark-400 rounded-full"></div>
            
            {/* Right Arrow */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-dark-600">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>


    </div>
  );
};

export default BeforeAfterSlider;

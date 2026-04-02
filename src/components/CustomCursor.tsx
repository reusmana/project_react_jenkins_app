import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    // QuickTo for smooth trailing
    const xTo = gsap.quickTo(cursor, "left", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "top", { duration: 0.4, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Global Button Hover logic
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isButton = target.closest('button, .cta-button, a');
      
      // Cursor scale
      gsap.to(cursor, {
        width: 120,
        height: 120,
        duration: 0.3,
        ease: "power2.out"
      });

      // Button Press Animation (Neo-Brutalist)
      if (isButton && (isButton.classList.contains('neo-shadow') || isButton.classList.contains('neo-shadow-sm'))) {
        gsap.to(isButton, {
          x: 2,
          y: 2,
          boxShadow: "0px 0px 0px 0px rgba(26,26,26,1)",
          duration: 0.1,
          ease: "power1.out"
        });
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isButton = target.closest('button, .cta-button, a');

      // Cursor reset
      gsap.to(cursor, {
        width: 80,
        height: 80,
        duration: 0.3,
        ease: "power2.out"
      });

      // Button reset
      if (isButton && (isButton.classList.contains('neo-shadow') || isButton.classList.contains('neo-shadow-sm'))) {
        const shadow = isButton.classList.contains('neo-shadow') ? "4px 4px 0px 0px rgba(26,26,26,1)" : "2px 2px 0px 0px rgba(26,26,26,1)";
        gsap.to(isButton, {
          x: 0,
          y: 0,
          boxShadow: shadow,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter as any, true);
    document.addEventListener('mouseleave', handleMouseLeave as any, true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter as any, true);
      document.removeEventListener('mouseleave', handleMouseLeave as any, true);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      id="custom-cursor"
      className="fixed top-0 left-0 w-[80px] h-[80px] bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{ width: '80px', height: '80px' }}
    />
  );
};

export default CustomCursor;

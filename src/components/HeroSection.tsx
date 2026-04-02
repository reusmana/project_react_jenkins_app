import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reveal animation
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      });

      // Floating animation for 3D shape
      if (floatRef.current) {
        gsap.to(floatRef.current, {
          y: -20,
          rotate: 5,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Pulse animation for the background glow
      gsap.to(".glow-bg", {
        scale: 1.2,
        opacity: 0.4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  return (
    <header
      ref={container}
      className="relative flex flex-col items-center justify-center min-h-screen px-8 pt-24 overflow-hidden grid-bg"
    >
      {/* Floating 3D Illustration */}
      <div
        ref={floatRef}
        className="absolute right-[10%] top-[20%] w-64 h-64 md:w-96 md:h-96 opacity-80 pointer-events-none z-0"
      >
        <img
          className="object-contain w-full h-full"
          alt="3D Shape"
          src="/images/reusmana-new.png"
        />
      </div>

      <div className="relative z-10 w-full text-center">
        <p className="reveal-text font-label uppercase tracking-[0.2em] mb-4 text-primary font-bold">
          Available for Project Collaboration
        </p>
        <h1
          ref={headlineRef}
          className="reveal-text font-headline font-black text-[12vw] leading-[0.8] tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "3px #1A1A1A" }}
        >
          Web Developer
        </h1>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl z-[-1]">
          <div className="glow-bg w-[40vw] h-[40vw] bg-primary-container rounded-full opacity-20"></div>
        </div>

        <div className="flex flex-col items-center max-w-2xl gap-8 mx-auto mt-12 md:flex-row">
          <div className="flex-shrink-0 w-24 h-24 overflow-hidden border-2 rounded-full reveal-text border-on-surface neo-shadow-sm">
            <img
              className="object-cover w-full h-full"
              alt="Headshot"
              src="/images/reusmana.jpeg"
            />
          </div>
          <p className="text-lg leading-relaxed text-left reveal-text md:text-xl">
            “Solving real-world problems through clean, efficient web
            development.
            <span className="font-bold underline decoration-primary decoration-4">
              Transforming complex requirements into simple, intuitive web
              solutions."
            </span>{" "}
          </p>
        </div>
      </div>

      <div className="absolute flex flex-col items-center gap-2 bottom-12">
        <span className="text-4xl material-symbols-outlined animate-bounce">
          south
        </span>
      </div>
    </header>
  );
};

export default HeroSection;

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MarqueeSection: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      // Infinite loop animation
      const loop = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      // Speed up on scroll
      ScrollTrigger.create({
        trigger: container.current,
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity() / 500);
          gsap.to(loop, {
            timeScale: 1 + velocity,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    },
    { scope: container },
  );

  const skills = [
    "Next - React",
    "Laravel",
    "Golang",
    "Odoo Developer",
    "Nuxt - Vue",
    "python",
  ];

  return (
    <section
      ref={container}
      className="py-20 overflow-hidden border-y-4 border-on-surface bg-surface-container-low"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-12 text-6xl font-black tracking-tighter uppercase marquee-track md:text-8xl font-headline whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {skills.map((skill) => (
              <span key={`${i}-${skill}`}>{skill} •</span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;

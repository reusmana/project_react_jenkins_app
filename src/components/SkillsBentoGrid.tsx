import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SkillsBentoGrid: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".bento-item", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // Hover effect for bento items
      const items = gsap.utils.toArray<HTMLElement>(".bento-item");
      items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, { y: -5, duration: 0.3, ease: "power2.out" });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="px-8 py-24 bg-surface grid-bg"
      id="skills"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl font-black tracking-tighter text-center sm:text-6xl font-headline md:text-8xl">
          THE STACK
        </h2>
        <div className="grid grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[800px] text-white">
          <div className="bento-item col-span-4 md:col-span-2 row-span-2 bg-primary-container border-2 border-on-surface p-12 neo-shadow flex flex-col justify-between group min-h-[300px]">
            <span className="material-symbols-outlined text-8xl">code</span>
            <div>
              <h4 className="mb-4 text-3xl font-black lg:text-5xl sm:text-4xl font-headline">
                FRONTEND ARCHITECTURE
              </h4>
              <p className="font-medium">
                ReactJS, NextJS, TailwindCSS, NuxtJs, VueJS, Responsive Design,
                State Management.
              </p>
            </div>
          </div>

          <div className="bento-item col-span-4 md:col-span-2 row-span-1 bg-surface-container-low border-2 border-on-surface p-8 neo-shadow flex items-center gap-6 min-h-[150px]">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-on-surface shrink-0">
              <span className="text-3xl material-symbols-outlined text-surface">
                terminal
              </span>
            </div>
            <div className="text-black">
              <h4 className="py-1 text-xl font-bold lg:text-3xl sm:text-2xl font-headline">
                BACKEND ARCHITECTURE
              </h4>
              <p className="text-sm opacity-60">
                Node.js, Laravel, GoLang, PHP, Python, Dart, API Design (REST)
                Authentication, Webhooks
              </p>
            </div>
          </div>

          <div className="bento-item col-span-4 md:col-span-2 lg:col-span-1 row-span-1 bg-secondary-fixed border-2 border-on-surface p-8 neo-shadow flex flex-col justify-center items-center text-center min-h-[150px] text-black">
            <span className="mb-2 text-5xl material-symbols-outlined">
              database
            </span>
            <h4 className="text-xl font-bold uppercase font-headline">
              Database
            </h4>
            <p className="text-sm opacity-60">
              {" "}
              MYSQL, POSTGRESQL, Firebase, Prisma / ORM Data Modeling
            </p>
          </div>
          <div className="bento-item col-span-4 md:col-span-2 lg:col-span-1 row-span-1 bg-primary-fixed border-2 border-on-surface p-8 neo-shadow flex flex-col justify-center items-center text-center min-h-[150px] text-black">
            <span className="mb-2 text-5xl material-symbols-outlined">
              security
            </span>
            <h4 className="text-xl font-bold uppercase font-headline">
              Security
            </h4>

            <p className="text-sm opacity-60">
              JWT, OAuth, SSO Data Encryption Input validation (Zod /
              Validator), Basic OWASP awareness
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBentoGrid;

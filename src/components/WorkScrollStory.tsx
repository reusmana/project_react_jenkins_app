import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const WorkScrollStory: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;
      const rightItems = gsap.utils.toArray<HTMLElement>(".right-item");
      const leftLinks = gsap.utils.toArray<HTMLElement>(".left-link");

      // Single GSAP Timeline for all effects!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=350%", // Increased slightly for the CTA
          pin: true,
          scrub: 1,
        },
      });

      // Initial setup
      tl.set(leftLinks[0] as HTMLElement, {
        opacity: 1,
        color: "#ae2f34",
        scale: 1.1,
      });
      tl.set(rightItems[0] as HTMLElement, {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
      });
      // Hide TITLE 2/3 on mobile initially
      if (window.innerWidth < 768) {
        tl.set([leftLinks[1], leftLinks[2]], { display: "none", opacity: 0 });
      }

      // Transition to Section 2
      tl.to(
        leftLinks[0] as HTMLElement,
        {
          opacity: 0,
          display: window.innerWidth < 768 ? "none" : "block",
          color: "#1b1c18",
          scale: 1,
          duration: 1,
        },
        "step1",
      );
      tl.to(
        leftLinks[1] as HTMLElement,
        {
          opacity: 1,
          display: "block",
          color: "#ae2f34",
          scale: 1.1,
          duration: 1,
        },
        "step1",
      );
      tl.fromTo(
        rightItems[1] as HTMLElement,
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 2,
          ease: "power2.inOut",
        },
        "step1",
      );

      // Transition to Section 3
      tl.to(
        leftLinks[1] as HTMLElement,
        {
          opacity: 0,
          display: window.innerWidth < 768 ? "none" : "block",
          color: "#1b1c18",
          scale: 1,
          duration: 1,
        },
        "step2",
      );
      tl.to(
        leftLinks[2] as HTMLElement,
        {
          opacity: 1,
          display: "block",
          color: "#ae2f34",
          scale: 1.1,
          duration: 1,
        },
        "step2",
      );
      tl.fromTo(
        rightItems[2] as HTMLElement,
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 2,
          ease: "power2.inOut",
        },
        "step2",
      );

      // Transition to CTA (More Projects)
      tl.to(
        leftLinks[2] as HTMLElement,
        {
          opacity: window.innerWidth < 768 ? 0 : 0.2,
          display: window.innerWidth < 768 ? "none" : "block",
          color: "#1b1c18",
          scale: 1,
          duration: 1,
        },
        "step3",
      );
      tl.fromTo(
        ".more-projects-cta",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "step3",
      );
    },
    { scope: containerRef },
  );

  const storyData = [
    {
      year: "'2024",
      title: "TAXKITA",
      description:
        "TAXKITA is your trusted partner in dealing with the complexities of tax governance. With in-depth experience and a strong understanding of the development of tax regulations, we are committed to providing innovative and reliable tax solutions for individuals and businesses.",
      img: "/images/taxkita.png",
    },
    {
      year: "'2023",
      title: "PINTU KITA",
      description:
        "A revolutionary learning platform that not only opens wide doors to science, but also helps you connect your path to exciting job opportunities.",
      img: "/images/pintukita.png",
    },
    {
      year: "'2024",
      title: "SMT",
      description:
        "Security Manpower Training (SMT) Program Indonesia is a high-quality information of security education commissioned by Korea Information Security Industry Association (KISIA) and a Korean Cybersecurity company NSHC Inc.",
      img: "/images/smt.png",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen overflow-hidden bg-surface border-y-4 border-on-surface"
      id="work"
    >
      <div className="flex flex-col h-full md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-[40%] h-[30%] md:h-full md:flex flex-col justify-center p-6 md:p-24 border-b-4 md:border-b-0 md:border-r-4 border-on-surface bg-surface-container-low relative hidden">
          <div className="relative flex items-center justify-center h-full overflow-hidden md:flex-col md:items-start md:justify-start md:space-y-12">
            {storyData.map((data, index) => (
              <div
                key={index}
                className="absolute flex flex-col items-center justify-center w-full h-full text-center transition-all origin-left left-link md:text-left md:relative md:h-auto md:items-start md:justify-start"
                style={{
                  opacity: index === 0 ? 1 : 0,
                  display:
                    index === 0
                      ? "flex"
                      : typeof window !== "undefined" && window.innerWidth < 768
                        ? "none"
                        : "flex",
                }}
              >
                <span className="font-label text-[10px] md:text-sm font-bold tracking-widest mb-1 md:mb-2">
                  {data.year}
                </span>
                <h2 className="text-4xl font-black leading-none tracking-tighter uppercase font-headline md:text-7xl">
                  {data.title}
                </h2>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="absolute z-20 -translate-x-1/2 opacity-0 more-projects-cta bottom-4 md:bottom-12 left-1/2 md:translate-x-0 md:left-24">
            <Link
              to="/projects"
              className="bg-primary-container text-on-primary-container border-2 border-zinc-900 px-4 py-2 md:px-6 md:py-3 text-xs md:text-base font-black flex items-center gap-2 md:gap-3 hover:scale-105 transition-all neo-shadow-sm active:translate-x-[2px] active:translate-y-[2px]"
            >
              MORE PROJECTS
              <span className="text-sm material-symbols-outlined md:text-base">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full py-16 md:hidden">
          <h1 className="text-2xl font-bold uppercase font-headline">
            The Project
          </h1>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[60%] h-full relative overflow-hidden grid-bg">
          {storyData.map((data, index) => (
            // bg-surface
            <div
              key={index}
              className="absolute inset-0 flex flex-col items-center w-full h-full p-6 md:items-start bg-surface md:justify-center right-item md:p-24"
              style={{
                zIndex: index + 1,
                clipPath: "inset(100% 0% 0% 0%)",
                opacity: 0,
              }}
            >
              <h1 className="py-4 text-2xl font-bold uppercase font-headline md:opacity-0 opacity-90">
                {data.title}
              </h1>
              <div className="w-fit h-fit max-h-[40vh] md:max-h-[60vh] border-4 border-on-surface neo-shadow-sm overflow-hidden mb-6 md:mb-8">
                <img
                  className="object-fill w-full h-full"
                  alt={data.title}
                  src={data.img}
                />
              </div>
              <div className="max-w-md px-4 text-left md:px-0">
                <p className="mb-4 text-lg font-bold leading-tight md:text-2xl font-headline">
                  "{data.description}"
                </p>
                <div className="w-16 h-1 md:w-20 bg-primary"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkScrollStory;

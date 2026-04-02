import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "TAXKITA",
      description:
        "TAXKITA is your trusted partner in dealing with the complexities of tax governance. With in-depth experience and a strong understanding of the development of tax regulations, we are committed to providing innovative and reliable tax solutions for individuals and businesses.",
      img: "/images/taxkita.png",
      category: "2024",
    },
    {
      id: 2,
      title: "PINTU KITA",
      description:
        "A revolutionary learning platform that not only opens wide doors to science, but also helps you connect your path to exciting job opportunities.",
      img: "/images/pintukita.png",
      category: "2023",
    },
    {
      id: 3,
      title: "LMS KIT",
      description:
        "Project from korea design, inkor or team inkor develope this apps.",
      img: "/images/lms.png",
      category: "2024",
    },
    {
      id: 4,
      title: "SMT",
      description:
        "Security Manpower Training (SMT) Program Indonesia is a high-quality information of security education commissioned by Korea Information Security Industry Association (KISIA) and a Korean Cybersecurity company NSHC Inc.",
      img: "/images/smt.png",
      category: "2024",
    },
    {
      id: 5,
      title: "3-Alogics",
      description: "Simple Landing Page.",
      img: "/images/3alogics.png",
      category: "2024",
    },
    {
      id: 6,
      title: "Pintu Ara",
      description:
        "Solutions for the world of digital content and e-Books from production, publishing, to distribution.",
      img: "/images/araebook.png",
      category: "2024",
    },
  ];

  useGSAP(() => {
    gsap.from(".project-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".project-list",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="min-h-screen px-8 pt-32 pb-24 bg-surface grid-bg">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-24 text-4xl font-black tracking-tighter text-center font-headline md:text-7xl sm:text-5xl lg:text-9xl">
          ALL_PROJECTS
        </h1>

        <div className="space-y-32 project-list">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-[16/10] border-4 border-on-surface neo-shadow hover:neo-shadow-active transition-all overflow-hidden bg-white/10 group cursor-pointer">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="object-cover w-full h-full transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full space-y-6 md:w-1/2">
                <span className="font-label text-xs font-bold tracking-[0.3em] text-primary">
                  {project.category}
                </span>
                <h2 className="text-3xl font-black leading-none tracking-tighter md:text-5xl sm:text-4xl font-headline lg:text-7xl">
                  {project.title}
                </h2>
                <p className="font-medium leading-tight md:text-xl text-md lg:text-2xl opacity-70">
                  "{project.description}"
                </p>
                <div className="w-24 h-2 border-2 bg-primary-container border-on-surface"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

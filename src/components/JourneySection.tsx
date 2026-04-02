import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const JourneyTitle: string[] = [
  "PT Bank Multiarta Sentosa Tbk (Bank MAS)",
  "Cyber Edu INKOR",
  "PT Ramayana Lestari Sentosa, Tbk",
];

const JourneySectionContent: any = [
  {
    logo: "/images/company/mas.png",
    year: "November 2024 - Present",
    title: "PT Bank Multiarta Sentosa Tbk (Bank MAS)",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nostrum tempore vitae unde, labore iure consequuntur nisi sed perspiciatis fuga.`,
    img: [],
  },
  {
    logo: "/images/company/inkor.png",
    year: "September 2023 - November 2024",
    title: "Cyber Edu INKOR",
    description: `Experienced in developing responsive, user-friendly, and high-performing web applications with strong attention to usability and functionality.
<br/><br/>
Skilled in integrating APIs between backend and frontend to ensure seamless data communication.
<br/><br/>
Proficient in building export and import features for Excel files integrated directly into databases.
<br/><br/>
Hands-on experience in using AWS S3 for file storage and implementing error monitoring and debugging in Laravel applications using Sentry.
<br/><br/>
Experienced in developing secure APIs with Laravel Passport, implementing OAuth authentication with Laravel Socialite, and building real-time chat features using Pusher.
<br/><br/>
Capable of translating Figma designs into fully functional and responsive websites.
<br/><br/>
Familiar with version control systems such as GitLab and GitHub, and experienced in using project management tools like Jira, Trello, and ClickUp to manage development workflows effectively.`,
    img: ["/images/smt.png", "/images/taxkita.png"],
  },
  {
    logo: "/images/company/ramayana.png",
    year: "Mei 2022 - September 2023",
    title: "PT Ramayana Lestari Sentosa, Tbk",
    description: `Experienced in developing internal applications based on user requirements, ensuring that each solution aligns with business needs and operational workflows.
<br/><br/>
Responsible for maintaining existing systems by fixing bugs, improving performance, and implementing new features on demand.
<br/><br/>
Skilled in building export and import functionalities from Excel files into databases to support efficient data management processes.
<br/><br/>
Proficient in creating and optimizing SQL relational queries on the backend using PostgreSQL to ensure accurate data relationships and performance efficiency.
<br/><br/>
Familiar with using SVN (Subversion) for version control, maintaining structured code management and supporting collaborative development environments.`,
    img: [],
  },
];

const JourneySection: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const [contentJourney, setContentJourney] = useState(1);

  useGSAP(
    () => {
      if (floatRef.current) {
        gsap.to(floatRef.current, {
          y: -15,
          rotate: -3,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      gsap.from(".journal-item", {
        opacity: 0,
        x: -30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".journal-item",
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative px-8 py-24 overflow-hidden bg-surface-container-low border-y-4 border-on-surface grid-bg"
      id="story"
    >
      {/* Character Illustration */}
      <div
        ref={floatRef}
        className="absolute left-[5%] bottom-[10%] w-48 h-48 opacity-70 pointer-events-none z-0"
      >
        <img
          className="object-contain w-full h-full"
          alt="Character"
          src="/images/reusmana-new.png"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-20 mx-auto max-w-screen-2xl md:flex-row">
        <div className="w-full space-y-12">
          <div className="md:sticky md:top-40">
            <h2 className="mb-8 text-4xl font-black leading-none tracking-tighter md:text-6xl font-headline">
              THE
              <br />
              JOURNEY
            </h2>
            <div className="space-y-4 text-xl font-bold lg:text-4xl md:text-3xl sm:text-2xl font-headline ">
              {JourneyTitle.map((title, index) => (
                <div
                  key={index}
                  className={`transition-opacity cursor-pointer hover:opacity-100 ${index === contentJourney ? "opacity-100" : "opacity-20"}`}
                  onClick={() => setContentJourney(index)}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full space-y-16 md:w-2/3">
          <div className="relative p-10 border-2 bg-surface-container-highest border-on-surface neo-shadow backdrop-blur-md bg-white/40 journal-item">
            <span className="absolute overflow-hidden text-6xl border-2 rounded-full material-symbols-outlined text-primary -top-8 -left-8 bg-surface border-on-surface">
              <img
                src={JourneySectionContent[contentJourney].logo}
                alt=""
                className="object-cover w-16 h-16 rounded-full md:w-24 md:h-24"
              />
            </span>
            <span className="block w-full text-right">
              {JourneySectionContent[contentJourney].year}
            </span>
            <p className="mb-8 text-2xl font-bold leading-tight md:text-4xl font-headline">
              {JourneySectionContent[contentJourney].title}
            </p>
            <p
              className="text-lg leading-relaxed text-on-surface/80"
              dangerouslySetInnerHTML={{
                __html: JourneySectionContent[contentJourney].description,
              }}
            ></p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {JourneySectionContent[contentJourney].img.length > 0 && (
              <div className="overflow-hidden border-2 journal-item aspect-square border-on-surface neo-shadow-sm rotate-2">
                <img
                  className="object-cover w-full h-full"
                  alt="Server Hardware"
                  src={JourneySectionContent[contentJourney].img[0]}
                />
              </div>
            )}
            {JourneySectionContent[contentJourney].img.length > 1 && (
              <div className="mt-12 overflow-hidden border-2 journal-item aspect-square border-on-surface neo-shadow-sm -rotate-3">
                <img
                  className="object-cover w-full h-full"
                  alt="Keyboard"
                  src={JourneySectionContent[contentJourney].img[1]}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

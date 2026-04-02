import React, { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const nightTime = [18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5];
  const lightTime = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const [isNight, setIsNight] = useState<boolean>(false);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString("id-ID", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const hourValue = timeString.split(".")[0];
  // if (nightTime.includes(parseInt(hourValue))) setIsNight(true);
  // else if (lightTime.includes(parseInt(hourValue))) setIsNight(false);

  return (
    <footer
      id="footer"
      className="flex flex-col items-start w-full px-8 pt-24 pb-12 tracking-widest uppercase border-t-4 border-zinc-900 bg-zinc-50 font-headline grid-bg"
    >
      <div className="w-full mb-24">
        <a
          className="text-[12vw] font-black leading-none text-zinc-900 hover:italic transition-all inline-block hover:text-primary"
          href="mailto:hello@studiocurator.com"
        >
          LET'S TALK
        </a>
      </div>
      <div className="flex flex-col items-end justify-between w-full gap-12 md:flex-row">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-4 md:gap-8 text-zinc-500">
            <a className="transition-all hover:italic" href="#">
              LinkedIn
            </a>
            <a className="transition-all hover:italic" href="#">
              reusmanasujani@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 font-bold border-2 bg-on-surface text-surface border-on-surface neo-shadow-sm">
            <span className="material-symbols-outlined">location_on</span>
            Jakarta
          </div>
        </div>
        <div className="flex flex-col items-end text-right">
          <div className="mb-2 text-4xl font-black text-primary font-headline">
            {timeString}{" "}
            <span>{nightTime.includes(parseInt(hourValue)) ? "🌜" : "🌞"}</span>
          </div>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} REUSMANA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

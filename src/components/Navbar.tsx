import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    if (location.pathname === "/" && target.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element && (window as any).lenis) {
        (window as any).lenis.scrollTo(element, { offset: -80 });
      }
      setIsOpen(false);
    } else if (target.startsWith("#")) {
      // If we are on another page and want to go to a hash on Home
      e.preventDefault();
      navigate("/" + target);
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: "Work", href: "#work" },
    { label: "Story", href: "#story" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-8 py-4 bg-white backdrop-blur-xl rounded-full mt-6 mx-auto w-[92%] max-w-5xl border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        <Link
          to="/"
          className="text-xl font-black tracking-tighter md:text-2xl text-zinc-900 font-headline"
        >
          Reusmana Sujani
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden space-x-8 font-bold tracking-tighter md:flex font-headline">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`${item.label === "Work" ? "text-primary" : "text-zinc-600"} hover:text-zinc-900 transition-colors hover:scale-105 transition-transform duration-300`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/#footer"
            className="hidden md:block bg-primary-container text-on-primary-container border-2 border-zinc-900 px-6 py-2 font-bold hover:scale-105 transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none neo-shadow-sm"
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-2 border-zinc-900 bg-white neo-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            <span
              className={`w-6 h-0.5 bg-zinc-900 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-zinc-900 transition-all ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-zinc-900 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-surface/95 backdrop-blur-md transition-all duration-500 flex flex-col items-center justify-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="space-y-8 text-center">
          {menuItems.map((item, i) => (
            <div
              key={item.label}
              className={`transform transition-all duration-500 delay-${i * 100} ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-5xl font-black tracking-tighter transition-colors font-headline hover:text-primary"
              >
                {item.label}
              </a>
            </div>
          ))}
          <a
            href="/#footer"
            className="px-12 py-4 mt-8 text-2xl font-black border-4 bg-primary-container text-on-primary-container border-zinc-900 neo-shadow"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

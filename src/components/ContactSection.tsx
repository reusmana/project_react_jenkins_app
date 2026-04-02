import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      className="px-8 py-24 border-t-4 bg-surface-container-high border-on-surface grid-bg"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-16 text-4xl font-black leading-none tracking-tighter font-headline md:text-6xl sm:text-5xl lg:text-8xl">
          START A<br />
          CONVERSATION
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase font-label">
                YOUR_NAME
              </label>
              <input
                className="w-full p-4 text-2xl font-bold transition-all bg-transparent border-b-4 border-on-surface font-headline focus:outline-none focus:bg-secondary-container"
                placeholder="your name"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase font-label">
                YOUR_EMAIL
              </label>
              <input
                className="w-full p-4 text-2xl font-bold transition-all bg-transparent border-b-4 border-on-surface font-headline focus:outline-none focus:bg-secondary-container"
                placeholder="your_email@gmail.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest uppercase font-label">
              THE_BRIEF
            </label>
            <textarea
              className="w-full p-4 text-2xl font-bold transition-all bg-transparent border-b-4 border-on-surface font-headline focus:outline-none focus:bg-secondary-container"
              placeholder="Tell me about your vision..."
              rows={4}
            ></textarea>
          </div>
          <button className="flex items-center justify-center w-full gap-4 px-12 py-2 text-xl font-black tracking-tighter transition-all border-4 md:text-2xl md:py-6 md:w-auto bg-primary-container text-on-primary-container border-on-surface font-headline neo-shadow hover:neo-shadow-active group">
            SEND_MESSAGE
            <span className="text-3xl transition-transform material-symbols-outlined group-hover:translate-x-2">
              arrow_forward
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

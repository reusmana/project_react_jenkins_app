import React, { useState } from "react";
import { EmailJSResponseStatus, sendForm } from "@emailjs/browser";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_API_KEY_SERVICE_ID_EMAIL_JS;
const TEMPLATE_ID = import.meta.env.VITE_API_TEMPLATE_ID_EMAIL_JS;
const USER_ID = import.meta.env.VITE_API_KEY_EMAIL_JS;

emailjs.init({
  publicKey: USER_ID,
  blockHeadless: true,
  limitRate: {
    id: "per_user",
    throttle: 60 * 1000, // 1 minute
  },
});

const ContactSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleMessageSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then((result: EmailJSResponseStatus) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent successfully!");
        form.reset();
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
        setIsLoading(false);
      });
  };
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
        <form onSubmit={handleMessageSend} className="space-y-12">
          <input type="text" name="to_name" hidden value="reusmana" readOnly />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase font-label">
                YOUR_NAME
              </label>
              <input
                className="w-full p-4 text-2xl font-bold transition-all bg-transparent border-b-4 border-on-surface font-headline focus:outline-none focus:bg-secondary-container"
                placeholder="your name"
                name="from_name"
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
                name="reply_to"
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
              name="message"
              rows={4}
            ></textarea>
          </div>
          <button className="flex items-center justify-center w-full gap-4 px-12 py-2 text-xl font-black tracking-tighter transition-all border-4 md:text-2xl md:py-6 md:w-auto bg-primary-container text-on-primary-container border-on-surface font-headline neo-shadow hover:neo-shadow-active group">
            SEND_MESSAGE
            {!isLoading ? (
              <span className="text-3xl transition-transform material-symbols-outlined group-hover:translate-x-2">
                arrow_forward
              </span>
            ) : (
              <span className="text-3xl transition-transform animate-spin material-symbols-outlined group-hover:translate-x-2">
                progress_activity
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

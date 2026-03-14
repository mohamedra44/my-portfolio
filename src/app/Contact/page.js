import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="layout">
      <div className="contact screen mt-20 p-5 border border-black rounded-2xl min-h-[calc(100vh-120px)] flex flex-col items-center">
        <h1 className="text-4xl font-black mt-5 mb-10 text-primary">
          Get In <span className="text-second">Touch</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
          {/* الجانب الأيسر: معلومات التواصل */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-primary">
              Let&apos;s talk about everything!
            </h2>
            <p className="text-lg opacity-80">
              Don&apos;t like forms? Send me an email or connect with me on
              social media.
            </p>

            <div className="flex flex-col gap-5">
              <Link
                href={"mailto:mohamedrabiema44@gmail.com"}
                target="_blank"
                className="flex items-center gap-4 p-4 border border-black rounded-2xl hover:bg-second hover:text-white transition-all group"
              >
                <Mail
                  className="text-second group-hover:text-white"
                  size={30}
                />
                <div>
                  <p className="text-sm opacity-70">Email me at</p>
                  <p className="text-xl font-bold">
                    mohamedrabiema44@gmail.com
                  </p>
                </div>
              </Link>

              <Link
                href={
                  "https://www.linkedin.com/in/mohamed-rabie-0495a73b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
                target="_blank"
                className="flex items-center gap-4 p-4 border border-black rounded-2xl hover:bg-second hover:text-white transition-all group"
              >
                <Linkedin
                  className="text-second group-hover:text-white"
                  size={30}
                />
                <div>
                  <p className="text-sm opacity-70">Let&apos;s Connect</p>
                  <p className="text-xl font-bold">Mohamed On LinkedIn</p>
                </div>
              </Link>
            </div>
          </div>

          {/* الجانب الأيمن: الـ Form */}
          <form className="flex flex-col gap-4 w-full bg-primary/5 p-6 rounded-2xl border border-black">
            <div className="flex flex-col gap-2">
              <label className="font-bold">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-second"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold">Email Address</label>
              <input
                type="email"
                placeholder="Email@example.com"
                className="p-3 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-second"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold">Message</label>
              <textarea
                rows="4"
                placeholder="How can I help you?"
                className="p-3 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-second resize-none"
              ></textarea>
            </div>

            <button className="mt-4 flex items-center justify-center gap-2 bg-second text-white font-black py-3 rounded-xl hover:bg-primary transition-colors text-xl">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

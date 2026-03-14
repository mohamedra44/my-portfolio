import { Download, Briefcase, GraduationCap, Code } from "lucide-react";
import Link from "next/link";

export default function Resume() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Self-Employed / Projects",
      date: "2026 - Present",
      description:
        "Building modern web applications using Next.js 15, React, and Tailwind CSS. Focused on clean code and software architecture.",
    },
    {
      title: "Node.js Developer",
      company: "Backend Training",
      date: "2025",
      description:
        "Completed an intensive crash course in Node.js and database integration. Built several APIs and backend services.",
    },
  ];

  return (
    <div className="layout">
      <div className="resume screen mt-20 p-5 border border-black rounded-2xl min-h-[calc(100vh-120px)] flex flex-col items-center">
        {/* العناوين الرئيسية */}
        <h1 className="text-4xl font-black mt-5 mb-5 text-primary">
          My <span className="text-second">Resume</span>
        </h1>

        {/* زرار التحميل */}
        <Link
          href="/path-to-your-resume.pdf"
          target="_blank"
          className="flex items-center gap-2 bg-second text-white px-6 py-2 rounded-2xl hover:bg-primary transition-colors mb-10 text-xl"
        >
          <Download size={20} /> Download PDF
        </Link>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* قسم الخبرة - Experience */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-second border-b border-black pb-2">
              <Briefcase size={28} />
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 border-second pl-4 py-2 hover:bg-primary/5 transition-all"
              >
                <span className="text-sm font-bold text-second">
                  {exp.date}
                </span>
                <h3 className="text-xl font-black">{exp.title}</h3>
                <p className="text-md font-bold opacity-70">{exp.company}</p>
                <p className="mt-2 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* قسم التعليم والمهارات - Education & Skills */}
          <div className="flex flex-col gap-10">
            {/* التعليم */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-second border-b border-black pb-2">
                <GraduationCap size={28} />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="border-l-4 border-second pl-4 py-2">
                <h3 className="text-xl font-black">
                  Software Engineering Studies
                </h3>
                <p className="text-md opacity-70">
                  Focusing on Clean Code & Architecture
                </p>
              </div>
            </div>

            {/* مهارات سريعة */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-second border-b border-black pb-2">
                <Code size={28} />
                <h2 className="text-2xl font-bold">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "Express",
                  "Tailwind CSS",
                  "JavaScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-black px-3 py-1 rounded-full text-sm font-bold hover:bg-second hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

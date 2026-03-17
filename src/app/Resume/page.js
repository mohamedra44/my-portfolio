import { Download, Briefcase, GraduationCap, Code, Award } from "lucide-react";

import Link from "next/link";
import {
  experiences,
  certificationsData,
  certifications,
} from "../_component/obj";
import CertificationsCard from "../_component/certificationsCard";

export const metadata = {
  title: "Mohamed Rabie - Full Stack Developer Resume",
  description:
    "Explore the professional journey and 32+ certifications of Mohamed Rabie, a Full Stack Developer specialized in Next.js and Node.js.",
};

export default function Resume() {
  return (
    <div className="layout">
      <div className="resume screen mt-20 p-5 border border-black rounded-2xl min-h-[calc(100vh-120px)] flex flex-col items-center">
        {/* العناوين الرئيسية */}
        <h1 className="text-4xl font-black mt-5 mb-5 text-primary text-center">
          My <span className="text-second">Resume</span>
        </h1>

        {/* زرار التحميل */}
        <Link
          href="/Mohamed Rabie CV.pdf"
          target="_blank"
          className="flex items-center gap-2 bg-second text-white px-6 py-2 rounded-2xl hover:bg-primary transition-colors mb-10 text-xl shadow-lg"
        >
          <Download size={20} /> Download PDF
        </Link>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* العمود الأول: الخبرة والتعليم */}
          <div className="flex flex-col gap-10">
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

            {/* التعليم - Education */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-second border-b border-black pb-2">
                <GraduationCap size={28} />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="border-l-4 border-second pl-4 py-2">
                <h3 className="text-xl font-black">Bachelor of Education</h3>
                <p className="text-md opacity-70 font-bold">
                  Helwan University
                </p>
                <p className="text-sm italic">Expected Graduation: 2027</p>
              </div>
            </div>
          </div>

          {/* العمود الثاني: الشهادات والمهارات */}
          <div className="flex flex-col gap-10">
            {/* قسم الشهادات - Certifications */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-second border-b border-black pb-2">
                <Award size={28} />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              <div className="flex flex-col gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-second mt-1">✔</span>
                    <p className="text-sm font-bold leading-tight">{cert}</p>
                  </div>
                ))}
                <p className="text-xs text-gray-500 italic mt-2">
                  * All certifications issued by Tuwaiq Academy.
                </p>
              </div>
            </div>

            {/* التقنيات - Tech Stack */}
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
                  "MongoDB",
                  "SQL",
                  "Tailwind CSS",
                  "JavaScript",
                  "Python",
                  "Git",
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

        <hr className="w-full my-10" />

        <CertificationsCard certificationsData={certificationsData} />
      </div>
    </div>
  );
}

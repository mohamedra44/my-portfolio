import { Download, Briefcase, GraduationCap, Code, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Resume() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance / Self-Employed",
      date: "2025 - Present",
      description:
        "Building end-to-end web applications using Next.js 15, Node.js, and Serverless architecture. Specializing in integrating WhatsApp ordering systems and Google Cloud APIs.",
    },
    {
      title: "Backend Training",
      company: "Node.js & Databases",
      date: "2025",
      description:
        "Intensive focus on building RESTful APIs, Express.js integration, and managing databases like MongoDB and SQL.",
    },
  ];

  const certificationsData = [
    // Backend & APIs
    {
      title: "API (Application Programming Interface)",
      category: "Backend",
      image: "/certifications/api.png",
    }, // [cite: 78]
    {
      title: "Node.js MVC",
      category: "Backend",
      image: "/certifications/mvs.png",
    }, // [cite: 85]
    {
      title: "Express.js",
      category: "Backend",
      image: "/certifications/express.png",
    }, // [cite: 78]
    {
      title: "Django 101",
      category: "Backend",
      image: "/certifications/django1.png",
    }, // [cite: 87]

    // Frontend & UI
    {
      title: "React 101",
      category: "Frontend",
      image: "/certifications/react101.png",
    }, // [cite: 77]
    {
      title: "React 102",
      category: "Frontend",
      image: "/certifications/react102.png",
    }, // [cite: 77]
    {
      title: "JavaScript Fundamentals (101-103)",
      category: "Frontend",
      image: "/certifications/javascript1.png",
    }, // [cite: 77]
    {
      title: "Bootstrap",
      category: "Frontend",
      image: "/certifications/bootstrap.png",
    }, // [cite: 77]
    {
      title: "CSS & Responsive Design",
      category: "Frontend",
      image: "/certifications/css.png",
    }, // [cite: 77]
    { title: "HTML5", category: "Frontend", image: "/certifications/html.png" }, // [cite: 77]
    {
      title: "DOM Manipulation",
      category: "Frontend",
      image: "/certifications/dom.png",
    }, // [cite: 77]

    // Databases
    {
      title: "SQL Advanced (Level 103)",
      category: "Database",
      image: "/certifications/sql3.png",
    }, // [cite: 80]
    {
      title: "SQL Fundamentals (101-102)",
      category: "Database",
      image: "/certifications/sql1.png",
    }, // [cite: 79]
    {
      title: "MongoDB",
      category: "Database",
      image: "/certifications/mongodb.png",
    }, // [cite: 79]

    // Mobile Development
    {
      title: "Flutter Development (101-106)",
      category: "Mobile",
      image: "/certifications/flutter106.png",
    }, // [cite: 81]
    {
      title: "Dart Programming (101-104)",
      category: "Mobile",
      image: "/certifications/dart4.png",
    }, // [cite: 80]

    // Languages & Tools
    {
      title: "Git & GitHub",
      category: "Tools",
      image: "/certifications/git.png",
    }, // [cite: 79]
    {
      title: "Python Programming (101-104)",
      category: "Languages",
      image: "/certifications/python4.png",
    }, // [cite: 80]
  ];

  // الشهادات اللي جبناها من أكاديمية طويق
  const certifications = [
    "Full Stack Development (32+ Specialized Certificates)",
    "React.js & Frontend Architecture",
    "API Design & Development",
    "Database Management (SQL & MongoDB)",
    "Logic & Programming Foundations (Python & Dart)",
  ];

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
        <hr className="w-full mt-10"/>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {certificationsData.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-black/10 hover:border-second transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    width={900}
                    height={100}
                    src={cert.image}
                    alt={cert.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-second text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase">
                    {cert.category}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <CardTitle className="text-lg font-black leading-tight group-hover:text-second transition-colors">
                  {cert.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-1 font-medium">
                  Official Certification • Tuwaiq Academy
                </p>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-400">
                  Verified Badge
                </span>
                <div className="h-1 w-12 bg-second/20 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

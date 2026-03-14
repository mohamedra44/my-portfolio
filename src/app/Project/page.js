import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Layers } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Jadoo Travel",
      description:
        "A modern travel agency landing page built with Next.js and Shadcn UI.",
      image: "/jadoo-project.png", // حط مسار صورة مشروعك هنا
      github: "https://github.com/your-username/jadoo",
      live: "https://jadoo-live.vercel.app",
      tags: ["Next.js", "Tailwind", "Shadcn"],
    },
    {
      title: "Backend API",
      description:
        "Restful API built with Node.js and Express for managing e-commerce data.",
      image: "/backend-project.png",
      github: "https://github.com/your-username/api",
      live: "#",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    // تقدر تضيف مشاريع أكتر هنا بنفس الطريقة
  ];

  return (
    <div className="layout">
      <div className="projects screen mt-20 p-5 border border-black rounded-2xl min-h-[calc(100vh-120px)] flex flex-col items-center">
        <h1 className="text-4xl font-black mt-5 mb-10 text-primary">
          My <span className="text-second">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-black rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* صورة المشروع مع الـ Hover Effect */}
              <div className="relative h-48 w-full border-b border-black overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay يظهر عند الـ Hover */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-white p-2 rounded-full hover:bg-second hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    className="bg-white p-2 rounded-full hover:bg-second hover:text-white transition-colors"
                  >
                    <ExternalLink size={24} />
                  </Link>
                </div>
              </div>

              {/* تفاصيل المشروع */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 text-second font-bold">
                  <Layers size={18} />
                  <h2 className="text-xl text-primary">{project.title}</h2>
                </div>
                <p className="text-sm opacity-80 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* الـ Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold border border-black px-2 py-0.5 rounded-full bg-secondary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

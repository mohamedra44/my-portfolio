import { Code2, Server, Layout, Database } from "lucide-react";

export default function Services() {
  const myServices = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive UIs using React.js and Next.js with Tailwind CSS.",
      icon: <Layout className="text-second" size={40} />,
    },
    {
      title: "Backend Development",
      description:
        "Creating robust server-side applications and APIs using Node.js and Express.",
      icon: <Server className="text-second" size={40} />,
    },
    {
      title: "Software Engineering",
      description:
        "Applying clean code principles and solid architecture to build scalable systems.",
      icon: <Code2 className="text-second" size={40} />,
    },
    {
      title: "Database Management",
      description:
        "Designing and integrating databases to ensure data integrity and performance.",
      icon: <Database className="text-second" size={40} />,
    },
  ];

  return (
    <div className="layout">
      <div className="services screen mt-20 p-5 border border-black rounded-2xl min-h-[calc(100vh-120px)] flex flex-col items-center">
        <h1 className="text-4xl font-black mt-5 mb-10 text-primary">
          My <span className="text-second">Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {myServices.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-black rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <div className="mb-4 transition-transform">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2 text-second">
                {service.title}
              </h2>
              <p className="text-lg opacity-80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

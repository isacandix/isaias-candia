import Image from "next/image";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <ScrollReveal id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-gray-500 mb-2">Browse My Recent</p>
          <h2 className="text-5xl font-bold text-gray-900">Personal Projects</h2>
        </div>

        {/* Cards Grid - 2 columns for bigger cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="h-64 md:h-72 bg-gray-50 relative overflow-hidden flex items-center justify-center">
                {project.mobile ? (
                  <div className="relative h-[88%] aspect-[393/852] rounded-[20px] border-[2px] border-[#1a1a1a] bg-black overflow-hidden shadow-xl ring-1 ring-gray-700/50">
                    <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[50px] h-[14px] bg-black rounded-full z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="200px"
                    />
                  </div>
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                    <span className="text-6xl">📊</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-4 text-center leading-relaxed">
                  {project.description}
                </p>
                <p className="mt-5 text-center text-gray-600">
                  <span className="font-bold text-gray-900">Tech Stack: </span>
                  {project.techStack}
                </p>

                {/* Live Demo Button */}
                {project.demoUrl && (
                  <div className="mt-6 text-center">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

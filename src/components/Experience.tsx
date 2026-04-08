import { CircleCheckBig } from "lucide-react";
import { experiences } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <ScrollReveal id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-gray-500 mb-2">Explore My</p>
          <h2 className="text-5xl font-bold text-gray-900">Experience</h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white border border-gray-200 rounded-3xl p-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                {exp.role}
              </h3>
              <p className="text-gray-500 text-center mt-2">
                {exp.company}
              </p>
              <p className="text-gray-400 text-sm text-center mt-1">
                {exp.period}
              </p>
              <p className="text-gray-600 text-center mt-5 leading-relaxed">
                {exp.description}
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-5 mt-8">
                {exp.skills.map((skill) => (
                  <div key={skill.name} className="flex items-start gap-3">
                    <CircleCheckBig className="w-6 h-6 text-gray-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900">
                        {skill.name}
                      </p>
                      <p className="text-gray-500 text-sm">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </ScrollReveal>
  );
}

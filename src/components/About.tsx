import Image from "next/image";
import { Award, GraduationCap } from "lucide-react";
import { personalInfo, aboutStats, aboutParagraph } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <ScrollReveal id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Picture */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shrink-0">
          <Image
            src={personalInfo.profilePicture}
            alt={personalInfo.name}
            width={320}
            height={320}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          {/* Stat Cards */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 border border-gray-200 rounded-2xl p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-3 text-gray-700" />
              <h3 className="font-bold text-gray-900">
                {aboutStats.experience.label}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {aboutStats.experience.detail1}
              </p>
              <p className="text-gray-500 text-sm">
                {aboutStats.experience.detail2}
              </p>
            </div>
            <div className="flex-1 border border-gray-200 rounded-2xl p-6 text-center">
              <GraduationCap className="w-8 h-8 mx-auto mb-3 text-gray-700" />
              <h3 className="font-bold text-gray-900">
                {aboutStats.education.label}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {aboutStats.education.detail1}
              </p>
              <p className="text-gray-500 text-sm">
                {aboutStats.education.detail2}
              </p>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed">{aboutParagraph}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

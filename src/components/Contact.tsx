import { Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { LinkedInIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <ScrollReveal id="contact" className="py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <p className="text-gray-500 mb-3">Get in Touch</p>
        <h2 className="text-5xl font-bold text-gray-900 mb-14">Contact Me</h2>

        {/* Contact card */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 border border-gray-200 rounded-3xl sm:rounded-full px-8 sm:px-12 py-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors"
          >
            <Mail size={24} className="shrink-0" />
            <span className="text-lg font-medium">{personalInfo.email}</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors"
          >
            <LinkedInIcon size={24} />
            <span className="text-lg font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}

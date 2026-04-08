"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { LinkedInIcon, GitHubIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-gray-200 shadow-md">
            <Image
              src={personalInfo.profilePicture}
              alt={personalInfo.name}
              width={320}
              height={320}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <p className="text-gray-500 text-lg mb-2">Hi, I&apos;m</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{personalInfo.title}</p>

          {/* Buttons */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <a
              href="/CV_Isaias.pdf"
              download
              className="px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-700 transition-colors"
            >
              Contact Info
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={28} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

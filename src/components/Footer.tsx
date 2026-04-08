import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center justify-center gap-8 mb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-gray-900 font-medium hover:text-gray-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-center text-gray-400 text-sm">
          {new Date().getFullYear()} Isaias Candia
        </p>
      </div>
    </footer>
  );
}

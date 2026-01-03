"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Server, Zap } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS",],
  },
  {
    category: "Backend",
    icon: Server,
    technologies: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    icon: Server,
    technologies: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    icon: Zap,
    technologies: ["Git", "Docker", "Vercel", "Azure", "CI/CD", "AWS"],
  },
]

const visualAssets = [
  {
    title: "Tempo",
    imageSrc: "/tempo.PNG",
    pdfUrl: "/tempo.pdf",
    downloadName: "tempo.pdf",
  },
  {
    title: "Coursera Certificate",
    imageSrc: "/Coursera.PNG",
    pdfUrl: "/Coursera.pdf",
    downloadName: "coursera_certificate.pdf",
  },
  {
    title: "My Resume",
    imageSrc: "/BTresume.PNG",
    pdfUrl: "/BTresume.pdf",
    downloadName: "resume.pdf",
  },
  {
    title: "Udacity Certificate",
    imageSrc: "/udacity.PNG",
    pdfUrl: "/udacity.pdf",
    downloadName: "udacity_certificate.pdf",
  },
]

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-20 bg-primary mb-8 rounded"></div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a Backend & Frontend Developer with a passion for building scalable, high-performance applications.
              With expertise spanning both frontend and backend technologies, I create full-stack solutions that bridge
              design and functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines clean code practices, user-centric design thinking, and a deep understanding of
              system architecture to deliver products that are not just functional, but delightful to use.
            </p>
          </div>

          <div className="grid gap-4">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.category}
                  whileHover={{ translateX: 5 }}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-primary" size={24} />
                    <h3 className="font-bold text-lg">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Visual Assets Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {visualAssets.map((asset) => (
            <motion.div
              key={asset.title}
              whileHover={{ scale: 1.05 }}
              className="group bg-card rounded-lg overflow-hidden border border-border h-64 relative"
            >
              <img src={asset.imageSrc} alt={asset.title} className="w-full h-full object-cover" />
              {/* Overlay with buttons, appears on group hover */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedImage(asset.imageSrc);
                    setSelectedTitle(asset.title);
                  }}
                  className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:scale-110 transition-transform"
                >
                  View
                </button>
                <a
                  href={asset.pdfUrl}
                  download={asset.downloadName}
                  className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:scale-110 transition-transform"
                >
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold mb-4">Coding Profiles & Solutions</h3>
        <div className="h-1 w-20 bg-primary mb-6 rounded"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: "https://leetcode.com/u/Biniyamtaf/", text: "LeetCode Solved Problems 1" },
            { href: "https://leetcode.com/u/Biniyam_Tafesse/", text: "LeetCode Solved Problems 2" },
            { href: "https://codeforces.com/submissions/Biniyam_Tafesse", text: "Codeforces Submissions" },
            { href: "https://www.frontendmentor.io/profile/BiniyamTafesselemu/solutions", text: "Frontend Mentor Solutions" },
          ].map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="block bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground group-hover:text-primary">
                  {link.text}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -20 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            className="relative bg-card p-2 rounded-lg shadow-2xl"
          >
            <h3 className="text-center text-lg font-bold mb-2">{selectedTitle}</h3>
            <img
              src={selectedImage}
              alt={selectedTitle || "Selected asset"}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded"
            />
            <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1.5 hover:bg-black/75 transition-colors">
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>

  )
}

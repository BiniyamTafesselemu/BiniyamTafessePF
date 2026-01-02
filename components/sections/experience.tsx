"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    role: "Backend and Frontend Developer",
    company: "Softnet Solutions",
    period: "Jun 2024 - Sep 2024",
    description:
      "Developed and maintained scalable web applications using React and Express.js; implemented RESTful APIs and collaborated with cross-functional teams to deliver high-quality solutions.",
    achievements: [
      "Developed and maintained scalable web applications (React & Express.js)",
      "Collaborated with cross-functional teams to define requirements and deliver high-quality solutions",
      "Implemented RESTful APIs to enhance functionality and user experience",
    ],
  },
  {
    role: "Flutter Frontend Developer",
    company: "Serdo Travel Software Technology PLC",
    period: "Jun 2023 - Sep 2023",
    description:
      "Built intuitive Flutter user interfaces for travel applications, integrated APIs and optimized performance; participated in testing, debugging and agile ceremonies.",
    achievements: [
      "Developed Flutter UIs for travel applications",
      "Integrated frontend with backend APIs and optimized performance",
      "Conducted testing/debugging and contributed to sprint planning and documentation",
    ],
  },
  {
    role: "Frontend Developer (Mentor projects)",
    company: "Frontend Mentor",
    period: "2024 - 2025",
    description:
      "Completed real-world front-end projects and coding challenges to strengthen responsive design and TypeScript skills; delivered accessible, user-friendly interfaces from provided designs.",
    achievements: [
      "Built production-like projects from design specifications",
      "Improved responsive design, TypeScript and accessibility skills",
      "Applied best practices for clean, maintainable front-end code",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <div className="h-1 w-20 bg-primary mb-12 rounded"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  {exp.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      iconClass: "fa-brands fa-github",
      label: "GitHub",
      href: "https://github.com/BiniyamTafesselemu",
    },
    {
      iconClass: "fa-brands fa-linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/biniyam-tafesse-b0003633a/",
    },
    {
      iconClass: "fa-brands fa-telegram",
      label: "Telegram",
      href: "https://t.me/BiniyamTafesse7",
    },
    {
      iconClass: "fa-solid fa-envelope",
      label: "Email",
      href: "mailto:biniyamtafesse228@gmail.com",
    },
  ]

  const sectionLinks = [
    { label: "About", href: "#about" },
    { label: "work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="w-full border-t border-smoke-900 bg-background py-8 px-4 print:hidden md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {/* Section Links (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium md:justify-start"
          >
            {sectionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary transition-colors hover:text-primary/80"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Socials (Center) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex ml-120 gap-x-12 text-1xl"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={link.label}
              >
                <i className={`${link.iconClass} fa-2x`}></i>
              </motion.a>
            ))}
          </motion.div>

          {/* Empty div for spacing on the right */}
          <div className="hidden md:block"></div>
        </div>

        {/* Copyright (Centered Bottom) */}
        <div className="mt-8 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Biniyam Tafesse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

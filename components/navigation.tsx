"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "../app/theme-toggle"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ color: "hsl(var(--primary))" }}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            {item.label}
          </motion.a>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-foreground hover:bg-card rounded-lg"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full right-0 mt-2 w-56 origin-top-right rounded-md bg-card shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-border pt-2 mt-2 flex justify-center">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

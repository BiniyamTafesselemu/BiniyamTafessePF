"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Navigation from "./navigation" // Assuming navigation.tsx is in the same folder or adjust path

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary flex-shrink-0"
          >
            <Image
              src="/inst.jpg"
              alt="Biniyam Tafesse"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <h1 className="font-bold text-lg md:text-xl">Biniyam Tafesse</h1>
            <p className="text-sm text-muted-foreground">Backend & Frontend Developer</p>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  )
}

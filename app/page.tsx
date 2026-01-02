"use client"

import { InView } from "react-intersection-observer"
import { useActiveSection } from "./active-section-context"
import About from "@/components/sections/about"
import Work from "@/components/sections/work"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import Footer from "@/components/Footer"
// import Footer from "@/components/footer"

export default function Page() {
  const { setActiveSection } = useActiveSection()

  return (
    <main className="min-h-screen">
      <InView as="div" onChange={(inView) => inView && setActiveSection("about")} threshold={0.5}>
        <About />
      </InView>

      <InView as="div" onChange={(inView) => inView && setActiveSection("projects")} threshold={0.5}>
        <Work />
      </InView>

      <InView as="div" onChange={(inView) => inView && setActiveSection("experience")} threshold={0.5}>
        <Experience />
      </InView>

      <InView as="div" onChange={(inView) => inView && setActiveSection("contact")} threshold={0.5}>
        <Contact />
      </InView>

      <Footer />
    </main>
  )
}

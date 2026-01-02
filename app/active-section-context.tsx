"use client"

import React, { createContext, useState, useContext } from "react"

type SectionId = "experience" | "contact" | "about" | "projects" | string // Add all your section IDs here

interface ActiveSectionContextType {
  activeSection: SectionId
  setActiveSection: React.Dispatch<React.SetStateAction<SectionId>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export const ActiveSectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionId>("about") // Default section

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export const useActiveSection = () => useContext(ActiveSectionContext)!
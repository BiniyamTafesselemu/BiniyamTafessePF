"use client"

import { useActiveSection } from "./active-section-context"

export default function DynamicBackground() {
  const { activeSection } = useActiveSection()

  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      {/* Base Background Color (respects light/dark mode) */}
      <div className="absolute inset-0 bg-background" />

      {/* Icon Layers */}
      <div className="absolute inset-0">
        {/* About Section Icons */}
        <div
          className={`h-full w-full bg-border dark:bg-muted opacity-0 transition-opacity duration-1000 animate-float ${activeSection === "about" ? "opacity-100" : ""}`}
          style={{
            maskImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='black'%3e%3cpath fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z' clip-rule='evenodd' /%3e%3c/svg%3e")`,
            maskRepeat: "repeat",
            maskSize: "22rem",
            WebkitMaskImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='black'%3e%3cpath fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z' clip-rule='evenodd' /%3e%3c/svg%3e")`,
            WebkitMaskRepeat: "repeat",
            WebkitMaskSize: "22rem",
          }}
        />
        {/* Projects Section Icons */}
        <div
          className={`absolute inset-0 h-full w-full bg-border dark:bg-muted opacity-0 transition-opacity duration-1000 animate-float`}
          style={{
            animationDelay: "-5s", // Offset animation
            opacity: activeSection === "projects" ? 1 : 0,
            maskImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='black'%3e%3cpath fill-rule='evenodd' d='M7.455 2.103a.75.75 0 00-.91 1.06l4.5 7.5a.75.75 0 00.91-1.06l-4.5-7.5zm5.09 0a.75. ৭৫ 0 01.91 1.06l-4.5 7.5a.75.75 0 01-.91-1.06l4.5-7.5zM10 4a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V4.75A.75.75 0 0110 4z' clip-rule='evenodd' /%3e%3c/svg%3e")`,
            maskRepeat: "repeat",
            maskSize: "20rem",
            WebkitMaskImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='black'%3e%3cpath fill-rule='evenodd' d='M7.455 2.103a.75.75 0 00-.91 1.06l4.5 7.5a.75.75 0 00.91-1.06l-4.5-7.5zm5.09 0a.75. ৭৫ 0 01.91 1.06l-4.5 7.5a.75.75 0 01-.91-1.06l4.5-7.5zM10 4a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V4.75A.75.75 0 0110 4z' clip-rule='evenodd' /%3e%3c/svg%3e")`,
            WebkitMaskRepeat: "repeat",
            WebkitMaskSize: "20rem",
          }}
        />
        {/* Experience Section Icons (Planets) */}
        <div
          className={`absolute inset-0 h-full w-full bg-border dark:bg-muted opacity-0 transition-opacity duration-1000 animate-float`}
          style={{
            animationDelay: "-10s", // Offset animation
            opacity: activeSection === "experience" ? 1 : 0,
            maskImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='black'%3e%3cpath d='M6.28 5.22a.75.75 0 00-1.06 1.06l7.5 7.5a.75.75 0 001.06-1.06l-7.5-7.5zm-1.06 9.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0z' /%3e%3c/svg%3e")`,
            maskRepeat: "repeat",
            maskSize: "25rem",
            WebkitMaskImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='black'%3e%3cpath d='M6.28 5.22a.75.75 0 00-1.06 1.06l7.5 7.5a.75.75 0 001.06-1.06l-7.5-7.5zm-1.06 9.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0z' /%3e%3c/svg%3e")`,
            WebkitMaskRepeat: "repeat",
            WebkitMaskSize: "25rem",
          }}
        />
        {/* Contact Section Icons (Telegram) */}
        <div
          className={`absolute inset-0 h-full w-full bg-border dark:bg-muted opacity-0 transition-opacity duration-1000 animate-float`}
          style={{
            animationDelay: "-15s", // Offset animation
            opacity: activeSection === "contact" ? 1 : 0,
            maskImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3e%3cpath d='M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.31 11.95c-.8-.25-.8-1.2.12-1.51L21.34 2.13c.66-.25 1.22.21.98.92L19.23 17.8c-.24.72-1.03.9-1.59.43L12.4 14.4l-2.12 2.05c-.23.24-.43.44-.69.44z'/%3e%3c/svg%3e")`,
            maskRepeat: "repeat",
            maskSize: "18rem",
            WebkitMaskImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3e%3cpath d='M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.31 11.95c-.8-.25-.8-1.2.12-1.51L21.34 2.13c.66-.25 1.22.21.98.92L19.23 17.8c-.24.72-1.03.9-1.59.43L12.4 14.4l-2.12 2.05c-.23.24-.43.44-.69.44z'/%3e%3c/svg%3e")`,
            WebkitMaskRepeat: "repeat",
            WebkitMaskSize: "18rem",
          }}
        />
      </div>
    </div>
  )
}
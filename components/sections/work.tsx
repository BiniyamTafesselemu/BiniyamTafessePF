"use client"

import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        title: "teach-track — Web Applications",
        description:
            "The system has four portals: education bureau, teachers, schools, and public. It is built using React, Express.js, and PostgreSQL, and deployed on cPanel. The system controls teachers' recruitment, circulation, and retirement processes according to the Addis Ababa regulations.",
        link: "https://github.com/Biruk-ak/teachtrack",
        image: "/Education.jpg",
        tags: ["React", "Express.js", "Postgres", "Auth"],
    },
    {
        title: "e-commerce — Web Applications",
        description:
            "The system is built using React, Express.js, and MongoDB. It has two portals: users/customers and admin panels from which admins post their products. It is integrated with the Chapa payment method.",
        link: "https://github.com/BiniyamTafesselemu/E-Commerce",
        image: "/ecomerce.webp",
        tags: ["React", "Node.js", "MongoDB", "Payments"],
    },
    {
        title: "School Timetable Generator",
        description: "Built using React, Express, and MySQL. It generates timetable schedules for different level schools (KG-Preparatory). It considers teacher availability, class availability, sections under each class, and number of students per class to generate schedules.",
        link: "https://github.com/BiniyamTafesselemu/pi_schooltimetable_generator",
        image: "/pi.jpg",
        tags: ["Python", "Algorithms", "Optimization"],
    },
    {
        title: "Serdo Travel — Flutter Travel App",
        description:
            "It is built using Flutter and raw PHP. It provides starting point and destination selection for users and shows available seat numbers.",
        link: "https://github.com/BiniyamTafesse/flutter_bus_ticket_booking-_app",
        image: "/serdo.jpg",
        tags: ["Flutter", "Dart", "REST API"],
    },
    {
        title: "Frontend Mentor — Portfolio Projects",
        description:
            "Completed various front-end challenges to polish responsive design, TypeScript and accessibility; delivered production-ready UI implementations.",
        link: "https://www.frontendmentor.io/profile/BiniyamTafesselemu/solutions",
        image: "/frontendmentor.png",
        tags: ["HTML", "CSS", "TypeScript", "Accessibility"],
    },
]

export default function Work() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const cardRefs = useRef<Record<number, HTMLDivElement | null>>({})
    const measureRef = useRef<HTMLDivElement | null>(null)
    const [expanded, setExpanded] = useState<Record<number, boolean>>({})
    const [canExpand, setCanExpand] = useState<Record<number, boolean>>({})
    const [truncatedText, setTruncatedText] = useState<Record<number, string>>({})
    const [cardWidth, setCardWidth] = useState(0)

    // card width: compute column card width based on container and grid columns (3 columns)
    useLayoutEffect(() => {
        const measure = () => {
            const el = containerRef.current
            if (!el) return
            const gutter = 24 // matches gap-6
            const cols = 3
            const totalGap = gutter * (cols - 1)
            const w = Math.floor((el.clientWidth - totalGap) / cols)
            setCardWidth(w)
        }
        measure()
        window.addEventListener("resize", measure)
        return () => window.removeEventListener("resize", measure)
    }, [])

    // utility: measure if full text fits in allowed lines; compute truncated substring if not
    const computeTruncationFor = (idx: number) => {
        const card = cardRefs.current[idx]
        if (!card) return
        const p = card.querySelector(".desc-p") as HTMLParagraphElement | null
        if (!p) return

        const style = getComputedStyle(p)
        const width = Math.max(0, Math.floor(p.getBoundingClientRect().width))

        // prepare measurement element
        let m = measureRef.current
        if (!m) {
            m = document.createElement("div")
            measureRef.current = m
            m.style.position = "absolute"
            m.style.visibility = "hidden"
            m.style.pointerEvents = "none"
            m.style.whiteSpace = "normal"
            document.body.appendChild(m)
        }

        // copy font styles
        m.style.font = style.font
        m.style.fontSize = style.fontSize
        m.style.lineHeight = style.lineHeight
        m.style.fontWeight = style.fontWeight
        m.style.letterSpacing = style.letterSpacing
        m.style.width = `${width}px`
        m.style.wordBreak = "break-word"

        const fullText = projects[idx].description
        m.innerText = fullText
        const fullHeight = m.getBoundingClientRect().height

        const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.2
        const allowedLines = 3 // <= change: limit to 3 lines
        const allowedHeight = lineHeight * allowedLines

        if (fullHeight <= allowedHeight + 1) {
            setCanExpand((s) => ({ ...s, [idx]: false }))
            setTruncatedText((s) => ({ ...s, [idx]: fullText }))
            return
        }

        // binary search substring length that fits allowedHeight
        let lo = 0
        let hi = fullText.length
        while (lo < hi) {
            const mid = Math.ceil((lo + hi) / 2)
            m.innerText = fullText.slice(0, mid) + "…"
            const h = m.getBoundingClientRect().height
            if (h > allowedHeight) {
                hi = mid - 1
            } else {
                lo = mid
            }
        }

        // ensure final fits and also fits when appending the inline toggle text ("…see more")
        let finalLen = lo
        const toggleText = "…see more" // inline toggle appended immediately after text
        while (finalLen > 0) {
            m.innerText = fullText.slice(0, finalLen) + toggleText
            if (m.getBoundingClientRect().height <= allowedHeight) break
            finalLen--
        }

        const finalText = fullText.slice(0, Math.max(0, finalLen))
        setCanExpand((s) => ({ ...s, [idx]: true }))
        setTruncatedText((s) => ({ ...s, [idx]: finalText }))
    }

    useEffect(() => {
        // compute for all projects after layout or cardWidth change
        projects.forEach((_, i) => computeTruncationFor(i))
        // cleanup measure div on unmount
        return () => {
            if (measureRef.current) {
                try {
                    document.body.removeChild(measureRef.current)
                } catch {}
                measureRef.current = null
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardWidth])

    const toggleExpand = (idx: number) => setExpanded((s) => ({ ...s, [idx]: !s[idx] }))

    return (
        <section id="work" className="py-20">
            <div className="max-w-full " ref={containerRef}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
                <div className="h-1 w-20 bg-primary mb-6 rounded" />

                {/* grid of 3 main displays */}
                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px]">
                    {projects.map((p, i) => {
                        const collapsed = !expanded[i]
                        const hasMore = !!canExpand[i]
                        // when collapsed and hasMore, show computed truncated text, otherwise full text
                        const shown = collapsed && hasMore ? (truncatedText[i] ?? "") : p.description
                        return (
                            <div
                                key={p.title}
                                ref={(el) => { cardRefs.current[i] = el }}
                                className="bg-surface rounded-lg overflow-hidden border-2 hover:border-primary shadow-sm"
                                // style={{ minWidth: 280 }}
                            >
                                <div className="relative h-64 bg-muted">
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover blur-[2px]" />
                                    {/* slightly blurred centered title */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <h3 className="text-white text-lg md:text-xl font-semibold text-center px-3 bg-black/25 rounded filter blur-[0.5px]">
                                            {p.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="px-4 py-3 text-sm text-muted-foreground leading-6">
                                    {/* Inline text + toggle appended exactly after text (no extra spacing) */}
                                    <span className="desc-p inline" 
                                    // style={{ whiteSpace: "pre-wrap" }}
                                    >
                                        {shown}
                                    </span>

                                    {collapsed && hasMore ? (
                                        <button
                                            onClick={() => toggleExpand(i)}
                                            className="inline-block align-baseline text-sm text-gray-400 hover:text-gray-500 ml-0 font-semibold"
                                            aria-label="See more"
                                            // style={{ marginLeft: 0 }}
                                        >
                                            …see more
                                        </button>
                                    ) : (
                                        // when expanded and there was more, show inline "seeless" immediately after full text
                                        hasMore && (
                                            <button
                                                onClick={() => toggleExpand(i)}
                                                className="inline-block align-baseline text-sm  hover:text-gray-600 ml-0 font-semibold"
                                                aria-label="See less"
                                                // style={{ marginLeft: 0 }}
                                            >
                                                seeless
                                            </button>
                                        )
                                    )}

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {p.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {p.link && (
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 mt-4 p-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors"
                                        >
                                            View Source Code
                                            <ArrowUpRight size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

import { motion, useScroll, useTransform } from "framer-motion"
import { FiExternalLink, FiGithub } from "react-icons/fi"
import { useRef } from "react"

const projects = [
  {
    title: "Legal Aid Finder",
    description:
      "A web platform that helps users quickly find accessible legal aid services with clarity and ease.",
    stack: ["React", "Tailwind", "JavaScript"],
    live: "https://legal-aid-wheat.vercel.app/",
    github: "https://github.com/udemecomfort/LegalAid"
  },
  {
    title: "Adex Driving School",
    description:
      "A responsive website built to showcase courses, services, and trust for a professional driving school.",
    stack: ["React", "Tailwind", "JavaScript"],
    live: "https://www.adexdd.com/",
    github: ""
  },
  {
    title: "Memory Game",
    description:
      "An interactive memory game focused on logic, state handling, and smooth user interaction.",
    stack: ["React", "Tailwind", "TypeScript"],
    live: "https://memory-game-omega-puce.vercel.app/",
    github: "https://github.com/udemecomfort/MemoryGame"
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio crafted with calm visuals, motion, and intentional layout.",
    stack: ["React", "Tailwind", "TypeScript", "Framer Motion"],
    live: "#",
    github: "#"
  }
]

const Projects = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.25], [80, 0])

  return (
    <section
      ref={ref}
      className="relative bg-black text-white px-6 md:px-24 py-36 overflow-hidden"
    >
      <motion.div style={{ opacity, y }} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="text-gray-400 uppercase tracking-[0.35em] text-sm">
            Selected Work
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
            Projects built with intention
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            A collection of projects where clarity, structure, and user
            experience guide every decision.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-24 grid md:grid-cols-2 gap-14">
          {projects.map((project, index) => {
            const cardY = useTransform(
              scrollYProgress,
              [0, 0.6],
              [70 + index * 25, 0]
            )

            return (
              <motion.article
                key={index}
                style={{ y: cardY }}
                className="group relative rounded-3xl p-px bg-linear-to-br from-white/20 via-white/5 to-transparent"
              >
                <div className="relative h-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 transition group-hover:border-[#07AA99]/40">
                  
                  {/* Index */}
                  <span className="absolute top-6 right-6 text-sm text-gray-500">
                    0{index + 1}
                  </span>

                  {/* Content */}
                  <h3 className="text-2xl font-medium">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-10 flex items-center gap-6">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#07AA99] hover:opacity-80 transition"
                      >
                        <FiExternalLink />
                        Live
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#07AA99] hover:opacity-80 transition"
                      >
                        <FiGithub />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

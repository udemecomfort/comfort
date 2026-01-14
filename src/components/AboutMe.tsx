import { motion, useScroll, useTransform } from "framer-motion"
import { HiOutlineSparkles } from "react-icons/hi2"
import { FiCode } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"
import { useRef } from "react"

const cards = [
  {
    icon: <HiOutlineSparkles />,
    title: "Who I am",
    text: "I’m Comfort Udeme — a frontend developer focused on clarity, elegance, and interfaces that feel intentional."
  },
  {
    icon: <FiCode />,
    title: "What I do",
    text: "I build scalable, responsive interfaces with React, Tailwind CSS, and TypeScript."
  },
  {
    icon: <BsHeart />,
    title: "How I think",
    text: "Great interfaces should feel effortless — visually calm, intuitive, and thoughtfully structured."
  }
]

const AboutMe = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.4], [80, 0])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0F0F0F] text-white px-6 md:px-24 py-18 overflow-hidden"
    >

      {/* background glow */}
      <motion.div
        style={{ opacity }}
        className="absolute top-24 left-1/2 -translate-x-1/2 w-130 h-130 bg-[#07AA99]/20 blur-[160px] rounded-full"
      />

      <motion.div
        style={{ opacity, y }}
        className="relative max-w-6xl mx-auto"
      >
        {/* heading */}
        <div className="text-center">
          <p className="text-gray-400 uppercase tracking-[0.35em] text-sm">
            a little more
          </p>

          <h2 className="mt-5 text-2xl md:text-5xl font-semibold">
            About me<span className="text-[#07AA99] text-5xl">.</span>
          </h2>
        </div>

        {/* cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => {
            const cardY = useTransform(
              scrollYProgress,
              [0, 0.6],
              [60 + index * 20, 0]
            )

            return (
              <motion.div
                key={index}
                style={{ y: cardY }}
                className="relative group rounded-2xl p-1px bg-linear-to-br from-white/20 via-white/5 to-white/0"
              >
                <div className="h-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 transition group-hover:border-[#07AA99]/50">

                  <div className="text-[#07AA99] text-3xl">
                    {card.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-medium">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-gray-300 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          style={{ opacity }}
          className="mt-20 text-center"
        >
          <button className="px-10 py-3 rounded-full bg-[#07AA99] text-black font-medium hover:scale-105 transition">
            Let’s build something great
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutMe

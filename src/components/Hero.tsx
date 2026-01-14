import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center px-6 md:px-24 overflow-hidden">
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[500px] h-[500px] bg-[#07aa99]/20 rounded-full top-1/4 left-1/2 -translate-x-1/2 blur-[150px] z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center text-center z-10"
      >
        {/* Social icons */}
        <div className="flex space-x-4 mb-6">
          <FiGithub className="bg-white w-9 h-9 rounded-full text-black p-1 hover:scale-110 transition" />
          <FaLinkedinIn className="bg-white w-9 h-9 rounded-full text-black p-1 hover:scale-110 transition" />
          <SiGmail className="bg-white w-9 h-9 rounded-full text-black p-1 hover:scale-110 transition" />
          <FaXTwitter className="bg-white w-9 h-9 rounded-full text-black p-1 hover:scale-110 transition" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Hi, I'm <span className="text-[#07aa99]">Comfort.</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl max-w-3xl text-gray-200">
          A passionate <span className="text-[#07aa99]">Frontend Developer</span> turning ideas and designs into 
          stunning, functional web experiences. Let's build something amazing together.
        </p>

        {/* CTA button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-[#07aa99] hover:bg-[#05a287] text-black font-semibold px-8 py-3 rounded-lg transition"
        >
          Let's Collaborate
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

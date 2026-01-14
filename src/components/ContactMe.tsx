import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const contacts = [
  {
    label: "Instagram",
    value: "Follow my journey",
    icon: <FaInstagram size={22} />,
    link: "https://instagram.com/yourusername",
  },
  {
    label: "WhatsApp",
    value: "Chat with me",
    icon: <FaWhatsapp size={22} />,
    link: "https://wa.me/234XXXXXXXXXX",
  },
  {
    label: "LinkedIn",
    value: "Let’s connect",
    icon: <FiLinkedin size={22} />,
    link: "https://linkedin.com/in/yourusername",
  },
  {
    label: "Email",
    value: "Send a message",
    icon: <FiMail size={22} />,
    link: "mailto:youremail@example.com",
  },
  {
    label: "GitHub",
    value: "View my work",
    icon: <FiGithub size={22} />,
    link: "https://github.com/yourusername",
  },
];

const ContactMe = () => {
  return (
    <section className="relative bg-[#0F0F0F] text-white px-6 md:px-24 py-18 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#07AA99]/20 blur-[170px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-gray-400 uppercase tracking-[0.35em] text-sm">
            Contact
          </p>
          <h2 className="mt-5 text-4xl md:text-6xl font-semibold">
            Let’s Work Together
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto leading-relaxed">
            Have a project, collaboration, or idea in mind?  
            Reach out through any platform below I respond personally.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#07AA99]/25 via-transparent to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-lg font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-gray-400 group-hover:text-gray-300">
                    {item.value}
                  </p>
                </div>
                <div className="text-[#07AA99] group-hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;

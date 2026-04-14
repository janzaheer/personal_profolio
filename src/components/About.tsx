import { motion } from "framer-motion";
import { FiCode, FiServer, FiCpu, FiAward } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { aboutText } from "../data/siteData";

const highlights = [
  { icon: FiAward, label: "10+ Years", sublabel: "Experience" },
  { icon: FiServer, label: "Backend", sublabel: "Specialist" },
  { icon: FiCode, label: "50+", sublabel: "Projects Delivered" },
  { icon: FiCpu, label: "AI-Powered", sublabel: "Development" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionHeader
          badge="About Me"
          title="Turning complex problems into elegant solutions"
          subtitle="A decade of building software that powers real businesses"
        />

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4">
            {aboutText.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-dark-600 dark:text-dark-400 leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-5 text-center hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <item.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                <div className="font-bold text-lg">{item.label}</div>
                <div className="text-xs text-dark-500 dark:text-dark-400">
                  {item.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

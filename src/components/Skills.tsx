import { motion } from "framer-motion";
import {
  FiMonitor,
  FiLink,
  FiDatabase,
  FiCloud,
  FiTool,
  FiCpu,
} from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { skills } from "../data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  backend: FiDatabase,
  frontend: FiMonitor,
  integrations: FiLink,
  devops: FiCloud,
  ai: FiCpu,
  tools: FiTool,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark-50/50 dark:bg-dark-900/50">
      <div className="section-container">
        <SectionHeader
          badge="Tech Stack"
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, group], i) => {
            const Icon = iconMap[key] || FiTool;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6 hover:border-primary-300 dark:hover:border-primary-700 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

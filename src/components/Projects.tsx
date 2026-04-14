import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/siteData";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeader
          badge="Projects"
          title="Featured Work"
          subtitle="A selection of projects that showcase my expertise"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl hover:shadow-primary-500/5 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-2.5 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400 rounded-md">
                  {project.category}
                </span>
                <FiArrowUpRight className="w-5 h-5 text-dark-400 group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="pt-4 border-t border-dark-200/50 dark:border-dark-700/50">
                <p className="text-xs font-medium text-dark-500 dark:text-dark-400 mb-2">
                  Impact
                </p>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {project.outcome}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

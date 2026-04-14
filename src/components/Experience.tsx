import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiExternalLink } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { experience, education } from "../data/siteData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-dark-50/50 dark:bg-dark-900/50"
    >
      <div className="section-container">
        <SectionHeader
          badge="Experience"
          title="Professional Journey"
          subtitle="A decade of building impactful software solutions"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dark-200 dark:bg-dark-700 md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-500 rounded-full -translate-x-1.5 md:-translate-x-1.5 top-8 ring-4 ring-white dark:ring-dark-950 z-10" />

                {/* Date side */}
                <div
                  className={`hidden md:flex md:w-1/2 ${
                    i % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"
                  } pt-6`}
                >
                  <div
                    className={`text-sm font-medium text-dark-500 dark:text-dark-400 ${
                      i % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="text-primary-600 dark:text-primary-400 font-semibold">
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1 mt-1 justify-end">
                      <FiMapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Card side */}
                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  } pl-12 md:pl-12`}
                >
                  <div className="glass-card p-6 hover:border-primary-300 dark:hover:border-primary-700 transition-all">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FiBriefcase className="w-4 h-4 text-primary-500" />
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
                          >
                            {exp.company}
                            <FiExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Mobile date */}
                    <div className="md:hidden mb-3 text-sm text-dark-500 dark:text-dark-400">
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.period}
                      </span>
                      <span className="mx-2">·</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-sm text-dark-500 dark:text-dark-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 mb-4">
                      {exp.achievements.slice(0, 4).map((ach) => (
                        <li
                          key={ach}
                          className="text-sm text-dark-600 dark:text-dark-300 flex items-start gap-2"
                        >
                          <span className="text-primary-500 mt-1.5 flex-shrink-0">
                            ▹
                          </span>
                          {ach}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs bg-primary-50 dark:bg-primary-950/30 text-primary-700 dark:text-primary-400 rounded-md font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 glass-card p-6 max-w-2xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase bg-primary-100 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400 rounded-full">
              Education
            </span>
            <h3 className="font-bold text-lg">{education.degree}</h3>
            <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">
              {education.institution}
            </p>
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mt-1">
              {education.period} · {education.major}
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {education.achievements.map((ach) => (
                <span
                  key={ach}
                  className="px-3 py-1 text-xs bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 rounded-lg"
                >
                  {ach}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

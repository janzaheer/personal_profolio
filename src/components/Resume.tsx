import { motion } from "framer-motion";
import { FiDownload, FiFileText } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { siteData } from "../data/siteData";

export default function Resume() {
  return (
    <section
      id="resume"
      className="section-padding bg-dark-50/50 dark:bg-dark-900/50"
    >
      <div className="section-container">
        <SectionHeader
          badge="Resume"
          title="My Resume"
          subtitle="Download or preview my professional resume"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary-100 dark:bg-primary-950/50 flex items-center justify-center">
              <FiFileText className="w-10 h-10 text-primary-500" />
            </div>

            <h3 className="text-xl font-bold mb-2">Zaheer Jan — Resume</h3>
            <p className="text-dark-500 dark:text-dark-400 mb-8 max-w-md mx-auto">
              10+ years of software engineering experience. Backend
              architecture, API development, cloud infrastructure, and team
              leadership.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteData.resumeUrl}
                download
                className="btn-primary"
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href={siteData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FiFileText className="w-5 h-5" />
                View Online
              </a>
            </div>
          </div>

          {/* PDF Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 glass-card overflow-hidden"
          >
            <div className="p-4 border-b border-dark-200/50 dark:border-dark-700/50 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-dark-400 font-mono">
                resume.pdf
              </span>
            </div>
            <iframe
              src={siteData.resumeUrl}
              className="w-full h-[600px] md:h-[800px]"
              title="Resume Preview"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  FiServer,
  FiLink2,
  FiZap,
  FiTarget,
  FiBox,
  FiTrendingUp,
  FiCpu,
  FiCheck,
} from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { services } from "../data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  server: FiServer,
  api: FiLink2,
  automation: FiZap,
  tracking: FiTarget,
  saas: FiBox,
  ai: FiCpu,
  performance: FiTrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <SectionHeader
          badge="Services"
          title="What I Can Do For You"
          subtitle="Specialized services to help your business grow with technology"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FiServer;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-6 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl hover:shadow-primary-500/5 transition-all group"
              >
                <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 w-fit mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300"
                    >
                      <FiCheck className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

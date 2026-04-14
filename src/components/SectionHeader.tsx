import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-primary-100 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400 rounded-full">
        {badge}
      </span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-subtitle ${center ? "mx-auto" : ""}`}>{subtitle}</p>}
    </motion.div>
  );
}

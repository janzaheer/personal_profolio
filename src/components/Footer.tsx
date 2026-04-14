import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { siteData } from "../data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-50 dark:bg-dark-900 border-t border-dark-200/50 dark:border-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold gradient-text tracking-tight"
            >
              ZJ<span className="text-dark-400 dark:text-dark-500">.</span>
            </a>
            <p className="mt-2 text-sm text-dark-500 dark:text-dark-400">
              Building digital solutions that matter.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={siteData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${siteData.email}`}
              className="p-2.5 rounded-xl bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-200/50 dark:border-dark-800/50 text-center">
          <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center justify-center gap-1">
            &copy; {currentYear} Zaheer Jan. Crafted with
            <FiHeart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}

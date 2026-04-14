import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiSend,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { siteData } from "../data/siteData";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteData.email}?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: siteData.email,
      href: `mailto:${siteData.email}`,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: siteData.phone,
      href: `tel:${siteData.phone}`,
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: siteData.location,
      href: "#",
    },
  ];

  const socials = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: siteData.github,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: siteData.linkedin,
    },
    {
      icon: FiMessageCircle,
      label: "WhatsApp",
      href: `https://wa.me/${siteData.phone.replace(/[^0-9]/g, "")}`,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionHeader
          badge="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's talk about how I can help"
        />

        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary-300 dark:hover:border-primary-700 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-dark-400 font-medium">
                      {info.label}
                    </div>
                    <div className="text-sm font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-3">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                {submitted ? (
                  "Opening email client..."
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

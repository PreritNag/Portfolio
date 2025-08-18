import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code, Coffee } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/preritnag",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/prerit-nag-378b4a284",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:preritnag4@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Name and Title */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Prerit Nag
            </h3>
            <p className="text-muted-foreground">
              Software Engineer & Co-founder at Linkefy
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted/50 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </div>

          {/* Quick Info */}
          <div className="mb-8 text-sm text-muted-foreground">
            <p className="mb-2">
              📍 Patna, India • 🎓 NIT Patna • 💼 Open to Opportunities
            </p>
            <p>
              Building innovative solutions with AI, React.js, and modern web technologies
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary mx-1" />
              <span>by Prerit Nag</span>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <Coffee className="h-4 w-4 mr-1" />
              <span>Fueled by coffee and curiosity</span>
            </div>

            <div className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </div>
          </div>

          {/* Tech Stack Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 pt-6 border-t border-border"
          >
            <p className="text-xs text-muted-foreground">
              Built with React.js, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
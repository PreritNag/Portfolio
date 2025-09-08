import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, ExternalLink, Users, Database, Zap, TrendingUp } from "lucide-react";

// ✅ Import your screenshots
import atsPreview from "../assets/Screenshot_9-9-2025_25822_ats-resume-builder-nine.vercel.app.jpeg";
import linkipaxPreview from "../assets/Screenshot_9-9-2025_25859_linlifys.vercel.app.jpeg";
import disciplinoPreview from "../assets/Screenshot_9-9-2025_25930_github.com.jpeg";

const projects = [
  {
    title: "ATS Resume Builder",
    description: "AI-powered resume optimization platform with ATS scoring and real-time analytics.",
    longDescription:
      "Engineered a resume builder that uses AI and Gemini API to optimize resumes for Applicant Tracking Systems (ATS). Features include PDF parsing with 99% accuracy, ATS scoring across 50+ parameters, real-time analytics dashboard, and AI-based content enhancements.",
    image: atsPreview, // ✅ local screenshot
    technologies: [
      "React.js", "Node.js", "MongoDB", "Gemini AI", "Material UI", "JWT", "Firebase",
    ],
    github: "https://github.com/Sarthak-Developer-Coder/ATS_RESUME_BUILDER",
    live: "https://ats-resume-builder-nine.vercel.app",
    featured: true,
    stats: [
      { icon: Users, label: "Active Users", value: "500+" },
      { icon: Database, label: "Daily Views", value: "1K+" },
      { icon: Zap, label: "Parsing Accuracy", value: "99%" },
      { icon: TrendingUp, label: "Resume Rejection Drop", value: "65%" },
    ],
    achievements: [
      "Served 500+ users with real-time ATS scoring",
      "Reduced resume rejection by 65% via AI optimizations",
      "Achieved 95% Lighthouse performance score",
      "Integrated Gemini AI for content enhancement",
    ],
  },
  {
    title: "Linkipax: AI-Powered Professional Network",
    description: "Networking platform with AI skill-based matchmaking and real-time messaging.",
    longDescription:
      "Scalable professional networking platform that leverages AI for matchmaking based on skills and goals. Includes real-time messaging, mentorship features, and secure OAuth authentication for users.",
    image: linkipaxPreview, // ✅ local screenshot
    technologies: ["React.js", "Node.js", "MongoDB", "GraphQL", "WebSockets", "OAuth 2.0", "AI/ML"],
    github: "https://github.com/LinkiPax/Linlifys",
    live: "https://linlifys.vercel.app",
    featured: true,
    stats: [
      { icon: Users, label: "Mentorship Matches", value: "1,200+" },
      { icon: Zap, label: "Latency", value: "300ms" },
      { icon: TrendingUp, label: "Connection Relevance", value: "+80%" },
      { icon: Database, label: "Queries/Second", value: "50+" },
    ],
    achievements: [
      "Boosted connection relevance by 80% with AI matchmaking",
      "Enabled 1,200+ mentorship connections",
      "Secured access for 10,000+ users with OAuth 2.0",
      "Optimized API performance by 35% using GraphQL",
    ],
  },
  {
    title: "Disciplino: Next-Gen Study Platform",
    description: "Learning platform with streak tracking, NLP moderation, and Google OAuth integration.",
    longDescription:
      "Full-stack platform designed for students with gamified streak tracking, leaderboards, Google OAuth authentication, and integrated discussion features. Built NLP moderation to cut spam and support collaborative learning.",
    image: disciplinoPreview, // ✅ local screenshot
    technologies: ["React.js", "Express.js", "MongoDB", "Python", "Google APIs"],
    github: "https://github.com/my-Project-code/Diciplino",
    live: "https://diciplino.vercel.app",
    featured: false,
    stats: [
      { icon: Users, label: "Daily Active Users", value: "50+" },
      { icon: TrendingUp, label: "Engagement Increase", value: "+30%" },
      { icon: Zap, label: "Spam Reduction", value: "85%" },
      { icon: Database, label: "Content Items", value: "1,000+" },
    ],
    achievements: [
      "Served 50+ daily active users",
      "Reduced spam by 85% using NLP techniques",
      "Increased engagement by 30% with streak tracking",
      "Integrated Google APIs for seamless file sharing",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technologies and modern development practices.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""} items-center gap-8 lg:gap-12`}
            >
              {/* Image Preview */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg border border-primary/10 hover:border-primary/40 transition-all duration-500 backdrop-blur-md"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Project Info */}
              <Card className="w-full lg:w-1/2 border-0 bg-card/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8 lg:p-10">
                  {project.featured && (
                    <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full shadow-md">
                      Featured Project
                    </Badge>
                  )}
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.longDescription}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {project.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.3 + statIndex * 0.1 }}
                        className="text-center p-4 bg-background/50 rounded-lg border hover:shadow-md transition-all"
                      >
                        <div className="flex justify-center mb-2">
                          <stat.icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-lg font-bold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.3 + achIndex * 0.1 }}
                          className="flex items-start text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.3 + techIndex * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs px-2 py-1 hover:bg-primary/10 transition-colors rounded-md"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="default"
                      className="bg-gradient-to-r from-primary to-purple-500 hover:shadow-lg transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button
                        variant="outline"
                        className="hover:bg-primary/10 transition-all duration-300"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

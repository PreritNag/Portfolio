import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, ExternalLink, Users, Database, Zap, TrendingUp } from "lucide-react";
import { WebsitePreview } from "./WebsitePreview";

const projects = [
  {
    title: "LinkiPax: AI-Powered Professional Network",
    description: "Scalable networking platform with AI-powered skill-based matchmaking algorithm and real-time messaging capabilities.",
    longDescription: "Revolutionary professional networking platform that uses machine learning to intelligently match professionals based on skills, experience, and career goals. Features real-time messaging, AI career suggestions, and OAuth authentication.",
    image: "https://linkipax.vercel.app",
    technologies: ["React.js", "Node.js", "MongoDB", "GraphQL", "WebSockets", "OAuth 2.0", "AI/ML"],
    github: "https://github.com/LinkiPax/Linlifys",
    live: "https://linkipax.vercel.app",
    featured: true,
    stats: [
      { icon: Users, label: "Registered Users", value: "10,000+" },
      { icon: Zap, label: "API Response Time", value: "300ms" },
      { icon: TrendingUp, label: "Connection Relevance", value: "+40%" },
      { icon: Database, label: "Queries/Second", value: "50+" }
    ],
    achievements: [
      "Improved connection relevance by 40% with ML-based matchmaking",
      "Secured access for 10,000+ users with OAuth 2.0",
      "Optimized API performance by 35% using GraphQL",
      "Built real-time messaging with 300ms latency",
      "Facilitated 1,200+ mentor-mentee connections"
    ]
  },
  {
    title: "Diciplino: Next-Gen Study Platform",
    description: "Full-stack learning platform with content moderation, streak tracking, and collaborative study features.",
    longDescription: "Comprehensive study platform designed for modern learners with features like streak tracking, leaderboards, discussion forums, and integrated code editor for technical interview practice.",
    image: "https://diciplino.vercel.app",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Google APIs"],
    github: "https://github.com/my-Project-code/Diciplino",
    live: "https://diciplino.vercel.app",
    featured: true,
    stats: [
      { icon: Users, label: "Daily Active Users", value: "50+" },
      { icon: TrendingUp, label: "User Engagement", value: "+30%" },
      { icon: Zap, label: "Spam Reduction", value: "85%" },
      { icon: Database, label: "Content Items", value: "1000+" }
    ],
    achievements: [
      "Built platform with 50+ daily active users",
      "Reduced spam by 85% using Python NLP techniques",
      "Increased user engagement by 30% with streak tracking",
      "Integrated Google Drive API for seamless file sharing",
      "Created in-browser code editor with syntax highlighting"
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technologies and modern development practices
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Preview */}
                    <div className="relative h-64 lg:h-full min-h-[400px]">
                      <WebsitePreview 
                        url={project.image}
                        title={project.title}
                        className="h-full"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-8 lg:p-12">
                      <div className="mb-6">
                        {project.featured && (
                          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                            Featured Project
                          </Badge>
                        )}
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {project.stats.map((stat, statIndex) => (
                          <motion.div
                            key={statIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index * 0.3) + (statIndex * 0.1) }}
                            className="text-center p-3 bg-background/50 rounded-lg border"
                          >
                            <stat.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                            <p className="text-lg font-bold text-foreground">{stat.value}</p>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: (index * 0.3) + (achIndex * 0.1) }}
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
                              transition={{ duration: 0.3, delay: (index * 0.3) + (techIndex * 0.05) }}
                            >
                              <Badge variant="secondary" className="text-xs hover:bg-primary/10 transition-colors">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <Button
                          variant="default"
                          className="bg-gradient-primary hover:shadow-lg transition-all duration-300"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                        {project.live && (
                          <Button variant="outline" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
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
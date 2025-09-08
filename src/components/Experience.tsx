import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CalendarDays, MapPin, Building2, Users, TrendingUp } from "lucide-react";

const experiences = [
  
  {
    company: "OpenWise & RuxaiLab",
    role: "Open Source Contributor",
    location: "Remote",
    period: "2025 - Present",
    type: "Open Source",
    description:
      "Contributing to open-source projects in web development and NLP pipelines.",
    achievements: [
      "Revamped OpenWise UI with React.js + TypeScript, improving API efficiency by 20%",
      "Refined NLP pipelines in Python for RuxaiLab, eliminating bugs and improving documentation",
      "Authored 15+ pull requests with 2+ merged into main branches",
      "Collaborated with maintainers through reviews and issue triaging",
    ],
    technologies: ["React.js", "TypeScript", "Python", "NLP", "Machine Learning"],
  },
  {
    company: "IBM SkillsBuild",
    role: "Fellow",
    location: "Remote",
    period: "Aug 2025 - Present",
    type: "Fellowship",
    description:
      "Selected from 10,000+ applicants for a full-stack intensive fellowship by IBM.",
    achievements: [
      "Built 5+ projects with React, Node.js, and MongoDB meeting 99.8% uptime requirements",
      "Improved API performance by 40% with optimized backend design and database indexing",
      "Implemented JWT authentication serving 1,000+ users with 100% compliance",
      "Collaborated in agile teams, practicing test automation & code reviews",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Agile"],
  },
  {
    company: "Internshala",
    role: "Campus Ambassador",
    location: "Remote",
    period: "Mar 2024 - Present",
    type: "Leadership",
    description:
      "Selected among 15,000+ applicants for this nationwide student ambassador program.",
    achievements: [
      "Promoted career and internship opportunities to 5,000+ students",
      "Organized workshops and webinars on career readiness",
      "Ran targeted social media campaigns with 40% increase in platform sign-ups",
      "Built leadership and outreach skills by engaging student communities",
    ],
    technologies: [
      "Digital Marketing",
      "Event Management",
      "Social Media",
      "Leadership",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
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
            Professional{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hands-on experience across startups, open-source, and fellowships —
            building impactful, scalable solutions.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:border-primary/20 group">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Building2 className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-lg font-semibold text-primary mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + achIndex * 0.1,
                          }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.2 + techIndex * 0.05,
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
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

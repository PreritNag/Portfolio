import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Code2,
  Database,
  Brain,
  Wrench,
  Trophy,
  Globe,
  Server,
  Github,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 95, color: "#F7DF1E" },
      { name: "TypeScript", level: 90, color: "#3178C6" },
      { name: "Python", level: 88, color: "#3776AB" },
      { name: "Java", level: 82, color: "#ED8B00" },
      { name: "C++", level: 80, color: "#00599C" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React.js", level: 95, color: "#61DAFB" },
      { name: "Next.js", level: 90, color: "#000000" },
      { name: "Tailwind CSS", level: 92, color: "#06B6D4" },
      { name: "Material UI", level: 85, color: "#007FFF" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: [
      { name: "Node.js", level: 90, color: "#339933" },
      { name: "Express.js", level: 85, color: "#000000" },
      { name: "MongoDB", level: 90, color: "#47A248" },
      { name: "SQL", level: 80, color: "#336791" },
      { name: "GraphQL", level: 80, color: "#E10098" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "OpenAI / Gemini API", level: 88, color: "#412991" },
      { name: "NLP", level: 82, color: "#FF9500" },
      { name: "Recommendation Systems", level: 80, color: "#34C759" },
      { name: "Data Analysis", level: 85, color: "#007AFF" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 92, color: "#F05032" },
      { name: "Docker", level: 78, color: "#2496ED" },
      { name: "WebSockets", level: 85, color: "#010101" },
      { name: "OAuth 2.0 / JWT", level: 85, color: "#EB5424" },
      { name: "Firebase", level: 80, color: "#FFCA28" },
    ],
  },
  {
    title: "Competitive Programming",
    icon: Trophy,
    skills: [
      { name: "Data Structures", level: 90, color: "#6366F1" },
      { name: "Algorithms", level: 88, color: "#8B5CF6" },
      { name: "Problem Solving", level: 95, color: "#EC4899" },
      { name: "LeetCode (300+)", level: 85, color: "#FFA500" },
    ],
  },
];

const achievements = [
  {
    title: "LeetCode Rating 1633",
    platform: "Competitive Programming",
    description:
      "Solved 300+ problems, achieved contest rank 837 on LeetCode.",
    icon: Trophy,
  },
  {
    title: "Open Source Contributions",
    platform: "GitHub",
    description: "15+ PRs merged across OpenWise, RuxaiLab & community repos.",
    icon: Github,
  },
  {
    title: "10K+ Users Served",
    platform: "Production Apps",
    description:
      "Built apps like Linkipax & Disciplino serving thousands of active users.",
    icon: Server,
  },
  {
    title: "AI/ML Integration",
    platform: "Projects",
    description:
      "Integrated NLP, recommendation systems & Gemini/OpenAI APIs in real apps.",
    icon: Brain,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack development, AI/ML integration & scalable system design
            backed by strong problem-solving skills.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/40 transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-primary/20 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2 overflow-hidden rounded-full"
                          style={{
                            background: "rgba(0,0,0,0.1)",
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Technical <span className="text-primary">Highlights</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-secondary rounded-xl border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <Badge variant="secondary" className="mb-3 text-xs">
                  {achievement.platform}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Full-Stack Development",
              "AI/ML Integration",
              "System Architecture",
              "Database Design",
              "API Development",
              "Real-time Systems",
              "Cloud Technologies",
              "DevOps",
              "Open Source Contribution",
              "Competitive Programming",
              "Problem Solving",
            ].map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className="text-sm py-2 px-4 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 rounded-full"
                >
                  {competency}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

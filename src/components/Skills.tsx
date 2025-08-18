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
  Smartphone
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 95, color: "#F7DF1E" },
      { name: "TypeScript", level: 90, color: "#3178C6" },
      { name: "Python", level: 85, color: "#3776AB" },
      { name: "Java", level: 80, color: "#ED8B00" },
    ]
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "React.js", level: 95, color: "#61DAFB" },
      { name: "Node.js", level: 90, color: "#339933" },
      { name: "Express.js", level: 85, color: "#000000" },
      { name: "Tailwind CSS", level: 90, color: "#06B6D4" },
    ]
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 90, color: "#47A248" },
      { name: "SQL", level: 85, color: "#336791" },
      { name: "GraphQL", level: 80, color: "#E10098" },
      { name: "REST APIs", level: 95, color: "#FF6B35" },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "OpenAI API", level: 85, color: "#412991" },
      { name: "NLP", level: 80, color: "#FF9500" },
      { name: "Recommendation Systems", level: 75, color: "#34C759" },
      { name: "Data Analysis", level: 80, color: "#007AFF" },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git", level: 90, color: "#F05032" },
      { name: "Docker", level: 75, color: "#2496ED" },
      { name: "WebSockets", level: 85, color: "#010101" },
      { name: "OAuth 2.0", level: 85, color: "#EB5424" },
    ]
  },
  {
    title: "Competitive Programming",
    icon: Trophy,
    skills: [
      { name: "Data Structures", level: 90, color: "#6366F1" },
      { name: "Algorithms", level: 85, color: "#8B5CF6" },
      { name: "Problem Solving", level: 95, color: "#EC4899" },
      { name: "LeetCode (250+)", level: 80, color: "#FFA500" },
    ]
  }
];

const achievements = [
  {
    title: "250+ Problems Solved",
    platform: "LeetCode",
    description: "Active competitive programmer with consistent problem-solving practice",
    icon: Trophy
  },
  {
    title: "15+ Pull Requests",
    platform: "Open Source",
    description: "Contributing to various open-source projects and communities",
    icon: Code2
  },
  {
    title: "10K+ Users Served",
    platform: "Production Apps",
    description: "Built and deployed applications serving thousands of active users",
    icon: Server
  },
  {
    title: "AI/ML Integration",
    platform: "Multiple Projects",
    description: "Successfully integrated machine learning models in production systems",
    icon: Brain
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across full-stack development, AI/ML, and modern technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/20 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
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
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
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
                className="text-center p-6 bg-gradient-secondary rounded-lg border hover:border-primary/20 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <Badge variant="secondary" className="mb-3 text-xs">
                  {achievement.platform}
                </Badge>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
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
              "Full-Stack Development", "AI/ML Integration", "System Architecture", 
              "Database Design", "API Development", "Real-time Systems", 
              "Cloud Technologies", "DevOps", "Technical Leadership", 
              "Open Source Contribution", "Competitive Programming", "Problem Solving"
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
                  className="text-sm py-2 px-4 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
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
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export function About() {
  const achievements = [
    {
      icon: Award,
      title: "Top 1% Selection",
      description: "Internshala Student Partner Program",
    },
    {
      icon: Award,
      title: "Round 3 Qualifier",
      description: "Flipkart Grid 7.0 & Adobe Hackathon",
    },
    {
      icon: Award,
      title: "250+ Problems",
      description: "Solved on LeetCode Platform",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate software engineer building the future of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Bachelor of Technology - Electrical Engineering</p>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>National Institute of Technology, Patna</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2023 - 2027 | CGPA: 8.61</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center p-4 bg-card rounded-lg border hover:border-primary/20 transition-colors"
                >
                  <achievement.icon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate software engineer and entrepreneur currently pursuing my B.Tech in 
                Electrical Engineering at NIT Patna. My journey began with a curiosity for technology 
                and has evolved into a deep commitment to building innovative solutions that make a 
                real impact.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">What Drives Me</h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As the co-founder of <span className="text-primary font-medium">Linkefy</span>, 
                I'm building an AI-powered professional networking platform that revolutionizes 
                how people connect and grow their careers. I believe in leveraging cutting-edge 
                technologies like machine learning and GraphQL to create scalable, user-centric solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Beyond Code</h4>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to open source projects, 
                participating in competitive programming, or researching the latest in AI and 
                machine learning. I'm also passionate about technical blogging and sharing 
                knowledge with the developer community.
              </p>
            </div>

            <div className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Open Source PRs</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Platform Users</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { GraduationCap, MapPin, Calendar, Award, Briefcase } from "lucide-react";

export function About() {
  const achievements = [
    {
      icon: Award,
      title: "Samsung Fellowship (Grade I)",
      description:
        "Awarded to top 100 out of 2,700+ applicants under ISWDP Cohort 6, 2025",
    },
    {
      icon: Award,
      title: "LeetCode Milestone",
      description:
        "Achieved 1633 rating with 300+ problems solved & contest rank of 837",
    },
    {
      icon: Award,
      title: "Hackathon Success",
      description: "Advanced to Round 2 in Flipkart Grid 7.0 & Adobe Hackathon",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Motivated software engineering student specializing in full-stack,
            backend, and AI/ML. Passionate about building scalable solutions
            with React.js, Node.js, MongoDB, Python, and Java.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Education */}
            <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">
                    Bachelor of Technology - Electrical Engineering
                  </p>
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

            {/* Achievements */}
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
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey / Experience / Projects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Professional Summary */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently pursuing B.Tech at NIT Patna, I specialize in
                full-stack development, backend systems, and AI/ML. I’ve built
                projects leveraging React.js, Node.js, MongoDB, and Python while
                contributing to open-source and fellowships.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Experience</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Open Source Contributor (2025 - Present):</strong>{" "}
                Enhanced OpenWise UI with React.js + TypeScript and improved
                NLP pipelines at RuxaiLab. Authored 15+ PRs with merged
                contributions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>IBM SkillsBuild Fellow (2025):</strong> Selected from
                10,000+ applicants. Built 5+ full-stack projects, improved API
                performance by 40%, and deployed secure JWT authentication for
                1,000+ users.
              </p>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Key Projects</h4>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>
                  <strong>ATS Resume Builder:</strong> AI-powered platform with
                  99% PDF parsing accuracy and 65% reduced rejection rate.
                </li>
                <li>
                  <strong>Linkipax:</strong> AI-powered professional networking
                  with GraphQL & WebSockets; enabled 1,200+ mentorship
                  connections.
                </li>
                <li>
                  <strong>Disciplino:</strong> Learning platform with Google
                  OAuth, NLP moderation (85% spam reduction), and MongoDB streak
                  tracking.
                </li>
              </ul>
            </div>

            {/* Stats */}
            <div className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Open Source PRs</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">1200+</p>
                  <p className="text-sm text-muted-foreground">Mentorship Matches</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client"

import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  Code2, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Cloud,
  GitBranch,
  Zap
} from "lucide-react"
import { 
  RadialBarChart, 
  RadialBar, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts"

const skillCategories = [
  {
    title: "AI/ML & Data",
    icon: Zap,
    color: "#f59e0b",
    skills: [
      { name: "Python (Pandas, NumPy)", level: 85, years: 85 },
      { name: "Machine Learning", level: 80, years: 80 },
      { name: "Data Analysis", level: 82, years: 82 },
      { name: "TensorFlow", level: 75, years: 75},
      { name: "Streamlit", level: 80, years: 80},
      { name: "Matplotlib", level: 65, years: 65},
      { name: "Backend Integration", level: 85, years: 85},
      { name: "Data Visualization", level: 85, years: 85}    ]
  },
  {
    title: "Web Development",
    icon: Smartphone,
    color: "#f59e0b",
    skills: [
      { name: "HTML5/CSS3", level: 90, years: 90 },
      { name: "JavaScript", level: 75, years: 75 },
      { name:"React.js", level: 70, years: 70 },
      { name:"Next.js", level: 65, years: 65 },
      { name:"TypeScript", level: 55, years: 55 },
      { name:"Tailwind CSS", level: 50, years: 50 },
      { name:"PostCSS", level: 50, years: 50 },
      { name:"Framer Motion", level: 50, years: 50 },
      { name:"Three.js", level: 50, years: 50 },
    ]
  },
  {
    title: "Java",
    icon: Smartphone,
    color: "#f59e0b",
    skills: [
      { name: "Java", level: 80, years: 80 },
      { name:"Hibernate", level: 60, years: 60 },
      { name: "Spring Boot", level: 55, years: 55 },
      { name: "JDBC", level: 80, years: 80 },
      { name: "REST API", level: 70, years: 70 },
      { name: "Backend Integration", level: 85, years: 85},
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "#8b5cf6",
    skills: [
      { name: "MySQL", level: 85, years: 80 },
      { name: "MongoDB", level: 50, years: 50 },
      { name: "SQL Server", level: 75, years: 60 },
      {name: "Firebase", level: 65, years: 60},
      {name: "SQLite", level: 75, years: 75}
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "#ec4899",
    skills: [
      { name: "Microsoft Azure", level: 65, years: 65 },
      { name: "Docker", level: 55, years: 60},
      { name: "Git/GitHub", level: 90, years: 90 },
      {name: "Vercel", level: 65, years: 65}
    ]
  },
  {
    title: "Other Skills",
    icon: Code2,
    color: "#10b981",
    skills: [
      { name: "Problem Solving", level: 85, years: 85 },
      { name: "Data Structures & Algorithms", level: 60, years: 60 },
      { name: "Communication", level: 88, years: 88 },
      { name: "Teamwork", level: 80, years: 80 },
      { name: "Time Management", level: 90, years: 90 },
    ]
  }
]

const techStack = [
  { name: "Java", value: 90, color: "#b07219" },
  { name: "JavaScript", value: 95, color: "#f7df1e" },
  { name: "TypeScript", value: 90, color: "#3178c6" },
  { name: "React", value: 95, color: "#61dafb" },
  { name: "Next.js", value: 92, color: "#000000" },
  { name: "Node.js", value: 88, color: "#339933" },
  { name: "Python", value: 85, color: "#3776ab" },
  { name: "SQL", value: 80, color: "#f29111" },
  { name: "AI/ML", value: 75, color: "#ff6f61" },
];

const experienceData = [
  { category: "Frontend", years: 3, projects: 8 },
  { category: "Backend", years: 2.5, projects: 6 },
  { category: "Full Stack", years: 2, projects: 4 },
  { category: "AI/ML & Data", years: 1, projects: 3 },
  { category: "DevOps", years: 1, projects: 1 },
];


const ProgressBar = ({ skill, index }: { skill: any; index: number }) => {
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.level)
      }, index * 200)
      return () => clearTimeout(timer)
    }
  }, [isInView, skill.level, index])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.years}%</span>
      </div>
      <div className="relative">
        <Progress value={progress} className="h-2" />
        <motion.div
          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${progress}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and experience across different domains.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="glass border-0 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <category.icon 
                        className="h-6 w-6" 
                        style={{ color: category.color }}
                      />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar 
                      key={skill.name} 
                      skill={skill} 
                      index={skillIndex} 
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tech Stack Radial Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass border-0">
              <CardHeader>
                <CardTitle className="text-center">Tech Stack Proficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={techStack}>
                    <RadialBar
                      dataKey="value"
                      cornerRadius={10}
                      fill="#3b82f6"
                    />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Proficiency']}
                      labelStyle={{ color: '#000' }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Bar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass border-0">
              <CardHeader>
                <CardTitle className="text-center">Experience Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={experienceData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="years" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4"
          >
            <Card className="glass border-0">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </CardContent>
            </Card>
            
            <Card className="glass border-0">
              <CardContent className="p-6 text-center">
                <GitBranch className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Repositories</div>
              </CardContent>
            </Card>
            
            <Card className="glass border-0">
              <CardContent className="p-6 text-center">
                <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Mobile Ready</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Certifications or Learning */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I believe in staying updated with the latest technologies and best practices. 
            Currently exploring AI/ML integration and advanced cloud architectures.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["AWS Solutions Architect", "React Advanced Patterns", "TypeScript Expert", "Node.js"].map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

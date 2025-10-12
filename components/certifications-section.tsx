"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Code2 } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Microsoft Azure AI Fundamentals (AI-900)", 
    issuer: "Certiport",
    date: "2024",
    description: "Validated foundational knowledge of AI concepts, machine learning, and Azure AI services.",
    icon: Award,
    color: "#0078d4",
    imageUrl: "/AzureAI.png"
  },
  {
    id: 2,
    title: "Power BI Data Analyst Associate",
    issuer: "Mevi technologies llp",
    date: "2023",
    description: "Certified in data preparation, modeling, visualization, and deployment using Power BI.",
    icon: Award,
    color: "#f2c811",
    imageUrl: "/powerbi Cetificate.jpg"
  },
  {
    id: 3,
    title: "Cisco Entrepreneurship",
    issuer: "Cisco",
    date: "2023",
    description: "Completed training in entrepreneurial skills, business planning, and startup development.",
    icon: Award,
    color: "#1ba0db",
    imageUrl: "/Entrepreneur.png"
  },
  {
    id: 4,
    title: "AI SEO MASTERCLASS",
    issuer: "Udemy",
    date: "2025",
    description: "Learned how to use AI to optimize your website for search engines.",
    icon: BookOpen,
    color: "#f2c811",
    imageUrl: "/SEO CERTIFICATES .jpg"
  },
  {
    id: 5,
    title: "Agile Scrum in Practice",
    issuer: "Infosys Springboard",
    date: "2025",
    description: "Learned how to use Agile Scrum to optimize your website for search engines.",
    icon: BookOpen,
    color: "#1ba0db",
    imageUrl: "/Agile.png"
  },
  {
    id: 6,
    title: "Java Database Connectivity (JDBC)",
    issuer: "Infosys Springboard",
    date: "2024",
    description: "Learned how to use Java Database Connectivity (JDBC) to connect Java applications with databases, perform CRUD operations, and manage data efficiently.",
    icon: BookOpen,
    color: "#f2c811",
    imageUrl: "/JDBC.png"
  },
  {
    id: 7,
    title: "Information Technology Specialist",
    issuer: "Cisco",
    date: "2024",
    description: "Gained foundational knowledge in IT infrastructure, networking, databases, cybersecurity, and software development, preparing for real-world technology problem-solving.",
    icon: BookOpen,
    color: "#1ba0db",
    imageUrl: "/IT.png"
  },
  {
    id: 8,
    title: "Understanding Basic SQL Syntax",
    issuer: "Coursera",
    date: "2024",
    description: "Learned the fundamentals of SQL programming, including data structures, algorithms, and data analysis techniques, preparing for real-world data science problem-solving.",
    icon: BookOpen,
    color: "#f2c811",
    imageUrl: "/SQL.png"
  },
  {
    id: 9,
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class",
    date: "2022",
    description: "Learned the fundamentals of Python programming, including data structures, algorithms, and data analysis techniques, preparing for real-world data science problem-solving.",
    icon: BookOpen,
    color: "#1ba0db",
    imageUrl: "/Python.png"
  }
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-t-4 flex flex-col group overflow-hidden transform hover:scale-[1.02] hover:shadow-xl" 
                      style={{ borderTopColor: cert.color, transition: 'all 0.3s ease' }}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-full" style={{ backgroundColor: `${cert.color}15` }}>
                        <Icon className="h-6 w-6" style={{ color: cert.color }} />
                      </div>
                      <Badge variant="outline" className="text-xs">{cert.date}</Badge>
                    </div>
                    <CardTitle className="text-lg mt-4">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                  {cert.imageUrl && (
                    <div className="px-4 pb-4">
                      <a 
                        href={cert.imageUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100"
                      >
                        View Certificate
                      </a>
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

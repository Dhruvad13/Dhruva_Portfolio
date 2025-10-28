"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Coffee, Code2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const timelineData = [
  {
    year: "July 2025 - October 2025",
    title: "Developer Intern",
    company: "Toyota Kirloskar Motor Pvt. Ltd",
    description: "Contributing to full-stack web development using Python frameworks (Flask, FastAPI) to build scalable backend APIs and applications. Developing and integrating chatbot systems with real-time interactions using RESTful APIs and NLP.",
    icon: Code2,
  },
  {
    year: "2023 - 2025",
    title: "Master's of Computer Application (MCA)",
    company: "Reva University, Bengaluru",
    description: "Pursuing MCA with a CGPA of 8.4. Focusing on advanced topics in computer applications, software development, and emerging technologies.",
    icon: Calendar,
  },
  {
    year: "2020 - 2023",
    title: "Bachelor's of Computer Application (BCA)",
    company: "Government Home Science College, Hassan",
    description: "Graduated with a CGPA of 7.81. Gained strong foundation in programming, databases, and web technologies.",
    icon: MapPin,
  },
]

const stats = [
  { number: "8.4", label: "MCA CGPA" },
  { number: "7.81", label: "BCA CGPA" },
  { number: "9+", label: "Certifications" },
  { number: "4+", label: "Projects" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item')
      
      gsap.fromTo(
        items,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [isInView])

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal info and stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass border-0 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Hello there! 👋</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                I’m a passionate full-stack developer skilled in building scalable and interactive web applications. I enjoy working with technologies like React, Flask, FastAPI, and Python to create efficient, user-focused digital experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I’m not coding, I love exploring AI/ML integration, learning new frameworks, and experimenting with innovative ideas that push technology forward.
                </p>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="glass border-0 text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            <motion.h3
              className="text-2xl font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My Journey
            </motion.h3>
            
            {/* Timeline line */}
            <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-2 border-primary rounded-full">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 glass border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground font-medium mb-2">{item.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import image from "next/image"
import { time } from "console"

const projects = [
  {
    id: 1,
    title: "Chatbot for CAN Data Analysis",
    description: "Developed an AI-powered chatbot for real-time data analysis and insights generation, enabling users to query large datasets using natural language. Streamlined decision-making across departments by reducing manual data extraction time by 65% and increasing report generation efficiency.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    technologies: ["Python", "Flask", "NLP", "JavaScript", "Tailwind CSS","Pandas"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    date: "OCT 2025",
  },
  {
    id: 2,
    title: "Basketball Injury Prediction System",
    description: "Built and fine-tuned a VGG16-based deep learning model using TensorFlow & Keras, trained on custom datasets to classify and predict basketball player injuries..Used OpenCV and PIL to handle images—performing preprocessing (resizing, normalization) and augmentation to improve model robustness. Developed a Streamlit-powered dashboard with real-time predictions and visual analytics, while gaining hands-on experience in CNNs, model deployment, and full-stack ML applications.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    technologies: ["Python","TensorFlow", "Streamlit", "VGG16", "Matplotlib", "Pandas"],
    liveUrl: "https://github.com/Dhruvad13",
    githubUrl: "https://github.com/Dhruvad13",
    featured: true,
    date: "Feb 2025",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "Developed a fully responsive and interactive Netflix Clone using React.js, Firebase, JavaScript, Implemented state management with React Hooks for seamless navigation and efficient UI updates, Integrated Firebase Authentication for secure user login/signup using email and password, Designed a dynamic UI with a scroll-responsive navbar, interactive hero section, and dropdown menus, Optimized performance with lazy loading, CSS animations, and efficient rendering techniques. ",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    technologies: ["React", "JavaScript", "Firebase", "CSS3", "HTML5", "Lazy Loading", "CSS Animations", "Advanced Rendering"],
    liveUrl: "https://netflix-clone-three-tau-74.vercel.app",
    githubUrl: "https://github.com/Dhruvad13/Netflix-Clone.git",
    featured: true,
    date: "Sep 2024",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with 3D animations, dark mode, and optimized performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React.js","Next.js", "Three.js", "Framer Motion", "Tailwind CSS","TypeScript","Vercel","PostCSS","Node.js"],
    liveUrl: "https://portfolio-demo.vercel.app",
    githubUrl: "https://github.com/Dhruvad13",
    featured: false,
    date: "Oct 2025",
  },
  {
    id: 5,
    title: "Simple ATM Machine (JDBC Connectivity)",
    description: "Built a Java-based ATM system using JDBC to simulate banking transactions, Developed functionalities for checking balance, withdrawals, and deposits, Ensured secure and efficient database interaction with MySQL for real-time transactions ",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
    technologies: ["Java", "JDBC", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://github.com/Dhruvad13",
    githubUrl: "https://github.com/Dhruvad13",
    featured: false,
    date: "Jul 2024",
  },
  {
    id: 6,
    title: "Global Hospital & Blood Bank Management System",
    description: "Developed a web application to manage hospital and blood bank operations. Designed user-friendly interfaces for seamless navigation. Implemented secure database management for patient records, donor details, and blood inventory. Tested & debugged the system for cross-platform compatibility and performance.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Java", "JDBC", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://github.com/Dhruvad13",
    githubUrl: "https://github.com/Dhruvad13",
    featured: true,
    date: "Nov 2023",
  },
]

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={project.featured ? "md:col-span-2" : ""}
    >
      <Card
        className="group overflow-hidden border-0 glass hover:shadow-2xl transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Overlay buttons */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          </motion.div>
        </div>

        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{project.title}</span>
            {project.featured && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isInSection, setIsInSection] = useState(false)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Check if user is in the projects section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      // More precise detection - activate when section is prominently in view
      // Only activate if not at the last card, or if we're scrolling up from last card
      const inSection = rect.top <= viewportHeight * 0.3 && rect.bottom >= viewportHeight * 0.5
      setIsInSection(inSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-center card when index changes (only if section is in view)
  useEffect(() => {
    if (!containerRef.current || !sectionRef.current || !isInSection) return

    // Smooth scroll to center the card container in viewport
    const scrollToCenter = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const sectionTop = rect.top + window.scrollY
      const sectionHeight = rect.height
      
      // Calculate position to center the section
      const scrollTo = sectionTop + (sectionHeight / 2) - (viewportHeight / 2)

      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      })
    }

    // Small delay to allow card transition to start
    const timer = setTimeout(scrollToCenter, 100)
    return () => clearTimeout(timer)
  }, [currentIndex, isInSection])

  // Handle wheel scroll events - COMPLETELY LOCK page scroll while navigating cards
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isInSection) return

      const delta = e.deltaY
      
      // Scrolling down
      if (delta > 0) {
        if (currentIndex < projects.length - 1) {
          // Still have cards to show - BLOCK ALL scrolling
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          if (!isScrolling) {
            setIsScrolling(true)
            setCurrentIndex(prev => prev + 1)
            setTimeout(() => setIsScrolling(false), 1200)
          }
          return false
        } else {
          // At last card - disable section detection to allow natural scroll
          setIsInSection(false)
        }
      } else {
        // Scrolling up
        if (currentIndex > 0) {
          // Still have cards to go back - BLOCK ALL scrolling
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          if (!isScrolling) {
            setIsScrolling(true)
            setCurrentIndex(prev => prev - 1)
            setTimeout(() => setIsScrolling(false), 1200)
          }
          return false
        }
        // At first card - allow page to scroll naturally
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isInSection) return
      if (currentIndex > 0 || currentIndex < projects.length - 1) {
        e.preventDefault()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [currentIndex, isScrolling, isInSection])

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="relative"
      style={{ minHeight: '100vh', height: 'auto' }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center pt-20 pb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Card Stack Container - Fixed in center of viewport */}
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
          <div 
            ref={containerRef}
            className="relative w-full max-w-5xl mx-auto"
            style={{ height: '520px', perspective: '1200px' }}
          >
          {projects.map((project, index) => {
            const isActive = index === currentIndex
            const isPast = index < currentIndex
            const isFuture = index > currentIndex
            const offset = index - currentIndex

            // Calculate exact positions
            let yPosition = 0
            let scaleValue = 1
            let opacityValue = 1
            let zIndexValue = projects.length - index

            if (isPast) {
              // Past cards - hidden
              yPosition = 0
              scaleValue = 1
              opacityValue = 0
              zIndexValue = 0
            } else if (isActive) {
              // Active card - LOCKED at position 0, perfectly centered
              yPosition = 0
              scaleValue = 1
              opacityValue = 1
              zIndexValue = 100
            } else if (isFuture) {
              // Future cards stacked below with smaller offset for landscape
              yPosition = 40 + (offset - 1) * 20
              scaleValue = 0.94 - (offset * 0.02)
              opacityValue = 1
              zIndexValue = 50 - offset
            }

            return (
              <motion.div
                key={project.id}
                className="absolute inset-0 w-full"
                initial={false}
                animate={{
                  y: yPosition,
                  scale: scaleValue,
                  opacity: opacityValue,
                  zIndex: zIndexValue,
                }}
                transition={{
                  duration: 1.0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  transformOrigin: 'center top',
                }}
              >
                <Card className="h-full overflow-hidden border-0 glass shadow-2xl rounded-3xl">
                  <div className="h-full flex flex-row relative">
                    {/* Date Badge - Top Right */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-sm bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full font-semibold shadow-lg">
                        {project.date}
                      </span>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-2/5 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="text-xs bg-background/90 text-foreground px-3 py-1.5 rounded-full font-semibold border border-primary/20">
                            ⭐ Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-5 leading-relaxed text-base">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6 overflow-hidden">
                          {project.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md font-medium whitespace-nowrap"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button asChild className="flex-1">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="flex-1">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8 mb-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Scroll to navigate • {currentIndex + 1} / {projects.length}
          </p>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in working together or want to see more projects?
          </p>
          <Button size="lg" asChild>
            <a href="https://github.com/Dhruvad13" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

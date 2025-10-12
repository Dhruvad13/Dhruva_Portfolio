"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThreeDBackground } from "@/components/3d-background"
import { gsap } from "gsap"

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    )
  }, [])

  // 🔥 Hide scroll indicator after slight scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setShowScroll(false)
      else setShowScroll(true)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeDBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-background/90 -z-5" />
      
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg opacity-20 -z-10" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi there, I'm
          </motion.p>

          {/* Main title */}
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Dhruva</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light"
          >
            Full Stack Developer 
          </p>

          {/* Description */}
          <motion.div
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p>
              Passionate about creating seamless, high-performance web applications using modern technologies. 
              Currently exploring the fusion of AI and web development to build smarter, data-driven user experiences.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            
            <a
            href="/Dhruva_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="group flex items-center"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              View Resume
            </Button>
          </a>




          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 opacity-30">
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="absolute top-40 right-10 opacity-20">
            <motion.div
              className="w-16 h-16 border-2 border-primary rounded-lg"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="fixed bottom-8 left-[45%] -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showScroll ? 1 : 0, y: showScroll ? 0 : 10 }}
          transition={{ duration: 0.4 }}
          style={{ pointerEvents: "none" }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer group pointer-events-auto"
            onClick={scrollToProjects}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

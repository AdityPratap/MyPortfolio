'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Animated text phrases
const phrases = [
  "Data Analyst",
  "Data Engineer", 
  "Applied AI Engineer",
  "Team Player",
  "Problem Solver"
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  // Typing animation effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      // If waiting, do nothing
      if (isWaiting) return

      const currentPhrase = phrases[index]
      
      if (isDeleting) {
        // Deleting text
        setText(currentPhrase.substring(0, text.length - 1))
        
        // When deleted completely, move to next phrase
        if (text.length === 1) {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % phrases.length)
        }
      } else {
        // Typing text
        setText(currentPhrase.substring(0, text.length + 1))
        
        // When fully typed, wait before deleting
        if (text.length === currentPhrase.length) {
          setIsWaiting(true)
          setTimeout(() => {
            setIsWaiting(false)
            setIsDeleting(true)
          }, 2000) // Wait 2 seconds before deleting
        }
      }
    }, isDeleting ? 50 : 100) // Typing speed: 100ms, deleting speed: 50ms

    return () => clearTimeout(timeout)
  }, [text, index, isDeleting, isWaiting])

  // Handle resume download
  const handleDownloadResume = () => {
    // Replace with actual resume file path
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Make sure to add your resume PDF to public folder
    link.download = 'Aditya_Pratap_Resume.pdf'
    link.click()
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          
          {/* Left Content - Text and Buttons - SHIFTED LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: -20 }} // Negative x value shifts left
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 lg:ml-[-2rem]" // Added negative margin
          >
            {/* Glass container for text */}
            <div className="glass-dark p-8 md:p-10 rounded-3xl max-w-xl"> {/* Added max-width */}
              
              {/* Animated text line */}
              <div className="mb-6">
                <span className="text-xl md:text-2xl text-white/70">Need a Skilled </span>
                <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {text}
                </span>
                <span className="text-xl md:text-2xl text-white animate-pulse">|</span>
              </div>

              {/* Name and Role */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Aditya Pratap Singh
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 mb-2">
                Associate Software Developer @{' '}
                <span className="text-white font-semibold">Carelon Global Solutions</span>
              </p>
              
              <p className="text-base md:text-lg text-white/40 mb-8 italic">
                Transforming data into actionable insights
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300"
                  >
                    Connect Now
                  </motion.button>
                </Link>
                
                <Link href="#about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group cursor-pointer" onClick={handleDownloadResume}>
              {/* Glass container for image */}
              <div className="glass-dark p-4 rounded-3xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                
                {/* Profile image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/me.jpg"
                    alt="Aditya Pratap Singh"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Hover overlay for resume download */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-12 h-12 text-white/80 mx-auto mb-2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span className="text-white font-medium">Download Resume</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
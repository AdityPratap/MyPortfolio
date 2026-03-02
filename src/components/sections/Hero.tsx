'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isWaiting) return

      const currentPhrase = phrases[index]
      
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1))
        
        if (text.length === 1) {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % phrases.length)
        }
      } else {
        setText(currentPhrase.substring(0, text.length + 1))
        
        if (text.length === currentPhrase.length) {
          setIsWaiting(true)
          setTimeout(() => {
            setIsWaiting(false)
            setIsDeleting(true)
          }, 2000)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, index, isDeleting, isWaiting])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Aditya_Pratap_Resume.pdf'
    link.click()
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - More Compact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Glass container - Reduced padding, more compact */}
            <div className="glass-dark p-6 md:p-8 rounded-3xl max-w-xl mx-auto lg:mx-0 backdrop-blur-md bg-black/30 border border-white/10 shadow-2xl">
              
              {/* Badge - Smaller */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="text-[10px] font-medium tracking-wider text-amber-300/80 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                  ✦ Available for opportunities ✦
                </span>
              </motion.div>
              
              {/* Animated text line - Smaller text */}
              <div className="mb-3">
                <span className="text-base md:text-lg text-white/70">Need a Skilled </span>
                <span className="text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">
                  {text}
                </span>
                <span className="text-base md:text-lg text-amber-300 animate-pulse">|</span>
              </div>

              {/* Name - Slightly smaller */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 relative">
                Aditya Pratap Singh
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-300/20 to-transparent blur-xl -z-10"></div>
              </h1>
              
              {/* Role - Compact */}
              <p className="text-sm md:text-base text-white/70 mb-2 flex items-center gap-2">
                <span className="w-1 h-1 bg-amber-400 rounded-full animate-pulse"></span>
                Associate Software Developer @{' '}
                <span className="text-white font-semibold relative group whitespace-nowrap">
                  Carelon Global Solutions LLP
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-amber-300 to-white transition-all duration-300"></span>
                </span>
              </p>
              
              {/* Tagline - Compact */}
              <p className="text-xs md:text-sm text-white/40 mb-5 flex items-center gap-2">
                <svg className="w-3 h-3 text-amber-300/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Transforming data into insights
              </p>

              {/* Buttons - Smaller */}
              <div className="flex flex-wrap gap-3 mb-5">
                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full text-sm font-medium overflow-hidden shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      Connect Now
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>
                </Link>
                
                <Link href="#about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/10 hover:border-amber-300/50 transition-all duration-300 group"
                  >
                    <span className="flex items-center gap-1">
                      Learn More
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </motion.button>
                </Link>
              </div>

              {/* Stats - Compact grid */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-lg font-bold text-amber-300">4500+</div>
                  <div className="text-[10px] text-white/40">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-300">20+</div>
                  <div className="text-[10px] text-white/40">Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-300">3+</div>
                  <div className="text-[10px] text-white/40">Years</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group cursor-pointer" onClick={handleDownloadResume}>
              {/* Animated rings */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-300/20 via-blue-300/20 to-purple-300/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
              
              {/* Image container - Slightly smaller */}
              <div className="relative glass-dark p-3 rounded-3xl w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center border border-white/10 shadow-2xl">
                
                {/* Profile image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/me.jpg"
                    alt="Aditya Pratap Singh"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-amber-500/20 backdrop-blur-md p-2 rounded-full inline-block mb-1">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-4 h-4 text-amber-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-medium block">Download Resume</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-300/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
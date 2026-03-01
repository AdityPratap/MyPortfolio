'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'

// Professional font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isManualClick, setIsManualClick] = useState(false)
  const clickTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Only update active section via scroll if it wasn't a manual click
      if (!isManualClick) {
        const sections = navItems.map(item => item.href.substring(1))
        
        for (const section of sections.reverse()) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isManualClick])

  // Handle manual navigation click
  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1)
    
    // Update UI immediately
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    
    // Set manual click flag to prevent scroll interference
    setIsManualClick(true)

    // Clear existing timeout
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current)
    }

    // Reset manual click flag after scroll completes
    clickTimeoutRef.current = setTimeout(() => {
      setIsManualClick(false)
      clickTimeoutRef.current = undefined
    }, 800) // Reset after scroll should be complete

    // Get the element and scroll to it
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80 // Adjust for navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    }
  }

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/30 backdrop-blur-md border-b border-white/5 py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Glowing Initials Logo */}
          <div className="relative group">
            <Link 
              href="#home" 
              className="relative block"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
              
              {/* Initials */}
              <span className={`relative text-xl md:text-2xl font-light tracking-wider text-white/90 group-hover:text-white transition-colors ${inter.className}`}>
                APS
              </span>
            </Link>
            
            {/* Subtle hover text */}
            <span className="absolute left-0 top-full mt-1 text-[8px] text-white/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-widest uppercase">
              Aditya Pratap Singh
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`relative text-xs lg:text-sm font-light tracking-wide transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                } ${inter.className}`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/70 hover:text-white p-1.5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-[49px] left-0 right-0 z-40 md:hidden overflow-hidden"
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="bg-black/80 backdrop-blur-md border-b border-white/5 py-2">
          <div className="container mx-auto px-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`py-2 px-3 rounded-md text-sm transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'bg-white/5 text-white'
                    : 'text-white/50 hover:bg-white/5 hover:text-white/80'
                } ${inter.className}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
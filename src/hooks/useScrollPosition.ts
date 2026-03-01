'use client'

import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
      console.log('Scroll progress:', progress) // Add this to debug
    }

    window.addEventListener('scroll', handleScroll)
    // Initial call
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollProgress
}
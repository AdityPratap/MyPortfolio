'use client'

import { useState } from 'react'
import Cal, { getCalApi } from "@calcom/embed-react"
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function CalendarWidget() {
  const [isOpen, setIsOpen] = useState(false)

  // Initialize Cal.com API
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" })
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#F59E0B" } }
      })
    })()
  }, [])

  return (
    <>
      {/* Calendar Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl text-white hover:from-purple-500/20 hover:to-blue-500/20 transition-all flex items-center justify-center gap-2 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <svg 
          className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
        <span className="text-sm font-medium">
          {isOpen ? 'Close Calendar' : 'Schedule a Meeting'}
        </span>
      </motion.button>

      {/* Calendar Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            <div className="glass-dark p-4 rounded-xl border border-purple-500/20">
              <Cal
                namespace="30min"
                calLink="adityapratap/30min" // Replace with your actual Cal.com username/event
                style={{ width: '100%', height: '450px', overflow: 'hidden' }}
                config={{
                  theme: 'dark'
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import journeyData from '@/data/journey.json'
import dynamic from 'next/dynamic'

const IndiaMap = dynamic(
  () => import('@/components/3d/IndiaMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-2xl">
        <div className="text-white/50">Loading map...</div>
      </div>
    )
  }
)

interface Visit {
  date: string
  title: string
  description: string
  type: 'education' | 'professional'
  students: number | null
}

interface GroupedCity {
  city: string
  state: string
  lat: number
  lng: number
  visits: Visit[]
}

export default function Experience() {
  const [hoveredCity, setHoveredCity] = useState<GroupedCity | null>(null)
  const [selectedCity, setSelectedCity] = useState<GroupedCity | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const cities = (journeyData as any).cities as GroupedCity[]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Calculate stats
  const totalVisits = cities?.reduce((sum, city) => sum + city.visits.length, 0) || 0
  const uniqueCities = cities?.length || 0
  const educationCities = cities?.filter(c => c.visits.some(v => v.type === 'education')).length || 0

  if (!isMounted) {
    return (
      <section id="experience" className="min-h-screen py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">Journey Across India</span>
            </h2>
            <div className="glass-dark p-4 rounded-3xl h-[500px] md:h-[600px] flex items-center justify-center">
              <div className="text-white/50">Loading map...</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">Journey Across India</span>
          </h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-dark p-4 rounded-xl">
              <div className="text-2xl font-bold text-amber-300">{uniqueCities}</div>
              <div className="text-xs text-white/60">Cities Visited</div>
            </div>
            <div className="glass-dark p-4 rounded-xl">
              <div className="text-2xl font-bold text-green-400">{educationCities}</div>
              <div className="text-xs text-white/60">Education Hubs</div>
            </div>
            <div className="glass-dark p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-400">{totalVisits}</div>
              <div className="text-xs text-white/60">Total Visits</div>
            </div>
            <div className="glass-dark p-4 rounded-xl">
              <div className="text-2xl font-bold text-purple-400">4500+</div>
              <div className="text-xs text-white/60">Students Trained</div>
            </div>
          </div>

          {/* Map Container */}
          <div className="glass-dark p-4 rounded-3xl mb-8 h-[500px] md:h-[600px] relative">
            <IndiaMap
              cities={cities || []}
              onCityHover={(city) => setHoveredCity(city)}
              onCityClick={(city) => setSelectedCity(city)}
            />
            
            {/* Floating hover card */}
            {hoveredCity && (
              <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 glass-dark p-4 rounded-xl border border-amber-500/20 z-10">
                <h3 className="text-lg font-semibold text-white mb-2">{hoveredCity.city}, {hoveredCity.state}</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {hoveredCity.visits.map((visit, idx) => (
                    <div key={idx} className="border-b border-white/5 pb-2 last:border-0">
                      <div className="flex justify-between items-start">
                        <span className={`text-sm font-medium ${
                          visit.type === 'education' ? 'text-green-400' : 'text-blue-400'
                        }`}>{visit.title}</span>
                        <span className="text-xs text-white/40">{visit.date}</span>
                      </div>
                      <p className="text-xs text-white/60 mt-1">{visit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Career Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-3xl mt-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">Timeline</span>
            </h3>

            {/* Horizontal Timeline */}
            <div className="relative px-4">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300/30 via-blue-400/30 to-purple-400/30 transform -translate-y-1/2"></div>
              
              {/* Timeline items */}
              <div className="relative flex justify-between items-center">
                
                {/* BTech */}
                <div className="flex flex-col items-center text-center w-1/3 px-2">
                  <div className="w-4 h-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50 mb-3"></div>
                  <h4 className="text-sm font-semibold text-white mb-1">BTech</h4>
                  <p className="text-xs text-white/40">Sept 2021 - June 2025</p>
                  <p className="text-xs text-white/60 mt-2">IIMT College of Engineering</p>
                  <p className="text-xs text-white/40 mt-1">AI & Data Science</p>
                </div>

                {/* Technical Trainer */}
                <div className="flex flex-col items-center text-center w-1/3 px-2">
                  <div className="w-5 h-5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 mb-3 animate-pulse"></div>
                  <h4 className="text-sm font-semibold text-white mb-1">Technical Trainer</h4>
                  <p className="text-xs text-white/40">Feb 2023 - Jan 2026</p>
                  <p className="text-xs text-white/60 mt-2">Race of Advanced Computing Education</p>
                  <p className="text-xs text-amber-300 mt-2 font-semibold">4500+ Students Trained</p>
                  <p className="text-xs text-white/40 mt-1">Data Analytics • Cloud • Programming</p>
                </div>

                {/* Associate Software Developer */}
                <div className="flex flex-col items-center text-center w-1/3 px-2">
                  <div className="w-4 h-4 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 mb-3"></div>
                  <h4 className="text-sm font-semibold text-white mb-1">Associate Software Developer</h4>
                  <p className="text-xs text-white/40">March 2026 - Present</p>
                  <p className="text-xs text-white/60 mt-2">Carelon Global Solutions</p>
                  <p className="text-xs text-white/40 mt-1">Gurgaon, Haryana</p>
                </div>
              </div>
            </div>

            {/* Stats highlight */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-lg text-white/80">
                <span className="text-amber-300 font-bold">4500+</span> students trained across{' '}
                <span className="text-blue-400 font-bold">{uniqueCities}</span> cities in India
              </p>
            </div>
          </motion.div>

          {/* Selected City Modal */}
          {selectedCity && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCity(null)}
            >
              <div 
                className="glass-dark max-w-2xl p-8 rounded-3xl border border-amber-500/20 max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedCity.city}</h3>
                    <p className="text-amber-300">{selectedCity.state}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCity(null)}
                    className="text-white/50 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-6">
                  {selectedCity.visits.map((visit, idx) => (
                    <div key={idx} className="border-l-2 pl-4 py-2" style={{
                      borderColor: visit.type === 'education' ? '#4caf50' : '#4facfe'
                    }}>
                      <div className="flex justify-between items-start">
                        <h4 className={`text-lg font-semibold ${
                          visit.type === 'education' ? 'text-green-400' : 'text-blue-400'
                        }`}>{visit.title}</h4>
                        <span className="text-sm text-white/40">{visit.date}</span>
                      </div>
                      <p className="text-white/80 mt-2">{visit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
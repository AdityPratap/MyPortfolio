'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: "Real-Time Sign Language Intelligence System",
    tech: ["Python", "LSTM", "OpenCV", "NLP", "Sequence Modeling"],
    points: [
      "Designed a temporal sequence model to interpret Indian Sign Language gestures in real-time using LSTM architectures.",
      "Built a noise-resilient inference pipeline handling lighting variance, motion inconsistencies, and partial occlusion.",
      "Integrated NLP-based grammar correction layer improving semantic coherence of output sentences by ~40%."
    ],
    github: "https://github.com/AdityPratap/sign-language-intelligence",
    live: null
  },
  {
    title: "RAG-Based Financial Document Intelligence System",
    tech: ["Python", "LangChain", "FAISS", "Streamlit", "Vector Embeddings"],
    points: [
      "Engineered retrieval-augmented architecture for querying large financial documents (500+ pages) with semantic precision.",
      "Designed optimized chunking + embedding pipeline improving relevance and reducing query latency.",
      "Built explainability layer exposing source context and confidence scores for transparency."
    ],
    github: "https://github.com/AdityPratap/AI--POWERED-DOCUMENT-INSIGHTS-GENERATION",
    live: "https://automated-doc-insight-generator.streamlit.app/"
  },
  {
    title: "Customer Behavior Analytics & Visualization Dashboard",
    tech: ["Python", "Pandas", "Power BI", "Tableau", "Matplotlib"],
    points: [
      "Analyzed 1,000+ customer records to uncover purchasing trends, segmentation patterns, and revenue drivers.",
      "Designed interactive dashboards visualizing KPIs, cohort analysis, and product performance metrics.",
      "Automated reporting pipeline reducing manual analysis time by ~20–25%."
    ],
    github: "https://github.com/AdityPratap/Data_Visualization/blob/main/Screenshot%202025-11-21%20180206.png",
    live: null
  },
  {
    title: "IoT-Based Vehicle Safety & Monitoring System",
    tech: ["CV2", "Microcontroller Interface", "Python Processing Pipeline", "RassberryPi2B"],
    points: [
      "Built real-time safety monitoring system integrating hardware sensor inputs with automated alerts.",
      "Managed signal acquisition, threshold detection, and real-world variability constraints.",
      "Addressed hardware-software integration challenges during prototype deployment."
    ],
    github: "https://github.com/AdityPratap/Driver-Programmes",
    live: null
  }
  
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header with View All link */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">Projects</span>
            </h2>
            
            <Link 
              href="/projects" 
              className="text-white/50 hover:text-amber-300 transition-colors flex items-center gap-2 group"
            >
              <span className="text-sm tracking-wider uppercase">View All</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>

          {/* Projects Grid - 2 columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                {/* Project Card */}
                <div className="glass-dark p-6 rounded-2xl h-full flex flex-col relative overflow-hidden">
                  
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  
                  {/* Card Header with Icons */}
                  <div className="relative z-10 flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors pr-4">
                      {project.title}
                    </h3>
                    
                    <div className="flex gap-2 shrink-0">
                      {/* GitHub Icon */}
                      {project.github && (
                        <Link 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </Link>
                      )}
                      
                      {/* Live Link Badge */}
                      {project.live && (
                        <Link 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-amber-500/10 text-amber-300 px-2 py-1 rounded-full border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack Capsules */}
                  <div className="relative z-10 flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul className="relative z-10 space-y-2 mb-4 flex-1">
                    {project.points.map((point, i) => (
                      <li key={i} className="text-sm text-white/70 flex gap-2">
                        <span className="text-amber-300/70 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  // Same projects array - you can add more projects here later
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
  },

  {
    title: "road-to-thrill(Community based website for client)",
    tech: ["React", "TypeScript", "vite", "Node"],
    points: [
      "Developed a full-stack community platform for 'Road to Thrill' biker's club featuring an interactive event calendar with multi-day ride scheduling, dynamic image carousels, and seamless Google Sheets integration for membership management.",
      "Engineered a responsive React TypeScript application with Framer Motion animations, custom glassmorphic UI components, and optimized performance through code splitting, lazy loading, and Vercel deployment.",
      "Implemented a comprehensive user engagement system including a dynamic hero carousel (Meet • Travel • Discover), modal-based join forms, and real-time calendar updates powered by JSON data architecture."
    ],
    github: "https://github.com/AdityPratap/road-to-thrill",
    live: "https://road-to-thrill.vercel.app/"
  },

  {
    title: "Procurement site cum startup - Ambrobites",
    tech: ["React", "TypeScript","Tailwind", "Node"],
    points: [
      "A startup idea cum supplychain management one stop solution.",
      "Using React, Node and Tailwind",
      "Implemented for dealing and providing supply chain solutions to handle their regular essentials inventory."
    ],
    github: "https://github.com/AdityPratap/ambrobite",
    live:"https://ambrobite.vercel.app/"
  },

  {
    title: "Text Analysis",
    tech: ["Python", "NLTK", "NLP", "ML"],
    points: [
      "This document aims to guide users on how to run a Python script that extracts textual data from URLs, performs text analysis, and generates an output in Excel format.",
      "Python (version 3.6 or higher recommended) pip (Python package installer) Required Python packages: requests BeautifulSoup (bs4) nltk (Natural Language Toolkit) spacy pandas.",
      "The script will extract data from each URL specified in Input.xlsx, perform text analysis, and generate an output file Output Data Structure.xlsx with the computed variables."
    ],
    github: "https://github.com/AdityPratap/Text_Analysis",
    live: null
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Page Header */}
          <div className="mb-12">
            <Link 
              href="/#projects"
              className="text-white/50 hover:text-amber-300 transition-colors inline-flex items-center gap-2 mb-6 group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">Projects</span>
            </h1>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="glass-dark p-6 rounded-2xl h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors pr-4">
                      {project.title}
                    </h2>
                    
                    <div className="flex gap-2 shrink-0">
                      {project.github && (
                        <Link href={project.github} target="_blank" className="text-white/40 hover:text-white">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </Link>
                      )}
                      {project.live && (
                        <Link href={project.live} target="_blank" className="text-xs bg-amber-500/10 text-amber-300 px-2 py-1 rounded-full border border-amber-500/20">
                          Live
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/60">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
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
    </main>
  )
}
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Technical Training sessions",
    description: "Hands-on workshops in Python, Data Analytics, Machine Learning, and Cloud Technologies for students and professionals."
  },
  {
    title: "Mentoring and Career Guidance",
    description: "One-on-one mentoring for aspiring data scientists and AI engineers, helping them navigate their career paths."
  },
  {
    title: "Website and Data Analysis",
    description: "End-to-end data analysis solutions, from collection to visualization, plus full-stack web development."
  }
]

export default function About() {
  return (
    <section id="about" className="pt-16 pb-8"> {/* Reduced bottom padding */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title - Refined Gold-White */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">Me</span>
          </h2>

          {/* About Story Container */}
          <div className="glass-dark p-8 md:p-10 rounded-3xl mb-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I'm a passionate Data Science and AI professional with a journey that spans across India, 
                delivering technical training to over 5000+ students across 20+ universities. My experience 
                ranges from leading teams of trainers to developing AI-powered solutions and mentoring 
                the next generation of data professionals.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Currently working as an Associate Software Developer at Carelon Global Solutions, 
                I specialize in turning complex data into actionable insights through machine learning, 
                deep learning, and advanced analytics.
              </p>
              
              {/* Instagram Journey Link */}
              <div className="mt-8">
                <Link 
                  href="https://www.instagram.com/reel/DUxCtQWD5T6yBJaEATFTqdLcAg6954RmGz4E9w0/?igsh=bzZ5ZXVkM3Z4amUw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-amber-300 transition-colors group"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    className="group-hover:scale-110 transition-transform"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                  </svg>
                  <span className="text-sm tracking-wider uppercase font-light">A LOOK INTO THE JOURNEY</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Services Section Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Services I <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">Offer</span>
          </h3>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                {/* Service Capsule */}
                <div className="glass-dark p-6 rounded-2xl h-full flex flex-col relative overflow-hidden">
                  
                  {/* Glow effect on hover - subtle gold */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Replace these with your actual Google Drive folder links
const communityDriveLink = "https://drive.google.com/drive/folders/YOUR_COMMUNITY_FOLDER_ID"
const trainingDriveLink = "https://drive.google.com/drive/folders/YOUR_TRAINING_FOLDER_ID"

// Replace with your cover image paths
const communityCoverImage = "/images/community-cover.jpg" // Add your community cover image to public/images/
const trainingCoverImage = "/images/training-cover.jpg" // Add your training cover image to public/images/

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">Gallery</span>
          </h2>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Community Works Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a 
                href={communityDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="glass-dark p-6 rounded-3xl hover:scale-105 transition-all duration-500 cursor-pointer h-full flex flex-col">
                  
                  {/* Cover Image - Recommended dimensions: 800x600px (4:3 ratio) */}
                  <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6">
                    {communityCoverImage ? (
                      <Image
                        src={communityCoverImage}
                        alt="Community Works Cover"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                        <span className="text-white/40">Add cover image</span>
                      </div>
                    )}
                    
                    {/* Google Drive Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-amber-500/20 backdrop-blur-md p-4 rounded-full">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-8 h-8 text-amber-300"
                        >
                          <path d="M12 2L2 19.5h20L12 2zm0 4.2l6.5 11.3H5.5L12 6.2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                      Community Works
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Campus Ambassador at DTU Ecell and IIT Kanpur Antaragni • Technical club involvement • 
                      Event planning and coordination • Team leadership and mentoring
                    </p>
                  </div>

                  {/* View Drive Link */}
                  <div className="mt-6 flex items-center text-amber-300/70 group-hover:text-amber-300 transition-colors">
                    <span className="text-sm font-medium">Open Google Drive</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Training Sessions Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <a 
                href={trainingDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="glass-dark p-6 rounded-3xl hover:scale-105 transition-all duration-500 cursor-pointer h-full flex flex-col">
                  
                  {/* Cover Image - Recommended dimensions: 800x600px (4:3 ratio) */}
                  <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6">
                    {trainingCoverImage ? (
                      <Image
                        src={trainingCoverImage}
                        alt="Training Sessions Cover"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-white/40">Add cover image</span>
                      </div>
                    )}
                    
                    {/* Google Drive Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-blue-500/20 backdrop-blur-md p-4 rounded-full">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-8 h-8 text-blue-300"
                        >
                          <path d="M12 2L2 19.5h20L12 2zm0 4.2l6.5 11.3H5.5L12 6.2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      Training Sessions Delivered
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      4500+ students trained across 20+ universities • Python, Data Analytics, Cloud Computing • 
                      Workshops at KLH, Reva, Christ, Chandigarh, Coimbatore, and more
                    </p>
                  </div>

                  {/* View Drive Link */}
                  <div className="mt-6 flex items-center text-blue-300/70 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Open Google Drive</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            <div className="glass-dark p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-amber-300">20+</div>
              <div className="text-xs text-white/60">Universities</div>
            </div>
            <div className="glass-dark p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-400">4500+</div>
              <div className="text-xs text-white/60">Students Trained</div>
            </div>
            <div className="glass-dark p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-400">15+</div>
              <div className="text-xs text-white/60">Cities</div>
            </div>
            <div className="glass-dark p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-400">3+</div>
              <div className="text-xs text-white/60">Years</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
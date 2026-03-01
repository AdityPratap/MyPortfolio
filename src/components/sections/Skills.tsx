'use client'

import { motion } from 'framer-motion'

const skillsData = {
  languages: ["Python", "SQL"],
  mlDL: ["TensorFlow", "PyTorch", "Scikit-learn", "LSTM", "Hugging Face", "OpenCV"],
  dataViz: ["Power BI", "Tableau", "Google Looker Studio", "Matplotlib", "Seaborn"],
  cloud: ["Azure", "AWS", "GCP"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "FAISS", "Vector Databases"],
  frameworks: ["LangChain", "Django", "Flask"],
  tools: ["Git", "MLflow", "Jupyter", "VS Code"]
}

const vibeCodingData = {
  genAI: ["ChatGPT", "Claude", "Gemini", "Llama", "Perplexity", "DeepSeek"],
  promptEng: ["Chain-of-Thought", "Few-Shot", "Role-Based", "Structured Output", "RAG Design"],
  aiTools: ["Cursor", "VS Code Copilot", "Continue.dev", "Cline", "Windsurf", "Replit AI"],
  modernStack: ["Next.js 15", "React 19", "TypeScript", "Vite", "TailwindCSS", "Framer Motion"]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Technical Skills Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">Skills</span>
          </h2>

          {/* Technical Skills Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-10 rounded-3xl mb-12"
          >
            {/* Languages */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center">
                <span className="w-1 h-5 bg-amber-300 rounded-full mr-3"></span>
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 transition-all duration-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Machine Learning & Deep Learning */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center">
                <span className="w-1 h-5 bg-amber-300 rounded-full mr-3"></span>
                Machine Learning & Deep Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.mlDL.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 transition-all duration-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Data Visualization */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center">
                <span className="w-1 h-5 bg-amber-300 rounded-full mr-3"></span>
                Data Visualization
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.dataViz.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 transition-all duration-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center">
                <span className="w-1 h-5 bg-amber-300 rounded-full mr-3"></span>
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.cloud.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 transition-all duration-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center">
                <span className="w-1 h-5 bg-amber-300 rounded-full mr-3"></span>
                Databases & Vector Stores
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.databases.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 transition-all duration-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center">
                <span className="w-1 h-5 bg-amber-300 rounded-full mr-3"></span>
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.frameworks.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 transition-all duration-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center">
                <span className="w-1 h-5 bg-amber-300 rounded-full mr-3"></span>
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 transition-all duration-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Vibe Coding Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center mt-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vibe Coding</span> Stack
          </h2>

          {/* Vibe Coding Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-10 rounded-3xl"
          >
            {/* GenAI & LLMs */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                <span className="w-1 h-5 bg-purple-400 rounded-full mr-3"></span>
                GenAI & LLMs
              </h3>
              <div className="flex flex-wrap gap-2">
                {vibeCodingData.genAI.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-300 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Prompt Engineering */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                <span className="w-1 h-5 bg-purple-400 rounded-full mr-3"></span>
                Prompt Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                {vibeCodingData.promptEng.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-300 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* AI Development Tools */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                <span className="w-1 h-5 bg-purple-400 rounded-full mr-3"></span>
                AI Development Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {vibeCodingData.aiTools.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-300 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Modern Stack */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                <span className="w-1 h-5 bg-purple-400 rounded-full mr-3"></span>
                Modern Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {vibeCodingData.modernStack.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/80 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-300 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
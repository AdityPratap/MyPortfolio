import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Gallery from '@/components/sections/Gallery'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      
      <section id="about" className="py-16">
        <About />
      </section>
      
      <section id="projects" className="py-16">
        <Projects />
      </section>
      
      <section id="experience" className="py-16">
        <Experience />
      </section>
      
      <section id="skills" className="py-16">
        <Skills />
      </section>
      
      <section id="gallery" className="py-16">
        <Gallery />
      </section>
      
      <section id="contact" className="py-16">
        <Footer />
      </section>
    </>
  )
}
import './App.css'

import './i18n'; 
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

import Background from './components/Background' // Asegurate de importar esto



 

function App() {
  return (
    <div className="relative">
      <div className="fixed inset-0 w-full h-full -z-10">
        <Background />
      </div>

      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
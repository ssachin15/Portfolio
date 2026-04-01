import { HashRouter, Routes, Route } from 'react-router-dom'
import { Waves } from './components/Waves'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <HashRouter>
      {/* Background Waves Component */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Waves strokeColor="#333333" backgroundColor="#000000" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
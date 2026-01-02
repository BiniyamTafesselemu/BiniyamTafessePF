import './App.css'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Work from './pages/Work'
import Experience from './pages/Experience'
import About from './pages/About'
import Home from './pages/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      {/* This div will be our flex container for the entire app content */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* This div will grow and push the footer down */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

// https://www.youtube.com/watch?v=fZm4gJDY_zY

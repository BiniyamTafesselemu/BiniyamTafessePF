import './App.css'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Experience from './pages/Experience'
import About from './pages/About'

// import Home from './pages/Home'
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
            <Route path="/" element={<About />} />
            {/* <Route path="/home" element={<About />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
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

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Test1 from './Components/Pages/Test1'
import Navbar from './Components/Navbar'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                {/* Add margin-top to prevent content from hiding behind fixed navbar */}
                <div style={{ marginTop: '4rem' }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/test1" replace />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/test1" element={<Test1 />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App

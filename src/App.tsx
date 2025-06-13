import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Test1 from './Components/Pages/Test1'


function App() {
    return (
        <BrowserRouter>
            <div>
                {/* Navigation Menu */}
                <nav style={{
                    padding: '1rem',
                    backgroundColor: '#f3f4f6',
                    marginBottom: '1rem'
                }}>
                    <ul style={{
                        display: 'flex',
                        gap: '1rem',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                    }}>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/test1">Test1</Link></li>
                    </ul>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/test1" element={<Test1 />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App

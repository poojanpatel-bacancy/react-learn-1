import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Test1 from './Components/Pages/Test1'
import Login from './Components/Pages/Login'
import Navbar from './Components/Navbar'

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Navbar />
            <div className="mainContent">
                {children}
            </div>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/test1" replace />} />
                
                <Route path="/home" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path="/about" element={
                    <ProtectedRoute>
                        <About />
                    </ProtectedRoute>
                } />
                <Route path="/contact" element={
                    <ProtectedRoute>
                        <Contact />
                    </ProtectedRoute>
                } />
                <Route path="/test1" element={
                    <ProtectedRoute>
                        <Test1 />
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App

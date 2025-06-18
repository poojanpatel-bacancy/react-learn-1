import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Test1 from './Components/Pages/Test1'
import Test2 from './Components/Pages/Test2'
import Login from './Components/Pages/Login'
import ProtectedRoute from './Components/Layout/ProtectedRoute'
import 'bootstrap/dist/css/bootstrap.css';
import { UserProvider } from './Context/UserContext';
import PublicRoute from './Components/Layout/PublicRoute'


function App() {
    return (
        <>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        } />
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
                        <Route path="/test2" element={
                            <ProtectedRoute>
                                <Test2 />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    )
}

export default App

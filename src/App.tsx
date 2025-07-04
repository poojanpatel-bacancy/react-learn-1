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
import Unauthorized from './Components/Pages/Unauthorized'
import Test3 from './Components/Pages/Test3'
import Test4 from './Components/Pages/Test4'
import Test5 from './Components/Pages/Test5'
import Test6 from './Components/Pages/Test6'
import Test7 from './Components/Pages/Test7'


function App() {
    return (
        <>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        // ✅ Unauthorized page
                        <Route path="/unauthorized" element={<Unauthorized />} />

                        // ✅ Public routes
                        <Route path="/login" element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        } />

                        // ✅ Redirect to test1 if no path is provided
                        <Route path="/" element={<Navigate to="/test1" replace />} />

                        <Route path="/home" element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        } />

                        // ✅ Protected routes with role check
                        <Route path="/about" element={
                            <ProtectedRoute requiredRole="admin">
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
                        <Route path="/test3" element={
                            <ProtectedRoute>
                                <Test3 />
                            </ProtectedRoute>
                        } />
                        <Route path="/test4" element={
                            <ProtectedRoute>
                                <Test4 />
                            </ProtectedRoute>
                        } />
                        <Route path="/test5" element={
                            <ProtectedRoute>
                                <Test5 />
                            </ProtectedRoute>
                        } />
                        <Route path="/test6" element={
                            <ProtectedRoute>
                                <Test6 />
                            </ProtectedRoute>
                        } />
                        <Route path="/test7" element={
                            <ProtectedRoute>
                                <Test7 />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Login from './components/Accounts/Login'
import { AuthProvider } from './contexts/AuthContext'
import Register from './components/Accounts/Register';
import Homepage from './pages/Homepage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
  <Routes>
      <Route path="/" element={<App />} >
      <Route index element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Register/>}/>
      </Route>
    </Routes>
  </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>,
)

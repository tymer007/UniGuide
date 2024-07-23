import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import Map from './pages/Map.jsx'

import Login from './forms/Login.jsx'
import SignUp from './forms/SignUp.jsx'

import PageNotFound from './pages/PageNotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Map' element={< Map />} />

      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={< SignUp />} />



      <Route path='*' element={< PageNotFound />} />
    </Routes>
  </BrowserRouter>
)

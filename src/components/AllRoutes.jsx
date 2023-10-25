import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Registeration from '../pages/Registeration'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Registeration/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}

export default AllRoutes
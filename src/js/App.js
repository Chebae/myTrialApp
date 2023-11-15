import React from 'react'
import '../App.css'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import UserProfile from '../Pages/UserProfile'
import Income from '../Pages/Income'
import Expenses from '../Pages/Expenses'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element = { <Login/>}/>
      <Route path='/Register' element = { <Register/>}/>
      <Route  element = { <Home/>}>
<Route index element = {<Navigate replace to = "/dashboard"/>}/>
<Route path='/dashboard' element = {<Dashboard/>}/>
<Route path='/profile' element = {<UserProfile/>}/>
<Route path='/income' element = {<Income/>}/>
<Route path='/expenses' element = {<Expenses/>}/>

      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
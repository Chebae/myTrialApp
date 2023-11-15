import React from 'react'
import {SiDwavesystems, SiWebmoney} from 'react-icons/si'
import {RiDashboardFill} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import {GiExpense} from 'react-icons/gi'
import { Link, NavLink } from 'react-router-dom'

function Navbar({user}) {
  return (
    <div className='navbar'>
        <h3> <SiDwavesystems/> Fiscal LLC</h3>
        <Link className='user-profile' to="/profile">
        
            <span className='img'></span>
            <p>{user}</p>
        
        </Link>
        <div className='links'>
            <NavLink to="/dashboard"> <RiDashboardFill/> Dashboard</NavLink>
            <Link to="/profile"><CgProfile/> Profile</Link>
            <Link to="/income"><SiWebmoney/> Income</Link>
            <Link to="/expenses"><GiExpense/> Expenses</Link>
            
        </div>
    </div>
  )
}

export default Navbar
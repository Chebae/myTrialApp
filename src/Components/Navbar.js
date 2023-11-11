import React from 'react'
import {SiDwavesystems, SiWebmoney} from 'react-icons/si'
import {RiDashboardFill} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import {GiExpense} from 'react-icons/gi'

function Navbar({user}) {
  return (
    <div className='navbar'>
        <h3> <SiDwavesystems/> Fiscal LLC</h3>
        <div className='profile'>
            <span className='img'></span>
            <p>{user}</p>
        </div>
        <div className='links'>
            <a href="/" alt = "..."> <RiDashboardFill/> Dashboard</a>
            <a href="/" alt = "..."><CgProfile/> Profile</a>
            <a href="/" alt = "..."><SiWebmoney/> Income</a>
            <a href="/" alt = "..."><GiExpense/> Expenses</a>
            
        </div>
    </div>
  )
}

export default Navbar
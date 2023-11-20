import React from 'react'
import { CiSearch } from "react-icons/ci";

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='navb'>
            <h2>Dashboard</h2>
            <div className='inputt'>
            <CiSearch className='search-icon' />
            <input type="text" placeholder='Search for anything' />
            </div>

        </div>
        <div className='summary'>
<ul>
    <li>Overview</li>
    <li>Campaigns</li>
    <li>Ad groups</li>
    <li>Keywords</li>
</ul>
        </div>
        <div className='income'>
            <p>Income <br />$10,250.00</p>
        </div>
        <div className='expenses'>
            <h2>Top 5 products by spend</h2>
            <p>Total score</p>
            <h3>2,985</h3>
            <div className='code-expense'>
                <p>$1,815.67 <br /> BO7MCGRV7M</p>
            </div>
        </div>
    
    </div>
  )
}

export default Dashboard
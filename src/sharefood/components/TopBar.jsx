import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className="topbarsection">
        <div className="companytitle">
           <Link to="/"className='link'> <h2>Share-Food</h2></Link>
            </div>
        <div className="searchtitle">
            <input  type='text' placeholder='Search....'/>
        </div>
        <div className="userauth">
            Login/SigUp
        </div>
    </div>
  )
}

export default TopBar
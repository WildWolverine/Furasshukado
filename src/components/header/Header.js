import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
    
    return (
        
        <div className='header' >
            <Link to="/">
            <h1>Furasshukādo</h1>
            </Link>
        </div>
    )
}

export default Header

import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
    
    return (
        
        <div className='header' >
            <Link to="/" style={{ textDecoration: 'none'}}>
            <h1>Furasshukādo</h1>
            </Link>
        <div className='wrap-content'> 
        
             <nav className='content-title'>  
         <ul>
       <Link to="/">
       <li>Мой Словарь</li>
       </Link>
       <Link to="/повторения слов">
       <li>Режим повторения слов</li>
       </Link> 
         </ul>
            </nav>
        </div>
        </div>
    )
}

export default Header

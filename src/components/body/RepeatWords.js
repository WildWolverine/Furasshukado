import React from 'react'
import './Content.css'
import {Link} from 'react-router-dom'
import Header from '../header/Header'
function RepeatWords() {
    return (
        <div>
            <Header/>
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
       <Link to="/тренеровка повторения слов">
       <button className='start'>Начать тренировку</button>
       </Link>
       </div>
       </div>
    )
}

export default RepeatWords

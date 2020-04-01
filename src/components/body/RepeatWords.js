import React from 'react'
import './RepeatWords.css'
import {Link} from 'react-router-dom'
import Header from '../header/Header'
function RepeatWords() {
    return (
        <div>
            <Header/>
            <div className='btn-start'>
                <Link to="/тренеровка повторения слов">
                    <button className='start'>Начать тренировку</button>
                 </Link>
            </div>
       </div>
    )
}

export default RepeatWords

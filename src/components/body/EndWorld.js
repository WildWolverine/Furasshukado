import React from 'react'
import './EndWorld.css'
import {Link} from 'react-router-dom'
function EndWorld(){
    return  (
        <div className='endWord-content'>
        <div className='keywordsPage'>
            <p className='end-word'>End</p>
            <Link to='/'>
            <button>Вернуться в главное меню</button>
            </Link>
        </div>
        </div>
    )
   
    
}

export default EndWorld

import React from 'react'
import './EndWorld.css'
import {Link} from 'react-router-dom'
function EndWorld(countI){
    return  (
        <div className='keywordsPage'>
            <p>Все</p>
            <Link to='/'>
            <button>Вернуться в главное меню</button>
            </Link>
            
        </div>
    )
   
    
}

export default EndWorld

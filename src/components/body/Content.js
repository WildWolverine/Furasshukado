import React from 'react'
import './Content.css'
import axios from 'axios'
import AxiosGetContent from './AxiosGetContent'
function Content() {
    

    return (
       <div className='wrap-content'> 
            <nav className='content-title'>  
               <ul>
                   <li> <a href='#'>Мой Словарь</a></li>
                   <li> <a href='#'>Режим изучения слов</a></li>
                   <li><a href='#'>Режим повторения слов</a></li>
               </ul>
            </nav>
       
        <div className='content'>
          
               

               <React.Fragment>
                   <AxiosGetContent>
                       
                   </AxiosGetContent>
               </React.Fragment>

               
           
            
            </div>
        </div>
        
    )
}

export default Content

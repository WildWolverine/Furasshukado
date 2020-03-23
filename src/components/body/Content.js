import React from 'react'
import './Content.css'
import AddModal from '../popUp/AddModal'
import AxiosGetContent from './AxiosGetContent'
import {Link} from 'react-router-dom'

function Content() {


    return (
       <div>
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
        
        <AddModal/>
      
        <div className='content'>

               <React.Fragment>
                   <AxiosGetContent>
                   </AxiosGetContent>
               </React.Fragment>

               
           
            
            </div>
        </div>
        
    )
}

export default Content;

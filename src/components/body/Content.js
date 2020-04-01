import React from 'react'
import AddModal from '../popUp/AddModal'
import AxiosGetContent from './AxiosGetContent'
import Header from '../header/Header'


function Content() {
    return (
       <div>
           <Header/>
            <AddModal/>
      
            <div className='content'>
                <React.Fragment>
                   <AxiosGetContent/>
                </React.Fragment>
            </div>
        </div>
        
    )
}

export default Content;

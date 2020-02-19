import React, {useState} from 'react';


  function Modal () {
    const [display,setDisplay] = useState(true)

   function open(){
        setDisplay(true)
    }

    const close = () =>{
        setDisplay(false)
    }

    if(display){
        return (
            <div className='modal'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'></div>
                        <div className='modal-body'>
                            <h1>scscvscacac</h1>
                        </div>
                        <div className='modal-footer'>
                            <button className='closedModal' onClick={close}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }

    return null
  
}
export default Modal;
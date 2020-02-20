import React,{useState, forwardRef,useImperativeHandle} from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'
const Modal = forwardRef((props,ref) =>{
    const[display,setDisplay] = useState(false)

    useImperativeHandle(
        ref,
        () => {
            return {
               openModal: ()=> open(),
               close: () => close()
            }
            
            })
   
    const open = () =>{
        setDisplay(true)
    }
    const close = () =>{
        setDisplay(false)
    }
   if(display){
       return ReactDOM.createPortal(<div className='modal'>
       <div className='modal-dialog'>
           <div className='modal-content'>
           <button onClick={close}>close</button>
                   {props.children}
               </div>
           </div>
       </div>, document.getElementById('modal-root'))
      
   }
   return null
       
   })
    
export default Modal;
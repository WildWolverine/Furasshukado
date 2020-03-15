import React,{useState, forwardRef,useImperativeHandle} from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'
const Modal = forwardRef((props,ref) =>{
    const[display,setDisplay] = useState(false)
    const [editCard,setEditCard] = useState(false)

    useImperativeHandle(
        ref,
        () => {
            return {
               openModal: ()=> open(),
               closeModal: () => close(),
               openEditCardModal:() => openEditCard(),
               closedEditCardModal:() => closedEditCard()
            }
            
            })
   
    const open = () =>{
        setDisplay(true)
    }
    const close = () =>{
        setDisplay(false)
    }

    const openEditCard = () =>{
        setEditCard(true)
    }
    const closedEditCard = () =>{
        setEditCard(false)
    }
    if(editCard){
        return ReactDOM.createPortal(
        <div className='modal'>
        <div className='modal-dialog' >
          <div className='btnClose'>
            <button  onClick={close,closedEditCard}>+</button>
          </div>
            <div className='modal-content'>
                    {props.children}
                </div>
            </div>
        </div>, document.getElementById('modal-root'))
       
    }
  

   else if(display){
       return ReactDOM.createPortal(
       <div className='modal'>
       <div className='modal-dialog' >
         <div className='btnClose'>
           <button  onClick={close}>+</button>
         </div>
           <div className='modal-content'>
                   {props.children}
               </div>
           </div>
       </div>, document.getElementById('modal-root'))
      
   }else{
    return null
   }
   })
    
export default Modal;
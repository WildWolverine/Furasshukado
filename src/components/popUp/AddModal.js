import React,{useRef} from 'react';
import Modal from './Modal';


function AddModal() {
    const modalRef = useRef()

    const openModal = () =>{
     modalRef.current.openModal()
    }
    return(
  <div>
   
    <div className='btnOpen'>
      <button onClick={openModal}>+</button>
    </div>

      <Modal ref={modalRef}>
        <form>
          <div className='textInput'>
            <input type='text' placeholder='Слово'></input>
          </div>
        <div className='textInput'>
          <input  type='text' placeholder='Перевод'></input>
        </div>
        <div className='addBtn'>
          <button type='submit'>Добавить</button>
        </div>
        </form>
        
        
        
      </Modal>
  </div>
  
  );
}
export default AddModal

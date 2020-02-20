import React,{useRef} from 'react';
import Modal from './Modal';


function AddModal() {
    const modalRef = useRef()

    const openModal = () =>{
     modalRef.current.openModal()
    }
    return(
  <div>
      <button onClick={openModal}>Open modal</button>
      <Modal ref={modalRef}>
        
          <h1>Chiopa</h1>
        
      </Modal>
  </div>
  
  );
}
export default AddModal

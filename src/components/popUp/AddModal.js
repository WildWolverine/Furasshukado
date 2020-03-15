import React,{useState,useRef} from 'react';
import Modal from './Modal';
import axios from 'axios'

function AddModal() {
  const [cardRequest, setCardRequest] = useState({wordName:'',wordTranslate:''})

  const handleChange = e => {
      setCardRequest({...cardRequest,[e.target.name]: e.target.value})
  }

 const handleSubmit = e => {
     e.preventDefault()
    console.log(cardRequest)
    axios.post("", cardRequest)
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
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
        <form onSubmit={handleSubmit}>
          <div className='textInput'>
            <input type='text' placeholder='Слово' name='wordName' value={cardRequest.wordName} onChange={handleChange}></input>
          </div>
        <div className='textInput'>
          <input  type='text' placeholder='Перевод' name='wordTranslate' value={cardRequest.wordTranslate} onChange={handleChange}></input>
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

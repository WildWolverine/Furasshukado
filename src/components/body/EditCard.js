import React,{useState,useRef} from 'react';
import axios from 'axios'
import Modal from '../popUp/Modal';


function EditCard(id,wordName,wordTranslate) {
  const [cardRequest, setCardRequest] = useState({
    id: id.id,
    wordName:id.wordName,
    wordTranslate:id.wordTranslate})

  
  const handleChange = e => {
      setCardRequest({...cardRequest,[e.target.name]: e.target.value})
  }

 const handleSubmit = e => {
    e.preventDefault()
  }
  
  const submitEditCard = () =>{
    axios.put("",cardRequest)
    .then(res => {
        console.log(res.status)
      console.log(cardRequest)
    })
    .catch(err => {
      console.log(err.message)
      console.log(err.request)
      
    })
  }
  const modalRef = useRef()

  const openEditCardModal = () =>{
      modalRef.current.openEditCardModal()
     }

    return(
  <div>
      
     <div>
          <button className='edit-card' onClick={openEditCardModal}>edit</button>
     </div>
      <Modal ref={modalRef}>
        <form onSubmit={handleSubmit}>
          <div className='textInput'>
            <input type='text' name='wordName' defaultValue={cardRequest.wordName} onChange={handleChange}></input>
          </div>
        <div className='textInput'>
          <input  type='text'  name='wordTranslate' defaultValue={cardRequest.wordTranslate} onChange={handleChange}></input>
        </div>
        <div className='addBtn'>
          <button type='submit' onClick={()=> submitEditCard()}>Coхранить изменения</button>
        </div>
        </form>
 
      </Modal>
  </div>
  
  );
}
export default EditCard;
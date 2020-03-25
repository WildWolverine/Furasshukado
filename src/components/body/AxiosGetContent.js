import React, {useState,useEffect} from 'react'
import axios from 'axios'
import EditCard from './EditCard'
import LoadingRepetitionTreining from './LoadingRepetitionTraining'


function AxiosGetContent() {
    
    const [posts, setPosts] = useState([])
    let [isLoading, setLoading] = useState(true)
     useEffect(() => {
        
        axios.get(`/${posts.length}`)
           .then(res=> {
               let posts = res.data
               setPosts(posts)
               setLoading(false)
           })
           .catch(err=> console.log(err))
    },[])

    const deletCard = (cardId) => {
       if(window.confirm('Вы уверены, что хотите удалить карточку?')){
           axios.delete("/" + cardId, posts)
           .then(res => {
               console.log(res.data)
               console.log(res.request)
           })
           .catch(err => {
               console.log(err)

           })
       }
    }
    const addMoreCards = () =>{
            setPosts(posts.concat(posts))
    }
    
    return (
        <div>
            {isLoading ? <LoadingRepetitionTreining/> : <div className ='insideContent'>
            {posts.map(post =>(
                     <div className='content-card'  >
                      <div className='content-button'>
                    <button className='delete-card' onClick={()=>deletCard(post.id)}>delete</button>
                </div>
              
                <EditCard  id={post.id} wordName={post.wordName} wordTranslate={post.wordTranslate} ></EditCard>
                 <ul className='content-card'>
                 <li className='card-title'>
                         <h2>Карта </h2>
                     </li>
                     <li className='word-origin'>
                         <p>{post.wordName}</p>
                     </li>
                     <li className= 'word-translation'>
                         <p>{post.wordTranslate}</p>
                     </li>
                 </ul>
                 </div>
             ))}
              <div className='btn-ShowmoreCards'>
                     <button onClick={()=>addMoreCards()}>
                     Show more Cards
                     </button>
                 </div>
                </div>}
             
        </div>
    )
}

export default AxiosGetContent

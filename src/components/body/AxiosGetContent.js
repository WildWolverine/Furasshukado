import React, {useState,useEffect} from 'react'
import axios from 'axios'
import EditCard from './EditCard'
import './AxiosGetContent.css'
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
        <div className='container'>
            {isLoading ? <LoadingRepetitionTreining/> : <div className ='insideContent'>
            {posts.map(post =>(
                <div className='content-card'>
                     <div className='container-button'>
                             <EditCard  id={post.id} wordName={post.wordName} wordTranslate={post.wordTranslate} ></EditCard>
                             <img src='https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-1/16/5009-512.png' width='17px' height='19px' onClick={()=>deletCard(post.id)}></img>
                     </div>
                    <div className='content-card-content'>
                         <div className='card-title'>
                             <h2>Карта </h2>
                         </div>
                         <div className='word-origin'>
                             <p>{post.wordName}</p>
                         </div>
                         <div className= 'word-translation'>
                             <p>{post.wordTranslate}</p>
                        </div>
                     </div>
                </div>
             ))}
                <div className='btn-ShowmoreCards'>
                     <button onClick={()=>addMoreCards()}>
                        Показать еще 
                     </button>
                </div>
            </div>}
             
        </div>
    )
}

export default AxiosGetContent

import React, {useState,useEffect} from 'react'
import axios from 'axios'

function AxiosGetContent() {
    
    const [posts, setPosts] = useState([])
    
    
     useEffect(() => {
        
        axios.get("/1")
           .then(res=> {
               const posts = res.data
               setPosts(posts)
           })
           .catch(err=> console.log(err))
    })
    return (
        <div className ='insideContent'>
            
             {posts.map(post =>(
                     <div className='content-card'>
                      <div className='content-button'>
                    <button className='edit-card'>edit</button>
                    <button className='delete-card'>delete</button>
                </div>
                     <div className='card-title'>
                         <h2 key={post.id}>Карта {post.id}</h2>
                     </div>
                     <div className='word-origin'>
                         <p>{post.wordName}</p>
                     </div>
                     <div className= 'word-translation'>
                         <p>{post.wordTranslate}</p>
                     </div>
                     </div>
             ))}
        </div>
    )
}

export default AxiosGetContent

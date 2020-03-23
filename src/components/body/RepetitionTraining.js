import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../header/Header'
import EndWorld from './EndWorld'

function RepetitionTraining(){
    const [cards,setCards] = useState([])
    let [i, setI] = useState(0)
    let newArray = [];
  
    useEffect( () => {
       axios.get('/' + cards.length)
       .then(res=>{
           let card = res.data
           var arrCards = cards.concat(card)
           setCards(arrCards)
       })
       .catch(err => console.log(err))
       
    },[])

    newArray = cards.reduce(function(sum, elem){
        return sum.concat(elem.wordName)
   },[])
   

    const goToNextCard = () => {
        
            setI(i += 1)
        
     
    }

    const ThrowToTheEndOfTheArray = () => {
        newArray = newArray.push(newArray[i])
        console.log(newArray)
       
    }

    return (
        <div>
            <Header></Header>
            <p> { i >= newArray.length - 1 ? <EndWorld/> : newArray[i]} </p>
            <button className='nextCard' onClick = { () => goToNextCard() }> Следующая </button>
            <button className='repeat' onClick = { () => ThrowToTheEndOfTheArray() } > На повторение </button>
        </div>
    )
}

export default RepetitionTraining
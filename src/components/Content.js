import React from 'react'
import './Content.css'
function Content() {
    return (
       <div>
            <nav className='content-title'>  
               <ul>
                   <li> <a href='#'>Мой Словарь</a></li>
                   <li> <a href='#'>Режим изучения слов</a></li>
                   <li><a href='#'>Режим повторения слов</a></li>
               </ul>
            </nav>
       
        <div className='content'>
            <div className='content-card'>
                <div className='card-title'>
                    <h2>Карта 1</h2>
                </div>
                <div className='word-origin'>
                    <p>Extends</p>
                </div>
                <div className= 'word-translation'>
                    <p>Продолжается,расширение</p>
                </div>
            </div>

            <div className='content-card'>
                <div className='card-title'>
                    <h2>Карта 2</h2>
                </div>
                <div className='word-origin'>
                    <p>sensitive</p>
                </div>
                <div className= 'word-translation'>
                    <p>чувствительный</p>
                </div>
            </div>

            <div className='content-card'>
                <div className='card-title'>
                    <h2>Карта 2</h2>
                </div>
                <div className='word-origin'>
                    <p>inadvertently</p>
                </div>
                <div className= 'word-translation'>
                    <p>непреднамеренно</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Content

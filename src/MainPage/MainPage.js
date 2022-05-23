import React from 'react'
import Header from './components/Header'
import Memo from './Memo'


export default function MainPage(){
    
    return(
        <div className="MainPage">
            
            <Header name='MAFIA GAME'/>
            <Memo/>
        </div>
    )
}
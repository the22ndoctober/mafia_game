import { useState } from 'react'
import CreateGameModal from '../modals/CreateGameModal'

export default function Header({name}){
    
    let [createGameModal, setCreateGameModal] = useState(false)

    const createGameModalOpen = ()=>{
        setCreateGameModal(true)
    }
    const createGameModalClose = ()=>{
        setCreateGameModal(false)
    }

    return(
        <header className="header">
            <nav className="nav">
                
                <div className="nav__logo">
                    {name}
                </div>
                <div className="navButtons">
                    <button onClick={createGameModalOpen} className="navButtons__create">
                        +Создать игру
                    </button>
                    <button>Клубы</button>
                    <button>Турниры</button>
                    <button>Игроки</button>
                    <button>О проекте</button>
                </div>
            </nav>
            <div className="headerModals">
                <CreateGameModal open={createGameModal} handleClose={createGameModalClose}/>    
            </div>
        </header>
    )
}
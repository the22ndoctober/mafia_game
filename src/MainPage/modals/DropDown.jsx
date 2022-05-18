import React, {useState} from "react"
import "./style/createGameModal.css"

export default function DropDown({
        options,
        prompt,
        value,
        onChange
    }){

    const [open, setOpen] = useState(false)
    const handleOpen = ()=>{
        setOpen(prev => !prev)
    }
    const handleChooseOption = option =>{
        
    }
        
    return (
        <div className="dropdown">
            <div className="control" onClick={handleOpen}>
                <div className="selected-value">
                    {value ? value.name : prompt}
                </div>
                <div className={`arrow ${open? 'open' : null}`}/>
            </div>

            <div className={`options ${open? 'open' : null}`}>
                {
                    options.map(option => 
                        <div className="option" onClick={()=>{
                            onChange(option)
                            setOpen(false)
                        }}>
                                {option.name}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
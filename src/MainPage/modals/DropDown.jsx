import React, {useRef, useState, useEffect} from "react"
import "./style/createGameModal.css"

export default function DropDown({
        options,
        id,
        label,
        prompt,
        value,
        onChange
    }){

    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    
    const handleOpen = ()=>{
        setOpen(prev => !prev)
    }
    const close = e=>{
        setOpen(e && e.target === ref.current)
    }

    useEffect(()=>{
        document.addEventListener('click', close)
        return ()=> document.removeEventListener('click', close)
    },[])
        
    return (
        <div className="dropdown">
            <div className="control" onClick={handleOpen}>
                <div className="selected-value" ref={ref}>
                    {value ? value[label] : prompt}
                </div>
                <div className={`arrow ${open? 'open' : null}`}/>
            </div>

            <div className={`options ${open? 'open' : null}`}>
                {
                    options.map(option => 
                        <div
                        key={option[id]} 
                        className={`option ${value === option ? 'selected' : null}`} 
                        onClick={()=>{
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
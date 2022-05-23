import React, {useState, useMemo, useEffect} from "react";

export default function Memo (){
    const [value,setValue] = useState(0)
    const [effect, setEffect] = useState(0)
    

    useEffect(()=>{
        setEffect(effect+1)
    }, [value])

    function sosi(){
        setValue(value+1)
    }


    return(
        <div>          
            <div>{value}</div>
            <div style={{color:'#fff'}}>{effect}</div>
            <button onClick={sosi}>plus</button>        
        </div>
        
    )
}

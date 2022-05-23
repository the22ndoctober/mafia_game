import React, {useState, useEffect} from "react";

export default function Memo (){
    const [value,setValue] = useState(0)
    
    

    useEffect(()=>{
        console.log('Маджест гей(гений)')
    }, [value])

    const sosi = () =>{
       
        setValue(value+1)
    }

    return(
        <div>          
            <div style={{color:'#fff'}}>{value}</div>
            
            <button onClick={sosi}>plus</button>        
        </div>
        
    )
}

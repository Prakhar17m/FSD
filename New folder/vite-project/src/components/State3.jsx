import React,{useEffect} from 'react'
import { useState } from 'react'
 
function State3(){
    const [total, setTotal] = useState(0);
    count [ double, setDouble] = useState(0);
     
    useEffect(() =>{
        setDouble(total*2)
    })
    return (
        <div>
            <button onClick={(setTotal(total +1))}>INC</button>
            <button onClick={(setTotal(total +1))}>INC</button>
            <h2>{total</h2>
            <h2></h2>
        </div>

    )
}
import React, { useState } from "react";
import './Counter.css';


const Counter = ({count, setCount}) => {

    const addcount =()=>{
        setCount(count+1)
    }

    const subcount =()=>{
        setCount(count-1)
    }


    return(
        
        <div>

            <a onClick={addcount}> + </a>

            <input type="text" value={count} className="Count" />

            <a onClick={subcount}> - </a> <br/>

        </div>
    );
    
}


export default Counter
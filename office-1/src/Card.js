import React,  {useState} from "react";
import './card.css';
import Counter from "./Counter";

export const Card = ({company='Company',price='00.00', onBuy}) => {

        
        const [count,setCount] = useState(0);
        
        return(
                <div>
                        <div className="card">

                                <h1 id="company">{company}</h1>

                                <h1 id="price">{price}</h1> 

                                <Counter count={count} setCount={setCount}/>

                                <button onClick={()=>{onBuy(company, count, price)}} > Buy </button>
          
                        </div>
                </div>
            
        )
}
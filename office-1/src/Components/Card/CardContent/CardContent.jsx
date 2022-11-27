import React from "react";

const CardContent=({cardTitle='title', subTitle='sub title'})=>{
    
    return(
        <div style={{height:'300px',width:'300px',backgroundColor:'white', margin: 'auto',}} >
            <div>{cardTitle}</div>
            <h3 style={{color:'orange'}}>{subTitle}</h3>
        </div>
    )
}

export default CardContent
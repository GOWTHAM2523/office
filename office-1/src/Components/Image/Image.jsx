import React from "react";
import emptyBackground from './backgroundimage.png';

export const Image = ({path = emptyBackground, style})=>{
    
    return(
        <div>
            <img src={emptyBackground} style={{width:'200px' , hight:'100px'}} />
        </div>
    )
}
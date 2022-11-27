import React from "react";
import cardImage from "./Cardimage.jpg";

const CardImage=({path, style})=>{

    return(

        <div>

            <img src={path} style={style} />

        </div>
    )
}

export default CardImage

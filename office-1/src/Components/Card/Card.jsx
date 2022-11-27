import React from "react";
import CardImage from './CardImage/CardImage';
import CardContent from './CardContent/CardContent';
import Style from './Card.module.css';

export const Card=({path,cardTitle,subTitle})=>{

    return(

        <div className={Style.Card}>
            
            <CardImage 
                path={path}
                style={{height:'300px',display:'block',margin:'auto'}}
            />

            <CardContent cardTitle={cardTitle} subTitle={subTitle}/>
 

        </div>

    )
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantData from "./useRestaurantData";

const RestaurantDetail=()=>{
    
    // const [name,setName]=useState("");
    // const [items,setItems]=useState([]);
          
    const {resId}=useParams();
    const resItems=useRestaurantData(resId);
    //console.log(resId);
    console.log(resItems);
    
    if(resItems.length==0)return <Shimmer/>;
    return (<div>
        <h1>{resId}</h1>
        <h2>MENU</h2>
        <ul>
        {
            resItems.map((val)=>
               <li>
                {val.card.info.name}
               </li>
            )
        }
        </ul>
        
    </div>)
}
export default RestaurantDetail;
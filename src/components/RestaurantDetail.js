import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantDetail=()=>{
    
    const [name,setName]=useState("");
    const [items,setItems]=useState([]);
          
    const {resId}=useParams();
    console.log(resId);
    console.log(items.length);
    useEffect(()=>{
        fetchRestaurantDetail();
    },[]);
    const fetchRestaurantDetail=async()=>{
          const res=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId="+resId);
          const json=await res.json();
          console.log(json);
          const nam=json.data.cards[0].card.card.text;
          const dishesArr=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
          setName(nam);
          setItems(dishesArr);
    }
    if(items.length==0)return <Shimmer/>;
    return (<div>
        <h1>{name}</h1>
        <h2>MENU</h2>
        <ul>
        {
            items.map((val)=>
               <li>
                {val.card.info.name}
               </li>
            )
        }
        </ul>
        
    </div>)
}
export default RestaurantDetail;
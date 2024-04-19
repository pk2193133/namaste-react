import { useEffect, useState } from "react";

const useRestaurantData=(resId)=>{
    const [items,setItems]=useState([]);
    console.log("before useeffect");
    useEffect(()=>{
        console.log("inside use effect 1");
        fetchRestaurantDetail();
        console.log("inside use effect 2");
    },[]);
    const fetchRestaurantDetail=async()=>{
          const res=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId="+resId);
          const json=await res.json();
          console.log(json);
          //const nam=json.data.cards[0].card.card.text;
          const dishesArr=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
          //setName(nam);
          setItems(dishesArr);
    }
    console.log("before returning");
    return items;
}
export default useRestaurantData;
import { useContext, useEffect, useState } from "react";
import { resjson } from "../utils/mockData";
import CardComponent from "./CardComponent";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import  ModifiedCardComponent  from "./ModifiedCardComponent";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const BodyComponent=()=>{
    const [mockdata,setMockData]=useState([]);
    const[filteredData,setFilteredData]=useState([]);
    const [inputVal,setInputVal]=useState('');
    const {loggedInUser,setUserName}=useContext(UserContext);
    
    const dispatch=useDispatch();
    const handleCart=()=>{
        console.log("Item added to cart");
        dispatch(addItem("pizza"));
    };
    console.log(inputVal);

    const ModifiedCardComponnt=ModifiedCardComponent(CardComponent);

    useEffect(()=>{
        getdata();
    },[]);
    const getdata=async()=>{
        let json;
        try{
        let res=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        json=await res.json();
        }
        catch{
            
            console.log("error while getting data");
        }
        console.log(json);
        const res=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        //console.log(json);
        setMockData(res);
        setFilteredData(res);
    }
    let cnt=0;
    let returnedarr=[];
    console.log(mockdata);
    return mockdata.length==0?<Shimmer/>:(
        <div className="bodyContainer">
            <input type="text" value={inputVal} data-testid="search-input"
            onChange={(e)=>{setInputVal(e.target.value);
                console.log(inputVal);}}>
            </input>
            <button type="button" onClick={()=>{
                console.log(inputVal);
                let modifiedData=mockdata.filter(val=>val.info.name.toLowerCase().includes(inputVal));
                console.log(modifiedData);
                setFilteredData(modifiedData);
            }}>search</button>
            <button type="button" onClick={handleCart}>Add to cart</button>
            <button type="button" onClick={()=>{
                let modifiedData=mockdata.filter(val=>val.info.avgRating>4.3);
                console.log(modifiedData);
                setFilteredData(modifiedData);
            }}>filter data</button>
            <label>User :</label>
            <input type="text" value={loggedInUser} 
            onChange={(e)=>{setUserName(e.target.value);
                console.log(loggedInUser);}}>
            </input>
            <div className="cardTopContainer">
            {returnedarr=filteredData.map(json=> {
            cnt++;
            return json.info.avgRating>4?<Link to={"/Restaurant/"+json.info.id}><ModifiedCardComponnt key={json.info.id+""+cnt} data={json}></ModifiedCardComponnt></Link>:
             <Link to={"/Restaurant/"+json.info.id}><CardComponent key={json.info.id+""+cnt} data={json}/></Link>
            } 
            )
            }
            {console.log(returnedarr)}
            </div>
        </div>
    );
}
export default BodyComponent;
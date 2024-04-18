import { useEffect, useState } from "react";
import { resjson } from "../utils/mockData";
import CardComponent from "./CardComponent";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent=()=>{
    const [mockdata,setMockData]=useState([]);
    const[filteredData,setFilteredData]=useState([]);
    const [inputVal,setInputVal]=useState('');
    console.log(inputVal);
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
            <input type="text" value={inputVal} 
            onChange={(e)=>{setInputVal(e.target.value);
                console.log(inputVal);}}>
            </input>
            <button type="button" onClick={()=>{
                console.log(inputVal);
                let modifiedData=mockdata.filter(val=>val.info.name.toLowerCase().includes(inputVal));
                console.log(modifiedData);
                setFilteredData(modifiedData);
            }}>search</button>
            <button type="button" onClick={()=>{
                let modifiedData=mockdata.filter(val=>val.info.avgRating>4.3);
                console.log(modifiedData);
                setFilteredData(modifiedData);
            }}>filter data</button>
            <div className="cardTopContainer">
            {returnedarr=filteredData.map(json=> {
            cnt++;
            return <Link to={"/Restaurant/"+json.info.id}><CardComponent key={json.info.id+""+cnt} data={json}/></Link>
            } 
            )
            }
            {console.log(returnedarr)}
            </div>
        </div>
    );
}
export default BodyComponent;
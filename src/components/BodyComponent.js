import { useState } from "react";
import { resjson } from "../utils/mockData";
import CardComponent from "./CardComponent";

const BodyComponent=()=>{
    let [mockdata,setMockData]=useState(resjson.restaurants);
    let cnt=0;
    let returnedarr=[];
    console.log(mockdata);
    return (
        <div className="bodyContainer">
            <button type="button" onClick={()=>{
                let modifiedData=mockdata.filter(val=>val.info.avgRating>4.3);
                console.log(modifiedData);
                setMockData(modifiedData);
            }}>filter data</button>
            <div className="cardTopContainer">
            {returnedarr=mockdata.map(json=> {
            cnt++;
            return <CardComponent key={json.info.id+""+cnt} data={json}/>
            } 
            )
            }
            {console.log(returnedarr)}
            </div>
        </div>
    );
}
export default BodyComponent;
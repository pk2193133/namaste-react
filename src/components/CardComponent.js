import { useContext } from "react";
import UserContext from "../utils/UserContext";
const CardComponent=(props)=>{
    const {data}=props;
   // console.log(data);
    const {name,cuisines,avgRating}=data.info;
    const {loggedInUser}=useContext(UserContext);
   // console.log(data);
    return (
        <div className="cardContainer">
            <img src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000" height="150px" width="200px"></img>
            <div className="truncate-text">
            <h4>{name}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>User : {loggedInUser}</h4>
            </div>
        </div>
    );
}
export default CardComponent;
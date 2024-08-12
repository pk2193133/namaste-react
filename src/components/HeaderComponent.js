import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const HeaderComponent=()=>{
 
    const {loggedInUser}=useContext(UserContext);

    return (<div className="headerContainer">
        <div className="imageContainer" >
          <img src="https://th.bing.com/th/id/OIP.ueHppfRf52CDn841Rpj8IwHaHa?rs=1&pid=ImgDetMain" className="logo"></img>
        </div>
        <div className="navbarContainer">
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/About">about us</Link></li>
                <li><Link to="/Contact">contact us</Link></li>
                <li>cart</li>
                <li>{loggedInUser}</li>
            </ul>
        </div>
    </div>);
}
export default HeaderComponent;
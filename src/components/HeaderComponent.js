import { Link } from "react-router-dom";

const HeaderComponent=()=>{
    return (<div className="headerContainer">
        <div className="imageContainer" >
          <img src="https://th.bing.com/th/id/OIP.ueHppfRf52CDn841Rpj8IwHaHa?rs=1&pid=ImgDetMain" className="logo"></img>
        </div>
        <div className="navbarContainer">
            <ul>
                <li>home</li>
                <li><Link to="/About">about us</Link></li>
                <li><Link to="/Contact">contact us</Link></li>
                <li>cart</li>
            </ul>
        </div>
    </div>);
}
export default HeaderComponent;
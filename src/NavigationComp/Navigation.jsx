import { NavLink } from "react-router-dom";
import img from "./Group.png"
import "./nav.css"



export default function Nanigaton() {

    return (
        <div style={{display:'flex',justifyContent:"space-between",margin:'30px 0px'}}>
            <div style={{width:'40%' ,display:'flex',gap:'20px'}}>
                <NavLink className="link" to="/" >Home</NavLink>
                <NavLink className="link" to="/women" >Women</NavLink>
                <NavLink className="link" to="/men" >Men</NavLink>
                <NavLink className="link" to="/kids" >Kids</NavLink>
            </div>
           <div style={{ width:'5%', display:'flex',justifyContent:'center'}}>
            <img src={img} alt="" />
           </div>
           <div style={{width:'40%' ,display:'flex',justifyContent:"center"}}>
 
           </div>
        </div>
    )
}
import { NavLink,useParams } from "react-router-dom"
import "./pump.css"
export const PumpOwner = () =>{
    const param = useParams();
    let profileAction = param.profileAction;

    return (
        <div className="PumpOwner-Wrapper">
            <div className="left-pane">
                
                    <NavLink className="links" to="/myDetails/profile">Profile Detail</NavLink>
                    <NavLink className="links" to="/myDetails/update">Update</NavLink>
                    <NavLink className="links" to="/myDetails/others">Other Link</NavLink>
                    <NavLink className="links" to="/myDetails/settings">Settings</NavLink>
                
            </div>
            <p></p>
            <div className="right-pane">
               {profileAction === "profile" &&(
                   <h2>My Profile</h2>
               )}
               {
                   profileAction === "update" &&(
                    <h2>Wanna Update ??</h2>
                )
                
            }
            {profileAction === "others" && <h2>Do other Things</h2>}
            {profileAction === "settings" && <h2>Logout</h2>}
            </div>
        </div>
    )
}
import React from "react"
import logo from '../image/'


function User (){

    return (
        <div className = 'User'>
            <div className ='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className ='info'>
                <p>
                    SENPAI!
                </p>
                <a href="#">Log Out</a>
            </div>
        </div>

    )


}

export default User
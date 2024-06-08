import React from 'react'
import "../components/MainHolder.css"

function MaiHolder (){

    return (
        <div>
            {/* Main Heading div */}
         <div id="main-heading-container">
         <div id="main-heading">
         <p id="main-heading-p" >More to Rack, easier and faster.</p>
         </div>
         </div>
            {/* Main Heading div End */}

            {/* SignIn bar start */}
            <div id='sign-in'>
            <div id="sign-in-container">
             <button id="sign-in-button">Sign In or Create an Account</button>
            </div>
            </div>
            {/* SignIn bar end */}

            <img id="image-2" src="https://n.nordstrommedia.com/it/e61d2a70-f58e-48a5-90f4-f9d7bde16fab.png?h=200&w=1608" alt=" image-2" />
        </div>

    )
}

export default MaiHolder
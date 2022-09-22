import React from "react";

function Header() {
    return (
        <>
            <div className="flex conatiner">
                <div className="homebtn">
                    <i class="fas fa-home"></i>
                </div>

                <h1>Outlook Mail</h1>
                
                <div className="msgbtn">
                    <i class="fas fa-comment-dots"></i>
                </div>
            </div>
        </>
    )
}

export default Header
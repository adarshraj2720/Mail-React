import React from "react";
import { useState } from "react";

import inboxdata from '../1_inbox.json'
// console.log(inboxdata.length)



function Mailfolder() {

    let [display, setdispaly] = useState(true)

    function handleclick() {
        setdispaly(!display)
    }

    return (
        <>


            {
                display == true ?
                    <div className="folders">
                        <h2><i onClick={handleclick} class="fas fa-chevron-up"></i>Folders</h2>
                        <nav className="mailfolder">
                            <ul>
                                <li>
                                    <a href="#">Inbox</a>
                                    <small className="length">{inboxdata.length}</small>
                                </li>
                                <li>
                                    <a href="#">Junk Email</a>
                                </li>
                                <li>
                                    <a href="#">Drafts</a>
                                </li>
                                <li>
                                    <a href="#">Sent Items</a>
                                </li>
                                <li>
                                    <a href="#">Deleted Items</a>
                                </li>
                                <li>
                                    <a href="#">Archive</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    :
                    <div className="folders">
                        <h2> <i onClick={handleclick} class="fas fa-chevron-down"></i>Folders</h2>
                    </div>
            }




        </>
    )
}


export default Mailfolder
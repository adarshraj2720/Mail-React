import React from "react";

function Subheading() {
    return (
        <>

            <div className=" flex1 conatiner">

                <div className="width20 flex1 searchmail ">
                    <input type="text" placeholder="Search Mail and People "></input>
                    <i class="fas fa-search"></i>
                </div>
                <div className="flex width70 ">
                    <div className="flex1 msgsection">
                        <i class="fas fa-plus-circle"></i>
                        <small className="new mark">New |</small>
                        <i class="fas fa-chevron-down"></i>
                        <div>
                            <i class="far fa-envelope-open"></i>
                            <small className="mark">Mark all as read</small>
                        </div>
                    </div>
                    <div>
                        <div className="flex1 undosection">
                            <i class="fas fa-undo-alt"></i>
                            <small className="undo">Undo</small>

                            <i class="fas fa-toggle-on"></i>
                            <small className="beta">Try the beta</small>
                        </div>

                    </div>
                </div>
            </div>







        </>
    )
}

export default Subheading
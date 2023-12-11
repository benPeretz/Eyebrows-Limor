import React from "react";



function Li(props){

    return (
        <div>

            <li><a class="dropdown-item" href={props.href}>{props.title}</a></li>
        </div>
    );

}

export default Li;

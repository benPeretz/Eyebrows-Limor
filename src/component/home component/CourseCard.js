import React from "react";
import { Link } from "react-router-dom";

function CourseCard(props) {

    const aStyle = { backgroundColor: "rgba(251, 251, 251, 0.15)" }

    return (
        <div>


            <div class="card  ">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={props.cardImage} class="img-fluid" />
                    <a href="#!">
                        <div class="mask" style={{ aStyle }}></div>
                    </a>
                </div>

                <div class="card-body ">
                    <h5 class="card-title">{props.cardTitle}</h5>
                    <p class="card-text">
                        {props.cardContent}
                    </p>

                    <Link to={props.href}>
                        <button class="btn btn-secondary" name="courseType" value="course1">הסבר</button>
                    </Link>
                </div>
            </div>
        </div>


    );


}
export default CourseCard;


{/* <div class="card  ">
<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
<img src="./img/pexels-brian-kimotho-9734102.jpg" class="img-fluid" />
    <a href="#!">
        <div class="mask" style={{aStyle}}></div>
    </a>
</div>

<div class="card-body ">
    <h5 class="card-title">קורס 1</h5>
    <p class="card-text">
        קורס זה מתמקד בלימוד טכניקות ביוטי עיצוב גבות.
    </p>

<Link to="course1">
    <button class="btn btn-secondary" name="courseType" value="course1">הסבר</button>
    </Link>
</div>
</div> */}

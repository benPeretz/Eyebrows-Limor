import React from "react";



function ProductCard(props) {

    const aStyle = { backgroundColor: "rgba(251, 251, 251, 0.15)" }

    return (

        <div>

            <div class="card  ">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={props.image} class="img-fluid" />
                    <a href="#!">
                        <div class="mask" style={{ aStyle }}></div>
                    </a>
                </div>

                <div class="card-body">
                    <h5 class="card-title text-end">{props.title}</h5>
                    <p class="card-text text-end">{props.content}</p>

                </div>
            </div>

        </div>

    );

}

export default ProductCard;


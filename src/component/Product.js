import React from "react";
import Footer from "./Footer";



function Product() {


    const aStyle={backgroundColor:"rgba(251, 251, 251, 0.15)"}


    return (
        <div>

            <div class="container explain-container bg-body-secondary py-5">

                <h1 class="text-center">המוצרים שלי</h1>

                <div class="container  text-end d-flex justify-content-evenly flex-wrap ">



                    <div class="card mt-5 ">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="./img/comb.jpg" class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style={{aStyle}}></div>
                            </a>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title text-end">מסרק לגבות</h5>
                            <p class="card-text text-end">
                                מחיר : ₪43

                            </p>



                        </div>
                    </div>

                    <div class="card mt-5 ">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="./img/gel.jpg" class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style={{aStyle}}></div>
                            </a>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title text-end">ג'ל גבות</h5>
                            <p class="card-text text-end">
                                מחיר : ₪43
                            </p>



                        </div>
                    </div>

                </div>

                <div class="container  text-end d-flex justify-content-evenly flex-wrap ">


                    <div class="card  mt-5">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="./img/gel.jpg" class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style={{aStyle}}></div>
                            </a>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title text-end">ג'ל גבות</h5>
                            <p class="card-text text-end">
                                מחיר : ₪43
                            </p>



                        </div>
                    </div>

                    <div class="card  mt-5">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="./img/comb.jpg" class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style={{aStyle}}></div>
                            </a>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title text-end">מסרק לגבות</h5>
                            <p class="card-text text-end">
                                מחיר : ₪43

                            </p>



                        </div>
                    </div>
                </div>




            </div>

        <Footer />
        </div>
    );


}

export default Product;

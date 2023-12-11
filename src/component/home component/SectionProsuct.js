import React from "react";
import { Link } from "react-router-dom";
import DesignCard from "./DesignCard";
import ProductCard from "./ProductCard";


function SectionProduct() {

  const aStyle = { backgroundColor: "rgba(251, 251, 251, 0.15)" }


  return (
    <div>

      <section class=" mb-5 pb-3 d-flex flex-wrap" id="section-products">

        <div class="container path-to-next bg-body-secondary eyebrows-design">

          <h1 class="text-center mb-5">עיצוב גבות </h1>

          <div class="d-flex justify-content-center">
            <div id="carouselExample" class="carousel slide d-flex justify-content-center">
              <div class="carousel-inner">

                <div class="carousel-item active">
                  <DesignCard
                    image="./img/pexels-mart-production-7290125.jpg"
                    title="עיצוב 1"
                    content="ליישם בפועל את הטכניקות שלעמוד הסטנדרטים המקצועיים"
                    href="design1"
                  />
                </div>


                <div class="carousel-item">
                  <DesignCard
                    image="./img/pexels-shiny-diamond-3762664.jpg"
                    title="עיצוב 2"
                    content="ליישם בפועל את הטכניקות שלעמוד הסטנדרטים המקצועיים"
                    href="design2"
                  />
                </div>


                <div class="carousel-item">
                  <DesignCard
                    image="./img/pexels-brian-kimotho-9734102.jpg"
                    title="עיצוב 3"
                    content="ליישם בפועל את הטכניקות שלעמוד הסטנדרטים המקצועיים"
                    href="design3"
                  />
                </div>

              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>
          <h6 class="text-end mt-3 ">לגבות שלנו יש את היכולת לשנות לחלוטין את המראה הכללי של פנינו</h6>


        </div>



        <div class="container path-to-next bg-body-secondary pb-5">

          <h1 class="text-center mb-5">מוצרים</h1>

          <div class="d-flex justify-content-center">
            <div id="carousel-products" class="carousel slide d-flex justify-content-center">
              <div class="carousel-inner">

                <div class="carousel-item active">
                  <ProductCard
                    image="./img/comb.jpg"
                    title="מסרק לגבות"
                    content="מחיר : ₪43"
                  />
                </div>


                <div class="carousel-item">

                  <ProductCard
                    image="./img/gel.jpg"
                    title="ג'ל גבות"
                    content="מחיר : ₪43"
                  />
                </div>


                <div class="carousel-item">
                <ProductCard
                    image="./img/comb.jpg"
                    title="מסרק לגבות"
                    content="מחיר : ₪43"
                  />

                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel-products"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel-products"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>



          </div>

          <div class="d-flex justify-content-center">
            {/* <!-- <button type="submit" class="btn btn-outline-dark" name="products" value="products">לכל המוצרים </button> --> */}

            <Link to="products">
              <button type="submit" class="btn btn-secondary" name="designType" value="products">לכל המוצרים</button>

            </Link>
          </div>

        </div>



      </section>



    </div>
  );


}

export default SectionProduct;















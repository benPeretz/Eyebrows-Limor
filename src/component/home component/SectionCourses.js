import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";


function SectionCourses() {

    const aStyle = { backgroundColor: "rgba(251, 251, 251, 0.15)" }



    return (
        <div>

            <section class="bg-body-secondary mb-5 pb-3" id="section-courses">

                <div class="container courses">
                    <h1 class="text-center mb-5">קורסים</h1>

                    <div class="container text-center">
                        <div class="row align-items-end justify-content-center">

                            <div class=" col-course mt-5">
                                <CourseCard
                                    cardImage="./img/pexels-brian-kimotho-9734102.jpg"
                                    cardTitle="קורס 1"
                                    cardContent="קורס זה מתמקד בלימוד טכניקות ביוטי עיצוב גבות."
                                    href="course1"
                                />
                            </div>

                            <div class=" col-course mt-5">
                                <CourseCard
                                    cardImage="./img/pexels-cottonbro-studio-4154196.jpg"
                                    cardTitle="קורס 2"
                                    cardContent="קורס זה מתמקד בלימוד טכניקות ביוטי עיצוב גבות."
                                    href="course2"
                                />
                            </div>

                            <div class=" col-course mt-5">
                                <CourseCard
                                    cardImage="./img/pexels-mart-production-7290125.jpg"
                                    cardTitle="קורס 3"
                                    cardContent="קורס זה מתמקד בלימוד טכניקות ביוטי עיצוב גבות."
                                    href="course3"
                                />
                            </div>

                            <div class=" col-course mt-5">
                                <CourseCard
                                    cardImage="./img/pexels-shiny-diamond-3762664.jpg"
                                    cardTitle="קורס 4"
                                    cardContent="קורס זה מתמקד בלימוד טכניקות ביוטי עיצוב גבות."
                                    href="course4"
                                />
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );



}


export default SectionCourses;



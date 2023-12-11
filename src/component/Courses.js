import React from "react";
import { courses } from "../data";
import Footer from "./Footer";

function Courses(props) {


    const { name } = props;

    const course = courses[name];
    console.log(course);

    return (
        <div>

            <div class="container  text-end d-flex justify-content-center">
                <div class="explain-container" >

                    <h1>
                        {course.courseName}
                    </h1>

                    <h1>
                        {course.courseH1_1}
                    </h1>

                    <p>
                        {course.courseP_1
                        }

                    </p>
                    <br />

                    <h1>
                        {course.courseH1_2}
                    </h1>


                    <p>
                        {course.courseP_2}
                    </p>


                    <div class="mt-5 d-flex justify-content-center">
                        <img class="img-explain" src={course.img001Micro} alt="" />
                    </div>


                    <div class="my-5">

                        <h1>
                            {course.courseH1_3}
                        </h1>

                        <p>
                            {course.courseP_3}
                        </p>

                        <ul class="right-bullets">
                            <li>
                                לא לעשות גבות וליצור צורה חדשה כשבוע לפני הטיפול

                            </li>
                            <li>
                                להימנע משיזוף טבעי או מלאכותי אשר יפגע בחדירת הפיגמנט

                            </li>
                            <li>
                                להימנע מאלכוהול ביום הטיפול

                            </li>
                            <li>
                                להימנע מטיפולי פנים כשבועיים לפני הטיפול

                            </li>
                            <li>
                                להימנע מתרופות או תכשירים המכילים רטינול או נגזרת של ויטמין A כחודש לפני הטיפול

                            </li>



                        </ul>

                    </div>




                </div>



            </div>


            <Footer />

        </div>
    );

}

export default Courses;
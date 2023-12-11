import React from "react";
import { designs } from "../data";
import Footer from "./Footer";


function Designs(props) {


    const { name } = props;
    const design = designs[name];
    console.log(design);


    return (
        <div>


            <div class="container  text-end d-flex justify-content-center">
                <div class="explain-container" >

                    <h1>
                        {design.designName}
                    </h1>

                    <h1>
                        {design.h001Micro}
                    </h1>

                    <p>
                        {design.p001Micro}

                    </p>
                    <br />

                    <h1>
                        {design.h002Micro}
                    </h1>


                    <p>
                        {design.p002Micro}
                    </p>


                    <div class="mt-5 d-flex justify-content-center">
                        <img class="img-explain" src={design.img001Micro} alt="" />
                    </div>


                    <div class="my-5">

                        <h1>
                            {design.h003Micro}
                        </h1>

                        <p>
                            {design.p003Micro}
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

export default Designs;



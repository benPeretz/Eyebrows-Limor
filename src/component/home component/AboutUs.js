import React from 'react';





function AboutUs() {


    

    return (

        <div>

            <section class="bg-body-secondary mb-5 pb-3" id="section-about-us">
                <div class="container our-eyebrows px-0">


                    <h1 class="text-center mb-3">הגבות שלנו</h1>

                    <div class="div-our-eyebrow-flex">
                        <div class="col-our-brow-img" >
                            <img class="ml-5" src={process.env.PUBLIC_URL+"img/aboutUsimg.jpg"} alt="" style={{borderRadius:"15%"}}/>
                        </div>

                        <div class="col-our-brow-p"  >
                            <p class="align-self-center text-center ">לגבות שלנו יש את היכולת לשנות לחלוטין את המראה הכללי של פנינו, צורת הגבות יכולה
                                להקנות לנו מראה עצוב וזועף או מראה רענן וצעיר. הגבות יכולות להבליט את העיניים ולהאיר את הפנים שלנו או לחלופין
                                ליצור מראה מבוגר ולא מחמיא. הכל תלוי כיצד הן מעוצבות.</p>
                        </div>
                    </div>




                </div>

            </section>
        </div>




    );
}
export default AboutUs;
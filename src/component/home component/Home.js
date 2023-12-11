import React from "react";
import SectionTop from "./SectionTop";
import AboutUs from "./AboutUs";
import SectionCourses from "./SectionCourses";
import SectionProduct from "./SectionProsuct";
import Footer from "../Footer";

function Home() {

    return(
        <div>
            <SectionTop />
            <AboutUs />
            <SectionCourses />
            <SectionProduct />
            <Footer />

        </div>
    );
    
}


export default Home;
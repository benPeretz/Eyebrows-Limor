import React from 'react';
import { Link } from "react-router-dom";
import Li from './Li';


function Nav(){


    return (
        <div>
  <nav className="navbar navbar-expand-lg  fixed-top white px-5">
    <div class="container-fluid">
      <a class="navbar-brand fs-4" href="/">Limori</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              עיצוב גבות
            </a>
            <ul class="dropdown-menu">

              {/* <li> <Link className="dropdown-item" to="design1">עיצוב 1</Link></li>            */}

              <Li href="design1" title="עיצוב 1" />
              <Li href="design2" title="עיצוב 2" />
              <Li href="design3" title="עיצוב 3" />


            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              קורסים
            </a>
            <ul class="dropdown-menu">
              
              <Li href="course1" title="קורס 1"/>
              <Li href="course2" title="קורס 2"/>
              <Li href="course3" title="קורס 3"/>
            </ul>
          </li>


          <li class="nav-item">
            <Link class="nav-link fs-5" to="products">מוצרים</Link>
            {/* <a class="nav-link fs-5" href="products">מוצרים</a> */}
          </li>

          <li class="nav-item">
            <a class="nav-link fs-5" href="#section-contact-us">צור קשר</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>



        </div>
    );


}


export default Nav;
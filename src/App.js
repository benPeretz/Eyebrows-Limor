import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './component/home component/Home';
import Nav from './component/Nav';
import Product from './component/Product';
import Courses from './component/Courses';
import Designs from './component/Designs';



function App() {
  return (
    <div className="App">

  

    <BrowserRouter >
      <Nav />
      <Routes >

      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Product />} />
      <Route path='/course1' element={<Courses name="course1" />} />
      <Route path='/course2' element={<Courses name="course2" />} />
      <Route path='/course3' element={<Courses name="course3" />} />
      <Route path='/design1' element={<Designs name="design1" />} />
      <Route path='/design2' element={<Designs name="design2" />} />
      <Route path='/design3' element={<Designs name="design3" />} />
      <Route path='/design4' element={<Designs name="design4" />} />

      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

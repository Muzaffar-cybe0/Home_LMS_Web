import React from 'react'
import Carousel from './Carousel'


export default function Main_3() {
  return (
    <div className='main_3'>
     <div className="main_3-1">
     <div className="main_3_1-1">
          <p>OUR NEW COURSES FOR YOU</p>
          <p>Latest Courses</p>
     </div>
     <div className="main_3_1-2">
      <Carousel/>
     </div>
     </div>
     <div className="main_3-2">
      <div className="main_3_2-1">
        <p>choose your desired courses</p>
        <p>Browse Our Top Courses</p>
      </div>
      <div className="main_3_2-2">
        <a href="main-3">Graphic</a>
        <a href="main-3">Business</a>
        <a href="main-3">Finance and Banking</a>
        <a href="main-3">Photography</a>
        <a href="main-3">UIUX</a>
        <a href="main-3">Color</a>
      </div>

     </div>
     <div className="main_3-1 main_3-3">
     <div className="main_3_1-2">
      <Carousel/>
     </div>
     </div>
     </div>
  )
}

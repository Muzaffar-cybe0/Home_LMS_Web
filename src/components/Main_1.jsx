import React from 'react'
import Statics from '../assets/statics.png'
import Part_circle from '../assets/part_circle.png'
import Part_2_circle from '../assets/part-2_circle.png'
import Assignment from '../assets/assignment.png'
import Certificate from '../assets/Certificate.png'
export default function Main_1() {
  return (
    <div className='main_1'>
     <div className="main_1-1">
       <div>
          <p>At a glance LMS Student Courses Platfrom</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit ligula pellentesque lorem. Viverra tincidunt erat lobortis ut odio urna, arcur.</p>
       </div>
       <div>
          <img src={Statics} alt="statics" />
       </div>
     </div>

     <div className="main_1-2">
      <div className="main_1_2-1">
          <div>
               <img src={Part_circle} alt="circle" />
               <img src={Part_2_circle} alt="part" />
          </div>
          <div>
               <p>Daily taks Overview</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl consequat iaculis vitae arcu arcu. Ut interdum aenean sit </p>
          </div>
      </div>
      <div className="main_1_2-2">
          <div>
               <img src={Assignment} alt="assignment" />
          </div>
          <div>
               <p>Daily taks Overview</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl consequat iaculis vitae arcu arcu. Ut interdum aenean sit </p>
          </div>
      </div>
      <div className="main_1_2-3">
          <div>
               <img src={Certificate} alt="Certificate" />
          </div>
          <div>
               <p>You get certificate when you completed a course.</p>
          </div>
      </div>
     </div>
    </div>
  )
}

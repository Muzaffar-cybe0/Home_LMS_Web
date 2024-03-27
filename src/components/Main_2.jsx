import React from 'react'
import Person_2 from '../assets/person-2.png'
import User_2 from '../assets/users-2.png'
import Youtube from '../assets/youtube.png'
import Film from '../assets/film.png'

export default function Main_2() {
  return (
    <div className='main_2'>
     <div className='main_2_C-1'>
     <div className="main_2-1">
          <img src={Person_2} alt="person2" />
     </div>
     <div className="main_2-2">
          <div className='main_2_2-1'>
               <p>What Kind of Courses Offers Learning Platform</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut etiam maecenas posuere ultricies dis tempus magna mi id. Morbi a eu erat fringilla.</p>
          </div>
          <div className='main_2_2-2'>
               <div>
                    <img src={User_2} alt="user" />
                    <span>10k+ Lessons</span>
               </div>
               <div>
                    <img src={Youtube} alt="user" />
                    <span>Qualited Teches</span>
               </div>
               <div>
                    <img src={User_2} alt="user" />
                    <span>1500+ Courses</span>
               </div>
               <div>
                    <img src={Film} alt="user" />
                    <span>200+ Free Videos</span>
               </div>
          </div>
     </div>
     </div>
     <div className="main_2_C-2">
          <a href="Explore">Explore courses</a>
     </div>
    </div>
  )
}

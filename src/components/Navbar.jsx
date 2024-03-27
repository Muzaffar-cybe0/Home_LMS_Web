import React from 'react'
import Logo from '../assets/Logo.png'
import Buy from '../assets/Buy.png'
import Emoji from '../assets/Emoji.png'
import Person from '../assets/person.png'
import User from '../assets/users-1.png'
import Feather from '../assets/feather.png'
import Layers from '../assets/layers.png'
export default function Navbar() {
  return (
    <div className='navbar'>
     <div className="First-row">
     <div className="n-1">
          <img src={Logo} alt="" />
          <p>Hope<span>LMS</span></p>
     </div>
     <div className="n-2">
          <a href="navbar">My courses</a>
          <a href="navbar">Support</a>
          <img src={Buy} alt="" />
          <a href="navbar">Login</a>
     </div>
     </div>
     <div className="Second-row">
      <div className="n-3">
        <div>
          <p>Build Your <span>Skills</span><img src={Emoji} alt="emoji" /> </p>
        </div>
        <div>
          <div>
           <p>With Experts Any Time, Anywhere</p>
          </div>
          <div>
          <p>Free online courses  from the world’s Leading experts. 
            Join 10+ Million Learners today</p>
          <a href="Second_row">Join Us Today</a>
          </div>
        </div>
      </div>
      <div className="n-4">
        <img src={Person} alt="person" className='person'/>
        <div className='n-4_user1'>
          <img src={User} alt="user" />
          <div>
            <p>150k</p>
            <p>Active Students</p>
          </div>
        </div>
        <div className='n-4_user2'>
          <img src={Feather} alt="feather" />
          <div>
            <p>Lifetime access</p>
          </div>
        </div>
        <div className='n-4_user3'>
          <img src={Layers} alt="layer" />
          <div>
            <p>12 online courses</p>
          </div>
        </div>
      </div>
     </div>

    </div>
  )
}

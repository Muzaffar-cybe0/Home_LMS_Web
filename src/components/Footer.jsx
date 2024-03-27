import React from "react";
import Logo from "../assets/Logo.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Google from "../assets/google.png";
import Arrow from "../assets/Arrow 1.png";
export default function Footer() {
  return (
    <div className="footer">
     <div className="footer_C-1">
     <div className="footer_1">
        <div className="footer_1-1">
          <div>
            <img src={Logo} alt="logo" />
            <p>
              Hope <span>LMS</span>
            </p>
          </div>
          <div>
            <p>
              A service a treansaction in which no physical goods are
              transferred from the seller, to the buyer. the benefits of such a
              service are{" "}
            </p>
          </div>
        </div>
        <div className="footer_1-2">
          <img src={Facebook} alt="company" />
          <img src={Twitter} alt="company" />
          <img src={Google} alt="company" />
        </div>
      </div>

      <div className="footer_2">
      <div className="footer_2-1">
      <div>
          <a href="footer">Company</a>
        </div>
        <div>
          <a href="footer">Terms</a>
          <a href="footer">About</a>
          <a href="footer">Test Exam</a>
          <a href="footer">Contact Us</a>
        </div>
      </div>
      <div className="footer_2-1">
      <div>
          <a href="footer">Courses</a>
        </div>
        <div>
          <a href="footer">UIUX</a>
          <a href="footer">Design</a>
          <a href="footer">Business</a>
          <a href="footer">Mobile and Banking</a>
        </div>
      </div>
      </div>
      
      <div className="footer_3">
          <div>
              <p>Get Update Newslater</p>
              <p>Subscribe to get the latest news from us</p> 
          </div>
          <div>
               <input type="text" placeholder="Email" />
               <img src={Arrow} alt="arrow" />
          </div>
      </div>
     </div>
      <hr />
      <div className="footer_C-2">
          <p>Copyright@2022</p>
      </div>
    </div>
  );
}

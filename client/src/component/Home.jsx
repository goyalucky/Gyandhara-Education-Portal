import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import logo from "../assets/logo.jpg"
import about from "../assets/1.png"
import goal from "../assets/2.png"
import img1 from "../assets/3.png"
import whale from "../assets/4.png"
import img2 from "../assets/5.png"


const Home = () => {
  const navigateTo = useNavigate();


  const closeNavbar = () => {
    document.getElementById("sideNavigationBar").style.width = "0";
  };

  return (
    <div>
      <nav>
        <div className="navbar">
          <ul>
            <li>
              <a href="#Home">About-us</a>
            </li>
            <li>
              <a href="#goals">Our Goal</a>
            </li>
            <li>
              <a onClick={() => navigateTo("/login")}>Log-in</a>
            </li>
            <li>
              <a onClick={() => navigateTo("/signup")}>Sign-up</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sideNavigationBar" id="sideNavigationBar">
        <a href="#" className="closeButton" onClick={closeNavbar}>
          &#x274C;
        </a>
        <a href="#">About us</a>
        <a href="#">Goals</a>
        <a onClick={() => navigateTo("/login")}>Log-in</a>
        <a onClick={() => navigateTo("/signup")}>Sign-up</a>
      </div>

      <div className="heading">Welcome To</div>
      <div className="line" id="Home">
        <div className="side1">
          <h1>Gyaan</h1>
        </div>
        <div className="side2">
          <h1>Dhaara</h1>
        </div>
      </div>
      <div className="homeimg">
        <img className="homepageimg" src={logo} alt="" />
      </div>
      
      <section className="about-sec">
        <img src={img1} alt="Sample Image" className="about-img" />
        <div className="about-text">
          <div className="about-head">
            <h1 id="goals">Our Goals</h1>
            <img src={about} alt="" className="png" />
          </div>
          <p>
          Our Goal: Empowering Every Student to Thrive in the Digital Age
          At SmartSchool Hub, our goal is to redefine the educational experience for students. We aim to create a learning environment where every student can access the tools and resources they need to succeed—effectively, efficiently, and flexibly. By leveraging cutting-edge technology and innovative teaching methods, we strive to break down barriers to quality education and prepare students for the opportunities and challenges of tomorrow
          </p>
        </div>
      </section>
      <section className="about-sec">
        <div className="about-text">
          <div className="about-head">
            <h1>Heading</h1>
            <img src={goal} alt="" className="png" />
          </div>
          <p>
          Our Goal: Empowering Every Student to Thrive in the Digital Age
          At SmartSchool Hub, our goal is to redefine the educational experience for students. We aim to create a learning environment where every student can access the tools and resources they need to succeed—effectively, efficiently, and flexibly. By leveraging cutting-edge technology and innovative teaching methods, we strive to break down barriers to quality education and prepare students for the opportunities and challenges of tomorrow.
          </p>
        </div>
        <img src={img2} alt="Sample Image" className="about-img" />
      </section>

      <section>
        <div className="logo">
          <img src={whale} alt="" className="logo-img" />
        </div>
      </section>

      <footer>
        <div class="footer-container">
            <div class="footer-logo-section">
                <h2>Gyaandhaara</h2>
                <img src={logo} alt="Gyaandhaara Logo" class="footer-logo"/>
            </div>

            <div class="footer-links-section">
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Consumer Care</a></li>
                </ul>
                <ul>
                    <li><a href="#">Alumni</a></li>
                    <li><a href="#">Features</a></li>
                </ul>
            </div>

            <div class="footer-social-section">
                <p>Follow Us</p>
                <br/>
                <div class="social-icons">
                    <a href="https://www.facebook.com/YourPageName" target="_blank">
                        <i class="fab fa-facebook-f fa-xl"></i>
                    </a>
                    <a href="https://twitter.com/YourPageName" target="_blank">
                        <i class="fab fa-twitter fa-xl"></i>
                    </a>
                    <a href="https://www.youtube.com/YourChannelName" target="_blank">
                        <i class="fab fa-youtube fa-xl"></i>
                    </a>
                </div>
                
                
            </div>

          
        </div>

        <div class="footer-bottom">
            <ul class="terms-list">
                <li><a href="#">Website Terms</a></li>
                <li><a href="#">|</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">|</a></li>
                <li><a href="#">Accessibility Statement</a></li>
                <li><a href="#">|</a></li>
                <li><a href="#">Do Not Sell My Information</a></li>
            </ul>            
        </div>
      </footer>
    </div>
  );
};

export default Home;

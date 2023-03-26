import React,{useState,useEffect} from 'react'
import moment from 'moment'
import Typewriter from "typewriter-effect"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const [state]  = useState({
        title:"Hi",
        titleTwo:"I'M",
    })
    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);
  return (
   <>
<div className="topHeader">
    <div className="leftLinks">
            <img src="https://img.icons8.com/color/512/facebook-new.png" alt="" />
            <img src="https://img.icons8.com/color/512/twitter.png" alt="" />
            <img src="https://img.icons8.com/color/512/youtube-play" alt="" />
            <img src="https://img.icons8.com/color/512/linkedin.png" alt="" />
            <img src="https://img.icons8.com/color/512/instagram-new.png" alt="" />
    </div>

    <div className="middleDate">
    <b><img src="https://img.icons8.com/color/512/calendar.png" alt="" />{moment().format("MMMM Do YYYY, h:mm:ss a")}</b>
    </div>

    <div className="rightContent">

    </div>
</div>

   <div className="middleHeader">
    <div className="leftLogo">
    <img src="https://youngindians.net/wp-content/uploads/2022/10/young-indians-header-logo.png" alt="" />
     </div>
    <div className="middleSlider">
    <img src="https://img.icons8.com/bubbles/512/starburst-shape.png" alt="" />
    <marquee className="blink" width = "80%" behavior="scroll" scrollamount="4"direction="left"><b>Yi Youth Conclave -Blitz:Coimbatore 
      Yi Youth Conclave -Blitz:Coimbatore 
      Yi Youth Conclave -Blitz:Coimbatore</b> 
      </marquee>
     </div>
    <div className="rightLogo">
        <img src="https://youngindians.net/wp-content/uploads/2022/10/cii-logo.png" alt="" />
    </div>
   </div>
   <hr />

   {/* navbar */}
   <div className="navbar">
    <div className="leftNav">
       <a href=""> <img src="https://img.icons8.com/ios-filled/512/menu-rounded.png" alt="" /></a>
        <div className="line"></div>
       <a href=""> <img src="https://img.icons8.com/ios-filled/512/home.png" alt="" /></a>
        <div className="line"></div>

       <a href=""> <img src="https://img.icons8.com/dotty/512/building-with-rooftop-terrace.png" alt="" /></a>
        <div className="line"></div>
        <a href=""> <img src="https://img.icons8.com/material-rounded/512/stack-of-photos.png" alt="" /></a>
    </div>
    {/* <div className="line"></div> */}
    <div className="middleSearch">
    <input type="search" name="search" id="search" />

    </div>
    <div className="rightNav">
        <p><a href="">ARE YOU A Yi MEMBER?</a></p>
       <div className="links">
        <a href="">Register</a>
        <a href="">Login</a>
       </div>
    </div>
   </div>
   <hr />

   {/* second section */}
   <section>
    <div className="secondSection">
        <h2>About Us</h2>
        <p>Your Signature is all it takes to save<br></br> a life</p>
        <h1><span>"We Can,</span>
        <span className="type">
        <Typewriter className="type"
            options={{autoStart:true,
            loop:true,
            delay:80,
            strings:["And","Will"]
        }}/>
        </span>
           
        </h1>
    </div>
    </section>

    <div className="thirdSection">
        <h1>The 3 Pillars of Yi</h1>
        <p>Yi’s mission to strengthen the future of India gives a stage and voice to the country’s next generation of changemakers. It aims to instill in young minds the power of leadership, enhance the youth entrepreneurial ecosystem and create youth-led changes to build the nation.
<br />
The robust framework of Yi and its vision is built on three significant pillars:</p>
<button className='button'>Explore About Yi
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
</button>
    </div>

    {/* FourthSection */}

    <div className="fourthSection">
        <div className="leftImage" data-aos="fade-right">
        <img src="https://youngindians.net/wp-content/uploads/2023/03/Youth-Leadership.jpg" alt="" />
        </div>
        <div className="rightText">
            <h1 data-aos="fade-left">Youth Leadership</h1>
            <p>The first pillar of Yi believes that leaders aren’t born; they are made. It calls upon the students of India to recognize the leader in them through various leadership skill development programs, personal development programs and nation-building activities.</p>
        </div>
    </div>


    {/* fifthSection */}
    <div className="fifthSection" data-aos="fade-down">

    <div className="leftImage5"  data-aos="fade-right">
            <img src="https://youngindians.net/wp-content/uploads/2023/03/Nation-Building.jpg" alt="" />
        </div>
        <div className="rightText5"  data-aos="fade-left">
            <h1>National Building</h1>
            <p>The youth carry the baton of building an India that is self-sufficient, informed and on the path to development. The second pillar of Yi aims to give wings to the transformative power of India’s youth through various verticals that delve into present-day issues.</p>

        </div>
    </div>

    {/* sixthSection */}
    <div className="sixthSection" data-aos="fade-up">
        <div className="leftSection6" data-aos="fade-right" >
        <img src="https://img.freepik.com/premium-vector/national-youth-day-design-banner-poster-vector-illustration_261883-34.jpg?w=740" alt="" />
        </div>
        <div className="rightSection6" data-aos="fade-left">
        <h1>Thought Leadership</h1>
        <p>The third pillar of Yi aims to nudge the innate leader in today’s youth to give rise to a better India of tomorrow. It informs, engages and empowers the youth of India through a contributive movement of constructive action, collaborative reasoning and collective voice.</p>
        </div>
    </div>

    {/* seventhSection */}
    <div className="seventhSection">
        <div className="topImages">
        <img src="https://youngindians.net/wp-content/uploads/2023/03/Youth-Leadership.jpg" alt="" data-aos="zoom-in-up" />
        <img src="https://youngindians.net/wp-content/uploads/2023/03/Nation-Building.jpg" alt="" data-aos="zoom-in-up" />
        <img src="https://img.freepik.com/premium-vector/national-youth-day-design-banner-poster-vector-illustration_261883-34.jpg?w=740" alt="" data-aos="zoom-in-up" />
        </div>
        <div className="bottomText" data-aos="zoom-in-up">
            <h1>PILLERS OF YOUNG INDIANS</h1>
            <p>Yi’s mission to strengthen the future of India gives a stage and voice to the country’s next generation of changemakers. It aims to instill in young minds the power of leadership, enhance the youth entrepreneurial ecosystem and create youth-led changes to build the nation.</p>
        </div>
    </div>

    <footer>
        <div className="container grid grid-four-column">
            <div className="f-link">
                <h3></h3>
                <ul>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Home</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Accessibility</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Climate Change</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Contact Us</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Entrepreneurship</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Genesis of Yi</a></li>
                </ul>
            </div>
            <div className="f-link">
            <ul>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Organization Structure</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Innovation</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">International Membership</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Masoom</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Media</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Members</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Our Reach</a></li>
                </ul>
            </div>
            <div className="f-link3">
            <ul>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Our Team</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Past National Leadership</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Photo Gallery</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Road Safety</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Rural Safety</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Rural Initiatives</a></li>
                    <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Together Tribe</a></li>
                </ul>
            </div>

            <div className="f-logo">
                <img src="https://youngindians.net/wp-content/uploads/2022/10/young-indians-Footer-logo-1.png" alt="" />
            </div>
        </div>
        <div className="f-bottom">
            <div className="f-left">
            <h2>PRIVACY POLICY</h2>
            <p>Copyright 2023 Young Indians. All Right Reserved.</p>
            </div>
            <div className="f-right-links">
            <img src="https://img.icons8.com/color/512/facebook-new.png" alt="" />
            <img src="https://img.icons8.com/color/512/twitter.png" alt="" />
            <img src="https://img.icons8.com/color/512/youtube-play" alt="" />
            <img src="https://img.icons8.com/color/512/linkedin.png" alt="" />
            <img src="https://img.icons8.com/color/512/instagram-new.png" alt="" />
            </div>
        </div>
    </footer>
   </>

  )
}

export default Navbar


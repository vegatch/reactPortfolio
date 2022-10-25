import React from 'react';
import { NavLink } from "react-router-dom"
import './CSS/About.css';
import Profile from "./components/profile"

class About extends React.Component {
   render() {
       return (
       <div className='main-content'>
            <Profile/>
            <div className='right-content'>
                <p>
                    I am Stravinsky B. Anglade, but everybody calls me <em> Stravinsky</em>.
                </p>
                <p>
                    I’ve been incredibly improving my skills in software development, database management and restful API in the last two years. I have built static and dynamic products for the web. 
                </p>
                <p>
                    Even under heavy pressure, I strive to create quality solutions that focuses on good user experience, while keeping code base well organized according to coding best practices, scalability and maintainability.
                </p>
                <p>
                    I am very flexible and can easily adapt to any new settings. One of my key strengths is my ability to learn quick, adapt and grow. 
                </p>
                <p>
                    I am very proficient in JavaScript, CSS, HTML, React, MySql, SRSS, SQL, Node, jQuery and SPSS.
                </p>
                <p>
                    Are you in need of a Software Developer? <NavLink to= '/Contact'><em>Let's talk</em>.</NavLink>
                </p>
            </div>
            
       </div>);
   }
}
export default About
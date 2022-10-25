import React from 'react'
import { NavLink } from "react-router-dom"
import Profile from "./components/profile"

import './CSS/Home.css';


class Home extends React.Component {
   render() {
       return (
       <div className='main-content'>
            <Profile/>
            <div className='right-content'>
                <p className='intro'>Hello there, I am Stravinsky.</p>
                <p className='into-title'>Front End Web Developer.</p>
                <p className='into-detail'>I build custom and scalable web application. </p>
                <p className='intro-end'>I use multiple web technologies to build awesome web app with passion.</p>
                <button className='intro-link'><NavLink to= '/About'>Learn more</NavLink></button>
            </div>

       </div>);
   }
}
export default Home
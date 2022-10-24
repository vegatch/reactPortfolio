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
                <p className='intro'>Hello, I am Stravinsky</p>
                <p className='into-detail'>I build custom and scalable web application </p>
                <p className='intro-end'>I am a Software Developer who builds web app with passion</p>
                <p className='intro-link'><NavLink to= '/About'>learn more...</NavLink></p>
            </div>

       </div>);
   }
}
export default Home
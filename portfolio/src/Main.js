import React from 'react'
import {
    Route,
    NavLink,
    HashRouter,
    Routes
}
from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Work from './Work'
import './CSS/Main.css';

class Main extends React.Component {
   render() {
       return (
        <HashRouter>
            <div className='main-container'>
                <div className='navigation '>
                    <div className='nav-logo'>
                        <NavLink end to= '/'>SBA</NavLink>
                    </div>
                    <ul className='header'>
                        <li><NavLink end to= '/'>Home</NavLink></li>
                        <li><NavLink to= '/About' >About</NavLink></li>
                        <li><NavLink to= '/Work'>Work</NavLink></li>
                        <li><NavLink to= '/Contact'>Contact</NavLink></li>                        
                    </ul>
                </div>
                <div className='content'>
                        <Routes>
                            <Route exact path='/'  element={<Home/>}/>
                            <Route path='/About' element={<About/>}/>
                            <Route path='/Work' element={<Work/>}/>
                            <Route path='/Contact' element={<Contact/>}/> 
                        </Routes>
                        
                </div>
                <div className='footer flex-container'>
                    <p>Designed and built by Stravinsky B Anglade @ August 2022</p>
                </div>
            
            </div>
        </HashRouter>
       )
   }
}
export default Main
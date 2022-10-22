import React, { Component } from 'react'
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

class Main extends React.Component {
   render() {
       return (
        <HashRouter>
            <div>
                <div className='navigation'>
                    <div className='nav-logo'>
                        <NavLink to= '/'>SBA</NavLink>
                    </div>
                    <ul className='header'>
                        <li><NavLink to= '/'>Home</NavLink></li>
                        <li><NavLink to= '/About'>About</NavLink></li>
                        <li><NavLink to= '/Work'>Work</NavLink></li>
                        <li><NavLink to= '/Contact'>Contact</NavLink></li>                        
                    </ul>
                </div>
                <div className='content'>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/About' element={<About/>}/>
                            <Route path='/Work' element={<Work/>}/>
                            <Route path='/Contact' element={<Contact/>}/> 
                        </Routes>
                        
                </div>
                <div className='footer'></div>
            
            </div>
        </HashRouter>
       )
   }
}
export default Main
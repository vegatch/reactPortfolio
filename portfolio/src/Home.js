import React, { Component } from 'react'
import {
    Route,
    NavLink,
    HashRouter,
    Routes
}
from "react-router-dom"

class Home extends React.Component {
   render() {
       return (
       <div>
            <div className='left-content'>
                <div>Picture will be here</div>
                <div>
                    <div>
                        <p>786-247-2127</p>
                        <p>vegatch1@gmail.com</p>
                    </div>
                    <div>
                        LinkedIn, GitHub, Portfolio
                    </div>

                </div>

            </div>
            <div className='right-content'>
                <p>Hello, I am Stravinsky</p>
                <p>I build custom and scalable web application </p>
                <p>I am a software engineer who builds web app with passion</p>
                <p><NavLink to= '/About'>learn more...</NavLink></p>
            </div>

       </div>);
   }
}
export default Home
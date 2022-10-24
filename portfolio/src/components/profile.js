import React from 'react';
import pic from "../pics/angladepic.png"
import {GoMarkGithub} from "react-icons/go"
import {TiSocialLinkedin} from "react-icons/ti"
import {GoMail} from "react-icons/go"
import {FaPhone} from "react-icons/fa"

class Profile extends React.Component {
   render() {
       return (
       <div>
            <div className='left-content'>                
                <div className='img-container'> <img className='img-profile' src={pic} alt="Anglade pic" /> </div>
                <div className='right-bar horital-bar'></div>
                <div>
                    <div className='contact'>
                            <div className='flex-container'>
                                < FaPhone className='icon'/>
                                <p>(317) 721-4430</p>
                            </div>
                            
                            <div className='flex-container'>
                                <GoMail />
                                <p>stravinsky.anglade105@gmail.com</p>
                            </div>
                            
                    </div>
                
                    <div className='flex-container'>
                        <TiSocialLinkedin className='social-link'/>  
                        <GoMarkGithub className='social-link'/> 
                    </div>

                </div>

            </div>
       </div>);
   }
}
export default Profile

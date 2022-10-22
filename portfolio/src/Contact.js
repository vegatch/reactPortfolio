import React, { Component } from 'react'

class Contact extends React.Component {
   render() {
       return (
       <div>
            <form>
                <label>Name</label>
                <input type='text' 
                    name='senderName' 
                    placeholder='Insert your name'/>                        
                    
                <label>Company</label>
                <input type='text'
                    name='senderCompany' 
                    placeholder='Insert your company name'/>                        
                <label>Email</label>
                <input type='text'
                    name='senderEmail' 
                    placeholder='Insert your email'/>                        
                    
                <textarea name='message'
                          placeholder='insert your message here'/>                            
                        
                <input type='submit'
                        name='btn btnSubmit'/> 

            </form>
       </div>);
   }
}
export default Contact
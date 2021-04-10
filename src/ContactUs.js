import React from 'react'
import Header from './components/Header'
import './Contactus.css';
import box1 from './images/2.png'


export default function ContactUs() {
    return (
        <div className="contactbody"> 
        <Header/>
           <div className="contactustxt"> 
           <h1>Contact Us</h1>
       
           </div>
           <div class="vd-form">
      <form class="vf">
        <label for="fname">First Name:</label><br></br>
        <input type="text" id="fname" name="fname"></input><br></br>
        <label for="lname">Last Name:</label><br></br>
        <input type="text" id="lname" name="lname"></input><br></br>
        <label for="email">Email</label><br></br>
        <input type="email" id="email" name="email"></input><br></br>
        <label for="number">Phone Number</label><br></br>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input><br></br>
        <label for="message">Message</label><br></br>
        <textarea rows="4" cols="30" name="comment" >
        </textarea>
        <input type="submit" value="Submit"></input>
      </form>
      <div class="location">
       <img src={box1}>

       </img>
       </div> 
       
    </div>
    
        </div>
    )
}

import './Home.css';

import Header from './components/Header';
import Card from "./components/Card";
import Aboutus from './Aboutus';
function Home() {
  return (
    <div className="app">

      <Header/>
      <div className="landingpage">
      <div className="ltext">
             <h2>One Stop </h2> 
             <h1>SOLUTION</h1>
            <h5>for all of your Startups Digital Need</h5>
             <p>In this era of digitalization, we truly understand your startups<br></br>
               digital need to standout in front of your competitors and market.</p>
              
         </div>
      
        
       
         </div>

         <div className="homecard">         <Card/></div>

         <div className="endtxt">
           <h2>Still </h2>
             <h1>No Luck?</h1>
           <h3> We Can Help! </h3>
           <div className="endmid">
           <h5>Don’t Want To Wait,</h5> 
           <p>Use Our Chat Feature. Our Representative Will</p><br></br> <p className="p112"> Help You To Solve Your Query!</p>
        </div>
        </div>
       </div>
  );
}

export default Home;

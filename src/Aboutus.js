import './Aboutus.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Smallcard from "./components/Smallcard";
function Aboutus() {
  return (
    <div className="aboutusbody">
      <Header/>
      <div className="abus">
      <h1>About </h1>
      <h2>Us</h2>
      </div>
      <div className="maintxt">
      
       
                     
       <div class="card text-center">
         <div class="card-header">
             Featured
         </div>
         <br></br>
          <div class="card-body">
               <h5 class="card-title">What is exactly Digital1x1 all about ?</h5>
          <p class="card-text">Digital1x1 Pvt. Ltd. is a company which runs on the idea
           of providing a ladder to start-ups in their journey, by offering full IT and marketing
           Infrastructure.</p>
  
              </div>
                <div class="card-footer text-muted">
                  1 days ago
                  </div> 
               </div>
            <br></br>

               <div class="card text-center">
         
          <div class="card-body">
               <h5 class="card-title">Why do your Startup Need Digital1x1 Service?</h5>
          <p class="card-text">In India 90% of start-ups die due to lack of financial and technical support, 
          with this much of mortality only a few start-ups tend to cover the road of becoming a company. 
          The cost of technical staff causes a lot of ideas to get drained and fade away.</p>
  
              </div>
                <div class="card-footer text-muted">
                  2 days ago
                  </div> 
               </div>

               <br></br>

                
               <div class="card text-center">
         
         <div class="card-body">
              <h5 class="card-title">How do Digital1x1 helps your company?</h5>
         <p class="card-text">Trying to solve this issue, Digital1x1 is providing IT
          and Marketing services to start-ups at a very affordable price for now.
           And in its a long vision, the company is looking forward to providing all these facilities free of cost.</p>
 
             </div>
               <div class="card-footer text-muted">
                 2 days ago
                 </div> 
              </div>
              <br></br>

              
              <div class="card text-center">
         
         <div class="card-body">
              <h5 class="card-title">What are the services Digital1x1 provide to Startups & Companies ?</h5>
         <p class="card-text">We are committed to making a single platform which can fulfil all the digital needs 
         of a mainly a startup (from development, designing to marketing) at one single place. </p>
 
             </div>
               <div class="card-footer text-muted">
                 4 days ago
                 </div> 
              </div>

              <br></br>
       
              <div class="card text-center">
         
         <div class="card-body">
              <h5 class="card-title">What Digital1x1 was doing in past ?</h5>
         <p class="card-text">Digital1x1 is associated with many reputed organizations and
          companies and have been providing IT solutions and Marketing Strategy with 
          material to boost their growth. If you want your company to scale-up its performance contact immediately.</p>


             </div>
               <div class="card-footer text-muted">
                 5 days ago
                 </div> 
              </div>
       
    
    </div>
    </div>
  );
}

export default Aboutus;

import React from "react"
import idea from '../images/idea.jpg'
import b1 from '../images/b1.png';
import b2 from '../images/b2.png';
import b3 from '../images/b3.png';
import "./Card.css";
function Card(){
    return(
       
        <div id="cards_landscape_wrap-2">
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <a href="">
                            <div class="card-flyer">
                                <div class="text-box">
                                    <div class="image-box">
                                        <img src={idea} alt="" />
                                    </div>
                                    <div class="text-container">
                                        <h6>Creative Design</h6>
                                        <p>We understand fully the role of creative designs for growth of your business. 
                                            Our experience designer creates better creatives.</p>
                                    </div>
                                    <div className="btn">
                                    <button class="btn btn-primary" type="submit">Know more</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <a href="">
                            <div class="card-flyer">
                                <div class="text-box">
                                    <div class="image-box">
                                        <img src={b3} alt="" />
                                    </div>
                                    <div class="text-container">                                    
                                        <h6>Web Development</h6>
                                        <p>Our Experience team, Understand your idea and create a digital presence on edge cutting technologies.</p>
                                    </div>
                                    <div className="btn">
                                    <button class="btn btn-primary" type="submit">Know more</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <a href="">
                            <div class="card-flyer">
                                <div class="text-box">
                                    <div class="image-box">
                                        <img src={b1} alt="" />
                                    </div>
    
                                    <div class="text-container">
                                        <h6>Mobile Application</h6>
                                       <p>if your business require an app, don't worry we have got you covered, 
                                           Our team have rich experience on Android , IOS app developement.</p>
                                    </div>
                                    <div className="btn">
                                    <button class="btn btn-primary" type="submit">Know more</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <a href="">
                            <div class="card-flyer">
                                <div class="text-box">
                                    <div class="image-box">
                                        <img src={b2} alt="" />
                                    </div>
                                    <div class="text-container">
                                        <h6>Animation Video</h6>
                                       <p>With new and trendy 2D and 3D animation marketing videos you can set apart your brand from different noisy ad environment.</p>
                                    </div>
                                    <div className="btn">
                                    <button class="btn btn-primary" type="submit">Know more</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <a href="">
                            <div class="card-flyer">
                                <div class="text-box">
                                    <div class="image-box">
                                        <img src="https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg" alt="" />
                                    </div>
                                    <div class="text-container">
                                        <h6>Ad Film/Jingles</h6>
                                       <p>Short animated with spice of music, ad videos can leave a lasting impression on your consumer's mind.</p>
                                    </div>
                                    <div className="btn">
                                    <button class="btn btn-primary" type="submit">Know more</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <a href="">
                            <div class="card-flyer">
                                <div class="text-box">
                                    <div class="image-box">
                                        <img src="https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg" alt="" />
                                    </div>
                                    <div class="text-container">
                                        <h6>Digital Strategy</h6>
                                       <p>There is no term exist as offline market in present era digital expension is what every industry/company need.</p>
                                    </div>
                                    <div className="btn">
                                    <button class="btn btn-primary" href="/Aboutus" type="submit">Know more</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Card;
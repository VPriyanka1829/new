import React from 'react';
import Bg from "./images/bg.jpg";
import Map from "./images/map.png";
import New from "./images/new.jpg";
import Man from "./images/man.jpg";
import B from "./images/b.jpg";
import India from "./images/india.png";
import Blackcurrent from "./images/blackcurrent.jpeg";
import A1 from "./images/a1.jpg";
import A2 from "./images/a2.jpg";
import A3 from "./images/a3.jpg";
import Lo from "./images/lo.jpg";
import Footer from "./images/footer.jpg";
import Plant from "./images/plant.jpeg";
import Cow from "./images/cow.jpeg"; 
import S1 from "./images/s1.png";
import Almond from "./images/almond.png";
import Bulb from "./images/bulb.jpeg";
import Shop from "./images/shop.png";

function Content() {
  return (
    <>
     
      <div className="container-fluid" style={{ width: "100%" }}>
        <img src={Bg} alt="background" className="img-responsive" />
      </div>

      
      <div className="container" style={{ position: "absolute", top: "100px", color: "white" }}>
        <div className="row text-center">
          <h1><b>Who We Are</b></h1>
        </div>

        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-6 col-lg-7">
            <img src={Map} alt="map" className="img-responsive" style={{ width: "100%" }} />
            <button style={{ color: "black", marginTop: "-40px" }}>+-</button>
          </div>

          <div className="col-md-6 col-lg-5">
            <h4>
              We may have started out in North America, but<br />
              today, Baskin Robbins is present in over 50<br />
              countries around the world, with almost 7000<br />
              stores worldwide. You might be pleasantly<br />
              surprised to find us in places you never expected!<br /><br />

              Baskin Robbins is one of the world’s largest ice<br />
              cream chains globally. Our exciting menu<br />
              includes universal favorites like the delicious<br />
              Mississippi Mud and Mint Milk Chocolate along<br />
              with local favorites like Honey Nut Crunch<br />
              and Alphonso Mango.<br /><br />

              No matter where you go, you will find unparalleled<br />
              quality and variety in every Baskin Robbins store.
            </h4>
          </div>
        </div>
      </div>


      <div className="container text-center" style={{ marginTop: "100px" }}>
        <h1>
          <span style={{ color: "#f20c90" }}><b>Dig Into </b></span>
          <span style={{ color: "#3f2021" }}><b>Our History</b></span>
        </h1>

        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-6 col-lg-6">
            <img src={New} alt="history" className="img-responsive" />
          </div>

          <div className="col-md-5 col-lg-5" style={{ marginTop: "60px", marginBottom: "20px" }}>
            <h4 style={{ color: "#f20c90" }}>
              <b>
                We’ve been serving Happyness in a cup (or on<br /><br />
                a cone!) since 1945. So grab a spoon and dig<br /><br />
                deeper into our history — there’s a treasure<br /><br />
                trove of innovation and creativity waiting for<br /><br />
                you!
              </b>
            </h4>
          </div>
        </div>

        <div className="row" style={{ marginTop: "40px", marginLeft: "700px" }}>
          <div className="col-md-3 col-lg-3" style={{ width: "400px" }}>
            <img src={Man} alt="man" className="img-responsive" />
          </div>
        </div>
      </div>


      <div style={{position:'relative'}}>
      <div className="container-fluid" style={{ width: "100%",marginTop:"100px" }}>
        <img src={B} alt="b" className="img-responsive" />
      </div>

      <div className="container-fluid text-center"  style={{ marginTop: "-300px",position:"absolute",top:"300px",color:"white" }}>
          <h1><span style={{ color: "#f20c90" }}><b>About </b></span>
          <span style={{ color: "#3f2021" }}><b>BR</b></span>
          <span style={{ color: "#f20c90" }}><b> India</b></span>
          </h1>
        <br />

        <div className="container">
          <div className="row" style={{ marginTop: "40px",marginLeft:"300px"}}>
            <img src={India} alt="india" className="img-responsive" />
          </div>
        </div>
      </div>
      </div>


      <div className="container" style={{marginTop:"100px" ,marginLeft:"100px"}}>
        <h4>
          Brought to India in 1993, Baskin Robbins has cemented its place as India’s much loved ice cream brand.<br/>
          We constantly endeavor to maintain highest standards of quality. Baskin Robbins today operates more than 800+ exclusive 
          <br/>Ice Cream Parlours across over 230 cities, making it amongst the largest exclusive ice cream retail chains in India.<br/>
          Its portfolio of 31 high quality international and Indian flavors are made with cows milk and are 100% vegetarian. These<br/>
           represent diverse taste profiles and cater to the needs of millions of customers.<br/><br/><br/>


          Baskin Robbins was brought to India through a joint venture with the Graviss Group- a pioneer in the F&B industry in India.<br/>
           Founded by Mr. I.K. Ghai in 1945, the Group currently owns and manages Baskin Robbins India, The Brooklyn Creamery,<br/>
            The InterContinental Hotel on Mari;ne Drive, Mayfair Banquets, and Zaffran- a chain of modern Indian dining restaurants-<br/>
             amongst other sub-brands.
        </h4>
      </div>

  <div className="container-fluid" style={{ width: "100%", marginTop: "100px", position: "relative" }}>
  <img src={Bg} alt="background" className="img-responsive" />

  <div className="container" style={{ position: "absolute", top: "30px", color: "white" }}>
    <div className="row text-center">
      <h1>
        <span style={{ color: "black" }}><b>What Makes </b></span>
        <span style={{ color: "white" }}><b>Us Special</b></span>
      </h1>
    </div>

    <div style={{ marginTop: "50px",marginLeft:"50px" }}>
      <div className="row text-center">
         <div className="col-md-4 col-lg-4">
          <img src={Plant} alt="plant" className="img-responsive center-block" width="150px" />
          <h4><b>100% <br/>vegetarian</b></h4>
        </div>
          <div className="col-md-4 col-lg-4">
          <img src={Cow} alt="cow" className="img-responsive center-block" width="150px" />
          <h4><b>Made with<br/>cow milk</b></h4>
        </div>
    <div className="col-md-4 col-lg-4">
          <img src={S1} alt="s1" className="img-responsive center-block" width="150px" />
          <h4><b>Over 31 premium, <br/>international flavours and toppings</b></h4>
        </div>
      </div>

      <div className="row text-center" style={{ marginTop: "30px" }}>
        <div className="col-md-4 col-lg-4">
          <img src={Almond} alt="almond" className="img-responsive center-block" width="150px" />
          <h4><b>Rich ingredients. <br/>Premium quality.</b></h4>
        </div>
      <div className="col-md-4 col-lg-4">
          <img src={Bulb} alt="bulb" className="img-responsive center-block" width="150px" />
         <h4><b>Outstanding product <br/>innovations</b></h4>
        </div>
        <div className="col-md-4 col-lg-4">
          <img src={Shop} alt="shop" className="img-responsive center-block" width="150px" />
          <h4><b>Largest ice cream <br/>retail chain</b></h4>
        </div>
      </div>
    </div>
  </div>
</div>


                 

        
          <div className="container" style={{ marginTop: "100px" }}>
            <center>
              <h2>
                <span style={{ color: "#f20c90" }}><b>All Time</b></span><br />
                <span style={{ color: "brown" }}><b>Favorites</b></span>
              </h2>
            </center>
            <br />
            <div className="row">
              <div className="col-md-4 col-lg-4">
               <center> <img src={A1} className="img-responsive" alt="a1" width="250px" />
                <h2><b>Cookies N Creame</b></h2><br/><br/>
                <button style={{ backgroundColor: "#f20c90", color: "white" }}>ORDER NOW</button></center>
              </div>
    
              <div className="col-md-4 col-lg-4 ">
               <center> <img src={A2} className="img-responsive" alt="a2" width="250px" />
                <h2><b>Classic  Vannila  </b></h2><br/><br/>
                <button style={{ backgroundColor: "#f20c90", color: "white" }}>ORDER NOW</button></center>
              </div>
    
              <div className="col-md-4 col-lg-4 ">
                <center><img src={A3} className="img-responsive" alt="a3" width="250px" />
                <h2><b>Three Cheese <br/>Chocolate</b></h2><br/>
                <button style={{ backgroundColor: "#f20c90", color: "white" }}>ORDER NOW</button></center>
              </div>
            </div>
          </div>
            
            <div style={{position:'relative'}}>
                   <div className="col-md-12 col-lg-12" >
                            <img src={Footer} alt="footer" className="img-responsive" width="100%" />
                    </div>


                    <div className="container" style={{ marginTop: "200px",position:"absolute",top:"300px",color:"white" }}>
                    <div className="row" style={{ marginLeft: "100px" }}>
                       
                      <div className="col-md-3 col-lg-3">
                        <h4>
                          Home<br /><br />
                          About Us<br /><br />
                          Our Stores<br /><br />
                          Blogs
                        </h4>
                      </div>
            
                      <div className="col-md-3 col-lg-3">
                        <h4>
                          Contact Us<br /><br />
                          Franchise Enquire<br /><br />
                          Privacy and Policy<br/><br />
                          Terms and conditions
                        </h4>
                      </div>
            
                      <div className="col-md-3 col-lg-3">
                        <h4>
                          Subscribe to news letter<br/><br />
                          <button style={{color:"black"}}>Enter your email</button>
                          <button className="btn" style={{ backgroundColor: "#f20c90", color: "white" }}>
                    Submit
                  </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  </div>
    
    </>
  );
}

export default Content;


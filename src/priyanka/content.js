import React from 'react';
import Pic from "./images/pic.webp";
import Coco from "./images/coco.jpg";
import Black from "./images/black.jpg";
import Download from "./images/download.jpg";
import Bowl from "./images/bowl.jpg";
import Stra from "./images/stra.jpg";
import Pan from "./images/pan.jpg";
import Blackcurrent from "./images/blackcurrent.jpeg";
import Strawberry from "./images/strawberry.jpeg";
import Cotton from "./images/cotton.jpeg";
import Jar from "./images/jar.jpeg";
import Cup from "./images/cup.jpg";
import Blue from "./images/blue.jpeg";
import Blue1 from "./images/blue1.jpeg";
import Blue2 from "./images/blue2.jpeg";
import Blue3 from "./images/blue3.jpeg";
import Blue4 from "./images/blue4.jpeg";
import Blue6 from "./images/blue6.jpeg";
import Footer from "./images/footer.jpg";

function Content() {
  return (
    <>
      
      <div>
        <img src={Pic} alt="pic" className="img-responsive" style={{ width: "1300px", marginTop: "60px" }} />
      </div>

    
      <div className="container" style={{ marginTop: "100px" }}>
        <center>
          <h2>
            <span style={{ color: "#f20c90" }}><b>What's</b> </span>
            <span style={{ color: "brown" }}><b>New</b></span>
          </h2>
        </center>
        <br />
        <div className="row text-center">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <center><img src={Coco} className="img-responsive" alt="coco" width="250px" />
            <h2><b>Salted Caramel &<br /> Brownie</b></h2>
            <button style={{ backgroundColor: "#f20c90", color: "white" }}>ORDER NOW</button></center>
          </div>

          <div className="col-md-4 col-lg-4">
           <center> <img src={Black} className="img-responsive" alt="black" width="250px" />
            <h2><b>Berry Cake in <br /> Cheesecake</b></h2>
            <button style={{ backgroundColor: "#f20c90", color: "white" }}>ORDER NOW</button></center>
          </div>

          <div className="col-md-4 col-lg-4">
            <center><img src={Download} className="img-responsive" alt="download" width="250px" />
            <h2><b>Cotton Candy <br /> Wonderland</b></h2>
            <button style={{ backgroundColor: "#f20c90", color: "white" }}>ORDER NOW</button></center>
          </div>
        </div>
      </div>

      
      <div style={{ marginTop: "100px" }}>
        <div className="container-fluid" style={{ backgroundColor: "#f04edb6b", paddingBottom: "80px" }}>
          <div style={{ marginTop: "40px" }}>
            <center>
              <h2>
                <span style={{ color: "#f20c90" }}><b>Shop By</b> </span>
                <span style={{ color: "brown" }}><b>Range</b></span>
              </h2>
            </center>
          </div>

          <div style={{ marginTop: "50px" }} className="container-fluid">
            <div className="row text-center">
              <div className="col-xs-12 col-sm-4">
                <img src={Bowl} alt="bowl" className="img-responsive center-block" />
              </div>
              <div className="col-xs-12 col-sm-4">
                <img src={Stra} alt="stra" className="img-responsive center-block" />
              </div>
              <div className="col-xs-12 col-sm-4">
                <img src={Pan} alt="pan" className="img-responsive center-block" />
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
           <center> <img src={Blackcurrent} className="img-responsive" alt="blackcurrent" width="250px" />
            <h2><b>Black current</b></h2>
            <button style={{ backgroundColor: "#f20c90", color: "white" }}>ORDER NOW</button></center>
          </div>

          <div className="col-md-4 col-lg-4 ">
           <center> <img src={Strawberry} className="img-responsive" alt="strawberry" width="250px" />
            <h2><b>Very berry <br /> Strawberry</b></h2>
            <button style={{ backgroundColor: "#f20c90", color: "white" }}>ORDER NOW</button></center>
          </div>

          <div className="col-md-4 col-lg-4 ">
            <center><img src={Cotton} className="img-responsive" alt="cotton" width="250px" />
            <h2><b>Cotton Candy</b></h2>
            <button style={{ backgroundColor: "#f20c90", color: "white" }}>ORDER NOW</button></center>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "100px" }}>
        <center>
          <h1>
            <span style={{ color: "#f20c90" }}><b>BR Inside</b></span>
            <span style={{ color: "brown" }}><b> Scoop</b></span>
          </h1>
        </center>
        <br /><br />
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <img src={Jar} className="img-responsive" width="500px" alt="Jar" />
            <h3>
              <b><span style={{ color: "#f20c90" }}>
                Here Are 7 Delicacies To Satiate Those<br /> Summer Cravings Before The Season<br /> Comes To A Close
              </span></b>
            </h3>
            <p>
              The Mount Everest Sundae is the tallest sundae ever so<br />
              make sure you go with a bunch of friends because this is<br />
              loaded with ice creams you can't ha....<br />
              <span style={{ color: "#f20c90" }}>Read more</span>
            </p>
          </div>

          <div className="col-md-6 col-lg-6">
            <img src={Cup} className="img-responsive" width="480px" alt="Cup" />
            <h3>
              <b><span style={{ color: "#f20c90" }}>
                5 new Ice Cream flavours to elevate your dessert menu this summer
              </span></b>
            </h3>
            <p>
              Two things you relished as a kid are coming together.<br />
              Baskin Robbins teamed up with Hershey's for a divine summer<br />
              collaboration.
            </p>
            <span style={{ color: "#f20c90" }}>Read more</span>
          </div>
        </div>
      </div>

      
      <div className="container-fluid" style={{ marginTop: "50px" }}>
        <center>
          <h1>
            <span style={{ color: "#f20c90" }}><b>BR </b></span>
            <span style={{ color: "brown" }}><b>Social</b></span>
          </h1>
        </center>
      </div>

      <div className="container" style={{ marginTop: "50px" }}>
       <div className="row text-center">
    <div className="col-xs-12 col-sm-4">
      <img src={Blue} className="img-responsive center-block" alt="Blue" />
    </div>
    <div className="col-xs-12 col-sm-4">
      <img src={Blue1} className="img-responsive center-block" alt="Blue1" />
    </div>
    <div className="col-xs-12 col-sm-4">
      <img src={Blue2} className="img-responsive center-block" alt="Blue2" />
    </div>
  </div>

  <div className="row text-center" style={{ marginTop: "50px" }}>
    <div className="col-xs-12 col-sm-4">
      <img src={Blue3} alt="Peg4" className="img-responsive center-block" />
    </div>
    <div className="col-xs-12 col-sm-4">
      <img src={Blue4} alt="Peg5" className="img-responsive center-block" />
    </div>
    <div className="col-xs-12 col-sm-4">
      <img src={Blue6} alt="Peg6" className="img-responsive center-block" />
    </div>
  </div>
</div>



    <div style={{position:"relative"}}>
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

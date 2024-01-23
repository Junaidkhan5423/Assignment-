import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import salidFirst from "../assets/salid_fist.png";
import salidSecond from "../assets/salid_second.png";
import salidThired from "../assets/salid_thired.png";
import salidFour from "../assets/salid_four.png";
import salidFive from "../assets/salid_five.png";
import salidSix from "../assets/salid_six.png";
import RightIcon from "../assets/right_icon.png";
import LeftIcon from "../assets/left_icon.png";
import Property from "./property";
const Images = [
  salidFirst,
  salidSecond,
  salidThired,
  salidFour,
  salidFive,
  salidSix,
];
const Feature = () => {
  const [index, setIndex] = useState(0);
  const [image, SetImage] = useState("");

  const handleSelect = (selectedIndex, e) => {
    SetImage(selectedIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetImage((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  const imageStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  };

  const currentImage = Images[image];
  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <h1 class="d-flex justify-content-center ">Featured Projects</h1>
        <h6 class="d-flex justify-content-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h6>
      </div>

      <div
        style={{
          height: "500px",
          width: "70%",
          marginLeft: "200px",
        }}
      >
        <Carousel activeIndex={index} onSelect={handleSelect} prevIcon={<div style={{background:"#FFFFFF" ,  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',width:"50px" ,height:"50px",position:'absolute',left:'-30px',  display: 'flex',alignItems: 'center',justifyContent: 'center',}}><img src={LeftIcon}/></div> } nextIcon={<div style={{background:"#FF6646" , width:"50px",height:"50px" ,position:'absolute',right:'-30px',  display: 'flex',alignItems: 'center',justifyContent: 'center',}}><img src={RightIcon  }/></div>}>
          <Carousel.Item style={{marginTop: '2rem'}}>
            <div>
            <div>
              <img
                className=" w-100"
                src={currentImage}
                alt={`Slide ${image + 1}`}
                style={imageStyle}
              />

              <div
                style={{
                  width: "600px",
                  height: "100px",
                  position: "absolute",
                  top: "50%",
                  left: "20%",
                }}
              >
                <div style={{marginTop:'100px'}}>
                <div
                  className=" d-flex  justify-content-between"
                  style={{ background: "#FFFFFFE5" }}
                >
                  <div style={{ marginLeft: "30px", marginTop: "20px" }}>
                    <h5 class="font-family-lato font-size-20 font-weight-bold line-height-24 text-left">
                      Luxury Grand Residence City
                    </h5>
                    <p class="font-family-source-sans-pro font-size-18 font-weight-400 ml-3">
                      By Smart Home Developer Limited.
                    </p>
                  </div>
                  <div>
                    <button
                      style={{
                        width: "146px",
                        height: "50px",
                        backgroundColor: "#FF6646",
                        marginTop: "25px",
                        marginRight: "40px",
                        color: "whitesmoke",
                      }}
                      className="list-group-item font-family-source-sans-pro font-size-16 font-weight-bold line-height-20 text-left"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div
                  className=" d-flex  justify-content-between"
                  style={{ background: "#FFFFFFE5" }}
                >
                  <div style={{ marginLeft: "30px", marginTop: "20px" }}>
                    <h5 class="font-family-lato font-size-20 font-weight-bold line-height-24 text-left">
                      1, 2, 3 BHK Apartments
                    </h5>
                    <p>San Diego, California</p>
                  </div>
                  <div>
                    <h4
                      style={{ marginTop: "45px", marginRight: "25px" }}
                      class="font-family-lato font-size-24 font-weight-900 line-height-29 text-center"
                    >
                      $50,000 - $80,000
                    </h4>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
            
          </Carousel.Item>
        </Carousel>
      </div>
      <Property/>
    </>
  );
};

export default Feature;

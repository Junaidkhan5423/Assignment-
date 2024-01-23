import React from "react";
import logo from "../assets/logo.png";
import DwonIcon from "../assets/DwonIcon.png";
import Icon from "../assets/icon.png";
import Feature from "./Feature";
import '../App.css';



const Main = () => {
  return (
    <>
      <div>
        <div class="  h-24 bg-white" style={{ width: '1100px', marginLeft: '150px' }}>
          <div>
            <div class="d-flex justify-content-between  align-items-center">
              <img src={logo} />
              <div>
                <ul class=" d-flex justify-content-evenly gap-5" style={{ marginTop: '20px' }}>
                  <li className="list-group-item " style={{ fontSize: "17px", fontWeight: 500 }}>Property Services</li>
                  <li className="list-group-item" style={{ fontSize: "17px", fontWeight: 500 }}>Home Loans </li>
                  <li className="list-group-item" style={{ fontSize: "17px", fontWeight: 500 }}>Help</li>
                  <li className="list-group-item" style={{ fontSize: "17px", fontWeight: 500 }}>Login</li>
                  <li style={{ width: '176px', height: '38px', backgroundColor: '#FF6646', color: 'whitesmoke', padding: '5px', fontSize: "17px", fontWeight: 500 }} className="text-center">
                    Free Post Property
                  </li>


                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-image justify-content-center d-flex ">
          <div
            style={{ height: "150px" }}
            className="d-flex align-items-center"
          >
            <div
              class="  "
              style={{
                height: "60px",
                width: "220px",
                textAlign: "center",
                backgroundColor: "#FF6646",
              }}
            >
              <h1 class="text-light">Find Your</h1>
            </div>
          </div>

          <div style={{ height: "150px" }} className="d-flex align-items-end ">
            <div
              class="  "
              style={{
                height: "60px",
                width: "220px",
                textAlign: "center",
                backgroundColor: "#233543",
                marginLeft: '20px'
              }}
            >
              <h1 class="text-light">Best Home</h1>
            </div>
          </div>
        </div>

        <div
        className="residential-apartment-frame"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "25px",
            width: "100%",
            position: "absolute",
            bottom: "-230px",
          }}
        >
          <div style={{ height: "70px", width: "450px", backgroundColor: "#FFFFFF", }} >
            <div style={{ marginLeft: "20px" }}>
              <button style={{ backgroundColor: " #FF6646", color: "white", border: "none", width: '68px', height: '35px', fontWeight: 500 }}>
                Buy
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  border: "none",
                  padding: "10px 20px",
                  marginTop: "15px",
                  cursor: "pointer",
                  marginLeft: "8px",
                  fontWeight: 500
                }}
              >
                Rent
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  border: "none",
                  padding: "10px 20px",
                  marginTop: "15px",
                  cursor: "pointer",
                  marginLeft: "8px",
                  fontWeight: 500
                }}
              >
                PG/Co-Living
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  border: "none",
                  padding: "10px 20px",
                  marginTop: "15px",
                  cursor: "pointer",
                  marginLeft: "8px",
                  fontWeight: 500
                }}
              >
                Commercial
              </button>
            </div>
          </div>



          <div className="search-fields shadow p-4 mb-5 bg-white ">
            <div >
              <p className="title">Locations</p>
              <div className="location-info">
                <h5>New York City</h5>
                <div className="image-container">
                  <img src={Icon} alt="Image" className="image" />
                </div>
              </div>
            </div>
            <div style={{ content: '', width: '1px', height: '50px', backgroundColor: "#666666", marginLeft: '10px' }}></div>



            <div className="text-container">
              <p className="title">Property Type</p>
              <div className="location-info">
                <h5>Residential Apartment</h5>
                <div className="image-container">
                  <img src={DwonIcon} alt="Image" className="image" />
                </div>
              </div>
            </div>
            <div style={{ content: '', width: '1px', height: '50px', backgroundColor: "#666666", marginLeft: '10px' }}></div>
            <div className="text-container">
              <p className="title">Prize Range</p>
              <div className="location-info">
                <h5>$20000 - $30000</h5>
                <div className="image-container">
                  <img src={DwonIcon} alt="Image" className="image" />
                </div>
              </div>
            </div>
            <button className="search-button" style={{ backgroundColor: " #FF6646", color: "white", border: "none", width: '68px', height: '35px' }} >Search</button>
          </div>
        </div>
      </div>
      <Feature />
    </>
  );
};

export default Main;

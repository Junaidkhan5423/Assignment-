import React from 'react'
import Business from '../assets/business-icon.png'
import Add from '../assets/ad-icon.png'
import home from '../assets/home-icon.png'
import { useState, useEffect } from 'react';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import RightIcon from "../assets/right_icon.png";
import LeftIcon from "../assets/left_icon.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
];
const Property = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);







  return (
    <div className='row' style={{ backgroundColor: '#23354305', marginTop: '225px' }} >
      <div className="col-6">
        <div style={{ marginLeft: '7rem' }}  >
          <p style={{ color: '#FF6646', marginTop: "100px", fontWeight: 500 }} >Sell or Rent your property</p>
          <h4 style={{ fontFamily: 'Lato', fontSize: '40px', fontWeight: '600', lineHeight: '60px', letterSpacing: '0em' }}>Property owners</h4>
          <h4 style={{ fontFamily: 'Lato', fontSize: '48px', fontWeight: '600', lineHeight: '60px', letterSpacing: '0em' }}>get free posting when</h4>

          <h4 style={{ fontFamily: 'Lato', fontSize: '48px', fontWeight: '600', lineHeight: '60px', letterSpacing: '0em' }}>they register</h4>
          <p style={{ color: '#666666' }}>Post your residential / commercial property.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginLeft: '55px', marginTop: '30px' }}>
          <div >
            <img
              src={Business}
              className="img-fluid"
            />

            <p className="mb-1">First Line of Text</p>
            <p className="mb-0">Second Line of Text</p>

          </div>
          <div >
            <img
              src={Add}
              className="img-fluid"
            />

            <p className="mb-1">5 Lakh plus*</p>
            <p className="mb-0">owners advertise</p>

          </div>
          <div >
            <img
              src={home}
              className="img-fluid"
            />

            <p className="mb-1">50 Lakh plus*</p>
            <p className="mb-0">Monthly Searches</p>

          </div>
        </div>
      </div>
      <div className="container  col-md-6" >
        <div className=' row' style={{ marginTop: "7rem" }}>

          {Array.from({ length: 3 }).map((_, columnIndex) => (
            <div key={columnIndex} className="col-md-4" style={{ marginTop: columnIndex === 1 ? 0 : "7rem" }} >
              <img
                src={images[currentIndex + columnIndex]}
                alt={`Image ${currentIndex + columnIndex + 1}`}
                className="img-fluid"
              />
            </div>
          ))}
        </div>

      </div>
      <div style={{ marginLeft: '100px', display: 'flex', gap: '13px' }}>
        <div style={{ background: "#FFFFFF", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: "50px", height: "50px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={LeftIcon} /></div>
        <div style={{ background: "#FF6646", width: "50px", height: "50px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={RightIcon} /></div>
      </div>
    </div>
  )
}

export default Property

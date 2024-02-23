
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Navigation = () => {
    // const navigate =  useNavigate()
  return (
    <div style={{ width: "100%", height: "50px", backgroundColor: "red" }}>
      <div  style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          color: "whitesmoke",
        }}>
        <h3>Header</h3>
      <nav  >
      <ul style={{display:'flex', flexDirection:"row" ,gap:"10px",listStyle:"none"}}>
        <li > <Link to={'/'} style={{ textDecoration: 'none', color: 'white'}}>First Component </Link> </li>
        <li ><Link to={'/second'} style={{ textDecoration: 'none', color: 'white'}}>Second Component </Link> </li>
        <li ><Link to={'/third'} style={{ textDecoration: 'none', color: 'white'}}>Thired Component </Link> </li>
      </ul>
    </nav>
      </div>
    

    <Outlet/>
    </div>
  );
};

export default Navigation;



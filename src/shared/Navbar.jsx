import React from "react";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  
  return (
    <>
    
    <nav>
      <nav>
        <div className="nav-container">
           <a href="/">
            <img src="images/ada.png" alt="" className="logo" />
           </a>
            <div className="nav-profile">
           
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" aria-current="page">
                | Home |<span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
               | Product |
              </NavLink>
            </li>
            
          
            </div>
        </div>
      </nav>
    </nav>
    <div className="main-menu">
     
          
        
        <a href="/Product" className="main-menu-content">
          <button  class="btn-1">
            <img src="images/product-return.png" className="icon-nav" />
            PRODUCT
          </button>
        </a>
        <a href="/Productlift" className="main-menu-content">
          <button  class="btn-1">
          <img src="images/product-return.png" className="icon-nav" />
            LIFTSTYLE
          </button>
        </a>
        <a href="/Productrun" className="main-menu-content">
          <button  class="btn-1">
            <img src="images/product-return.png" className="icon-nav" />
            RUNNER
          </button>
        </a>
        <a href="/Productgym" className="main-menu-content">
          <button  class="btn-1">
            <img src="images/product-return.png" className="icon-nav" />
            GYM & TRAINING
          </button>
        </a>
        <a href="/Contact" className="main-menu-content">
          <button  class="btn-1">
            <img src="images/mg.png" className="icon-nav" />
            CONTACT
          </button>
        </a>

        
        
        
    </div>

    
    </>
  );
};

export default Navbar;


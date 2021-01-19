import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {isSubString} from "../../globals/utils"
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedOut(true);
    props.resetFilters();
  };

  return (
    <div id="navbar">
      {isLoggedOut && <Redirect to="login" />}
      <header className="header-sec bg-offwhite fixed-top">
         <nav className="navbar navbar-expand-lg navbar-light ">
             <div className="d-flex w-100 header-fix">
             <NavLink className="navbar-brand  pt-0" to="/dashboard"
  // onClick={()=>{setIsOpen(false)}}
  >
          <img alt="logo" className="logo-area" src="/assets/images/ic_app_logo.png" height="50px"/>
        </NavLink>
             {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"
             onClick={()=>setIsOpen(true)}> */}
      <span className="navbar-toggler-icon my-auto mr-2"
      onClick={()=>setIsOpen(!isOpen)}></span>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
      <NavLink
                    onClick={logout}
                    to="/login"
                    className="nav-link fw-600 py-1 h-100 d-flex align-items-center"
                  >
                    Log Out
                  </NavLink>
                  </li></ul>
          </div>
        </nav>
      </header>
      <div id="mySidenav" className="sidenav" style={{width:isOpen?"230px":"0px",padding:isOpen?"20px":""}}>
  {/* <a href="javascript:void(0)" className="closebtn" onClick={()=>{setIsOpen(false)}}>&times;</a> */}
  <ul class="navbar-nav ml-sm-auto">
      <li class="nav-item">
      <NavLink
              className="nav-link fw-600 py-1 h-100 d-flex align-items-center"
              to="/user-list"
              onClick={()=>{setIsOpen(false)}}
            >
              Users
            </NavLink>
      </li>
      <li class="nav-item">
      <NavLink
              className="nav-link fw-600 py-1 h-100 d-flex align-items-center"
              to="/booking-list"
              onClick={()=>{setIsOpen(false)}}
            >
              Bookings
            </NavLink>
      </li>
    
      </ul>
         
</div>
    </div>
  );
}

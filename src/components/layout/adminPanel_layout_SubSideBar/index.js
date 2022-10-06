import React, { useState, useContext } from "react";
import AdminPanel_headerTop from "../adminPanel_layout_Category";
import AdminPanel_menuSidebar from "../adminPanel_layout_menuSidebar/adminPanel_menuSidebar";
import "./adminPanel_sideBar.scss";
import {UserContext} from '../../../context/provider';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

function AdminPanel_SubSideBar() {
    // const [id,setId]=useState("Product")
    const props =useContext(UserContext);
  return (
    <>
    <div className="row adminPanel_container">
    <div className="adminPanel_sideBarcontainer">
        <nav className="nav flex-column ">
          <div className="align-self-center adminPanel_sideBar_margintop ">
            <Link className={`nav-link my-3  ${(props.id === "Product") ? "active" : ''}`}  onClick={()=>props.setId("Product")} to="/Product">
              <img src="/images/smartphone-call.png" className="mt-1"/>
            </Link>
            <Link className={`nav-link my-3  ${(props.id==="Shop") ? "active" : ''}`}  onClick={()=>props.setId("Shop")} to="/Shop">
            <img src="/images/Shops-icon.png" className="mt-2 "/>
            </Link>
            <Link className={`nav-link my-3 ${(props.id==="Profile") ? "active" : ''} `}  onClick={()=>props.setId("Profile")} to="/Profile">
            <img src="/images/user-icon.png" />
            </Link>
          </div>
        </nav>
      </div>
       <AdminPanel_menuSidebar id={props.id} />
    </div>
   
    </>
  );
}

export default AdminPanel_SubSideBar;

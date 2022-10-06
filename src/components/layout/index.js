import React from "react";
import AdminPanel_SubSideBar from "./adminPanel_layout_SubSideBar";
import AdminPanel_Category from "./adminPanel_layout_Category";
import "./styles.scss";


const Index = ({ children }) => {


  return (
    <div id="bodyContainer">
      <header className="bg_header container-fluid"/>
      <div className=" d-flex container-fluid p-0">
          <div className="sideBar">
          <AdminPanel_SubSideBar  />
          </div>
          <div className="wrapper">
          <AdminPanel_Category />
          {children}
          </div>
      </div>

    </div>
  );
};

export default Index;

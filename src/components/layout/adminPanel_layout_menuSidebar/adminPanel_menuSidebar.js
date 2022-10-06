import React, { useState ,useContext } from 'react';
import AdminPanel_headerTop from '../adminPanel_layout_Category';
import '../adminPanel_layout_SubSideBar/adminPanel_sideBar.scss';
import {UserContext} from '../../../context/provider';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";


function AdminPanel_menuSidebar(props) {
    const name = useContext(UserContext);
    const menuSideBar = () =>{
        if (props.id === "Product"){
            return(
            <div className="adminPanel_menucontainer p-0">
            <li className="nav flex-column align-self-center">
              <div className="align-self-center w-75 mt-2">
                <a className="nav-link border_bottom mb-4 " href="#">
                    <img src="/images/Product-icon.png" className="mx-4 w-50" />
                    <p className="adminPanel_p">محصولات</p>
                </a>
                <Link className={`nav-link body mb-2 ${(name.name === "productList") ? "border_product" : ''}`}     onClick={()=>name.setName("productList") } to="/Product/productList">لیست محصولات </Link>
                <Link className={`nav-link body mb-2 ${(name.name === "priceList") ? "border_product" : ''}`}   onClick={()=>name.setName("priceList") } to="/Product/priceList">لیست قیمت</Link>
                <Link className={`nav-link body mb-2 ${(name.name === "info") ? "border_product" : ''}`}   onClick={()=>name.setName("info")} to="/Product/info"> مشخصه های فنی</Link>
                <Link className={`nav-link body mb-2 ${(name.name === "brands") ? "border_product" : ''}`}  onClick={()=>name.setName("brands")} to="/Product/brands"> برندها  </Link>
                <Link className={`nav-link body mb-2 ${(name.name === "chart") ? "border_product" : ''}`}   onClick={()=>name.setName("chart") } to="/Product/chart"> شاخص ها  </Link>
              </div>
            </li>
          </div>
          )
        }else if (props.id === "Shop"){
            return(
                <div className="adminPanel_menucontainer p-0">
                <nav className="nav flex-column align-self-center">
                  <div className="align-self-center mt-2">
                    <a className="nav-link border_bottom mb-4" href="#">
                        <img src="/images/Product-icon.png" className="mx-4" />
                        <p className="adminPanel_p">فروشگاه</p>
                    </a>
                    {/* <a className={`nav-link body border_product `} href="#"   >لیست محصولات</a>
                    <a className="nav-link body border_product" href="#">لیست قیمت</a>
                    <a className="nav-link body border_product" href="#"> مشخصه های فنی</a>
                    <a className="nav-link body border_product" href="#"> برندها  </a>
                    <a className="nav-link body border_product" href="#"> شاخص ها  </a> */}
                  </div>
                </nav>
              </div>
            )
        }else if (props.id === "Profile"){
            return(
                <div className="adminPanel_menucontainer p-0">
                <nav className="nav flex-column align-self-center">
                  <div className="align-self-center mt-2">
                    <a className="nav-link border_bottom mb-4" href="#">
                        <img src="/images/Product-icon.png" className="mx-4" />
                        <p className="adminPanel_p">پروفایل</p>
                    </a>
                    {/* <a className={`nav-link body border_product `} href="#"   >لیست محصولات</a>
                    <a className="nav-link body border_product" href="#">لیست قیمت</a>
                    <a className="nav-link body border_product" href="#"> مشخصه های فنی</a>
                    <a className="nav-link body border_product" href="#"> برندها  </a>
                    <a className="nav-link body border_product" href="#"> شاخص ها  </a> */}
                  </div>
                </nav>
              </div>
            )
        }
        }
    return (
        <>
            {menuSideBar()}
        </>
    )
}

export default AdminPanel_menuSidebar

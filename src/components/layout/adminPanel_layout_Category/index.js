import React, { useState,useContext } from "react";
import "./adminPanel_Category.scss";
import AdminPanel_ProfileCard from '../adminPanel_layout_ProfileCard/'
import {UserContext} from '../../../context/provider'
import { Link } from "react-router-dom";

function AdminPanel_Category() {
  const select = useContext(UserContext)

  return (
    <>
      <div className="row headerTop p-0 m-0  container-fluid">
      <div className="col-lg col-md col-sm pe-5">
        <p className="header_font mt-3">دسته‌بندی‌های‌منتخب</p>
        <div className="mt-3 pe-3">
        <Link className="favourite_Category mt-3" onClick={()=>select.setName("productList")} to="/Product/productList">لیست محصولات</Link>
        <span className="favourite_Category">/</span>
        <Link className="favourite_Category " onClick={()=> select.setName("priceList")} to="/Product/priceList">لیست قیمت</Link>
        </div>
        </div>
        <AdminPanel_ProfileCard />
      </div>
    </>
  );
}

export default AdminPanel_Category;

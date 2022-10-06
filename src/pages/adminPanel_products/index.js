import React ,{ useState,useContext } from 'react'
import ProductsLists from '../../components/adminPanel_products_productsLists';
import './adminPanel.scss'
import {UserContext} from '../../context/provider'
import AdminPanel_Edit from '../../components/adminPanel_products_productsLists/adminPanel_products_selectedForm';

import SelectedFrom from '../../components/adminPanel_products_productsLists/adminPanel_products_selectedForm';
import Form from '../../components/adminPanel_products_productsLists/adminPanel_products_Form'
import AdminPanel_menuSidebar from '../../components/layout/adminPanel_layout_menuSidebar/adminPanel_menuSidebar';
function AdminPanel() {
    const select = useContext(UserContext)

    // const table =()=>{
    //     if(select.name=== "" && select.id === "Product"){
    //         return(
    //             <ProductsLists />
    //         )
    //     }
    //     // if(select.name === "productList" && select.id === "Product"){
    //     //   return(
    //     //     <ProductsLists />
    
    //     //   )
    //     // }
    //     if(select.path === "/Product/productList" ) {
    //       return(
    //         <SelectedFrom />
    //       )
    //     }else {
    //       return(
    //         <div></div>
    //       )
    //     }
    //   }
    return (
        <div>
                <ProductsLists />
        </div>
    )
}

export default AdminPanel

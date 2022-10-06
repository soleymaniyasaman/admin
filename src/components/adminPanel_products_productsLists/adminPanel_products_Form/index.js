import React, { useContext } from "react";
import "./adminPanel_products_Form.scss";
import { UserContext } from "../../../context/provider";
import Processors from './adminPanel_products_processorsForm';
import { Formik } from "formik";
import { Field, FormikProps } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FirstInformation from "./adminPanel_products_firsInformation";
import Software from "./adminPanel_product_software";
import Display from "./adminPanel_products_display";

function Form(selectID) {
  const FormData = () => {
    if (selectID.infoFirst === "firstInformation") {
     
      return (
          <FirstInformation/>
      );
      }
    if (selectID.infoFirst === "software") {
      return (
          <Software />
      );
    }
 if(selectID.infoFirst === "pc"){
    return <Processors/>
 }
 if(selectID.infoFirst === "desktop"){
  return <Display/>
}
    
  };
  return <div>{FormData()}</div>;
}

export default Form;

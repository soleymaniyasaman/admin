import React, { useContext } from "react";
import "./adminPanel_products_selectedForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryQuarter,
  faBoxOpen,
  faCamera,
  faDesktop,
  faImages,
  faInfoCircle,
  faMicrochip,
  faPencilRuler,
  faRobot,
  faTags,
  faVolumeDown,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../context/provider";
import Form from "../adminPanel_products_Form";

function SelectedFrom() {
  const selectID = useContext(UserContext);
  
  return (
    <>
      <div className="margin_top">
        <div className="row container-fluid col-12 selectedForm">
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "firstInformation" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("firstInformation")}
          >
            <div className="d-flex align-items-center bg_color  h-100">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="colorChange mx-auto"
              />
            </div>
            <p className="me-2 font_style_selected">اطلاعات اولیه</p>
          </div>
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "pc" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("pc")}
          >
            <div className="d-flex align-items-center bg_color  h-100">
              <FontAwesomeIcon
                icon={faMicrochip}
                className="colorChange mx-auto"
              />
            </div>
            <p className="mx-auto font_style_selected_pc">
              {" "}
              پردازنده و سخت افزار
            </p>
          </div>
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "desktop" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("desktop")}
          >
            <div className="d-flex align-items-center bg_color  h-100">
              <FontAwesomeIcon
                icon={faDesktop}
                className="colorChange mx-auto"
              />
            </div>
            <p className="me-2 font_style_selected"> صفحه نمایش</p>
          </div>
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "network" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("network")}
          >
            <div className="d-flex align-items-center bg_color  h-100">
              <FontAwesomeIcon icon={faWifi} className="colorChange mx-auto" />
            </div>
            <p className="me-2 font_style_selected"> اتصالات و شبکه</p>
          </div>
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "camera" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("camera")}
          >
            <div className="d-flex align-items-center bg_color  h-100">
              <FontAwesomeIcon
                icon={faCamera}
                className="colorChange mx-auto"
              />
            </div>
            <p className="me-2 font_style_selected"> دوربین</p>
          </div>
          <div
            className={`d-flex align-items-center col button_selected_price ${
              selectID.selected === "price" ? "isActive_price" : ""
            }`}
            onClick={() => selectID.setSelected("price")}
          >
            <div className="d-flex align-items-center bg_color_price  h-100">
              <FontAwesomeIcon icon={faTags} className="colorChange mx-auto" />
            </div>
            <p className="mx-auto font_style_selected"> تنوع و قیمت گذاری</p>
          </div>
        </div>
        <div className="row container-fluid col-12 selectedForm mt-1">
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "design" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("design")}
          >
            <div className="d-flex align-items-center bg_color  h-100">
              <FontAwesomeIcon
                icon={faPencilRuler}
                className="colorChange mx-auto"
              />
            </div>
            <p className="me-2 font_style_selected"> طراحی و مواد</p>
          </div>
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "voice" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("voice")}
          >
            <div className="d-flex align-items-center bg_color  h-100">
              <FontAwesomeIcon
                icon={faVolumeDown}
                className="colorChange mx-auto"
              />
            </div>
            <p className="me-2 font_style_selected"> صدا</p>
          </div>
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "battery" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("battery")}
          >
            <div className="d-flex align-items-center bg_color  h-100">
              <FontAwesomeIcon
                icon={faBatteryQuarter}
                className="colorChange mx-auto"
              />
            </div>
            <p className="me-2 font_style_selected"> باطری</p>
          </div>
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "images" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("images")}
          >
            <div className="d-flex align-items-center bg_color  h-100">
              <FontAwesomeIcon
                icon={faImages}
                className="colorChange mx-auto"
              />
            </div>
            <p className="me-2 font_style_selected"> تصاویر و ویدیوها</p>
          </div>
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "software" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("software")}
          >
            <div className="d-flex align-items-center bg_color  h-100">
              <FontAwesomeIcon icon={faRobot} className="colorChange mx-auto" />
            </div>
            <p className="me-2 font_style_selected"> نرم افزار</p>
          </div>
          <div
            className={`d-flex align-items-center col button_selected ${
              selectID.selected === "box" ? "isActive" : ""
            }`}
            onClick={() => selectID.setSelected("box")}
          >
            <div className="d-flex align-items-center bg_color h-100">
              <FontAwesomeIcon
                icon={faBoxOpen}
                className="colorChange mx-auto"
              />
            </div>
            <p className="me-2 font_style_selected"> محتویات جعبه</p>
          </div>
        </div>
      </div>
      <Form infoFirst={selectID.selected}/>
    </>
  );
}

export default SelectedFrom;

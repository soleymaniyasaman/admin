import React from "react";
import "./adminPanel_ProfileCard.scss";
function AdminPanel_ProfileCard() {
  return (
    <>
      <div className="profile_card col-lg-5 col-md col-sm  d-flex align-items-center">
        <div className="container-fluid child pe-5">
            <div className="row pt-4">
            <div className="col-7 ">
            <p className="font_style_header">محمد امین موسوی</p>
            <p className="font_style_title ">تیم تحریریه</p>
            <p className="font_style_title "> سطح دسترسی : ویرایشگر</p>
          </div >
          <div className="col-5">
            <img src="/images/profile.jpeg" className="col me-3 border_profile" />
            <div class="file">
              <label for="input-file">
                <img
                  src="/images/Change-profile-image.png"
                  className="edit_profile"
                />
              </label>
              <input id="input-file" type="file" />
            </div>
          </div>
            </div>
          
          <div className="col end_position p-0">
        <a className="edit_name  mt-3" href="/productList">تغییر‌ رمزعبور </a>
        <span className="edit_name">/</span>
        <a className="edit_name " href="/priceList"> ویرایش‌پروفایل</a>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default AdminPanel_ProfileCard;

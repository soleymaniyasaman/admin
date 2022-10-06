import React from 'react';
import { Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, FormikProps } from "formik";
import '../adminPanel_products_Form.scss'


const FirstInformation = () => {
    const submitForm = (values) => {
        console.log(values);
      };
    return (
        <>
           <div className="bodyForm_s">
          <Formik
            initialValues={{ startDate: new Date() }}
            onSubmit={(values, actions) => submitForm(values, actions)}
          >
            {({ values, setFieldValue }) => (
              <form>
                <div className="row container-fluid col-12 mx-auto">
                  <div className="col-6  mt-4">
                    <p className="font_title_name">نام گوشی</p>
                    <div class="input-group flex-nowrap w-75">
                      <Field
                        type="text"
                        name="name_1"
                        placeholder="آیفن 12 پرو "
                        class="form-control bg_input input_text"
                      />
                    </div>
                  </div>
                  <div className="col-6  row mt-4">
                    <div className=" d-flex align-items-center col-3 ">
                      <p className="font_title_name mt-3">پرچم دار</p>
                      <div class="form-check me-2">
                        <Field
                          type="checkbox"
                          name="checkbox_1"
                          class="form-check-input checkbox_input"
                        />
                      </div>
                    </div>
                    <div className=" d-flex align-items-center col-4 ">
                      <p className="font_title_name mt-3"> مخصوص بازی</p>
                      <div class="form-check me-2">
                        <Field
                          type="checkbox"
                          name="checkbox_2"
                          class="form-check-input checkbox_input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6  mt-4">
                    <p className="font_title_name">برند </p>
                    <div class="input-group flex-nowrap w-75 ">
                      <Field
                        as="select"
                        name="brand"
                        class="form-select bg_input selected_input"
                      >
                        <option selected>اپل</option>
                        <option value="1">سامسونگ</option>
                        <option value="2">هوآوی</option>
                        <option value="3">آنر</option>
                        <option value="3">شیائومی</option>
                      </Field>
                    </div>
                  </div>
                  <div className="col-6  mt-4">
                    <div className="row">
                      <div className="row">
                        <p className="font_title_name col-6 p-0">
                          سال و ماه تولید{" "}
                        </p>
                        <p className="font_title_name col-6 margin_right25">
                          کد محصول{" "}
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-6 row">
                          <DatePicker
                            selected={values.startDate}
                            dateFormat="MMMM    /     yyyy"
                            className="form-control datePicker col"
                            name="startDate"
                            showMonthYearPicker
                            onChange={(date) =>
                              setFieldValue("startDate", date)
                            }
                          />
                        </div>
                        <div className="col ">
                          <div class="input-group flex-nowrap">
                            <Field
                              type="text"
                              name="name_2"
                              placeholder="12pro "
                              class="form-control bg_input input_text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 mx-auto">
                    <div className="row w-50">
                      <div className=" d-flex align-items-center w-auto ">
                        <p className="font_title_name mt-3"> نشانگر هشدار</p>
                        <div class="form-check me-2">
                          <Field
                            type="checkbox"
                            name="checkbox_3"
                            class="form-check-input checkbox_input"
                          />
                        </div>
                      </div>
                      <div className=" d-flex align-items-center w-auto mx-4 pe-3">
                        <p className="font_title_name mt-3"> سیستم خنک کننده</p>
                        <div class="form-check me-2">
                          <Field
                            type="checkbox"
                            name="checkbox_4"
                            class="form-check-input checkbox_input"
                          />
                        </div>
                      </div>
                    </div>

                    <div className=" d-flex align-items-center w-auto mx-3 ">
                      <p className="font_title_name mt-3"> دکمه بازی</p>
                      <div class="form-check me-2">
                        <Field
                          type="checkbox"
                          name="checkbox_5"
                          class="form-check-input checkbox_input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="  mt-4">
                    <div className=" d-flex align-items-center w-auto mx-auto">
                      <p className="font_title_name">بنچمارک </p>
                      <hr className="w-50 me-3 h-100 colorHr"></hr>
                    </div>
                  </div>
                  <div className="row col-12 mt-4 mx-auto">
                    <div className="col d-flex align-items-center w-auto ">
                      <p className="font_title_name mt-3">Antutu</p>
                      <div class="form-check me-2">
                        <Field
                          type="text"
                          name="name_3"
                          placeholder="25341 "
                          class="form-control bg_input input_text"
                        />
                      </div>
                    </div>
                    <div className="col d-flex align-items-center w-auto ">
                      <p className="font_title_name mt-3">Geekbench</p>
                      <div class="form-check me-2">
                        <Field
                          type="text"
                          name="name_4"
                          placeholder="25341 "
                          class="form-control bg_input input_text"
                        />
                      </div>
                    </div>

                    <div className="col d-flex align-items-center w-auto  ">
                      <p className="font_title_name mt-3">3DMark</p>
                      <div class="form-check me-2">
                        <Field
                          type="text"
                          name="name_5"
                          placeholder="25341 "
                          class="form-control bg_input input_text"
                        />
                      </div>
                    </div>
                    <div className="col d-flex align-items-center w-auto  ">
                      <p className="font_title_name mt-3">GFXbench</p>
                      <div class="form-check me-2">
                        <Field
                          type="text"
                          name="name_6"
                          placeholder="25341 "
                          class="form-control bg_input input_text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row col-12 mt-4 mx-auto">
                    <div className="col d-flex align-items-center w-auto ">
                      <p className="font_title_name mt-3">DisplayMate</p>
                      <div class="form-check me-2">
                        <Field
                          type="text"
                          name="name_7"
                          placeholder="25341 "
                          class="form-control bg_input input_text"
                        />
                      </div>
                    </div>
                    <div className="col d-flex align-items-center w-auto ">
                      <p className="font_title_name mt-3">DXOMark</p>
                      <div class="form-check me-2">
                        <Field
                          type="text"
                          name="name_8"
                          placeholder="25341 "
                          class="form-control bg_input input_text"
                        />
                      </div>
                    </div>

                    <div className="col d-flex align-items-center w-auto  ">
                      <p className="font_title_name mt-3">GPSStatus</p>
                      <div class="form-check me-2">
                        <Field
                          type="text"
                          name="name_9"
                          placeholder="25341 "
                          class="form-control bg_input input_text"
                        />
                      </div>
                    </div>
                    <div className="col d-flex align-items-center w-auto  ">
                      <p className="font_title_name mt-3">DiskSpeed</p>
                      <div class="form-check me-2">
                        <Field
                          type="text"
                          name="name_10"
                          placeholder="25341 "
                          class="form-control bg_input input_text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="  mt-4">
                    <div className=" d-flex align-items-center w-auto mx-auto">
                      <p className="font_title_name">امنیت </p>
                      <hr className="w-50 me-3 h-100 colorHr"></hr>
                    </div>
                    <div className="row mt-4 mx-auto">
                      <div className="row mb-5 w-50">
                        <div className=" d-flex align-items-center w-auto ">
                          <p className="font_title_name mt-3">تشخیص چهره</p>
                          <div class="form-check me-2">
                            <Field
                              type="checkbox"
                              name="checkbox_7"
                              class="form-check-input checkbox_input"
                            />
                          </div>
                        </div>
                        <div className=" d-flex align-items-center w-auto mx-4 pe-3">
                          <p className="font_title_name mt-3">اثر انگشت</p>
                          <div class="form-check me-2">
                            <Field
                              type="checkbox"
                              name="checkbox_8"
                              class="form-check-input checkbox_input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
    
        </>
    );
};

export default FirstInformation;

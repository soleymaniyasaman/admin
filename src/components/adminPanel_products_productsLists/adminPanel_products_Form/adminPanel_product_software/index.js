import React from "react";
import { Formik } from "formik";
import { Field, FormikProps } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../adminPanel_products_Form.scss'
const Software = () => {
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
                <div className="row mt-4 mx-auto">
                  <div className="w-25  mt-4">
                    <p className="font_title_name"> سیستم عامل</p>
                    <div class="input-group flex-nowrap">
                      <Field
                        as="select"
                        name="brand"
                        class="form-select bg_input selected_input "
                      >
                        <option selected>Android</option>
                        <option value="1">ios</option>
                      </Field>
                    </div>
                  </div>
                  <div className="col d-flex align-items-center w-auto ">
                    <div className="w-25  mt-4">
                      <p className="font_title_name"> ورژن سیستم عامل</p>
                      <div class="input-group flex-nowrap w-75">
                        <Field
                          type="text"
                          name="name_1"
                          placeholder="11 "
                          class="form-control bg_input input_text text_center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mx-auto  row mt-4">
                  <div className=" d-flex align-items-center  ">
                    <p className="font_title_name mt-4">
                      Google Service - Official
                    </p>
                    <div class="form-check me-2">
                      <Field
                        type="checkbox"
                        name="checkbox_1"
                        class="form-check-input checkbox_input"
                      />
                    </div>
                  </div>
                </div>
                <div className=" mx-auto mt-4">
                  <p className="font_title_name ">
                    نرم افزار شرکت سازنده (فرم ورک)
                  </p>
                  <div class="input-group flex-nowrap w-25">
                    <Field
                      as="select"
                      name="brand"
                      class="form-select bg_input selected_input "
                    >
                      <option selected>Miui</option>
                      <option value="1">test</option>
                    </Field>
                  </div>
                </div>
                <div className=" mx-auto mt-4 mb-4">
                  <p className="font_title_name ">
                        پشتیبانی نرم افزاری تا تاریخ
                  </p>
                  <div class="input-group flex-nowrap">
                  <DatePicker
                            selected={values.startDate}
                            dateFormat="MMMM    /     yyyy"
                            className="form-control datePicker w_120 "
                            name="startDate"
                            showMonthYearPicker
                            onChange={(date) =>
                              setFieldValue("startDate", date)
                            }
                          />
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

export default Software;

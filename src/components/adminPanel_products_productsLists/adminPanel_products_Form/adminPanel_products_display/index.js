import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.scss';
import { Formik, Field, FastField, Form } from 'formik';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
const Display = () => {
  const submitForm = (values) => {
    console.log(values);
  }
  return (
    <div className="bodyForm_pro">
      <Formik
        initialValues={{ processmodel: '', isAwesome: false, process: '' }}
        onSubmit={(values, actions) => submitForm(values)}
      >
        {
          ({ handleSubmit, handleBlur, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              {/* <h5 className="label font_title">پردازنده</h5> */}
              <div className="row d-flex align-item-end">
                  <div className="col-5">
                      <div className="row mr-sm-n4">
                <div className="col-6  mt-4">
                  <div className="label font_title_name">سایز (inch)</div> <Field component="select" multiple={false} type="text" name="processmodel" className="form-select input-group flex-nowrap form-control bg_input input_text selected_input w-75">
                  <option value="processmodel1">6.8</option>
                        <option value="processmodel2">Samsung Exynos ۳۱۰۰</option>
                        <option value="processmodel3">Samsung Exynos ۴۱۰۰</option>
                  </Field>
                </div>
                <div className="col-6  mt-4">
                  <div className="label font_title_name">نوع صفحه نمایش</div> <Field component="select" multiple={false} type="text" name="process" className="form-select input-group flex-nowrap form-control bg_input input_text selected_input ">
                  <option value="process1">AMO LED</option>
                        <option value="process2">2x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz</option>
                        <option value="process3">3x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz</option>
                  </Field>
                </div>
                      </div>
                  </div>
                  <div className="col-7">
                      <div className="row">
                    <div className="col-1 d-flex align-items-end mb-2 colorHr">
                    <FontAwesomeIcon
                icon={faGreaterThan}
            
              />
                    </div>
                    <div className="col-11 mt-4">
                  <div className="label font_title_name">توضیحات بیشتر</div> <Field component="select" multiple={false} type="text" name="process" className="form-select input-group flex-nowrap form-control bg_input input_text selected_input w-75">
                  <option value="process1">Dynamic Amoled 2x</option>
                        <option value="process2">2x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz</option>
                        <option value="process3">3x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz</option>
                  </Field>
                    </div>
                      </div>
                </div>
              </div>
              <div className="row mr-sm-n2">
                <div className="col-3  mt-5">
                  <div className="label font_title_name">Aspect Ratio</div> <Field component="select" multiple={false} type="text" name="processmodel" className="form-select input-group flex-nowrap form-control bg_input input_text selected_input w-75" >
                  <option value="processmodelKind1">20:9</option>
                        <option value="processKind2">Quad-Core</option>
                  </Field>
                </div>
                <div className="col-2  mt-5">
                      <div className="label font_title_name">Density</div> <Field component="select" multiple={false} type="text" name="frequenceprocess" className="form-select input-group flex-nowrap form-control bg_input input_text selected_input w-75" >
                      <option value="frequenceprocess1">516</option>
                        <option value="frequenceprocess2">2.51</option>
                        <option value="frequenceprocess3">2.81</option>
                      </Field>
                </div>
              </div>
              <div className="row mr-sm-n2">
                <div className="col-3  mt-5">
                  <div className="label font_title_name">Resolution</div> <Field component="select" multiple={false} type="text" name="graffprocessKind" className="form-select input-group flex-nowrap form-control bg_input input_text selected_input w-75" >
                        <option value="graffprocessKind1">1440 * 3200</option>
                        <option value="graffprocessKind2">ARM Mali-G78 MC15</option>
                        <option value="graffprocessKind3">ARM Mali-G78 MC16</option>
                  </Field>
                </div>
                <div className="col-3 mt-5">
                  <div className="label font_title_name">Kind of Resolution</div> <Field component="select" multiple={false} type="text" name="graffprocessKind" className="form-select input-group flex-nowrap form-control bg_input input_text selected_input w-75" >
                        <option value="graffprocessKind1">WQHD+</option>
                        <option value="graffprocessKind2">ARM Mali-G78 MC15</option>
                        <option value="graffprocessKind3">ARM Mali-G78 MC16</option>
                  </Field>
                </div>
              </div>
              <div className="row mr-sm-n4">
                <div className="col-7  mt-5">
                  <div className="label font_title_name">توضیحات بیشتر</div> <Field component="select" multiple={true} type="text" name="graffprocessKind" className="headerTop input-group flex-nowrap form-control bg_input input_text selected_input more_detail" >
                        <option value="moreDetail1">Hole-punch Notch</option>
                        <option value="moreDetail2">Refresh Rate 120 Hz</option>
                        <option value="moreDetail3">Peak Brightness-1500</option>
                        <option value="moreDetail4">Always-on Display</option>
                        <option value="moreDetail4">Always-on Display</option>
                        <option value="moreDetail4">Always-on Display</option>
                        <option value="moreDetail4">Always-on Display</option>
                        <option value="moreDetail4">Always-on Display</option>
                  </Field>
                </div>
                <div className="col-5"></div>
              </div>




{/* 
              <label>
                <Field type="checkbox" name="isAwesome" />
             Are you awesome?
           </label>
              <Field
                component="select"
                id="location"
                name="location"
                multiple={false}
              >
                <option value="NY">New York</option>
                <option value="SF">San Francisco</option>
                <option value="CH">Chicago</option>
                <option value="OTHER">Other</option>
              </Field>
              <FastField name="firstName" placeholder="Weezy" />

              <FastField name="middleInitial" placeholder="F">
                {({ field, form, meta }) => (
                  <div>
                    <input {...field} />


                
                  This updates normally because it's from the same slice of Formik state,
                  i.e. path to the object matches the name of this 


                  <FastField />
                  
                    {meta.touched ? meta.error : null}



                    This won't ever update since it's coming from
                  from another <Field>/<FastField>'s (i.e. firstName's) slice   



                    {form.touched.firstName && form.errors.firstName
                      ? form.errors.firstName
                      : null}

                    This doesn't update either

                    {form.submitCount}

                    Imperative methods still work as expected

                    <button
                      type="button"
                      onClick={form.setFieldValue('middleInitial', 'yasaman')}
                    >
                      
                 </button>
                  </div>
                )}
              </FastField>
              <button type="submit" disabled={isSubmitting}>Submit</button> */}
            </form>
          )
        }
      </Formik>
    </div>

  );
}

export default Display;

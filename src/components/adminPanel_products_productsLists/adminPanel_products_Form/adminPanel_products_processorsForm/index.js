import React from 'react';
import './style.scss';
import { Formik, Field, FastField, Form } from 'formik';
const Processors = () => {
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
              <h5 className="label font_title">پردازنده</h5>
              <div className="row">
                <div className="col-5  mt-4">
                  <div className="label font_title_name">مدل پردازنده</div> <Field component="select" multiple={false} type="text" name="processmodel" class="form-select input-group flex-nowrap form-control bg_input input_text selected_input">
                  <option value="processmodel1">Samsung Exynos ۲۱۰۰</option>
                        <option value="processmodel2">Samsung Exynos ۳۱۰۰</option>
                        <option value="processmodel3">Samsung Exynos ۴۱۰۰</option>
                  </Field>
                </div>
                <div className="col-7  mt-4">
                  <div className="label font_title_name">پردازنده</div> <Field component="select" multiple={false} type="text" name="process" class="form-select input-group flex-nowrap form-control bg_input input_text selected_input">
                  <option value="process1">1x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz</option>
                        <option value="process2">2x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz</option>
                        <option value="process3">3x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz</option>
                  </Field>
                </div>
              </div>
              <div className="row">
                <div className="col-5  mt-4">
                  <div className="label font_title_name">نوع پردازنده</div> <Field component="select" multiple={false} type="text" name="processmodel" class="form-select input-group flex-nowrap form-control bg_input input_text selected_input" >
                  <option value="processmodelKind1">Octa-Core</option>
                        <option value="processKind2">Quad-Core</option>
                  </Field>
                </div>
                <div className="col-7  mt-4">
                  <div className="row">
                    <div className=" col-5">
                      <div className="label font_title_name">فرکانس پردازنده(GHz)</div> <Field component="select" multiple={false} type="text" name="frequenceprocess" class="form-select input-group flex-nowrap form-control bg_input input_text selected_input" >
                      <option value="frequenceprocess1">2.41</option>
                        <option value="frequenceprocess2">2.51</option>
                        <option value="frequenceprocess3">2.81</option>
                      </Field>
                    </div>
                    <div className="d-flex align-items-end col" >
                      <div className="label font_title_name">۶۴bit</div> <Field type="checkbox" name="checked" class="input-group flex-nowrap form-check-input checkbox_input input_text form-check me-2" placeholder="1x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz" />
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="label font_title mt-5">پردازنده گرافیکی</h5>
              <div className="row">
                <div className="col-5  mt-4">
                  <div className="label font_title_name">نوع پردازنده</div> <Field component="select" multiple={false} type="text" name="graffprocessKind" class="form-select input-group flex-nowrap form-control bg_input input_text selected_input" >
                        <option value="graffprocessKind1">ARM Mali-G78 MC14</option>
                        <option value="graffprocessKind2">ARM Mali-G78 MC15</option>
                        <option value="graffprocessKind3">ARM Mali-G78 MC16</option>
                  </Field>
                </div>
                <div className="col-7">
                </div>
              </div>
              <h5 className="label font_title mt-5">RAM</h5>
              <div className="row">
                <div className="col-5  mt-4">
                  <div className="row">
                    <div className="col-5">
                      <div className="label font_title_name">حجم رم(GB)</div> <Field component="select" multiple={false} type="text" name="ram" className="form-select input-group flex-nowrap form-control bg_input input_text w-75 selected_input">
                        <option value="ram1">12</option>
                        <option value="ram2">25</option>
                        <option value="ram3">51</option>
                      </Field>
                    </div>
                    <div className="col-7">
                      <div className="label font_title_name">نوع رم</div> <Field component="select" multiple={false} type="text" name="ramKind" className="form-select input-group flex-nowrap form-control bg_input input_text selected_input">
                        <option value="ramKind1">RAM LPDDR5</option>
                        <option value="ramKind2">RAM LPDDR4</option>
                        <option value="ramKind3">RAM LPDDR3</option>
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="col-7">
                </div>
              </div>
              <h5 className="label font_title mt-5">Storage</h5>
              <div className="row">
                <div className="col-5  mt-4">
                  <div className="row">
                    <div className="col-5">
                      <div className="label font_title_name">ظرفیت(GB)</div> <Field as="select" multiple={false} type="text" name="storage" className="form-select input-group flex-nowrap form-control bg_input input_text w-75 selected_input">
                        <option value="storage1">128</option>
                        <option value="storage2">256</option>
                        <option value="storage3">512</option>
                      </Field>
                    </div>
                    <div className="col-7">
                      <div className="label font_title_name">نوع حافظه</div> <Field component="select" multiple={false} type="text" name="storageKind" className="form-select input-group flex-nowrap form-control bg_input input_text selected_input">
                        <option value="storageKind1">UFS Storage 3.1</option>
                        <option value="storageKind2">UFS Storage 3.2</option>
                        <option value="storageKind3">UFS Storage 3.3</option>
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-end col-7">
                  <div className="d-flex align-items-end col-3" >
                    <div className="label font_title_name">SD Slot</div> <Field type="checkbox" name="checked" class="input-group flex-nowrap form-check-input checkbox_input input_text form-check me-2" placeholder="1x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz" />
                  </div>
                </div>
              </div>
              <h5 className="label font_title mt-5">سنسورها</h5>
              <div className="row m-4">
                <div className="d-flex align-items-end col-2" >
                  <div className="label font_title_name">اثر انگشت</div> <Field type="checkbox" name="checked1" class="input-group flex-nowrap form-check-input checkbox_input input_text form-check me-2" placeholder="1x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz" />
                </div>
                <div className="d-flex align-items-end col-2" >
                  <div className="label font_title_name">نور</div> <Field type="checkbox" name="checked2" class="input-group flex-nowrap form-check-input checkbox_input input_text form-check me-2" placeholder="1x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz" />
                </div>
                <div className="d-flex align-items-end col-2" >
                  <div className="label font_title_name">مجاورت</div> <Field type="checkbox" name="checked3" class="input-group flex-nowrap form-check-input checkbox_input input_text form-check me-2" placeholder="1x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz" />
                </div>
                <div className="d-flex align-items-end col-2" >
                  <div className="label font_title_name">شتاب سنج</div> <Field type="checkbox" name="checked4" class="input-group flex-nowrap form-check-input checkbox_input input_text form-check me-2" placeholder="1x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz" />
                </div>
                <div className="d-flex align-items-end col-2" >
                  <div className="label font_title_name">قطب نما</div> <Field type="checkbox" name="checked5" class="input-group flex-nowrap form-check-input checkbox_input input_text form-check me-2" placeholder="1x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz" />
                </div>
                <div className="d-flex align-items-end col-2" >
                  <div className="label font_title_name">ژیروسکوپ</div> <Field type="checkbox" name="checked6" class="input-group flex-nowrap form-check-input checkbox_input input_text form-check me-2" placeholder="1x Cortex.X1 2.91 GHz + 3x Cortex.A78 2.81 GHz + 4x Cortex.A55 2.21 GHz" />
                </div>
              </div>
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
                    {/**
                  * This updates normally because it's from the same slice of Formik state,
                  * i.e. path to the object matches the name of this <FastField />
                  */}
                    {meta.touched ? meta.error : null}

                    {/** This won't ever update since it's coming from
                  from another <Field>/<FastField>'s (i.e. firstName's) slice   */}
                    {form.touched.firstName && form.errors.firstName
                      ? form.errors.firstName
                      : null}

                    {/* This doesn't update either */}
                    {form.submitCount}

                    {/* Imperative methods still work as expected */}
                    <button
                      type="button"
                      onClick={form.setFieldValue('middleInitial', 'yasaman')}
                    >
                      J
                 </button>
                  </div>
                )}
              </FastField>
              <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
          )
        }
      </Formik>
    </div>

  );
}

export default Processors;

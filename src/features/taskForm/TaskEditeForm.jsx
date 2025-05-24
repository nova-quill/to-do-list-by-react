import React from "react";
import styles from "./taskForm.module.css";

export default function TaskEditeForm({
  formik,
  taskTitleRef,
  inputCategory,
  categories,
  cancelEditeForm,
  formRef,
}) {
  return (
    <>
      <div
        className={`${styles.formTask} mw-100 mb-3 text-capitalize border border-danger is-invalid rounded p-2 position-relative`}
      >
        <span
          className={`${styles.containerCancelEdite} position-absolute  d-flex  justify-content-center align-items-center bg-danger rounded-circle`}
          onClick={cancelEditeForm}
        >
          <i
            className={`bi bi-x ${styles.cancelEdite} text-white  d-flex  justify-content-center align-items-center`}
          ></i>
        </span>
        <form onSubmit={formik.handleSubmit} className=" " ref={formRef}>
          <div className="mb-1">
            <input
              type="text"
              name="taskTitle"
              className={`form-control  pe-5 ${
                formik.touched.taskTitle && formik.errors.taskTitle
                  ? "is-invalid"
                  : "shadow-none border-0"
              }`}
              id="taskTitle"
              value={formik.values.taskTitle}
              onChange={formik.handleChange}
              ref={taskTitleRef}
            />
          </div>

          {formik.touched.taskTitle && formik.errors.taskTitle && (
            <div className="invalid-feedback">{formik.errors.taskTitle}</div>
          )}

          <div className="mb-1 ">
            <textarea
              className="form-control shadow-none border-0 pe-sm-5"
              id="taskDescription"
              placeholder="Enter Description"
              rows={1}
              value={formik.values.taskDescription}
              name="taskDescription"
              onChange={formik.handleChange}
            ></textarea>
          </div>
          <div className="d-sm-flex align-items-center flex-wrap">
            <div className="d-flex align-items-center  mb-2 mb-sm-0 flex-wrap gap-2 gap-sm-3 ">
              <div className="">
                <input
                  type="date"
                  className="form-control  w-100 w-sm-auto form-control-sm shadow-none border-light-subtle "
                  id="dueDate"
                  value={formik.values.dueDate}
                  name="dueDate"
                  onChange={formik.handleChange}
                />
              </div>
              {/* <div className="input-group">
  <input type="date" className="form-control" />
  <span className="input-group-text">
    <i className="bi bi-calendar-event"></i>
  </span>
</div> */}

              <div className="">
                <select
                  id="priority"
                  className="form-select pe-1 text-capitalize shadow-none border-light-subtle  w-100 w-sm-auto form-select-sm "
                  name="priority"
                  value={formik.values.priority}
                  onChange={formik.handleChange}
                >
                  <option value="" disabled>
                    priority
                  </option>
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="high">high</option>
                </select>
              </div>

              <div className="">
                <select
                  id="choose_Category"
                  className=" form-select  w-100 w-sm-auto form-select-sm text-capitalize shadow-none border-light-subtle "
                  name="choose_Category"
                  value={formik.values.choose_Category}
                  ref={inputCategory}
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                >
                  <option value="" disabled>
                    category
                  </option>
                  {categories.map((category) => {
                    return (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className={`${styles.saveTask} btn btn-sm  text-capitalize d-block ms-auto`}
            >
              save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

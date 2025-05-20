import React from "react";
import styles from "./taskForm.module.css";

export default function TaskFormAdd({
  formik,
  taskTitleRef,
  inputCategory,
  categories,
  onChangeCategoryValue,
}) {
  return (
    <>
      <div className={`${styles.formTask} container py-5 text-capitalize`}>
        <h2 className="mb-4 text-capitalize">add new task</h2>
        <form onSubmit={formik.handleSubmit} className="">
          <div className="mb-3">
            <label htmlFor="taskTitle" className="form-label">
              task title
            </label>
            <input
              type="text"
              name="taskTitle"
              className={`form-control  ${
                formik.touched.taskTitle && formik.errors.taskTitle
                  ? "is-invalid"
                  : "shadow-none border-light-subtle"
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

          <div className="mb-3">
            <label htmlFor="taskDescription" className="form-label">
              description
            </label>
            <textarea
              className="form-control shadow-none border-light-subtle"
              id="taskDescription"
              rows="4"
              value={formik.values.taskDescription}
              name="taskDescription"
              onChange={formik.handleChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="dueDate" className="form-label">
              due date
            </label>
            <input
              type="date"
              className="form-control shadow-none border-light-subtle"
              id="dueDate"
              value={formik.values.dueDate}
              name="dueDate"
              onChange={formik.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="priority" className="form-label">
              Priority
            </label>
            <select
              id="priority"
              className="form-select text-capitalize shadow-none border-light-subtle"
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

          <div className="mb-3">
            <label htmlFor="choose_Category" className="form-label">
              category
            </label>
            <select
              id="choose_Category"
              className="form-select text-capitalize shadow-none border-light-subtle"
              name="choose_Category"
              value={formik.values.choose_Category}
              ref={inputCategory}
              onChange={(e) => {
                onChangeCategoryValue(e);
              }}
            >
              <option value="" disabled>
                category
              </option>
              {/* {categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })} */}

                {categories.map((category,index) => {
                return (
                index>0?  <option key={category} value={category}>
                    {category}
                  </option>:''
                );
              })}


            </select>
          </div>

          <button
            type="submit"
            className={`${styles.saveTask} btn text-capitalize`}
          >
            save task
          </button>
        </form>
      </div>
    </>
  );
}

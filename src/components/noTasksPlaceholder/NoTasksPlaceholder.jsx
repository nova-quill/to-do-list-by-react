import React from "react";
import { Link } from "react-router-dom";
import styles from "./noTasksPlaceholder.module.css";
import noTasksImage from "../../assets/9551405.webp";
export default function NoTasksPlaceholder({ currentCategory }) {
  return (
    <>
      <div className="mh-100 px-2 d-flex justify-content-center align-align-items-center">
        <div className="text-center my-5 text-muted">
          <img
            src={noTasksImage}
            alt="No Tasks in category"
            className="mb-4 mw-100 w-75"
          />
          <h4 className="text-capitalize fw-semibold">
            {`No tasks available in ${currentCategory}`}{" "}
          </h4>
          <p className="text-secondary">
            Start organizing your work by adding your first task now.
          </p>
          <Link
            to="/taskFormAdd"
            className={`${styles.addTaskInPlace} btn btn-sm   mt-2`}
          >
            + Add New Task
          </Link>
        </div>
      </div>
    </>
  );
}

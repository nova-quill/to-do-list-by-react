import React, { forwardRef } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const CardTask = forwardRef(function CardTask(
  { task, editTask, deleteTask, checkInputRefs, handleCheck, ...props },
  ref
) {
  const priorityClasses = {
    low: "bg-success-subtle   ",
    medium: "bg-warning-subtle ",
    high: "bg-danger-subtle   ",
  };
  const priorityClass = priorityClasses[task.priority?.toLowerCase()] || "";
  return (
    <div
      ref={ref}
      {...props}
      className="card mb-3 border-light shadow-sm text-break"
    >
      <div className="card-body p-2 p-md-3 d-flex justify-content-between align-items-center ">
        <div>
          <div className="form-check">
            <input
              className="form-check-input mt-2 shadow-none border-light-subtle "
              type="checkbox"
              value=""
              id={`checkDefault${task.id}`}
              ref={checkInputRefs}
              checked={!!task.isCompleted}
              onChange={() => handleCheck(task.id)}
              aria-checked={task.isCompleted}
              aria-label={`Mark task "${task.taskTitle}" as ${
                task.isCompleted ? "incomplete" : "complete"
              }`}
            />
            <label
              className="form-check-label"
              htmlFor={`checkDefault${task.id}`}
            >
              {task.taskTitle}
            </label>
          </div>
          <div className="ms-4">
            <p className="card-text mb-2 text-secondary text-capitalize   ">
              {task.taskDescription}
            </p>

            <div className="d-flex align-items-center gap-3  flex-wrap">
              {task.dueDate ? (
                <span className={` text-capitalize text-secondary `}>
                  {`due ${task.dueDate}`}
                </span>
              ) : (
                ""
              )}
              {task.priority ? (
                <span
                  className={` priority  px-2 rounded-4 text-capitalize text-secondary ${priorityClass}`}
                >
                  {task.priority}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-md-between align-items-center flex-column flex-md-row ms-2 gap-3 z-3">
          <button
            className="edit btn btn-sm p-0  text-secondary  bg-transparent border-0 "
            aria-label="Edit Task"
            onClick={(e) => {
              e.stopPropagation
              editTask(task.id, task.choose_Category);
            }}
          >
            <FaEdit />
          </button>
          <button
            className="delete btn btn-sm p-0  bg-transparent border-0"
            aria-label="Delete Task"
            onClick={(e) => {
                e.stopPropagation
              deleteTask(task.id)}}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
});

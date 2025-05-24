import React, { forwardRef, useEffect, useRef, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import styles from "./cardTask.module.css";
import ShareTask from "../ShareTasks/ShareTask";
import { NavLink } from 'react-router-dom';

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

  const [showShare, setShowShare] = useState(false);
  const buttonRef = useRef(null);

  const dropButtonRef = useRef(null);
  const handleToggle = () => {
    setShowShare((prev) => !prev);
  };
  


  const taskUrl = `https://dolistix.netlify.app`; 

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: task.title,
          text: `${task.title} - ${task.description}`,
          url: taskUrl,
        })
        .catch((err) => console.error("خطأ في المشاركة:", err));
    } else {
      alert("المشاركة غير مدعومة في متصفحك، استخدم الأزرار أدناه.");
    }
  };

  const handleShareWhatsapp = (taskTitle, taskUrl) => {
    const text = `${taskTitle} - ${taskUrl}`;
    const encodedText = encodeURIComponent(text);
    const shareUrl = `https://wa.me/?text=${encodedText}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <>
      <div
        ref={ref}
        {...props}
        className="card mb-3 border-light shadow-sm text-break"
      >
        <div className="card-body p-2 p-md-3 d-flex justify-content-between align-items-center  ">
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
              type="button"
              aria-label="Edit Task"
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onClick={() => {
                editTask(task.id, task.choose_Category);
              }}
            >
              <FaEdit />
            </button>
            <button
              className="delete btn btn-sm p-0  bg-transparent border-0"
              type="button"
              aria-label="Delete Task"
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onClick={() => {
                deleteTask(task.id);
              }}
            >
              <FaTrash />
            </button>

            <div className="dropup-center dropup ">
              <button
                className={` ${styles.dropMore} dropdown-toggle border-0 bg-transparent fw-bolder text-secondary`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="false"
              >
                ...
              </button>
              <ul className={`${styles.listIcon} dropdown-menu px-1 py-0`}>
                <li className="position-relative " onClick={handleToggle}>

                  <MdShare
                    className={`${styles.shareIcon} text-secondary `}
                  />
                  {showShare && (
                    <ShareTask
                      task={task}
                      taskUrl={taskUrl}
                    />
                  )}
                </li>
              
              </ul>
              <NavLink to={`/taskId`}>details</NavLink>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
});

import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";

import { TaskFilterContext } from "../../context/TaskFilterProvider";
import { FilterPriorityContext } from "../../context/ShowPriorityProvider";
import { FilterDueDateContext } from "../../context/ShowDueDateProvider";
import SearchBox from "../../context/SearchBox";
import { tasksListContext } from "../../context/TasksProvider";
import { CurrentCategoryContext } from "../../context/TypeCategoryProvider";

export default function Header() {
  const { showCompleted, setShowCompleted } = useContext(TaskFilterContext);
  const { showPriority, setShowPriority } = useContext(FilterPriorityContext);
  const { showDueDate, setShowDueDate } = useContext(FilterDueDateContext);
  const { tasksList } = useContext(tasksListContext);
  const { currentCategory } = useContext(CurrentCategoryContext);
  const isTaskInPage = useMemo(() => {
    const isTasks =currentCategory==='all'?tasksList: tasksList.filter(
      (task) => task.choose_Category === currentCategory
    );
    return isTasks;
  }, [tasksList, currentCategory]);

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const filterLabel = useMemo(() => {
    const status =
      showCompleted === null
        ? "All"
        : showCompleted
        ? "Completed"
        : "Incompleted";

    const priority = showPriority ? capitalizeFirst(showPriority) : "All";
    const dueDate = showDueDate ? capitalizeFirst(showDueDate) : "All";

    return showCompleted === null &&
      showPriority === null &&
      showDueDate === null
      ? "All Tasks"
      : `${status}.${priority}.${dueDate}`;
  }, [showCompleted, showPriority, showDueDate]);

  const handleFilterChange = (e, statusValue, setStateCallback, storageKey) => {
    setStateCallback(statusValue);
    sessionStorage.setItem(storageKey, JSON.stringify(statusValue));
  };

  return (
    <>
      <header className="py-3  mb-4 ">
        <div className="container d-flex justify-content-between align-items-center gap-2 gap-md-5">
          <Link
            to="/taskFormAdd"
            className=" addTask  p-2 border-bottom text-capitalize d-none d-md-flex text-nowrap"
          >
            + add task
          </Link>
          <Link
            to="/taskFormAdd"
            className="btn_Mobile addTaskMobile text-decoration-none text-capitalize d-md-none"
            aria-label="add task"
          >
            <i className="bi bi-journal-plus text-white"></i>
          </Link>
          <div className="flex-fill">
            <SearchBox />
          </div>
          {tasksList.length > 0 && isTaskInPage.length > 0 ? (
            <div className="dropdown ">
              <button
                className="btn btn-sm dropdown-toggle "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                {filterLabel}
              </button>

              <ul className="dropdown-menu px-2 py-2">
                <li className="dropdown-header fw-bold text-uppercase text-muted ">
                  Status
                </li>

                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        null,
                        setShowCompleted,
                        "showCompleted"
                      )
                    }
                  >
                    All
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        true,
                        setShowCompleted,
                        "showCompleted"
                      )
                    }
                  >
                    Completed
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        false,
                        setShowCompleted,
                        "showCompleted"
                      )
                    }
                  >
                    Incompleted
                  </span>
                </li>

                <li>
                  <hr className="dropdown-divider " />
                </li>

                <li className="dropdown-header fw-bold text-uppercase text-muted ">
                  Priority
                </li>

                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        null,
                        setShowPriority,
                        "showPriority"
                      )
                    }
                  >
                    All
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        "high",
                        setShowPriority,
                        "showPriority"
                      )
                    }
                  >
                    High
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        "medium",
                        setShowPriority,
                        "showPriority"
                      )
                    }
                  >
                    Medium
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        "low",
                        setShowPriority,
                        "showPriority"
                      )
                    }
                  >
                    Low
                  </span>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-header fw-bold text-uppercase text-muted ">
                  Due Date
                </li>

                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(e, null, setShowDueDate, "showDueDate")
                    }
                  >
                    All
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        "today",
                        setShowDueDate,
                        "showDueDate"
                      )
                    }
                  >
                    Today
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        "Past",
                        setShowDueDate,
                        "showDueDate"
                      )
                    }
                  >
                    Past
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        "Upcoming",
                        setShowDueDate,
                        "showDueDate"
                      )
                    }
                  >
                    Upcoming
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={(e) =>
                      handleFilterChange(
                        e,
                        "No Date",
                        setShowDueDate,
                        "showDueDate"
                      )
                    }
                  >
                    No date
                  </span>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
}

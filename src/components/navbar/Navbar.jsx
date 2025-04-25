import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className=" bg-body-tertiary">
        <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
          <ul className="nav text-capitalize flex-nowrap overflow-auto scroll-width-none">
            <li className="nav-item  mx-2">
              <NavLink
                to="/"
                className="nav-link link-body-emphasis px-2 "
                aria-current="page"
              >
                all
              </NavLink>
            </li>
            <li className="nav-item  mx-2">
              <NavLink
                to="/personal"
                className="nav-link link-body-emphasis px-2"
              >
                personal
              </NavLink>
            </li>
            <li className="nav-item  mx-2">
              <NavLink to="/work" className="nav-link link-body-emphasis px-2">
                work
              </NavLink>
            </li>
            <li className="nav-item  mx-2">
              <NavLink to="/study" className="nav-link link-body-emphasis px-2">
                study
              </NavLink>
            </li>
            <li className="nav-item  mx-2">
              <NavLink
                to="/tarfeh"
                className="nav-link link-body-emphasis px-2"
              >
                tarfeh
              </NavLink>
            </li>
            <li className="nav-item  mx-2">
              <NavLink
                to="/shopping"
                className="nav-link link-body-emphasis px-2"
              >
                shopping
              </NavLink>
            </li>
          </ul>
          <div className="mb-1 position-relative">
            <button
              className=" addCategory btn border-none text-capitalize d-none d-md-flex "
              aria-label="add category"
            >
              + add category
            </button>
            <button
              className="addCategoryMobile btn p-1 rounded-circle text-secondary text-capitalize d-flex justify-content-center align-items-center position-fixed d-md-none z-3"
              aria-label="add category"
            >
              +group
            </button>



            
            <button
  className="addCategory btn border-none text-capitalize d-none d-md-flex"
  data-bs-toggle="tooltip"
  data-bs-placement="top"
  title="Add Category"
>
  <i className="bi bi-plus-circle-fill"></i>
</button>

<button className="addCategory btn border-none text-capitalize d-none d-md-flex">
  <i className="bi bi-list-check"></i>  {/* أيقونة قائمة مع علامة صح */}
</button>

            <div className="p-4 d-none position-absolute z-3 top-100 end-0 justify-content-between align-items-center bg-white  border rounded">
              <input
                className=" category border-0 me-1"
                type="text"
                placeholder="Add Category"
              />
              <span className=" plusCategory rounded-circle text-white fw-bold d-flex justify-content-center align-items-center  ">
                +
              </span>
            </div>
          </div>
        </div>
      </nav>
      <header className="py-3  mb-4 ">
        <div className="container d-flex justify-content-between align-items-center">
          <Link
            to=""
            className=" addTask me-2 pb-1 border-bottom text-capitalize d-none d-md-flex "
          >
            + add task
          </Link>
          <Link
            to=""
            className="addTaskMobile text-decoration-none text-capitalize p-1 rounded-circle text-secondary d-flex justify-content-center align-items-center position-fixed d-md-none z-3"
            aria-label="add task"
          >
            +task
          </Link>
          <form
            className="d-flex col-9 mb-lg-0 position-relative"
            role="search"
          >
            <label htmlFor="searchInput" className="visually-hidden">
              Search
            </label>
            <input
              type="search"
              className="form-control me-2"
              placeholder="Search..."
              aria-label="Search"
            />
            <i className="bi bi-search icon position-absolute top-50 translate-middle-y "></i>
          </form>
          <div className="dropdown">
            <button
              className="buttonDrop btn btn-sm dropdown-toggle text-capitalize"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              all tasks
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item " to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item " to="#">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item " to="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

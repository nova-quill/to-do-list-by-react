import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Header from "../header/Header";
import { AddCategoryContext } from "../../context/AddCategoryProvider";
import { CurrentCategoryContext } from "../../context/TypeCategoryProvider";
import { saveToLocal } from "./../../utils/storage";
import { CURRENT_CATEGORY_KEY, CATEGORIES_KEY } from "./../../utils/constants";
import ModalNav from "../modal/ModalNav";
import { useNavRef } from "../../context/NavRefProvider";

export default function Navbar() {
  // start Hooks
  const [newCategory, setNewCategory] = useState("");

  const location = useLocation();
  const { categories, setCategories } = useContext(AddCategoryContext);
  const { currentCategory, setCurrentCategory } = useContext(
    CurrentCategoryContext
  );
  const addCategoryInput = useRef();
  const modalRef = useRef();
  const { setUlRef, scrollToEnd } = useNavRef();
  const isAddTaskPage = location.pathname === "/taskFormAdd";
  const navigate = useNavigate();
  // start functions

  const addCategory = useCallback(() => {
    const categoryValue = newCategory.trim();

    if (categoryValue && !categories.includes(categoryValue)) {
      const newCategories = [...categories, categoryValue];
      setCategories(newCategories);
      saveToLocal(CATEGORIES_KEY, newCategories);
      setNewCategory("");
      setCurrentCategory(categoryValue);
      navigate(`/${categoryValue}`);
      setTimeout(() => {
        scrollToEnd();
      }, 100);
    }
  }, [
    newCategory,
    categories,
    setCategories,
    scrollToEnd,
    setCurrentCategory,
    navigate,
  ]);

  const handleChangeCategory = (typecategory) => {
    setCurrentCategory(typecategory);
  };

  // start effects

  // useEffect(() => {
  //   currentCategory === null
  //     ? ""
  //     : saveToLocal(CURRENT_CATEGORY_KEY, currentCategory);
  // }, [currentCategory]);


  useEffect(() => {
    currentCategory === null
      ? ""
      : sessionStorage.setItem(CURRENT_CATEGORY_KEY, currentCategory);
  }, [currentCategory]);



  useEffect(() => {
    const modal = modalRef.current;
    const handleModalShow = () => {
      addCategoryInput.current?.focus();
    };
    const hundleModalHidden = () => {
      setNewCategory("");
    };

    modal.addEventListener("shown.bs.modal", handleModalShow);
    modal.addEventListener("hidden.bs.modal", hundleModalHidden);
    return () => {
      modal.removeEventListener("shown.bs.modal", handleModalShow);
      modal.removeEventListener("hidden.bs.modal", hundleModalHidden);
    };
  }, [newCategory]);

  return (
    <>
      <nav className="bg-body-tertiary">
        <div className="container d-flex align-items-center justify-content-center justify-content-md-between gap-md-4">
          <ul
            className="nav text-capitalize flex-nowrap overflow-auto scroll-width-none"
            ref={setUlRef}
          >
            {categories.map((category) => {
              return (
                <li
                  key={category}
                  className={`nav-item  mx-2 `}
                  onClick={() => {
                    handleChangeCategory(category);
                  }}
                >
                  <NavLink
                    to={`/${category}`}
                    className="nav-link link-body-emphasis px-2 text-nowrap"
                    aria-current="page"
                  >
                    {category}
                  </NavLink>
                </li>
              );
            })}
            
          </ul>
          <div className="mb-1 position-relative">
            <button
              className="addCategory btn border-none text-capitalize text-nowrap d-none d-md-flex "
              aria-label="add category"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              + add category
            </button>
            <button className="btn_Mobile addCategoryMobile btn d-md-none">
              <i
                className="bi bi-folder-plus text-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              ></i>
            </button>
            <ModalNav
              newCategory={newCategory}
              setNewCategory={setNewCategory}
              modalRef={modalRef}
              addCategory={addCategory}
              addCategoryInput={addCategoryInput}
            />
          </div>
        </div>
      </nav>
      {!isAddTaskPage && <Header />}
    </>
  );
}

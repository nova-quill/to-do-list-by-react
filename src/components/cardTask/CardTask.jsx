import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

export default function CardTask() {
  return (
    <>
      <div className="card mb-3 border-light shadow-sm">
          <div className="card-body p-2 p-md-3 d-flex justify-content-between align-items-center ">
            <div>
              <div className="form-check">
                <input
                  className="form-check-input mt-2 shadow-none border-light-subtle "
                  type="checkbox"
                  value=""
                  id="checkDefault"
                />
                <label className="form-check-label" htmlFor="checkDefault">
                  Default checkbox
                </label>
              </div>
              <p className="card-text ms-4 mb-2 text-secondary text-capitalize">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div className='d-flex align-items-center'>
              <span className=" d-block ms-4 me-4 text-capitalize text-secondary">
                due 25/5/2025
              </span>
              <span className=" priority  d-block px-3 rounded-5 text-capitalize text-secondary">
                high
              </span>
              </div>
            </div>
            <div className="d-flex justify-content-md-between align-items-center flex-column flex-md-row ms-2 "style={{ gap: "1rem" }}>
              <button className="edit btn btn-sm p-0  text-secondary  bg-transparent border-0"   aria-label="Edit Task">
              <FaEdit/>
              </button>
              <button className="delete btn btn-sm p-0  bg-transparent border-0"  aria-label="Delete Task">
              <FaTrash/>
              </button>
            </div>
          </div>
        </div>
    
    
    
    
    
    
    
    </>
  )
}






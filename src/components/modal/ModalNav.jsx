import React from 'react'

export default function ModalNav({newCategory,setNewCategory,modalRef,addCategoryInput,addCategory}) {
  return (
    <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"

      aria-describedby="modalDescription"

    aria-hidden="true"
    // aria-hidden={!isModalOpen}
    // inert={!isModalOpen}
    // data-bs-toggle="modal"
    ref={modalRef}
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header border-bottom-0">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Add category
          </h1>


          <p id="modalDescription" className="visually-hidden">
  Please enter the new category name and press save or close to dismiss.
</p>




          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <input
            className="category border-0 me-1 w-100 border-bottom border-light-subtle"
            type="text"
            placeholder="Enter category name"
            ref={addCategoryInput}
            value={newCategory}
            onChange={(e)=>{setNewCategory(e.target.value)}}
            
          />
        </div>
        <div className="modal-footer border-top-0">
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            className="saveCategory btn btn-outline-success "
            onClick={addCategory}
            // data-bs-dismiss='modal'
          >
            Save
          </button>
        </div>
      </div>
    </div> 
  </div>
  )
}
   














// import React from 'react';

// export default function ModalNav({ newCategory, setNewCategory, modalRef, addCategoryInput, addCategory }) {
//   return (
//     <div
//       className="modal fade"
//       id="exampleModal"
//       tabIndex="-1"
//       aria-labelledby="exampleModalLabel"
//       aria-describedby="modalDescription"
//       ref={modalRef}
//       role="dialog"
//       aria-modal="false"
//     >
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header border-bottom-0">
//             <h1 className="modal-title fs-5" id="exampleModalLabel">
//               Add category
//             </h1>

//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>

//           <div className="modal-body">
//             {/* وصف للمودال لقارئ الشاشة */}
//             <p id="modalDescription" className="visually-hidden">
//               Please enter the new category name and press save or close to dismiss.
//             </p>

//             <input
//               className="category border-0 me-1 w-100 border-bottom border-light-subtle"
//               type="text"
//               placeholder="Enter category name"
//               ref={addCategoryInput}
//               value={newCategory}
//               onChange={(e) => setNewCategory(e.target.value)}
//               aria-label="New category name"
//             />
//           </div>

//           <div className="modal-footer border-top-0">
//             <button
//               type="button"
//               className="btn btn-outline-secondary"
//               data-bs-dismiss="modal"
//             >
//               Close
//             </button>
//             <button
//               type="button"
//               className="saveCategory btn btn-outline-success"
//               onClick={addCategory}
//               data-bs-dismiss="modal"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

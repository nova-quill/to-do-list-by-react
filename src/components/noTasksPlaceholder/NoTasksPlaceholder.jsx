import React from "react";
import { Link } from "react-router-dom";
import styles from "./noTasksPlaceholder.module.css";
import noTasksImage from "../../assets/9551405.webp";
// import noTasksImage from '../../assets/4076549.png';
export default function NoTasksPlaceholder({currentCategory}) {
  return (
  <>
    <div className="text-center my-5 text-muted">
      <img src={noTasksImage} alt="No Tasks in category" className="mb-4 mw-100" />
      <h4 className="text-capitalize fw-semibold">{`No tasks available in ${currentCategory}`} </h4>
      <p className="text-secondary">
        Start organizing your work by adding your first task now.
      </p>
      <Link to="/taskFormAdd" className={`${styles.addTaskInPlace} btn mt-2`}>
        + Add New Task
      </Link>
    </div>



      {/* <div className="text-center mt-4">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" // صورة فيها لون Teal
      alt="No results found"
      style={{ width: '120px', opacity: 0.9 }}
    />
    <p className="mt-3 text-muted">No matching tasks found.</p>
  </div> */}


    {/* <div className="text-center mt-4">
    <img
      src="https://cdn-icons-png.flaticon.com/512/8961/8961853.png"
      alt="No results found"
      style={{ width: '130px', opacity: 0.95 }}
    />
    <p className="mt-3 text-muted">No matching tasks found.</p>
  </div>  */}



    {/* <div className="text-center mt-5 p-4 border rounded" style={{ backgroundColor: '#e0f7f7' }}>
    <div
      className="mx-auto mb-3"
      style={{
        width: '60px',
        height: '60px',
        backgroundColor: '#20c997', // لون Teal واضح
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px',
        color: 'white',
      }}
    >
      🔍
    </div>
    <p className="text-muted m-0">No matching tasks found.</p>
  </div> */}









    {/* <div className="text-center mt-4">
    <img
      src={notFoundImage} // صورة فيها Teal
      alt="No tasks found"
      style={{ width: '120px', opacity: 0.7 }}
    />
    <p className="mt-3 text-muted">لا توجد مهام مطابقة لبحثك.</p>
  </div> */}
  </>
  );
}

import React from "react";
import CardTask from "../cardTask/CardTask";
export default function AllTasks() {
  return (
    <>
      <div className="container">
        <h4 className="text-capitalize mb-3">today's tasks</h4>
        <CardTask />
        <CardTask />
        <CardTask />
        </div>
        <div className="container mt-4">
        <h4 className="text-capitalize mb-3">other tasks</h4>
        <CardTask />
        <CardTask />  <CardTask />  <CardTask />
      </div>
    </>
  );
}

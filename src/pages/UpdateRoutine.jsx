import React from "react";
import Header2 from "../components/component/Header2";
import UpdateRoutineForm from "../components/forms/UpdateRoutineForm";

const UpdateRoutine = () => {
  return (
    <>
      <Header2 />
      <div className="px-5 py-5 h-full ">
        <UpdateRoutineForm />
      </div>
    </>
  );
};

export default UpdateRoutine;

import React from "react";
import FeedbackForm from "../components/forms/FeedbackForm";
import Header2 from "../components/component/Header2";

const FeedbackPage = () => {
  return (
    <>
      <Header2 />
      <div className="px-5 py-5 h-full ">
        <FeedbackForm />
      </div>
    </>
  );
};

export default FeedbackPage;

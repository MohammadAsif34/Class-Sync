import React from "react";
import DayList from "../components/home-page/DayList";

const HomePage = () => {
  return (
    <>
      {true ? (
        <section>
          <DayList />
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default HomePage;

import React from "react";
import DayList from "../components/home-page/DayList";
import SessionList from "../components/home-page/SessionList";

const HomePage = () => {
  return (
    <>
      {true ? (
        <section className="">
          <DayList />
          <SessionList />
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default HomePage;

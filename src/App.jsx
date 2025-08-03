import React from "react";
import RoutesPage from "./RoutesPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <section className="w-full h-screen bg-[url('./assets/bg.png')] bg-center b opacity-65">
        <main className="mx-auto max-w-2xl min-w-sm h-screen bg-gray-50  shadow-xl shadow-emerald-200 ">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis sed ipsum labore soluta placeat architecto. Veniam maxime minus aliquid fugiat ipsum sit facere cupiditate. Magnam nesciunt assumenda quia alias. */}
          <RoutesPage />
        </main>
      </section>
    </>
  );
};

export default App;

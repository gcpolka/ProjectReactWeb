import React from "react";
import Navbar from "../shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        {children}
      </div>

      

      <footer>

        <p>&copy; Phawida W. & Natthakit W. </p>

      </footer>
    </>
  );
};

export default MainLayout;

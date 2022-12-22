import React from "react";
import Footer from "../footer/footer";
import HeaderAcademy from "../HeaderAcademy/HeaderAcademy";

function AcademyLayout({ children }) {
  return (
    <>
      <div className="wrapper-project">
        <HeaderAcademy />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default AcademyLayout;

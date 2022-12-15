import React from "react";
import Footer from "../footer/footer";
import HeaderMain from "../HeaderMain/HeaderMain";

function MainLayout({ children }) {
  return (
    <>
      <div className="wrapper-project">
        <HeaderMain />
        <div style={{ marginTop: 100 }}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;

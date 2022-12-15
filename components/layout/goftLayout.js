import React from "react";
import Footer from "../footer/footer";
import HeaderGoft from "../HeaderGoft/HeaderGoft";

function GoftLayout({ children }) {
  return (
    <>
      <div className="wrapper-project">
        <HeaderGoft />
        <div
          style={{
            marginTop: 102,
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default GoftLayout;

import React from "react";
import { useEffect } from "react";
import MainLayout from "../../components/layout/mainLayout.jsx";
import About from "./About";
function index(props) {
  return (
    <MainLayout>
      <About />
    </MainLayout>
  );
}
export default index;

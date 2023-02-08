import React from "react";
import MainLayout from "../../components/layout/mainLayout.jsx";
import NewsEvents from "./NewsEvents";
function index(props) {
  return (
    <MainLayout>
      <NewsEvents />
    </MainLayout>
  );
}
export default index;

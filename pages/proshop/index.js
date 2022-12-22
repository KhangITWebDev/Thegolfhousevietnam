import React from "react";
import AcademyLayout from "../../components/layout/academyLayout";
import GoftLayout from "../../components/layout/goftLayout";
import MainLayout from "../../components/layout/mainLayout";
import ProShop from "./ProShop";

function index(props) {
  return (
    <MainLayout>
      <ProShop />
    </MainLayout>
  );
}

export default index;

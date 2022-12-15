import React from "react";
import AcademyLayout from "../../components/layout/academyLayout";
import GoftLayout from "../../components/layout/goftLayout";
import ProShop from "./ProShop";

function index(props) {
  return (
    <GoftLayout>
      <ProShop />
    </GoftLayout>
  );
}

export default index;

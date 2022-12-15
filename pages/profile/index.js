import React from "react";
import AcademyLayout from "../../components/layout/academyLayout";
import GoftLayout from "../../components/layout/goftLayout";
import Profile from "./Profile";

function index(props) {
  return (
    <GoftLayout>
      <Profile />
    </GoftLayout>
  );
}

export default index;

import React from "react";
import AcademyLayout from "../../../../components/layout/academyLayout";
import GoftLayout from "../../../../components/layout/goftLayout";
import GoftNews from "./GoftNews";

function Index(props) {
  return (
    <GoftLayout>
      <GoftNews />
    </GoftLayout>
  );
}

export default Index;

import React from "react";
import AcademyLayout from "../../components/layout/academyLayout";
import GoftLayout from "../../components/layout/goftLayout";
import Course from "./course/Course";

export default function index(props) {
  return (
    <GoftLayout>
      <Course />
    </GoftLayout>
  );
}

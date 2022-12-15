import React from "react";
import AcademyLayout from "../../components/layout/academyLayout";
import Course from "./course/Course";

export default function index(props) {
  return (
    <AcademyLayout>
      <Course />
    </AcademyLayout>
  );
}

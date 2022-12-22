import React from "react";
import AcademyLayout from "../../components/layout/academyLayout";
import MainLayout from "../../components/layout/mainLayout";
import Academy from "./Academy";
import Course from "./course/Course";

export default function index(props) {
  return (
    <MainLayout>
      <Academy />
    </MainLayout>
  );
}

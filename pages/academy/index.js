import React from "react";
import AcademyLayout from "../../components/layout/academyLayout";
import MainLayout from "../../components/layout/mainLayout";
import Academy from "./Academy";

export default function index(props) {
  return (
    <MainLayout>
      <Academy />
    </MainLayout>
  );
}

import React from "react";
import MainLayout from "../../../components/layout/mainLayout";
import BookingList from "./BookingList";

function index(props) {
  return (
    <MainLayout>
      <BookingList />
    </MainLayout>
  );
}

export default index;

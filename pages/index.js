import Image from "next/image";
import $ from "jquery";
import HomePage from "./Home/HomePage";
import MainLayout from "../components/layout/mainLayout.jsx";
import Seo from "../components/Seo/seo";

export default function Home() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}

import Image from "next/image";
import $ from "jquery";
import HomePage from "./Home/HomePage";
import MainLayout from "../components/layout/mainLayout.jsx";
import Seo from "../components/Seo/seo";

export default function Home() {
  return (
    <>
      <Seo
        data={{
          title: "WordPress Themes & Website Templates from ThemeForest",
          description:
            "Step by step tutorials to build a full CRUD website using NextJS for beginners",
          url: "https://saas-ecommerce.vercel.app/",
          thumbnailUrl:
            "https://cdn.create.vista.com/downloads/348b83d7-7b70-4496-ba3f-b052b3454117_1024.jpeg",
        }}
      />
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}

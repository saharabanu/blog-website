import React from "react";
import Layout from "../../../Common/Layout/Layout";
import Blogs from "../Blogs/Blogs";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Blogs />
      </Layout>
    </>
  );
};

export default Home;

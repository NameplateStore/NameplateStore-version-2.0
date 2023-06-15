import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Cta from "../components/Cta";
import Offer from "../components/Offer";
import Brand from "../components/Brand";
import Trending from "../components/Trending";
export default function Home() {
  return (
    <div className="main">
      <Hero></Hero>
      <Featured></Featured>
      <Cta></Cta>
      <Offer></Offer>
      <Brand></Brand>
      <Trending></Trending>
    </div>
  );
}

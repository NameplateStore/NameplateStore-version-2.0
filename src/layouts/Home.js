import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Cta from "../components/Cta";
import Offer from "../components/Offer";
import Brand from "../components/Brand";
import Trending from "../components/Trending";
import Topsell from "../components/Topsell";
import Iconbox from "../components/Iconbox";
import Social from "../components/Social";
import Submodel from "../components/Submodel";

export default function Home() {
  return (
    <div className="main">
      <Hero></Hero>
      <Featured></Featured>
      <Cta></Cta>
      <Offer></Offer>
      <Brand></Brand>
      <Trending></Trending>
      <Topsell></Topsell>
      <Iconbox></Iconbox>
      <Social></Social>
      <Submodel></Submodel>
    </div>
  );
}

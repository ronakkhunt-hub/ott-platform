import React from "react";
import Header from "../../components/Header";
import PlayerSection from "./PlayerSection";
import Footer from "../../components/Footer";
import SeriesCarousel from "./SeriesSlider";

const Player = () => {
  return (
    <>
      <Header />
      <PlayerSection />
      <SeriesCarousel items={[]} />
      <Footer />
    </>
  );
};

export default Player;

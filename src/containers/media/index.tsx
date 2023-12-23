import React from "react";
import Header from "../../components/Header";
import Player from "./Player";
import Footer from "../../components/Footer";
import Episodes from "./Episodes";
import data from "../../db.json";

const Media = () => {
  return (
    <>
      <Header />
      <Player />
      <Episodes items={data.series[0].seasons[0].episodes ?? []} />
      <Footer />
    </>
  );
};

export default Media;

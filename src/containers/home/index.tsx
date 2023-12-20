import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Header from "../../components/Header";
import FilterSection from "../../components/FilterSection";
import MultiCarousel from "../../components/carousel/Carousel";
import PosterItem from "../../components/carousel/PosterItem";
import Footer from "../../components/Footer";
import Movies from "./Movies";
import Subscriptions from "./Subscriptions";
import Pricing from "./Pricing";
import Trending from "./Trending";
import data from "../../db.json";
import { carouselConfig } from "../../utils/common";

const Home: React.FC = () => {
  // const { data: posterData } = useQuery({
  //   queryKey: ["posters"],
  //   queryFn: async () => await axios.get("http://localhost:3001/posters"),
  // });

  // const { data: moviesData } = useQuery({
  //   queryKey: ["movies"],
  //   queryFn: async () => await axios.get("http://localhost:3001/movies"),
  // });

  // const { data: subscriptionData } = useQuery({
  //   queryKey: ["subscriptions"],
  //   queryFn: async () => await axios.get("http://localhost:3001/subscriptions"),
  // });

  // const { data: trendingMoviesData } = useQuery({
  //   queryKey: ["trendingMoviesData"],
  //   queryFn: async () =>
  //     await axios.get("http://localhost:3001/trendingMovies"),
  // });

  return (
    <div>
      <Header />
      <MultiCarousel
        className="mx-5"
        Component={PosterItem}
        items={data.posters ?? []}
        config={carouselConfig()}
      />
      <FilterSection />
      <Movies movies={data.movies ?? []} />
      <Subscriptions items={data.subscriptions ?? []} />
      <Pricing />
      <Trending items={data.trendingMovies ?? []} />
      <Footer />
    </div>
  );
};

export default Home;

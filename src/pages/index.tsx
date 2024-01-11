import React from "react";

import MultiCarousel from "../components/carousel/Carousel";
import { PosterItem } from "../components/carousel";
import { FilterSection, Footer, Header } from "../components";
import { Movies, Pricing, Subscriptions, Trending } from "../containers/home";
import data from "../db.json";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <MultiCarousel
        Component={PosterItem}
        className="mx-auto max-w-7xl lg:max-w-full px-4 sm:px-0"
        center
        margin={40}
        defaultItems={4}
        items={data.posters ?? []}
        config={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        }}
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

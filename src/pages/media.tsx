import { Footer, Header } from "../components";
import { Episodes, Insights, Player, Related } from "../containers/media";
import data from "../db.json";

const Media = () => {
  return (
    <>
      <Header />
      <Player />
      <Episodes items={data.series[0].seasons[0].episodes ?? []} />
      <Insights />
      <Related items={data.movies} />
      <Footer />
    </>
  );
};

export default Media;
